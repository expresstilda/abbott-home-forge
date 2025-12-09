export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  collection: string;
  price: number;
  oldPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  colors: string[];
  material: string;
  dimensions: string;
  weight: string;
  inStock: boolean;
  isHit?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  isDiscounted?: boolean;
  discountReason?: string;
  rating: number;
  reviewsCount: number;
  specifications: Record<string, string>;
  rooms: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Зеркало Вельга",
    slug: "veshalka-s-polkoy",
    category: "Зеркала",
    categorySlug: "zerkala",
    collection: "Вельга",
    price: 7990,
    description: "Стильная и прочная вешалка (рейл) будет прекрасным функциональным решением для хранения любой одежды и обуви. С ней можно забыть про развешанные на спинках стульев рубашки, ломящийся от одежды шкаф или наоборот его отсутствие. От любого беспорядка в вещах - к комфортному хранению!",
    shortDescription: "",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5", "#d4a574"],
    material: "Металл, ЛДСП",
    dimensions: "80×45×165 см",
    weight: "8.5 кг",
    inStock: true,
    isHit: true,
    rating: 4.8,
    reviewsCount: 124,
    specifications: {
      "Материал каркаса": "Стальная труба 20мм",
      "Материал полки": "ЛДСП Egger",
      "Покрытие": "Порошковая покраска",
      "Максимальная нагрузка": "30 кг",
      "Страна производства": "Россия",
    },
    rooms: ["Прихожая", "Спальня", "Гардеробная"],
  },
  {
    id: "2",
    name: "Вешалка Тон",
    slug: "veshalka-s-3-polkami",
    category: "Вешалки",
    categorySlug: "veshalki",
    collection: "Тон",
    price: 9490,
    description: "Расширенная версия напольной вешалки с тремя полками для хранения обуви, сумок и аксессуаров. Идеальное решение для организации прихожей или гардеробной комнаты.",
    shortDescription: "",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5", "#d4a574"],
    material: "Металл, ЛДСП",
    dimensions: "80×45×165 см",
    weight: "10.2 кг",
    inStock: true,
    isHit: true,
    rating: 4.9,
    reviewsCount: 89,
    specifications: {
      "Материал каркаса": "Стальная труба 20мм",
      "Материал полок": "ЛДСП Egger",
      "Покрытие": "Порошковая покраска",
      "Количество полок": "3",
      "Максимальная нагрузка": "40 кг",
      "Страна производства": "Россия",
    },
    rooms: ["Прихожая", "Гардеробная", "Дом/дача"],
  },
  {
    id: "3",
    name: "Зеркало Вельга Люмина",
    slug: "veshalka-s-5-polkami",
    category: "Зеркала",
    categorySlug: "zerkala",
    collection: "Вельга",
    price: 11990,
    oldPrice: 13990,
    description: "Максимально функциональная напольная вешалка с пятью вместительными полками. Позволяет организовать хранение одежды, обуви и аксессуаров в одном месте. Прочная конструкция выдерживает значительные нагрузки.",
    shortDescription: "",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5", "#d4a574"],
    material: "Металл, ЛДСП",
    dimensions: "80×45×180 см",
    weight: "14 кг",
    inStock: true,
    isHit: true,
    isSale: true,
    rating: 4.7,
    reviewsCount: 156,
    specifications: {
      "Материал каркаса": "Стальная труба 20мм",
      "Материал полок": "ЛДСП Egger",
      "Покрытие": "Порошковая покраска",
      "Количество полок": "5",
      "Максимальная нагрузка": "50 кг",
      "Страна производства": "Россия",
    },
    rooms: ["Прихожая", "Гардеробная", "Лоджия"],
  },
  {
    id: "4",
    name: "Зеркало напольное в металлической раме",
    slug: "zerkalo-napolnoe",
    category: "Зеркала",
    categorySlug: "zerkala",
    collection: "Отрада",
    price: 8990,
    description: "Универсальное напольное зеркало изготовлено из стальной трубы шириной 2см с порошковой покраской, зеркальное полотно 0,4см лучшего европейского производителя AGC гарантирует ваше отражение без искажений. Специально с задней стороны мы наклеили защитную пленку для безопасности.",
    shortDescription: "",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5"],
    material: "Металл, зеркальное полотно AGC",
    dimensions: "49×41×154 см",
    weight: "11.2 кг",
    inStock: true,
    rating: 4.9,
    reviewsCount: 203,
    specifications: {
      "Материал рамы": "Стальная труба 20мм",
      "Зеркальное полотно": "AGC (Европа), 4мм",
      "Покрытие рамы": "Порошковая покраска",
      "Защитная плёнка": "Да",
      "Страна производства": "Россия",
    },
    rooms: ["Прихожая", "Спальня", "Гардеробная"],
  },
  {
    id: "5",
    name: "Стеллаж узкий с 5 полками",
    slug: "stellazh-uzkiy-5-polok",
    category: "Стеллажи",
    categorySlug: "stellazhi",
    collection: "Отрада",
    price: 6490,
    description: "Стильный предмет интерьера серии Отрада – стеллаж. Пять полок из высококачественного ЛДСП лучшего европейского производителя Egger, стальная труба диаметром 20мм с порошковым покрытием модных оттенков, надежные крепления делают конструкцию прочной и устойчивой.",
    shortDescription: "",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5", "#d4a574"],
    material: "Металл, ЛДСП",
    dimensions: "40×33×126 см",
    weight: "10 кг",
    inStock: true,
    rating: 4.6,
    reviewsCount: 78,
    specifications: {
      "Материал каркаса": "Стальная труба 20мм",
      "Материал полок": "ЛДСП Egger",
      "Покрытие": "Порошковая покраска",
      "Количество полок": "5",
      "Максимальная нагрузка на полку": "10 кг",
      "Страна производства": "Россия",
    },
    rooms: ["Спальня", "Гардеробная", "Детская", "Лоджия"],
  },
  {
    id: "6",
    name: "Стеллаж Отрада широкий с 5 полками",
    slug: "stellazh-shirokiy-5-polok",
    category: "Стеллажи",
    categorySlug: "stellazhi",
    collection: "Отрада",
    price: 8990,
    description: "Широкая версия стеллажа из коллекции Отрада с увеличенной вместимостью. Идеально подходит для хранения книг, декора, растений и других предметов интерьера.",
    shortDescription: "Просторный широкий стеллаж с 5 полками",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5", "#d4a574"],
    material: "Металл, ЛДСП",
    dimensions: "60×33×126 см",
    weight: "12 кг",
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewsCount: 45,
    specifications: {
      "Материал каркаса": "Стальная труба 20мм",
      "Материал полок": "ЛДСП Egger",
      "Покрытие": "Порошковая покраска",
      "Количество полок": "5",
      "Максимальная нагрузка на полку": "15 кг",
      "Страна производства": "Россия",
    },
    rooms: ["Спальня", "Гостиная", "Детская"],
  },
  {
    id: "7",
    name: "Комплект колёс для мебели",
    slug: "komplekt-koles",
    category: "Аксессуары",
    categorySlug: "aksessuary",
    collection: "Отрада",
    price: 990,
    description: "Комплект из 4 колёс с тормозами для мебели серии Отрада. Позволяет легко перемещать вешалки и стеллажи по комнате. Прочные колёса с резиновым покрытием не царапают пол.",
    shortDescription: "4 колеса с тормозами для мобильности мебели",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a"],
    material: "Пластик, резина, металл",
    dimensions: "Диаметр 50 мм",
    weight: "0.4 кг",
    inStock: true,
    rating: 4.5,
    reviewsCount: 67,
    specifications: {
      "Количество в комплекте": "4 шт",
      "Диаметр колеса": "50 мм",
      "Наличие тормоза": "Да (2 шт)",
      "Максимальная нагрузка": "80 кг (на комплект)",
      "Страна производства": "Россия",
    },
    rooms: [],
  },
  {
    id: "8",
    name: "Вешалка напольная Отрада с 2 полками",
    slug: "veshalka-s-2-polkami",
    category: "Вешалки",
    categorySlug: "veshalki",
    collection: "Отрада",
    price: 8490,
    description: "Оптимальный вариант напольной вешалки с двумя полками. Подходит для небольших помещений, где важна компактность без потери функциональности.",
    shortDescription: "Компактная вешалка с 2 полками",
    images: ["/placeholder.svg"],
    colors: ["#1a1a1a", "#f5f5f5", "#d4a574"],
    material: "Металл, ЛДСП",
    dimensions: "80×45×165 см",
    weight: "9 кг",
    inStock: true,
    rating: 4.7,
    reviewsCount: 92,
    specifications: {
      "Материал каркаса": "Стальная труба 20мм",
      "Материал полок": "ЛДСП Egger",
      "Покрытие": "Порошковая покраска",
      "Количество полок": "2",
      "Максимальная нагрузка": "35 кг",
      "Страна производства": "Россия",
    },
    rooms: ["Прихожая", "Спальня"],
  },
];

