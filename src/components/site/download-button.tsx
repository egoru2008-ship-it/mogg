import { Download } from "lucide-react";

// Вспомогательная кнопка для скачивания исходников проекта.
// Перед публикацией сайта её можно удалить вместе со строкой
// <DownloadButton /> в src/app/page.tsx.
export function DownloadButton() {
  return (
    <a
      href="/mogg-source.zip"
      download="mogg-source.zip"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95"
    >
      <Download className="size-4" aria-hidden="true" />
      Скачать код (.zip)
    </a>
  );
}
