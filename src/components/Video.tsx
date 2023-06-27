import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loading } from "./Loading";

export const Video = () => {
  const { currentLesson } = useCurrentLesson();
  const dispatch = useAppDispatch();
  const isCourseLoading = useAppSelector((state) => state.player.loading);

  function handleVideoEnded() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
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
