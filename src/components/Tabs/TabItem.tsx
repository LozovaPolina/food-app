import { ReactNode } from "react";
import { useTabsContext } from "./TabContainer";

type TabItemProps = {
  id: number;
  image: { img: string; alt: string };
  children?: ReactNode;
  className: string;
};
export default function TabItem({
  image,
  children,
  className,
  id,
}: TabItemProps) {
  const { activeTabId } = useTabsContext();
  const isActive = activeTabId === id;

  return (
    <div className={`${className} ${isActive ? "active" : ""}`}>
      <img src={image.img} alt={image.alt} />
      {children}
    </div>
  );
}
