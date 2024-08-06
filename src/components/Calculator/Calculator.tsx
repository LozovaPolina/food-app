import { useCalcContext } from "../../store/calc-context.tsx";
import ContainerWrapper from "../UI/ContainerWrapper.tsx";
import ChooseItem from "./CalcChooseItem.tsx";
import CalcSubtitle from "./CalcSubtitle.tsx";

export default function Calculator() {
  const { setGender, gender, setActivity, activity } = useCalcContext();
  return (
    <ContainerWrapper wrapperClass='calculating' divider={true}>
      <h2 className='title'>Calculate your calorie needs?</h2>

      <div className='calculating__field'>
        <CalcSubtitle title='Your gender' />
        {/* <div className='calculating__subtitle'>Your gender</div> */}

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
        {/* <div className='calculating__subtitle'>Your constitution </div> */}

        <div className='calculating__choose calculating__choose_medium'>
          <input
            type='text'
            id='height'
            placeholder='Enter height'
            className='calculating__choose-item'
          />
          <input
            type='text'
            id='weight'
            placeholder='Enter weight'
            className='calculating__choose-item'
          />
          <input
            type='text'
            id='age'
            placeholder='Enter age'
            className='calculating__choose-item'
          />
        </div>

        <CalcSubtitle title='Choose your physical activity' />
        {/* <div className='calculating__subtitle'>
          Choose your physical activity
        </div> */}
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
          {/* <div className='calculating__subtitle'>
            Your daily calorie intake:
          </div> */}
          <div className='calculating__result'>
            <span>2700</span> kcal
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
