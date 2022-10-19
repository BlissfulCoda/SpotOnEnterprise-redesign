interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "reset" | "submit";
  version: string;
}

export default function Button({ children, type, version }: ButtonProps) {
  return (
    <button type={type} className={version}>
      {children}
    </button>
  );
}

