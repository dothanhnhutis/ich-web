"use client";
import React from "react";

type UserContextProps = {
  user: UserDetail;
  permissions: string[];
  hasPermission: (permission: string) => boolean;
};

const UserContext = React.createContext<UserContextProps | null>(null);

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContext.");
  }
  return context;
}

export function UserProvider({
  children,
  user,
}: {
  user: UserDetail;
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState<UserDetail>(user);

  React.useEffect(() => {
    setState(user);
  }, [user]);

  const permissions = React.useMemo(() => {
    return Array.from(new Set(state.roles.flatMap((r) => r.permissions)));
  }, [state.roles]);

  const hasPermission = React.useCallback(
    (permission: string) => permissions.includes(permission),
    [permissions]
  );

  const contextValue = React.useMemo<UserContextProps>(
    () => ({
      user: state,
      permissions,
      hasPermission,
    }),
    [state, permissions, hasPermission]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
