import ContainerWrapper from "../UI/ContainerWrapper";

export default function Calculator() {
  return (
    <ContainerWrapper wrapperClass='calculating' divider={true}>
      <h2 className='title'>Calculate your calorie needs?</h2>
      <div className='calculating__field'>
        <div className='calculating__subtitle'>Your gender</div>
        <div className='calculating__choose' id=' gender'>
          <div className='calculating__choose-item calculating__choose-item_active'>
            Woman
          </div>
          <div className='calculating__choose-item'>Male</div>
        </div>
        <div className='calculating__subtitle'>Your constitution </div>
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
        <div className='calculating__subtitle'>
          Choose your physical activity
        </div>
        <div className='calculating__choose calculating__choose_big'>
          <div id='low' className='calculating__choose-item'>
            Low activity
          </div>
          <div
            id='small'
            className='calculating__choose-item calculating__choose-item_active'
          >
            Low activity
          </div>
          <div id='medium' className='calculating__choose-item'>
            Moderate activity
          </div>
          <div id='high' className='calculating__choose-item'>
            High activity
          </div>
        </div>
        <div className='calculating__divider'></div>
        <div className='calculating__total'>
          <div className='calculating__subtitle'>
            Your daily calorie intake:
          </div>
          <div className='calculating__result'>
            <span>2700</span> kcal
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
