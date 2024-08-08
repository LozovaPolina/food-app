import { type MenuItemType } from "./Menu.tsx";

type MenuItemProps = MenuItemType;
export default function MenuItem({
  title,
  descr,
  image,
  price,
}: MenuItemProps) {
  return (
    <div className='menu__item'>
      <img src={image.src} alt={image.alt} />
      <h3 className='menu__item-subtitle'>{title}</h3>
      <div className='menu__item-descr'>{descr}</div>
      <div className='menu__item-divider'></div>
      <div className='menu__item-price'>
        <div className='menu__item-cost'>Price:</div>
        <div className='menu__item-total'>
          <span>{price}</span> UAH/day
        </div>
      </div>
    </div>
  );
}
