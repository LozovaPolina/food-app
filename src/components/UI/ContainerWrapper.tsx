import { type ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
  wrapperClass: string;
  divider: boolean;
  bgColorClass?: string;
};
export default function ContainerWrapper({
  children,
  wrapperClass,
  divider,
  bgColorClass,
}: ContainerProps) {
  let bgElement: ReactNode;

  if (bgColorClass) {
    bgElement = <div className={bgColorClass}></div>;
  }
  return (
    <>
      <div className={wrapperClass}>
        {bgElement}
        <div className='container'>{children}</div>
      </div>
      {divider && <div className='divider'></div>}
    </>
  );
}
