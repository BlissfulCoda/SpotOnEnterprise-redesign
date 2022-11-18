interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "reset" | "submit";
  className: string;
}

export default function Button({ children, type, className }: ButtonProps) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

