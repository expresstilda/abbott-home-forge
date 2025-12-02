import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, discountedProducts } from "@/lib/products";
import { assetUrl } from "@/lib/utils";
import { 
  Factory, 
  Truck, 
  Shield, 
  Settings,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const hitProducts = products.filter((p) => p.isHit);

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
                Мы — производители с 25-летним опытом. Делаем прочную, красивую мебель 
                для хранения и знаем, как сделать её удобной в повседневной жизни.
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
                src={assetUrl("placeholder.svg")}
                alt="Интерьер с мебелью ABBOTT HOME"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Категории</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Выберите нужную категорию товаров для вашего интерьера
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Зеркала напольные", desc: "Напольные зеркала в полный рост", slug: "zerkala-napolnye" },
              { name: "Зеркала настенные", desc: "Настенные зеркала для интерьера", slug: "zerkala-nastennye" },
              { name: "Вешалки напольные", desc: "Компактные и прочные вешалки", slug: "veshalki-napolnye" },
              { name: "Системы хранения", desc: "Комплексные решения для организации", slug: "sistemy-hraneniya" },
              { name: "Журнальные столики", desc: "Стильные столики для гостиной", slug: "zhurnalnye-stoliki" },
              { name: "Этажерки", desc: "Функциональные этажерки для хранения", slug: "etazherki" },
            ].map((cat) => (
              <Link
                key={cat.slug}
                to={`/catalog/${cat.slug}`}
                className="group relative aspect-[4/3] bg-secondary rounded-xl overflow-hidden"
              >
                <img
                  src={assetUrl("placeholder.svg")}
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
