import type { FC } from "react";

type TProps = {
  children: React.ReactNode;
  color?: "slate" | "green" | "amber" | "blue";
};

const Badge: FC<TProps> = ({ children, color = "slate" }) => {
  const map: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${map[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
