const InstructorsLayout = ({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className=" bg-white border-b border-neutral-200 flex flex-col items-center justify-center py-10">
        <div className="w-2/4">{header}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-2/4 py-10">{children}</div>
      </div>
    </div>
  );
};

export default InstructorsLayout;