export const discountedProducts: Product[] = [
  {
    ...products[2],
    id: "d1",
    isDiscounted: true,
    discountReason: "Выставочный образец",
    oldPrice: 11990,
    price: 8990,
  },
  {
    ...products[3],
    id: "d2",
    isDiscounted: true,
    discountReason: "Незначительная царапина на раме",
    oldPrice: 8990,
    price: 6490,
  },
  {
    ...products[4],
    id: "d3",
    isDiscounted: true,
    discountReason: "Остаток серии",
    oldPrice: 6490,
    price: 4990,
  },
];

export const categories = [
  { name: "Все", slug: "all", thumbnail: "/placeholder.svg" },
  { name: "Зеркала напольные", slug: "zerkala-napolnye", thumbnail: "/placeholder.svg" },
  { name: "Зеркала настенные", slug: "zerkala-nastennye", thumbnail: "/placeholder.svg" },
  { name: "Вешалки напольные", slug: "veshalki-napolnye", thumbnail: "/placeholder.svg" },
  { name: "Системы хранения", slug: "sistemy-hraneniya", thumbnail: "/placeholder.svg" },
  { name: "Журнальные столики", slug: "zhurnalnye-stoliki", thumbnail: "/placeholder.svg" },
  { name: "Этажерки", slug: "etazherki", thumbnail: "/placeholder.svg" },
];

export const rooms = [
  "Спальня",
  "Прихожая",
  "Гардеробная",
  "Лоджия",
  "Детская",
  "Дом/дача",
];

export const collections = [
  {
    name: "Коллекция вешалок",
    slug: "veshalki",
    description: "Стильные напольные вешалки для прихожей, спальни и гардеробной",
    items: ["Вешалки", "Стеллажи", "Зеркала"],
  },
  {
    name: "Коллекция стеллажей",
    slug: "stellazhi",
    description: "Функциональные стеллажи для любого помещения",
    items: ["Стеллажи", "Вешалки"],
  },
  {
    name: "Коллекция зеркал",
    slug: "zerkala",
    description: "Напольные зеркала в металлической раме",
    items: ["Зеркала"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "all") return products;
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getHitProducts(): Product[] {
  return products.filter(p => p.isHit);
}
