import { Instagram, Send, Youtube } from "lucide-react";

const navLinks = [
  { href: "#about", label: "О зале" },
  { href: "#programs", label: "Программы" },
  { href: "#trainers", label: "Тренеры" },
  { href: "#pricing", label: "Абонементы" },
  { href: "#schedule", label: "Расписание" },
  { href: "#contacts", label: "Контакты" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Send, label: "Telegram", href: "https://t.me" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="text-2xl font-black italic tracking-tighter"
              aria-label="MOGG — наверх"
            >
              MOGG<span className="text-primary">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Фитнес-зал полного цикла: силовой тренинг, кроссфит, бокс и
              восстановление.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest">
              Разделы
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest">
              Контакты
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>ул. Спортивная, 12, Москва</li>
              <li>
                <a
                  href="tel:+74951234567"
                  className="transition-colors hover:text-foreground"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mogg.fit"
                  className="transition-colors hover:text-foreground"
                >
                  info@mogg.fit
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2025 MOGG — фитнес-зал. Все права защищены.</p>
          <p>Сайт создан для курсовой работы</p>
        </div>
      </div>
    </footer>
  );
}
