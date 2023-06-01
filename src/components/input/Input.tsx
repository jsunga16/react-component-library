import React from "react";

interface InputProps {
  label: string;
}

export const Input = (props: InputProps) => {
  return <input placeholder={props.label} />;
};
