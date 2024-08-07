import { useInput } from "../../hooks/useInput.ts";
import Input from "../UI/Input.tsx";

export default function CalcInputGroup() {
  const {
    value: heightValue,
    handleInputChange: handleHeightChange,
    handleInputBlur: handleHeightBlur,
  } = useInput({ defaultValue: "" });
  const {
    value: weightValue,
    handleInputChange: handleWeightChange,
    handleInputBlur: handleWeightBlur,
  } = useInput({ defaultValue: "" });
  const {
    value: ageValue,
    handleInputChange: handleAgeChange,
    handleInputBlur: handleAgeBlur,
  } = useInput({ defaultValue: "" });

  return (
    <div className='calculating__choose calculating__choose_medium'>
      <Input
        type='text'
        id='height'
        placeholder='Enter height'
        className='calculating__choose-item'
        onBlur={handleHeightBlur}
        onChange={handleHeightChange}
        value={heightValue}
      />

      <Input
        type='text'
        id='weight'
        placeholder='Enter weight'
        className='calculating__choose-item'
        onBlur={handleWeightBlur}
        onChange={handleWeightChange}
        value={weightValue}
      />

      <Input
        type='text'
        id='age'
        placeholder='Enter age'
        className='calculating__choose-item'
        onBlur={handleAgeBlur}
        onChange={handleAgeChange}
        value={ageValue}
      />
    </div>
  );
}
