import React from "react";

type UserContextProps = {
  user: UserDetail;
};

const UserContext = React.createContext<UserContextProps | null>(null);

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContext.");
  }

  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, useUser] = React.useState<UserDetail>(null);

  const contextValue = React.useMemo<UserContextProps>(
    () => ({
      user,
    }),
    [user]
  );

  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
}
