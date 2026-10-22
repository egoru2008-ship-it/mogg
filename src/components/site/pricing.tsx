import { Check } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Старт",
    price: "2 900",
    period: "₽/мес",
    description: "Для первых шагов в зале",
    featured: false,
    features: [
      "Тренажёрный зал с 8:00 до 17:00",
      "Гардероб и душевые",
      "Стартовая программа тренировок",
      "Консультация дежурного тренера",
    ],
  },
  {
    name: "Драйв",
    price: "4 900",
    period: "₽/мес",
    description: "Полный доступ без ограничений",
    featured: true,
    features: [
      "Безлимитное посещение зала",
      "Все групповые программы",
      "Кардио- и функциональная зоны",
      "Заморозка абонемента на 14 дней",
      "Гостевой визит для друга",
    ],
  },
  {
    name: "Про",
    price: "7 900",
    period: "₽/мес",
    description: "Максимальный результат",
    featured: false,
    features: [
      "Всё из тарифа «Драйв»",
      "4 персональные тренировки в месяц",
      "План питания от нутрициолога",
      "Приоритетная запись на занятия",
      "Анализ состава тела раз в месяц",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-card/40 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          label="Абонементы"
          title="Простые тарифы"
          description="Без скрытых платежей и вступительных взносов. Переходить между тарифами можно в любой месяц."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} className="h-full" delay={index * 80}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-7 transition-colors",
                  plan.featured
                    ? "border-primary shadow-[0_0_50px_-12px_hsl(var(--primary)/0.4)]"
                    : "border-border/60 hover:border-primary/40"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-black uppercase tracking-widest text-primary-foreground">
                    Популярный
                  </span>
                )}
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-lg font-semibold text-muted-foreground">
                    {plan.period}
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border/60 pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  variant={plan.featured ? "default" : "outline"}
                  className="mt-8 w-full"
                  asChild
                >
                  <a href="#contacts">Выбрать тариф</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
