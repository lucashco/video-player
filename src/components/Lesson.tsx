import { PlayCircle, Video } from "lucide-react";

export interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export const Lesson = ({
  title,
  duration,
  isCurrent = false,
  onPlay,
}: LessonProps) => {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="
        flex items-center
        gap-3 text-sm
        text-zinc-400
        enabled:hover:text-zinc-300
        data-[active=true]:text-emerald-400 "
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400 " />
      ) : (
        <Video className="w-4 h-4 text-zinc-500 " />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        <time dateTime={duration}>{duration}</time>
      </span>
    </button>
  );
};
