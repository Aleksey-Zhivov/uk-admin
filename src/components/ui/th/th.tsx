const Th = ({ children }: { children: React.ReactNode }) => {
  return (
    <th className="px-3 py-2 text-xs font-medium uppercase tracking-wide">
      {children}
    </th>
  );
};

export default Th;
