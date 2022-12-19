type ErrorMessageProps = {
  error: string;
};
export default function ErrorMessage({
  error,
}: ErrorMessageProps): JSX.Element {
  return (
    <span className="text-red-500 text-[10px] transition duration-1000 delay-150">
      {error}
    </span>
  );
}
