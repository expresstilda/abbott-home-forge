import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { discountedProducts } from "@/lib/products";

export default function DiscountedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { name: "Все", slug: "all" },
    { name: "Зеркала", slug: "zerkala" },
    { name: "Вешалки", slug: "veshalki" },
    { name: "Стеллажи", slug: "stellazhi" },
  ];

  const filteredProducts = discountedProducts.filter((p) => {
    return selectedCategory === "all" || p.categorySlug === selectedCategory;
  });

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Выгодное предложение</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Выгодные предложения ABBOTT HOME
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Уценённые товары с незначительными визуальными особенностями, выставочные образцы 
            и остатки коллекций. Все товары полностью функциональны и поставляются с гарантией.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-2">Категория</h3>
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="discounted" />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Товары не найдены. Попробуйте изменить параметры фильтра.
            </p>
          </div>
        )}

        {/* Terms */}
        <div className="mt-16 p-6 bg-secondary rounded-xl">
          <h2 className="font-serif font-semibold text-xl mb-4">
            Условия покупки уценённых товаров
          </h2>
          <div className="text-sm text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Гарантия:</strong> На все уценённые товары 
              действует гарантия производителя сроком 6 месяцев. Гарантия распространяется 
              на производственные дефекты, но не на косметические особенности, указанные 
              в описании товара.
            </p>
            <p>
              <strong className="text-foreground">Возврат:</strong> Возврат уценённых товаров 
              возможен в течение 14 дней с момента получения, если товар не был в употреблении 
              и сохранил товарный вид.
            </p>
            <p>
              <strong className="text-foreground">Описание:</strong> Все косметические 
              особенности каждого товара подробно описаны в карточке. При необходимости 
              вы можете запросить дополнительные фотографии у менеджера.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
          >
            Подробнее о гарантии и возврате →
          </Link>
        </div>
      </div>
    </Layout>
  );
}
