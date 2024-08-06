import Slider from "../Slider/Slider.tsx";
import ContainerWrapper from "../UI/ContainerWrapper.tsx";
import OfferText from "./OfferText.tsx";

import paperImg from "../../img/slider/pepper.jpg";
import foodImg from "../../img/slider/food-12.jpg";
import oliveOilImg from "../../img/slider/olive-oil.jpg";
import paprikaOilImg from "../../img/slider/paprika.jpg";

import { type SliderItemProps } from "../../types/slider.ts";

const SLIDER_ITEMS: SliderItemProps[] = [
  { srcImg: paperImg, altImg: "pepper", id: "slide1" },
  { srcImg: foodImg, altImg: "food", id: "slide2" },
  { srcImg: oliveOilImg, altImg: "olive-oil", id: "slide3" },
  { srcImg: paprikaOilImg, altImg: "paprika", id: "slide4" },
];

export default function Offer() {
  return (
    <div className='offer'>
      <div className='bgc_y'></div>
      <ContainerWrapper divider={false}>
        <div className='offer__text'>
          <OfferText
            type='text'
            title='What can we offer you?'
            text='Our main idea is healthy nutrition. It can be simple and delicious. We
          are not just delivery, we are a service! We have taken on all
          calculations of PFC, calorie content, portion sizes and other
          important, but boring aspects. All you have to do is healthy,
          satisfying and healthy food, which we deliver right to your door.'
          />
        </div>
        <div className='offer__action'>
          <button className='btn btn_dark'>Contact us</button>
        </div>
      </ContainerWrapper>
      <ContainerWrapper divider={false}>
        <div className='offer__advantages'>
          <OfferText
            type='advantages-text'
            title='Fast and healthy'
            text='Cooking at home takes a lot of effort, time and nerves. We bring food
          for the whole day at once, and you can act as you like, without
          adjusting to anyone and being confident in the quality of the product!'
          />
          <OfferText
            type='advantages-text'
            title='Proper diet'
            text='We have developed a special menu that takes into account all the
          nuances of proper nutrition, from the balance of proteins, fats,
          carbohydrates to their preparation and division of the diet.'
          />
        </div>
        <Slider items={SLIDER_ITEMS}></Slider>
      </ContainerWrapper>
    </div>
  );
}
