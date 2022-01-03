import React, { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <div>
      <a
        style={{
          backgroundColor: "#345DEE",
          borderRadius: "0.5rem",
          color: "white",
          textDecoration: "none",
          padding: "0.75rem 1rem 0.75rem 1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </a>
    </div>
  );
}
