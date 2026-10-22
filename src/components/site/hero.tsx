import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "1200+", label: "активных клиентов" },
  { value: "15", label: "тренеров в команде" },
  { value: "40+", label: "занятий в неделю" },
  { value: "800 м²", label: "площадь зала" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <Image
        src="/images/hero.webp"
        alt="Тренажёрный зал MOGG"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 pb-24 pt-32 md:pb-32">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Первое занятие — бесплатно
          </div>
          <h1 className="animate-fade-up mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            Сила начинается <span className="text-primary">здесь</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground [animation-delay:240ms] md:text-xl">
            Тренажёрный зал, кроссфит, бокс и йога в одном пространстве.
            Тренеры, которые приведут тебя к результату — от первой тренировки
            до рекорда.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:360ms]">
            <Button size="lg" asChild>
              <a href="#contacts">
                Записаться на тренировку
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#programs">Смотреть программы</a>
            </Button>
          </div>
        </div>

        <dl className="animate-fade-up mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border/60 pt-8 [animation-delay:480ms] md:mt-24 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-3xl font-black tracking-tight text-primary md:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
