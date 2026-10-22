import { Star } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const reviews = [
  {
    text: "Хожу в MOGG уже полтора года. Здесь впервые удалось не «попробовать спортзал», а по-настоящему тренироваться — тренеры следят за техникой и планом.",
    name: "Ирина К.",
    detail: "Тариф «Драйв» · с нами 1,5 года",
  },
  {
    text: "Сбросил 12 килограммов за полгода. Расписание удобное, зал всегда чистый, а атмосфера заряжает даже после тяжёлого офисного дня.",
    name: "Сергей П.",
    detail: "Тариф «Старт» · минус 12 кг",
  },
  {
    text: "Готовился к первым соревнованиям по пауэрлифтингу. Максим разобрал технику по косточкам и довёл до результата на помосте.",
    name: "Алексей М.",
    detail: "Тариф «Про» · пауэрлифтинг",
  },
];

export function Testimonials() {
  return (
    <section className="bg-card/40 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          label="Отзывы"
          title="Результаты наших клиентов"
          description="Истории тех, кто уже тренируется в MOGG."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} className="h-full" delay={index * 80}>
              <figure className="flex h-full flex-col rounded-xl border border-border/60 bg-card p-6">
                <div
                  className="flex gap-1"
                  aria-label="Оценка 5 из 5"
                  role="img"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  «{review.text}»
                </blockquote>
                <figcaption className="mt-5 border-t border-border/60 pt-4">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
