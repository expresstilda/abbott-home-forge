import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, getProductsByCategory } from "@/lib/products";
import { Filter, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function Catalog() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [priceRange, setPriceRange] = useState([0, 15000]);
  const [inStockOnly, setInStockOnly] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = getProductsByCategory(selectedCategory).filter(
    (p) =>
      p.price >= priceRange[0] &&
      p.price <= priceRange[1] &&
      (!inStockOnly || p.inStock)
  );

  const categoryInfo: Record<string, { title: string; description: string }> = {
    all: {
      title: "Каталог товаров ABBOTT HOME",
      description: "Мебель и товары для дома собственного производства. Комбинируйте в системы хранения под ваши потребности.",
    },
    zerkala: {
      title: "Зеркала ABBOTT HOME",
      description: "Напольные зеркала в металлической раме для прихожей, спальни и гардеробной. Безопасное зеркальное полотно AGC с защитной плёнкой.",
    },
    veshalki: {
      title: "Вешалки напольные ABBOTT HOME",
      description: "Стильные и прочные напольные вешалки (рейлы) для хранения одежды и обуви. От компактных моделей с 1 полкой до вместительных с 5 полками.",
    },
    stellazhi: {
      title: "Стеллажи ABBOTT HOME",
      description: "Функциональные стеллажи для любого помещения. Прочный металлический каркас и качественные полки из ЛДСП Egger.",
    },
    aksessuary: {
      title: "Аксессуары ABBOTT HOME",
      description: "Комплекты колёс, дополнительные крепления и другие аксессуары для мебели серии Отрада.",
    },
  };

  const currentInfo = categoryInfo[selectedCategory] || categoryInfo.all;

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Каталог</span>
          {selectedCategory !== "all" && (
            <>
              <span>/</span>
              <span className="text-foreground">
                {categories.find((c) => c.slug === selectedCategory)?.name}
              </span>
            </>
          )}
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            {currentInfo.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            {currentInfo.description}
          </p>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`chip ${selectedCategory === cat.slug ? "chip-active" : ""}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-border rounded-md"
          >
            <Filter className="h-4 w-4" />
            Фильтры
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-card p-6 rounded-xl border border-border sticky top-24">
              <h3 className="font-semibold mb-6">Фильтры</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-4">Цена</h4>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={15000}
                  step={500}
                  className="mb-3"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{priceRange[0].toLocaleString("ru-RU")} ₽</span>
                  <span>{priceRange[1].toLocaleString("ru-RU")} ₽</span>
                </div>
              </div>

              {/* In Stock */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="inStock"
                    checked={inStockOnly}
                    onCheckedChange={(checked) => setInStockOnly(!!checked)}
                  />
                  <label htmlFor="inStock" className="text-sm cursor-pointer">
                    Только в наличии
                  </label>
                </div>
              </div>

              {/* Color */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Цвет</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Чёрный", color: "#1a1a1a" },
                    { name: "Белый", color: "#f5f5f5" },
                    { name: "Бежевый", color: "#d4a574" },
                    { name: "Серый", color: "#9ca3af" },
                  ].map((c) => (
                    <button
                      key={c.name}
                      className="w-8 h-8 rounded-full border-2 border-border hover:border-primary transition-colors"
                      style={{ backgroundColor: c.color }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h4 className="text-sm font-medium mb-3">Материал</h4>
                <div className="space-y-2">
                  {["Металл", "ЛДСП", "МДФ", "Стекло"].map((mat) => (
                    <div key={mat} className="flex items-center gap-2">
                      <Checkbox id={mat} />
                      <label htmlFor={mat} className="text-sm cursor-pointer">
                        {mat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Найдено {filteredProducts.length} товаров
              </p>
              <select className="text-sm border border-border rounded-md px-3 py-2 bg-background">
                <option>Сначала популярные</option>
                <option>Сначала недорогие</option>
                <option>Сначала дорогие</option>
              </select>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Товары не найдены. Попробуйте изменить параметры фильтра.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="font-serif font-semibold text-xl mb-4">
            Мебель и товары для дома ABBOTT HOME
          </h2>
          <div className="text-sm text-muted-foreground space-y-4 max-w-4xl">
            <p>
              В каталоге ABBOTT HOME представлены напольные вешалки, стеллажи, зеркала и 
              аксессуары собственного производства. Вся продукция изготавливается на 
              современном оборудовании из качественных материалов европейских производителей.
            </p>
            <p>
              Мебель серии «Отрада» подходит для прихожей, спальни, гардеробной, детской 
              комнаты, лоджии и дачи. Благодаря модульности вы можете комбинировать товары 
              между собой, создавая индивидуальную систему хранения под ваши потребности.
            </p>
            <p>
              Мы предлагаем несколько цветовых решений для каждого товара: классический 
              чёрный, универсальный белый и тёплый бежевый оттенок. Все изделия имеют 
              порошковое покрытие металлических элементов, которое обеспечивает долговечность 
              и устойчивость к царапинам.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
