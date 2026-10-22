import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const trainers = [
  {
    name: "Максим Волков",
    role: "Силовой тренинг · пауэрлифтинг",
    experience: "Стаж 10 лет",
    photo: "/images/trainer-1.webp",
    tags: ["Техника", "Сила"],
  },
  {
    name: "Анна Соколова",
    role: "Фитнес · растяжка",
    experience: "Стаж 7 лет",
    photo: "/images/trainer-2.webp",
    tags: ["Мобильность", "Групповые"],
  },
  {
    name: "Дмитрий Орлов",
    role: "Кроссфит · ОФП",
    experience: "Стаж 8 лет",
    photo: "/images/trainer-3.webp",
    tags: ["Выносливость", "WOD"],
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          label="Команда"
          title="Тренеры MOGG"
          description="Сертифицированные специалисты, которые сами тренируются и выступают. Подберут нагрузку под твой уровень и цель."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} className="h-full" delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/50">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={trainer.photo}
                    alt={`Тренер ${trainer.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {trainer.experience}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{trainer.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {trainer.role}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {trainer.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
