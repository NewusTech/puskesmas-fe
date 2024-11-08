export interface CircleProps {
  background: string;
  title: string;
}

export default function Circle({ background, title }: CircleProps) {
  return (
    <div
      className={`w-[100px] h-[100px] ${background} rounded-full flex items-center justify-center`}
    >
      <p className="text-slate-50">{title}</p>
    </div>
  );
}
