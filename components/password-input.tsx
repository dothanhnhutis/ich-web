"use client";
import React from "react";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

interface PasswordInputProps
  extends Omit<React.ComponentProps<"input">, "type"> {
  /**
   * Controlled type from parent component
   */
  type?: "text" | "password";
  /**
   * Default type when component is uncontrolled
   */
  defaultType?: "text" | "password";
  /**
   * Callback when type changes
   */
  onTypeChange?: (type: "text" | "password") => void;
}

const PasswordInput = ({
  className,
  defaultType = "password",
  type,
  onTypeChange,
  ...props
}: PasswordInputProps) => {
  const [t, setT] = React.useState<"text" | "password">(type || defaultType);

  return (
    <div className="flex items-center gap-2 h-9 rounded-md pr-1 pl-3 py-1 w-full border border-input shadow-xs group focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50">
      <input
        type={type || t}
        autoComplete="off"
        className="w-full outline-none focus-visible:ring-0"
        {...props}
      />

      <button
        type="button"
        className="cursor-pointer p-2 outline-none"
        tabIndex={-1}
      >
        {(type || t) == "password" ? (
          <EyeClosedIcon
            onClick={() => {
              if (onTypeChange) {
                onTypeChange("text");
              }
              setT("text");
            }}
            className="w-5 h-5 shrink-0"
          />
        ) : (
          <EyeIcon
            onClick={() => {
              if (onTypeChange) {
                onTypeChange("password");
              }
              setT("password");
            }}
            className="w-5 h-5 shrink-0"
          />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
