import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Возвращает путь к ассету с учётом базового пути (для GitHub Pages)
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Удаляем начальный слеш из пути, если он есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Убеждаемся что base заканчивается на слеш
  const cleanBase = base.endsWith('/') ? base : base + '/';
  return cleanBase + cleanPath;
}
