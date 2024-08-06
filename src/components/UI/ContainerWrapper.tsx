import { type ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
  wrapperClass?: string;
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
  let content: ReactNode;

  if (bgColorClass) {
    bgElement = <div className={bgColorClass}></div>;
  }
  if (wrapperClass) {
    content = (
      <div className={wrapperClass}>
        {bgElement}
        <div className='container'>{children}</div>
      </div>
    );
  }

  if (!wrapperClass) {
    content = (
      <>
        {bgElement}
        <div className='container'>{children}</div>
        {divider && <div className='divider'></div>}
      </>
    );
  }
  return (
    <>
      {content}
      {/* <div className={wrapperClass}>
        {bgElement}
        <div className='container'>{children}</div>
      </div>
      {divider && <div className='divider'></div>} */}
    </>
  );
}
