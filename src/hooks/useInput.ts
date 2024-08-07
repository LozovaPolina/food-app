import { ChangeEvent, useState } from "react";
type UseInputProps = {
  defaultValue: string ;
}
export function useInput({defaultValue}:UseInputProps) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
  }
}