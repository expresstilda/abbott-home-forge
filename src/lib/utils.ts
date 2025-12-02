import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Базовый путь для ассетов (уже включает завершающий слеш)
export const BASE_PATH = import.meta.env.BASE_URL;
