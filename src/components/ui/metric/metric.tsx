const Metric = ({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend?: "up" | "down";
}) => {
  return (
    <div className="rounded-lg border border-slate-200 p-2">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="flex items-center gap-1 text-sm font-semibold">
        {trend === "up" && <span className="inline-block rotate-45">➚</span>}
        {trend === "down" && <span className="inline-block -rotate-45">➘</span>}
        {value}
      </div>
    </div>
  );
};

export default Metric;
