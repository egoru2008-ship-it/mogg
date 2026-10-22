"use client";

import { useState } from "react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { cn } from "@/lib/utils";

type Level = "Все уровни" | "Начинающие" | "Продвинутые";

type ClassItem = {
  time: string;
  title: string;
  coach: string;
  room: string;
  level: Level;
};

type DaySchedule = {
  short: string;
  day: string;
  classes: ClassItem[];
};

const week: DaySchedule[] = [
  {
    short: "Пн",
    day: "Понедельник",
    classes: [
      { time: "07:00", title: "Силовая база", coach: "Максим Волков", room: "Зал свободных весов", level: "Все уровни" },
      { time: "10:00", title: "Кроссфит WOD", coach: "Дмитрий Орлов", room: "Функциональная зона", level: "Продвинутые" },
      { time: "18:30", title: "Скульптура тела", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
      { time: "20:00", title: "Бокс: техника удара", coach: "Максим Волков", room: "Ринговая зона", level: "Начинающие" },
    ],
  },
  {
    short: "Вт",
    day: "Вторник",
    classes: [
      { time: "08:00", title: "Утренний фитнес", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
      { time: "12:00", title: "Персональные тренировки", coach: "Максим Волков", room: "По записи", level: "Все уровни" },
      { time: "19:00", title: "Кроссфит для новичков", coach: "Дмитрий Орлов", room: "Функциональная зона", level: "Начинающие" },
    ],
  },
  {
    short: "Ср",
    day: "Среда",
    classes: [
      { time: "07:00", title: "Силовая база", coach: "Максим Волков", room: "Зал свободных весов", level: "Все уровни" },
      { time: "11:00", title: "Йога", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
      { time: "18:30", title: "Функциональный круг", coach: "Дмитрий Орлов", room: "Функциональная зона", level: "Продвинутые" },
      { time: "20:00", title: "Бокс: работа на мешке", coach: "Максим Волков", room: "Ринговая зона", level: "Продвинутые" },
    ],
  },
  {
    short: "Чт",
    day: "Четверг",
    classes: [
      { time: "10:00", title: "Растяжка", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
      { time: "18:00", title: "Тяга и присед", coach: "Максим Волков", room: "Зал свободных весов", level: "Продвинутые" },
      { time: "19:30", title: "Кроссфит WOD", coach: "Дмитрий Орлов", room: "Функциональная зона", level: "Все уровни" },
    ],
  },
  {
    short: "Пт",
    day: "Пятница",
    classes: [
      { time: "08:00", title: "Утренний фитнес", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
      { time: "18:30", title: "Жим и становая", coach: "Максим Волков", room: "Зал свободных весов", level: "Продвинутые" },
      { time: "20:00", title: "Бокс: подготовка к спаррингу", coach: "Максим Волков", room: "Ринговая зона", level: "Продвинутые" },
    ],
  },
  {
    short: "Сб",
    day: "Суббота",
    classes: [
      { time: "11:00", title: "Кроссфит для всех", coach: "Дмитрий Орлов", room: "Функциональная зона", level: "Все уровни" },
      { time: "13:00", title: "Йога и мобильность", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
    ],
  },
  {
    short: "Вс",
    day: "Воскресенье",
    classes: [
      { time: "11:00", title: "Восстановительная йога", coach: "Анна Соколова", room: "Групповой зал", level: "Все уровни" },
      { time: "12:30", title: "Открытый зал", coach: "Дежурный тренер", room: "Все зоны", level: "Все уровни" },
    ],
  },
];

const levelStyles: Record<Level, string> = {
  "Все уровни": "bg-primary/10 text-primary",
  Начинающие: "bg-emerald-500/10 text-emerald-400",
  Продвинутые: "bg-red-500/10 text-red-400",
};

export function Schedule() {
  const [dayIndex, setDayIndex] = useState(0);
  const day = week[dayIndex];

  return (
    <section id="schedule" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          label="Расписание"
          title="Занятия на неделю"
          description="Пробное занятие на любой групповой программе — бесплатно. Запись по телефону или через форму ниже."
        />

        <Reveal className="mt-12">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Дни недели"
          >
            {week.map((d, index) => (
              <button
                key={d.short}
                type="button"
                role="tab"
                aria-selected={index === dayIndex}
                onClick={() => setDayIndex(index)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 text-sm font-bold transition-colors",
                  index === dayIndex
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {d.short}
              </button>
            ))}
          </div>

          <div
            key={day.short}
            className="mt-6 space-y-3"
            role="tabpanel"
            aria-label={`Расписание на ${day.day.toLowerCase()}`}
          >
            {day.classes.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className="flex flex-col gap-2 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="font-mono text-lg font-bold text-primary">
                  {item.time}
                </span>
                <div className="flex-1">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.coach} · {item.room}
                  </p>
                </div>
                <span
                  className={cn(
                    "w-fit rounded-full px-3 py-1 text-xs font-semibold",
                    levelStyles[item.level]
                  )}
                >
                  {item.level}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
