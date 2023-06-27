import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <Loader className="h-6 w-6 text-zinc-400 animate-spin"></Loader>
    </div>
  );
};
