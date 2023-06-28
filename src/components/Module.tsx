import { ChevronDown } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Lesson } from "./Lesson";
import { useStore } from "../zustand-store";

export interface ModuleProps {
  moduleIndex: number;
  title: string;
  lessonsAmount: number;
}

export const Module = ({ moduleIndex, title, lessonsAmount }: ModuleProps) => {
  const { currentModuleIndex, currentLessonIndex, lessons, play } = useStore(
    (store) => {
      return {
        lessons: store.course?.modules[moduleIndex].lessons,
        currentModuleIndex: store.currentModuleIndex,
        currentLessonIndex: store.currentLessonIndex,
        course: store.course,
        play: store.play,
      };
    }
  );

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons?.length &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                moduleIndex === currentModuleIndex &&
                lessonIndex === currentLessonIndex;

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  isCurrent={isCurrent}
                  onPlay={() => play([moduleIndex, lessonIndex])}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
