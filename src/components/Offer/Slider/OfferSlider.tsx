import rightImg from "../../../icons/right.svg";
import leftImg from "../../../icons/left.svg";

import { type SliderItemProps } from "../../../types/slider.ts";
import SliderItem from "./OfferSliderItem.tsx";
import {
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";
import { getRefValue, useStateRef } from "../../../hooks/useStateRef.ts";
import { getTouchEventData } from "../../../util/dom.ts";
import { addZeroToPositiveNum } from "../../../util/numConverters.ts";
type sliderProps = {
  items: SliderItemProps[];
};

const MIN_SWIPE_REQUIRED = 40;

export default function Slider({ items }: sliderProps) {
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [curSlideIndex, setCurSlideIndex] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const minOffsetXRef = useRef(0);
  const startMoveXRef = useRef(0);
  const currentOffsetXRef = useRef(0);

  const nextSlideHandler = (index: number) => {
    if (index > items.length) {
      setCurSlideIndex(1);
      setOffsetX(0);
    }else {
      const containerWidth = getRefValue(containerRef).offsetWidth;

      setCurSlideIndex(pre => pre + 1);
      setOffsetX(-(containerWidth * (index - 1)));
      console.log(-(containerWidth * (index - 1)));
    }

  };
  const prevSlideHandler = (index: number) => {
    const containerWidth = getRefValue(containerRef).offsetWidth;
    if (index < 1) {
      setCurSlideIndex(items.length);
      setOffsetX(-(containerWidth * (items.length - 1)));
    }else {
      setCurSlideIndex(index);
      setOffsetX(-(containerWidth * (index - 1)));
    }




  };

  const onTouchStart = (
    e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);
    currentOffsetXRef.current = getRefValue(offsetXRef);
    startMoveXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);

    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);

    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };

  const onTouchMove = (e: MouseEvent | TouchEvent) => {
    const curXPosition = getTouchEventData(e).clientX;

    const diff = getRefValue(startMoveXRef) - curXPosition;

    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }
    setOffsetX(newOffsetX);
  };
  const onTouchEnd = () => {
    const containerWidth = getRefValue(containerRef).offsetWidth;

    const currentOffsetX = getRefValue(currentOffsetXRef);

    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      newOffsetX =
        diff > 0
          ? Math.floor(newOffsetX / containerWidth) * containerWidth
          : Math.ceil(newOffsetX / containerWidth) * containerWidth;
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }
    setIsSwiping(false);
    setCurSlideIndex(Math.abs(newOffsetX / containerWidth) + 1);
    setOffsetX(newOffsetX);

    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);

    window.removeEventListener("mousemove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
  };
  return (
    <div
      className='offer__slider'
      onMouseDown={onTouchStart}
      onTouchStart={onTouchStart}
    >
      <div className='offer__slider-counter'>
        <div
          onClick={() => prevSlideHandler(curSlideIndex - 1)}
          className='offer__slider-prev'
        >
          <img src={leftImg} alt='prev' />
        </div>
        <span id='current'>{addZeroToPositiveNum(curSlideIndex)}</span>/
        <span id='total'>{`${curSlideIndex !==items.length  ?  addZeroToPositiveNum(curSlideIndex + 1) : '01'}`}</span>
        <div
          className='offer__slider-next'
          onClick={() => nextSlideHandler(curSlideIndex + 1)}
        >
          <img src={rightImg} alt='next' />
        </div>
      </div>
      <div className='offer__slider-container'>
        <div
          ref={containerRef}
          className={`offer__slider-wrapper  ${isSwiping ? "swiping" : ""}`}
          style={{ transform: `translate3d(${offsetX}px,0,0)` }}
        >
          {items.map((item) => (
            <SliderItem
              key={item.id}
              srcImg={item.srcImg}
              altImg={item.altImg}
              id={item.id}
            ></SliderItem>
          ))}
        </div>
      </div>
    </div>
  );
}
