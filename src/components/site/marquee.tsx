import { Flame } from "lucide-react";

const items = [
  "Силовой тренинг",
  "Кроссфит",
  "Бокс",
  "Йога и растяжка",
  "Персональный тренинг",
  "Кардио",
];

// The track holds two identical halves and shifts by -50%, so the loop is
// seamless; the second copy is hidden from screen readers.
export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-primary-foreground/10 bg-primary py-3.5">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            aria-hidden={index >= items.length}
            className="flex items-center gap-8 text-sm font-black uppercase tracking-widest text-primary-foreground"
          >
            {item}
            <Flame className="h-4 w-4 shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
