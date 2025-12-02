import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, discountedProducts, collections, rooms, categories } from "@/lib/products";
import { 
  ChevronRight, 
  Factory, 
  Truck, 
  Shield, 
  Settings,
  Star,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const [selectedRoom, setSelectedRoom] = useState("Прихожая");
  const hitProducts = products.filter((p) => p.isHit);

  const roomProducts = products.filter((p) => p.rooms.includes(selectedRoom));

  const faqItems = [
    {
      question: "Как осуществляется доставка?",
      answer: "Доставка осуществляется транспортной компанией СДЭК по всей России. Сроки доставки зависят от региона — обычно от 2 до 14 дней. Стоимость рассчитывается автоматически при оформлении заказа.",
    },
    {
      question: "Как работает самовывоз?",
      answer: "Самовывоз возможен со склада в Московской области (г. Подольск). Необходимо предварительно согласовать дату и время получения заказа с менеджером.",
    },
    {
      question: "Как оплатить заказ?",
      answer: "Оплата производится онлайн банковской картой через защищённый сервис Робокасса. Мы принимаем карты Visa, MasterCard, МИР.",
    },
    {
      question: "Какие условия возврата?",
      answer: "Возврат товара надлежащего качества возможен в течение 14 дней с момента получения. Товар должен сохранять товарный вид и упаковку.",
    },
    {
      question: "Какая гарантия на товары?",
      answer: "На всю продукцию ABBOTT HOME предоставляется гарантия от производителя сроком 12 месяцев. Гарантия распространяется на производственные дефекты.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="container-custom py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
                Стильные зеркала и системы хранения для дома от производителя
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Более 25 лет мы производим торговое оборудование для России, СНГ, Европы и Америки. 
                Теперь весь наш профессиональный опыт — в мебели и товарах для вашего дома.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/catalog" className="btn-primary text-center">
                  Перейти в каталог
                </Link>
                <Link to="/catalog" className="btn-secondary text-center">
                  Посмотреть коллекции
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Factory, text: "Производство под Москвой" },
                  { icon: Settings, text: "Собственное оборудование" },
                  { icon: Truck, text: "Доставка по всей России" },
                  { icon: Shield, text: "Гарантия качества" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:h-[500px] animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
              <img
                src="/placeholder.svg"
                alt="Интерьер с мебелью ABBOTT HOME"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Популярные категории</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Выберите нужную категорию товаров для вашего интерьера
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Зеркала", desc: "Напольные зеркала в полный рост", slug: "zerkala" },
              { name: "Вешалки напольные", desc: "Компактные и прочные вешалки", slug: "veshalki" },
              { name: "Стеллажи", desc: "Функциональные стеллажи для хранения", slug: "stellazhi" },
              { name: "Системы хранения", desc: "Комплексные решения для организации", slug: "sistemy-hraneniya" },
              { name: "Банкетки и пуфы", desc: "Удобная мебель для прихожей", slug: "banketki" },
              { name: "Аксессуары", desc: "Колёса, крепления и дополнения", slug: "aksessuary" },
            ].map((cat) => (
              <Link
                key={cat.slug}
                to={`/catalog/${cat.slug}`}
                className="group relative aspect-[4/3] bg-secondary rounded-xl overflow-hidden"
              >
                <img
                  src="/placeholder.svg"
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif font-semibold text-background text-lg mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-background/80">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Коллекции ABBOTT HOME</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Подберите готовое решение для своего интерьера
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div
                key={collection.slug}
                className="bg-card rounded-xl overflow-hidden shadow-soft"
              >
                <div className="aspect-[3/2] bg-muted">
                  <img
                    src="/placeholder.svg"
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {collection.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/catalog/${collection.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-olive-dark"
                  >
                    Смотреть коллекцию
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Solutions */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Решения для разных помещений</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Подберите мебель под конкретное помещение
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {rooms.map((room) => (
              <button
                key={room}
                onClick={() => setSelectedRoom(room)}
                className={`chip ${selectedRoom === room ? "chip-active" : ""}`}
              >
                {room}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {roomProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Hit Products */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Хиты продаж</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Самые популярные товары среди наших покупателей
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hitProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Discounted Products Teaser */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Выгодное предложение</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Уценённые товары с небольшими косметическими особенностями и выставочные образцы. 
            Полностью функциональны и с гарантией.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {discountedProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} variant="discounted" />
            ))}
          </div>
          <div className="text-center">
            <Link to="/vygodnoe-predlozhenie" className="btn-accent">
              Смотреть все выгодные предложения
            </Link>
          </div>
        </div>
      </section>

      {/* Production & Quality */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Производство и качество</h2>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Компания ABBOTT (ПК Поливер) более 25 лет производит торговое оборудование, 
                экономпанели и комплексные решения для магазинов. Наш завод расположен в 
                Московской области и оснащён современным европейским оборудованием.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Мы работаем с крупнейшими торговыми сетями России и экспортируем продукцию 
                в страны СНГ, Европы и Америки. Теперь весь этот опыт и технологии мы 
                используем для создания мебели и товаров для дома под брендом ABBOTT HOME.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { name: "Деревообрабатывающие центры с ЧПУ", benefit: "Точная геометрия каждой детали" },
                { name: "Кромкооблицовочные станки", benefit: "Ровная и аккуратная кромка без сколов" },
                { name: "Лазерная резка металла", benefit: "Аккуратный металлокаркас" },
                { name: "Линия порошковой покраски", benefit: "Прочное и долговечное покрытие" },
                { name: "Участок обработки зеркал", benefit: "Безопасные зеркальные поверхности" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Что говорят покупатели</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { name: "Анна К.", date: "15.11.2024", rating: 5, text: "Отличная вешалка! Качество на высоте, собрали за 15 минут. Очень довольны покупкой." },
              { name: "Михаил С.", date: "02.11.2024", rating: 5, text: "Зеркало пришло в идеальной упаковке, никаких повреждений. Смотрится очень стильно в прихожей." },
              { name: "Елена В.", date: "28.10.2024", rating: 4, text: "Стеллаж крепкий, выглядит дороже своей цены. Рекомендую!" },
            ].map((review, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow-soft">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < review.rating ? "text-accent fill-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{review.name}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Отзывы с маркетплейсов показаны в виде скриншотов и не учитываются в общем рейтинге товара на сайте.
          </p>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Где купить ABBOTT HOME</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto">
            <div className="bg-card p-8 rounded-xl text-center">
              <h3 className="font-serif font-semibold text-xl mb-4">
                Официальный интернет-магазин
              </h3>
              <p className="text-muted-foreground mb-6">
                Полный ассортимент, актуальные цены и прямая гарантия от производителя
              </p>
              <Link to="/catalog" className="btn-primary">
                Перейти в каталог
              </Link>
            </div>
            <div className="bg-card p-8 rounded-xl text-center">
              <h3 className="font-serif font-semibold text-xl mb-4">
                Маркетплейсы
              </h3>
              <p className="text-muted-foreground mb-6">
                Покупайте там, где вам удобно — Ozon, Wildberries или Avito
              </p>
              <div className="flex justify-center gap-3">
                {["Ozon", "WB", "Avito"].map((mp) => (
                  <a
                    key={mp}
                    href="#"
                    className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-secondary transition-colors"
                  >
                    {mp}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title text-center">Частые вопросы</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Готовы обновить дом?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Выберите стильные и функциональные решения для хранения от ABBOTT HOME
          </p>
          <Link
            to="/catalog"
            className="inline-block px-8 py-4 bg-background text-foreground font-medium rounded-md hover:bg-background/90 transition-colors"
          >
            Выбрать решение для своего интерьера
          </Link>
        </div>
      </section>
    </Layout>
  );
}
