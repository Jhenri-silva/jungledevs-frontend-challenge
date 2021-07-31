import React, { HTMLProps, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  transparent?: boolean;
  overrideTailwindProps?: string;
}

export default function Button(props: Props) {
  return (
    <button
      {...props}
      className={`${!props.transparent && "bg-brand-primary"}
                rounded-sm
                text-white
                text-xs
                p-3
                font-medium
                ${props.overrideTailwindProps}`}
    >
      {props.children}
    </button>
  );
}
