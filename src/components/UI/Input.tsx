import { ComponentPropsWithoutRef } from "react";

type inputProps = ComponentPropsWithoutRef<"input"> & { error: string | null };

export default function Input({ error, ...props }: inputProps) {
  return (
    <div>
      <input {...props} />
      <div className='input-error'>{error && <p>{error}</p>}</div>
    </div>
  );
}
