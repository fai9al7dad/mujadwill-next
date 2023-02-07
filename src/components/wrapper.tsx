export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-5 w-2/4 ">{children}</div>
    </div>
  );
};
