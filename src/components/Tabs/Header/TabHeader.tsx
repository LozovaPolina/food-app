import { ReactNode } from "react";

type TabHeaderProps = {
  children?: ReactNode;
  title: string;
  className: string;
};
export default function TabHeader({
  children,
  title,
  className,
}: TabHeaderProps) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
