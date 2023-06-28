import { useEffect } from "react";

import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";

import { ModuleSkeleton } from "../components/ModuleSkeleton";
import { useStore, useCurrentLesson } from "../zustand-store";

export function Player() {
  const { load, course, isLoading } = useStore((store) => ({
    load: store.load,
    course: store.course,
    isLoading: store.isLoading,
  }));
  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    if (currentLesson) {
      document.title = `Aula: ${currentLesson.title}`;
    }
  }, [currentLesson?.title]);

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center  gap-2 rounded bg-violet-500 px-3 py-2 hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>

          <aside className="w-80 absolute top-0 bottom-0 right-0 divide-y-2 divide-zinc-900 border-l border-zinc-800 bg-zinc-900 overflow-y-auto scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {isLoading ? (
              <ModuleSkeleton />
            ) : (
              course?.modules &&
              course?.modules.map((module, index) => (
                <Module
                  key={module.id}
                  moduleIndex={index}
                  title={module.title}
                  lessonsAmount={module.lessons.length}
                />
              ))
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}
