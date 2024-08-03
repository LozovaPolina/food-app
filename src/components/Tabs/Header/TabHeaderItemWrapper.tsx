import { ReactNode } from "react";

type TabHeaderItemWrapperProps = {
  className: string;
  children: ReactNode;
};

export default function TabHeaderItemWrapper({
  className,
  children,
}: TabHeaderItemWrapperProps) {
  return <div className={className}>{children}</div>;
}
