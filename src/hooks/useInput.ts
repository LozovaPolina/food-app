import { ChangeEvent, useState } from "react";
type UseInputProps = {
  defaultValue: string;
  validationFn: (value:string) => boolean
}
export function useInput({defaultValue, validationFn}:UseInputProps) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);
  

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setDidEdit(false);
    setEnteredValue(e.target.value);

  }
  function handleInputBlur() {
 
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  }
}