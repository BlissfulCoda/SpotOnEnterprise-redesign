interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "reset" | "submit";
  className: string;
  isDisabled?: boolean;
}

export default function Button({
  children,
  type,
  className,
  isDisabled,
}: ButtonProps) {
  return (
    <button type={type} className={`btn-${className}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "secondary",
  type: "button",
  isDisabled: false,
};
