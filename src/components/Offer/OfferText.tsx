import { ReactNode } from "react";

type OfferTextProps = {
  type: "text" | "advantages-text";
  title: string;
  text: string;
};
export default function OfferText({ type, title, text }: OfferTextProps) {
  let content: ReactNode;
  if (type === "text") {
    content = (
      <>
        <h2 className='title'>{title}</h2>
        <div className='offer__descr'>{text}</div>
      </>
    );
  } else if (type === "advantages-text") {
    content = (
      <>
        <h2>{title}</h2>
        <div className='offer__advantages-text'>{text}</div>
      </>
    );
  }
  return <>{content}</>;
}
