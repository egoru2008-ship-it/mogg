"use client";

import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contacts = [
  { icon: MapPin, label: "Адрес", value: "ул. Спортивная, 12, Москва" },
  { icon: Phone, label: "Телефон", value: "+7 (495) 123-45-67" },
  { icon: Mail, label: "Email", value: "info@mogg.fit" },
  {
    icon: Clock,
    label: "Часы работы",
    value: "Пн–Пт 7:00–23:00 · Сб–Вс 9:00–22:00",
  },
];

export function Contacts() {
  const [sent, setSent] = useState(false);

  // Demo form for the coursework: no backend, so we only show
  // a local confirmation state.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacts" className="scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Контакты"
              title="Запишись на первое занятие"
              description="Оставь заявку — администратор перезвонит в течение часа, ответит на вопросы и подберёт удобное время для бесплатной тренировки."
            />
            <ul className="mt-10 space-y-5">
              {contacts.map((contact) => (
                <li key={contact.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <contact.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="font-semibold">{contact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              {sent ? (
                <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                  <CheckCircle2
                    className="h-14 w-14 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold">Заявка отправлена!</h3>
                  <p className="mt-2 max-w-xs text-muted-foreground">
                    Мы перезвоним в течение часа. До встречи в MOGG!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSent(false)}
                  >
                    Отправить ещё одну
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Как к тебе обращаться"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Комментарий
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Твоя цель или удобное время для звонка"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                    Отправить заявку
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Нажимая кнопку, ты соглашаешься на обработку персональных
                    данных
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
