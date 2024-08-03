import VegyImg from "./img/tabs/vegy.jpg";
import EliteImg from "./img/tabs/elite.jpg";
import PostImg from "./img/tabs/post.jpg";
import HamburgerImg from "./img/tabs/hamburger.jpg";
type previewItem = {
  id: number;
  image: { img: string; alt: string };
  descr: string;
  title: string;
};

export const TAB_ITEM: previewItem[] = [
  {
    id: 1,
    image: { img: VegyImg, alt: "vegy" },
    title: "Fitness",
    descr:
      "The Fitness menu is a new approach to cooking: more fresh vegetables and fruits. For people who are interested in sports; active and healthy. This is a completely new product with an optimal price and high quality!",
  },
  {
    id: 2,
    image: {
      img: EliteImg,
      alt: "elite",
    },
    title: "Premium",
    descr:
      "“Premium” menu - we use not only beautiful packaging design, but also high-quality execution of dishes. Red fish, seafood, fruits - a restaurant menu without going to a restaurant!",
  },
  {
    id: 3,
    image: { img: PostImg, alt: "post" },
    title: "Lean",
    descr:
      "Our special “Lenten menu” is a careful selection of ingredients: a complete absence of animal products. Complete harmony with yourself and nature in every element! Everything will be Om!",
  },
  {
    id: 4,
    image: { img: HamburgerImg, alt: "hamburger" },
    title: "Balanced",
    descr:
      "The “Balancedn” menu is your diet's compliance with all scientific recommendations. We carefully calculate your need for k/b/f/c and create the best dishes for you.",
  },
];
