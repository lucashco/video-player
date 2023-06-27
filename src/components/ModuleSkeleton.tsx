import { LessonSkeleton } from "./LessonSkeleton";

export interface ModuleProps {}

const fakeLessons = new Array(5).fill(0).map((_, i) => i + 1);

export const ModuleSkeleton = ({}: ModuleProps) => {
  return (
    <div className="group animate-pulse">
      <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm"></div>
        <div className="flex flex-col gap-1 text-left flex-1">
          <div className=" h-4 w-full  bg-zinc-950 " />
          <div className=" h-2 w-full  bg-zinc-950 " />
        </div>
      </div>

      <div>
        <nav className="relative flex flex-col gap-4 p-6">
          {fakeLessons.map((lesson) => {
            return <LessonSkeleton key={lesson} />;
          })}
        </nav>
      </div>
    </div>
  );
};
