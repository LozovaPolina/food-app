import { useInput } from "../../hooks/useInput.ts";
import { useCalcContext } from "../../store/calc-context.tsx";
import { isNotEmpty, isNumber } from "../../util/validation.ts";
import Input from "../UI/Input.tsx";
function CalcInputGroup() {
  const setConstitution = useCalcContext().setConstitution;
  console.log("hi");
  const {
    value: heightValue,
    handleInputChange: handleHeightChange,
    handleInputBlur: handleHeightBlur,
    hasError: errorHeightInput,
  } = useInput({
    defaultValue: "",
    validationFn: (value) => {
      return isNumber(value) && isNotEmpty(value);
    },
  });
  const {
    value: weightValue,
    handleInputChange: handleWeightChange,
    handleInputBlur: handleWeightBlur,
    hasError: errorWeightInput,
  } = useInput({
    defaultValue: "",
    validationFn: (value) => {
      return isNumber(value) && isNotEmpty(value);
    },
  });
  const {
    value: ageValue,
    handleInputChange: handleAgeChange,
    handleInputBlur: handleAgeBlur,
    hasError: errorAgeInput,
  } = useInput({
    defaultValue: "",
    validationFn: (value) => {
      return isNumber(value) && isNotEmpty(value);
    },
  });
  const handleInputBlur = () => {
    if (
      heightValue &&
      weightValue &&
      ageValue &&
      !errorHeightInput &&
      !errorWeightInput &&
      !errorAgeInput
    ) {
      setConstitution(+heightValue, +weightValue, +ageValue);
    }
  };

  return (
    <div className='calculating__choose calculating__choose_medium'>
      <Input
        type='text'
        id='height'
        placeholder='Enter height | 165'
        className='calculating__choose-item'
        onBlur={() => {
          handleInputBlur();
          handleHeightBlur();
        }}
        onChange={handleHeightChange}
        value={heightValue}
        error={errorHeightInput ? "Only numbers are allowed." : null}
      />

      <Input
        type='text'
        id='weight'
        placeholder='Enter weight | 80.3'
        className='calculating__choose-item'
        onBlur={() => {
          handleInputBlur();
          handleWeightBlur();
        }}
        onChange={handleWeightChange}
        value={weightValue}
        error={errorWeightInput ? "Only numbers are allowed." : null}
      />

      <Input
        type='text'
        id='age'
        placeholder='Enter age | 27'
        className='calculating__choose-item'
        onBlur={() => {
          handleInputBlur();
          handleAgeBlur();
        }}
        onChange={handleAgeChange}
        value={ageValue}
        error={errorAgeInput ? "Only numbers are allowed." : null}
      />
    </div>
  );
}
export default CalcInputGroup;
