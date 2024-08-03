import { useTabsContext } from "../TabContainer";

type HeaderItemProps = {
  title: string;
  id: number;
  className: string;
  activeClass: string;
};

export default function TabHeaderItem({
  title,
  id,
  className,
  activeClass,
}: HeaderItemProps) {
  const { showActiveTab, activeTabId } = useTabsContext();
  const isActive = activeTabId === id;
  function onClickHandler(): void {
    if (isActive) return;
    showActiveTab(id);
  }
  return (
    <div
      onClick={onClickHandler}
      className={`${className} ${isActive ? activeClass : ""}`}
    >
      {title}
    </div>
  );
}
