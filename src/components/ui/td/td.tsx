const Td = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <td className={`px-3 py-2 ${className}`}>{children}</td>;
};

export default Td;
