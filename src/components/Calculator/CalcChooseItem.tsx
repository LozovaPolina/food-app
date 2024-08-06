type ChooseItemProps = {
  additionalClass?: string;
  isActive: boolean;
  id?: string;
  title: string;
  onClick?: () => void;
};

export default function ChooseItem({
  title,
  isActive,
  additionalClass,
  onClick,
  ...props
}: ChooseItemProps) {
  let elementStyle = "calculating__choose-item ";
  if (isActive) {
    elementStyle += "calculating__choose-item_active ";
  }
  if (additionalClass) {
    elementStyle += `${additionalClass} `;
  }
  return (
    <div className={elementStyle} onClick={onClick} {...props}>
      {title}
    </div>
  );
}
