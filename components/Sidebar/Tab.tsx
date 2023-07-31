export default function Tab({ Icon, title, size = 24 }: Props): JSX.Element {
  return (
    <div className="flex items-center gap-4 text-sx cursor-pointer hover:bg-primary hover:text-white transition duration-100 p-2 rounded-md text-black">
      <Icon size={size} />
      <span>{title}</span>
    </div>
  );
}

interface Props {
  title: string;
  Icon: any;
  size?: number;
}
