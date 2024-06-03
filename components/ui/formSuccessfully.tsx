import { CiCircleCheck } from "react-icons/ci";

interface FormSuccessfullyProps {
  message?: string;
}

export const FormSuccessfully = ({ message }: FormSuccessfullyProps) => {
  if (!message) return null;
  return (
    <div className="w-full bg-emerald-700/15 rounded-md flex text-emerald-700 flex-col justify-center h-9 px-4">
      <div className="flex items-center gap-x-1">
        <CiCircleCheck size={22} />
        <p>{message}</p>
      </div>
    </div>
  );
};
