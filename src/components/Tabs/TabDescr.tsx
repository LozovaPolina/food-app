type TabDescrProps = {
  className: string;
  descr: string;
};

export default function TabDescr({ className, descr }: TabDescrProps) {
  return <div className={className}>{descr}</div>;
}
