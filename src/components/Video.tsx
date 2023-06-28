import ReactPlayer from "react-player";
import { Loading } from "./Loading";
import { useStore, useCurrentLesson } from "../zustand-store";

export const Video = () => {
  const { next, isLoading } = useStore((store) => ({
    isLoading: store.isLoading,
    next: store.next,
  }));
  const { currentLesson } = useCurrentLesson();

  function handleVideoEnded() {
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <Loading />
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          playing
          controls
          onEnded={handleVideoEnded}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
};
