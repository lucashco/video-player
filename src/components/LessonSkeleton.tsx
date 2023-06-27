export interface LessonProps {}

export const LessonSkeleton = ({}: LessonProps) => {
  return (
    <div
      className="
        flex items-center
        gap-3
        animate-pulse
      "
    >
      <div className="w-4 h-4 rounded-full  bg-zinc-950 " />

      <div className="h-3 flex-1 bg-zinc-950 " />
    </div>
  );
};
