export function DisabledButton(
  {
    className,
    children,
    onClick,
  }: {
    className?: string;
    children: React.ReactNode;
    onClick?: (e?: any) => void;
    [x: string]: any;
  },
  props: any
) {
  return (
    <button
      disabled={true}
      className={`py-3 px-10  bg-white border border-gray-300 text-gray-900 text-center font-bold rounded-lg hover:cursor-not-allowed ${className} `}
      {...props}
    >
      {props.disabled && "disabled"}
      {children}
    </button>
  );
}
