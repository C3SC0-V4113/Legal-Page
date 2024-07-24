import { CircleCheckBig } from "lucide-react";

interface Props {
  title: string;
  desc: string;
}

export const CheckedListItem = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-3">
        <CircleCheckBig size={20} color="#7DB585" className="my-auto" />
        <p className="text-lg">{title}</p>
      </div>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
};

export const CheckedList = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};
