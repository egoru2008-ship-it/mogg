import { Dumbbell, HeartPulse, Target, Users } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const features = [
  {
    icon: Dumbbell,
    title: "800 м² под тренировки",
    text: "Три зоны: свободные веса, тренажёры и функциональное пространство.",
  },
  {
    icon: Users,
    title: "Групповые программы",
    text: "От кроссфита до йоги — расписание на любой график, утром и вечером.",
  },
  {
    icon: Target,
    title: "Персональный подход",
    text: "Стартовая диагностика, план тренировок и сопровождение тренера.",
  },
  {
    icon: HeartPulse,
    title: "Зона восстановления",
    text: "Массажные роллы, сауна и кардио для активного восстановления.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <Image
                src="/images/about.webp"
                alt="Тренировочный зал MOGG"
                width={960}
                height={640}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl border border-border/60 object-cover"
              />
              <div className="absolute -bottom-6 right-4 rounded-xl border border-border/60 bg-card p-4 shadow-xl md:-right-6">
                <p className="text-3xl font-black text-primary">8+</p>
                <p className="text-sm text-muted-foreground">лет работы</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              label="О зале"
              title="Больше, чем просто зал"
              description="MOGG — это пространство, где спорт становится привычкой. Мы объединили профессиональное оборудование, команду тренеров и атмосферу, в которую хочется возвращаться."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <Reveal key={feature.title} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40">
                    <feature.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold leading-snug">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
