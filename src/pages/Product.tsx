import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { getProductBySlug, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useFavorites } from "@/lib/favorites";
import { Heart, ShoppingCart, Truck, Shield, MapPin, Star, Minus, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, assetUrl } from "@/lib/utils";

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Товар не найден</h1>
          <Link to="/catalog" className="btn-primary">
            Вернуться в каталог
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, product.colors[selectedColor]);
    }
  };

  const handleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  const recentProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const reviews = [
    { name: "Ольга М.", date: "10.11.2024", rating: 5, text: "Отличное качество! Упаковано очень надёжно, собрали быстро. Смотрится дорого." },
    { name: "Дмитрий К.", date: "05.11.2024", rating: 5, text: "Заказывал на дачу, доставили за 5 дней. Всё как на картинке, рекомендую." },
    { name: "Ирина С.", date: "28.10.2024", rating: 4, text: "Хороший товар за свои деньги. Единственное — инструкция могла бы быть подробнее." },
  ];

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
          <span>/</span>
          <Link to={`/catalog/${product.categorySlug}`} className="hover:text-foreground">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
              <img
                src={assetUrl(product.images[0])}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="aspect-square bg-secondary rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                >
                  <img
                    src={assetUrl(product.images[0])}
                    alt={`${product.name} - фото ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {product.isHit && <span className="badge-hit">Хит продаж</span>}
              {product.isNew && <span className="badge-new">Новинка</span>}
              {product.isSale && <span className="badge-sale">Скидка</span>}
            </div>

            <h1 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-2">
              {product.name}
            </h1>
            
            <p className="text-sm text-muted-foreground mb-4">
              Артикул: {product.id.padStart(6, "0")}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviewsCount} отзывов)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">
                  {product.price.toLocaleString("ru-RU")} ₽
                </span>
                {product.oldPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.oldPrice.toLocaleString("ru-RU")} ₽
                  </span>
                )}
              </div>
              <p className="text-sm text-primary mt-1">
                По промокоду HOME10 — скидка 10%
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Цвет</h3>
              <div className="flex items-center gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-all",
                      selectedColor === i ? "border-primary ring-2 ring-primary/30" : "border-border"
                    )}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Количество</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-md hover:bg-secondary"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-border rounded-md hover:bg-secondary"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-3 mb-8">
              <button onClick={handleAddToCart} className="btn-primary flex-1 flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Добавить в корзину
              </button>
              <button
                onClick={handleFavorite}
                className={cn(
                  "w-12 h-12 flex items-center justify-center border rounded-md transition-colors",
                  isFavorite(product.id)
                    ? "bg-accent/10 border-accent text-accent"
                    : "border-border hover:border-accent hover:text-accent"
                )}
              >
                <Heart className={cn("h-5 w-5", isFavorite(product.id) && "fill-current")} />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="space-y-3 p-4 bg-secondary rounded-xl">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Доставка СДЭК по всей России</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Самовывоз со склада в МО</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Гарантия 12 месяцев</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="specs"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Характеристики
            </TabsTrigger>
            <TabsTrigger
              value="package"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
            >
              Комплектация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>{product.description}</p>
              <h4 className="text-foreground font-medium mt-4">Для каких помещений подходит:</h4>
              <ul>
                {product.rooms.map((room) => (
                  <li key={room}>{room}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <div className="max-w-xl">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between py-3 border-b border-border"
                >
                  <span className="text-muted-foreground">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Размеры (ДхШхВ)</span>
                <span className="font-medium">{product.dimensions}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Вес в упаковке</span>
                <span className="font-medium">{product.weight}</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="package" className="mt-6">
            <div className="text-muted-foreground space-y-4">
              <p>В комплект поставки входит:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>{product.name} — 1 шт.</li>
                <li>Крепёжные элементы — 1 комплект</li>
                <li>Инструкция по сборке — 1 шт.</li>
              </ul>
              <h4 className="text-foreground font-medium mt-6">Рекомендации по уходу:</h4>
              <p>
                Протирайте мягкой сухой или слегка влажной тканью. Не используйте 
                абразивные чистящие средства. Избегайте длительного воздействия прямых 
                солнечных лучей.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Reviews */}
        <section className="mb-16">
          <h2 className="section-title">Отзывы о товаре</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted"}`}
                />
              ))}
            </div>
            <span className="font-semibold">{product.rating} / 5</span>
            <span className="text-muted-foreground">на основе {product.reviewsCount} отзывов</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card p-5 rounded-xl border border-border">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < review.rating ? "text-accent fill-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{review.text}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-secondary">Оставить отзыв</button>
          <p className="text-sm text-muted-foreground mt-2">
            Оставлять отзывы могут только зарегистрированные пользователи
          </p>
        </section>

        {/* Marketplace Reviews */}
        <section className="mb-16">
          <h2 className="section-title">Отзывы с маркетплейсов</h2>
          <p className="text-muted-foreground mb-6">
            Скриншоты реальных отзывов покупателей с Ozon и Wildberries. Эти отзывы не учитываются в общем рейтинге товара на сайте.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { platform: "Ozon", index: 1 },
              { platform: "Ozon", index: 2 },
              { platform: "Wildberries", index: 1 },
              { platform: "Wildberries", index: 2 },
              { platform: "Ozon", index: 3 },
              { platform: "Wildberries", index: 3 },
            ].map((review, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="aspect-[4/3] bg-secondary">
                  <img
                    src={assetUrl("placeholder.svg")}
                    alt={`Отзыв с ${review.platform}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className={`text-sm font-medium ${review.platform === "Ozon" ? "text-blue-600" : "text-purple-600"}`}>
                    {review.platform}
                  </span>
                  <span className="text-xs text-muted-foreground">Скриншот отзыва</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="section-title">С этим товаром часто покупают</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Recently Viewed */}
        <section>
          <h2 className="section-title">Вы недавно смотрели</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
