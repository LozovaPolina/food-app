import ContainerWrapper from "../UI/ContainerWrapper";
import vegyImg from "../../img/tabs/vegy.jpg";
import eliteImg from "../../img/tabs/elite.jpg";
import postImg from "../../img/tabs/post.jpg";
import MenuItem from "./MenuItem";
export type MenuItemType = {
  title: string;
  descr: string;
  image: { src: string; alt: string };
  price: number;
  id: string;
};
const DUMMY_MENU_ITEMS: MenuItemType[] = [
  {
    id: "m1",
    title: "Fitness Menu",
    descr:
      " Fitness Menu is a new approach to cooking: more fresh vegetables andfruits. A product for active and healthy people. This is acompletely new product with an optimal price and high quality!",
    image: { src: vegyImg, alt: "vegy" },
    price: 229,
  },
  {
    id: "m2",
    title: "Premium Menu",
    descr:
      "In the Premium menu, we use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruits - arestaurant menu without going to a restaurant!",
    image: { src: eliteImg, alt: "elite" },
    price: 550,
  },
  {
    id: "m3",
    title: "Menu 'Lenten'",
    descr:
      "Menu 'Lenten' is a careful selection of ingredients: completeabsence of animal products, milk from almonds, oats, coconut orbuckwheat, the correct amount of proteins through tofu and imported vegetarian steaks.",
    image: { src: postImg, alt: "post" },
    price: 430,
  },
  {
    id: "m3",
    title: "Menu 'Lenten'",
    descr:
      "Menu 'Lenten' is a careful selection of ingredients: completeabsence of animal products, milk from almonds, oats, coconut orbuckwheat, the correct amount of proteins through tofu and imported vegetarian steaks.",
    image: { src: postImg, alt: "post" },
    price: 430,
  },
];
function Menu() {
  return (
    <div className='menu'>
      <h2 className='title'>Our menu for the day</h2>
      <ContainerWrapper wrapperClass='menu__field' divider={true}>
        {DUMMY_MENU_ITEMS.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </ContainerWrapper>
    </div>
  );
}

export default Menu;
