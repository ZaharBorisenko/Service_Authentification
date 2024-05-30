import { MdErrorOutline } from "react-icons/md";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="w-full bg-destructive/15 rounded-md flex text-destructive flex-col justify-center h-9 px-4">
      <div className="flex items-center gap-x-1">
        <MdErrorOutline size={22} />
        <p>{message}</p>
      </div>
    </div>
  );
};
