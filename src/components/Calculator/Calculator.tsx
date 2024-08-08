import { useCalcContext } from "../../store/calc-context.tsx";
import ContainerWrapper from "../UI/ContainerWrapper.tsx";
import ChooseItem from "./CalcChooseItem.tsx";
import CalcSubtitle from "./CalcSubtitle.tsx";
import CalcInputGroup from "./CalcInputGroup.tsx";

export default function Calculator() {
  const { setGender, gender, setActivity, activity, result } = useCalcContext();

  return (
    <ContainerWrapper wrapperClass='calculating' divider={true}>
      <h2 className='title'>Calculate your calorie needs?</h2>

      <div className='calculating__field'>
        <CalcSubtitle title='Your gender' />

        <div className='calculating__choose' id=' gender'>
          <ChooseItem
            isActive={gender === "women"}
            title='Woman'
            onClick={() => setGender("women")}
          />
          <ChooseItem
            isActive={gender === "male"}
            title='Male'
            onClick={() => setGender("male")}
          />
        </div>

        <CalcSubtitle title='Your constitution' />

        <CalcInputGroup />

        <CalcSubtitle title='Choose your physical activity' />

        <div className='calculating__choose calculating__choose_big'>
          <ChooseItem
            onClick={() => setActivity("low")}
            id='low'
            isActive={activity === "low"}
            title=' Low activity'
          />
          <ChooseItem
            onClick={() => setActivity("small")}
            id='small'
            isActive={activity === "small"}
            title='Low activity'
          />
          <ChooseItem
            onClick={() => setActivity("medium")}
            id='medium'
            isActive={activity === "medium"}
            title='Moderate activity'
          />
          <ChooseItem
            onClick={() => setActivity("high")}
            isActive={activity === "high"}
            id='high'
            title='High activity'
          />
        </div>
        <div className='calculating__divider'></div>
        <div className='calculating__total'>
          <CalcSubtitle title='Your daily calorie intake:' />

          <div className='calculating__result'>
            <span>{result}</span> kcal
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
