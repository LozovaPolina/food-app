import { type SliderItemProps } from "../../types/slider.ts";

function SliderItem({ altImg, srcImg }: SliderItemProps) {
  return (
    <div className='offer__slide'>
      <img
        draggable={false}
        className='offer__slide-img'
        src={srcImg}
        alt={altImg}
      />
    </div>
  );
}

export default SliderItem;
