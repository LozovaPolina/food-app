import { ComponentPropsWithoutRef } from "react";

type inputProps = ComponentPropsWithoutRef<"input">;

export default function Input({ ...props }: inputProps) {
  return <input {...props}></input>;
}
