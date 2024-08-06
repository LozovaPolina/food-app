type CalcSubtitleProps = {
  title: string;
};

export default function CalcSubtitle({ title }: CalcSubtitleProps) {
  return <div className='calculating__subtitle'>{title}</div>;
}
