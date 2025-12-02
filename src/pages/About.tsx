import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BASE_PATH } from "@/lib/utils";
import { 
  Factory, 
  Award, 
  Shield, 
  Settings, 
  Globe, 
  CheckCircle,
  Cpu
} from "lucide-react";

export default function About() {
  const equipment = [
    {
      name: "Деревообрабатывающие центры с ЧПУ",
      benefit: "Точная геометрия каждой детали с погрешностью менее 0.1 мм",
      icon: Cpu,
    },
    {
      name: "Кромкооблицовочные станки",
      benefit: "Ровная и аккуратная кромка без сколов и отслоений",
      icon: Settings,
    },
    {
      name: "Лазерная резка металла",
      benefit: "Аккуратные срезы металлического каркаса без заусенцев",
      icon: Factory,
    },
    {
      name: "Линия порошковой покраски",
      benefit: "Прочное и долговечное покрытие, устойчивое к царапинам",
      icon: Shield,
    },
    {
      name: "Участок обработки зеркал",
      benefit: "Безопасные зеркальные поверхности с защитной плёнкой",
      icon: Award,
    },
  ];

  const timeline = [
    {
      year: "1999",
      title: "Основание компании",
      description: "Запуск производства торгового оборудования под брендом ABBOTT/Poliver",
    },
    {
      year: "2005",
      title: "Развитие направлений",
      description: "Старт производства экономпанелей, расширение ассортимента торгового оборудования",
    },
    {
      year: "2015",
      title: "Выход на международный рынок",
      description: "Начало экспорта продукции в страны СНГ, Европы и Америки",
    },
    {
      year: "2022",
      title: "Запуск ABBOTT HOME",
      description: "Создание линейки мебели и товаров для дома на базе профессионального производства",
    },
  ];

  const materials = [
    "ЛДСП европейского производителя Egger",
    "Стальная труба с порошковым покрытием",
    "Зеркальное полотно AGC (Европа)",
    "Качественная фурнитура и крепёж",
  ];

  const qualityPoints = [
    "Входной контроль всех материалов и комплектующих",
    "Контроль на каждом этапе производства",
    "Проверка готовой продукции на прочность и устойчивость",
    "Служба качества и система обратной связи с покупателями",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Главная</Link>
            <span>/</span>
            <span className="text-foreground">О проекте</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
                ABBOTT HOME — домашние решения на основе профессионального производства
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Проект вырос из крупного производства торгового оборудования с 25-летним опытом. 
                Мы создаём стильную и функциональную мебель для дома, используя промышленные 
                технологии и материалы высшего качества.
              </p>
            </div>
            <div className="aspect-video bg-muted rounded-xl overflow-hidden">
              <img
                src={`${BASE_PATH}placeholder.svg`}
                alt="Производство ABBOTT HOME"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">История и миссия</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            От торгового оборудования до мебели для дома
          </p>

          <div className="relative max-w-3xl mx-auto mt-12">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <span className="w-3 h-3 rounded-full bg-primary-foreground" />
                </div>
                <div
                  className={`flex-1 bg-card p-6 rounded-xl shadow-soft ${
                    i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  } md:w-[calc(50%-2rem)]`}
                >
                  <span className="text-sm font-semibold text-primary">{item.year}</span>
                  <h3 className="font-serif font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 p-6 bg-secondary rounded-xl max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              «Делать стильные и функциональные решения для хранения и оформления дома 
              по честной цене — вот наша миссия»
            </p>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Современное производство</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Профессиональное оборудование для безупречного качества
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {equipment.map((item) => (
              <div key={item.name} className="bg-card p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.benefit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={`${BASE_PATH}placeholder.svg`}
                  alt={`Производство ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quality */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Материалы и технологии</h2>
              <p className="text-muted-foreground mb-6">
                Мы работаем только с проверенными поставщиками материалов, 
                которые соответствуют европейским стандартам качества.
              </p>
              <ul className="space-y-3">
                {materials.map((mat) => (
                  <li key={mat} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-title">Качество и контроль</h2>
              <p className="text-muted-foreground mb-6">
                Многоступенчатая система контроля качества гарантирует, 
                что каждый товар соответствует нашим высоким стандартам.
              </p>
              <ul className="space-y-3">
                {qualityPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">География и партнёры</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Наша продукция представлена по всей России и за рубежом
          </p>

          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-muted-foreground">
              Россия • СНГ • Европа • Америка
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            {["Ozon", "Wildberries", "Avito"].map((mp) => (
              <span
                key={mp}
                className="px-6 py-3 bg-card rounded-lg font-medium text-muted-foreground"
              >
                {mp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="section-title">Хотите обсудить сотрудничество?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Мы открыты для партнёрских и корпоративных заказов. 
            Свяжитесь с отделом продаж для обсуждения условий.
          </p>
          <Link to="/contacts" className="btn-primary">
            Связаться с нами
          </Link>
        </div>
      </section>
    </Layout>
  );
}
