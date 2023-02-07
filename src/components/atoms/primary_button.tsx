export function PrimaryButton(
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
      onClick={props.disabled ? null : onClick}
      className={`py-3 px-10  transition-all duration-75 shadow-primary-button bg-orange-500 text-white text-center font-bold rounded-lg  ${className} 
      ${
        props.disabled
          ? "active:translate-y-0 cursor-not-allowed"
          : "active:translate-y-1 active:shadow-none"
      }
      `}
      {...props}
    >
      {props.disabled && "disabled"}
      {children}
    </button>
  );
}
