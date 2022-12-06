type ErrorMessageProps = {
  error: string;
};
export default function ErrorMessage({
  error,
}: ErrorMessageProps): JSX.Element {
  return (
    <span className="text-red-500 text-[10px] duration-1000">{error}</span>
  );
}
