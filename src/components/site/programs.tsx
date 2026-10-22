import {
  ArrowRight,
  Dumbbell,
  Flame,
  Flower2,
  Hand,
  HeartPulse,
  UserCheck,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const programs = [
  {
    icon: Dumbbell,
    title: "Тренажёрный зал",
    text: "Свободные веса, рычажные и блочные тренажёры. База для силы и мышечной массы — от новичка до атлета.",
  },
  {
    icon: Flame,
    title: "Кроссфит",
    text: "Функциональные WOD-комплексы на выносливость, скорость и взрывную силу в мини-группах.",
  },
  {
    icon: Hand,
    title: "Бокс",
    text: "Техника удара, работа на мешке и в парах. Общая физподготовка и уверенность в себе.",
  },
  {
    icon: Flower2,
    title: "Йога и растяжка",
    text: "Мобильность, здоровая спина и восстановление после силовых тренировок.",
  },
  {
    icon: UserCheck,
    title: "Персональный тренинг",
    text: "Программа под твою цель, разбор техники и контроль прогресса один на один.",
  },
  {
    icon: HeartPulse,
    title: "Кардио-зона",
    text: "Беговые дорожки, эллипсы и гребные тренажёры для выносливости и жиросжигания.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-card/40 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          label="Программы"
          title="Выбери своё направление"
          description="Шесть направлений под разные цели: сила, выносливость, здоровье и восстановление. Пробное занятие на любой программе — бесплатно."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} className="h-full" delay={index * 60}>
              <article className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <program.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.text}
                </p>
                <a
                  href="#schedule"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  Расписание занятий
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
