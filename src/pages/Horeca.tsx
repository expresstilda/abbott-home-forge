import { useState } from "react";
import { Layout } from "@/components/Layout";
import { 
  Package, 
  Percent, 
  Factory, 
  FileText, 
  Building2, 
  UtensilsCrossed, 
  Briefcase, 
  MapPin,
  Truck,
  CheckCircle,
  Settings,
  Repeat,
  Phone,
  Mail
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Horeca() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    inn: "",
    contactName: "",
    phone: "",
    email: "",
    city: "",
    objectType: "",
    quantity: "",
    comment: "",
    consent: false,
  });

  const scrollToForm = () => {
    document.getElementById("horeca-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Необходимо согласие",
        description: "Пожалуйста, подтвердите согласие на обработку данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Спасибо!",
        description: "Мы свяжемся с вами, чтобы уточнить детали и предложить оптовые условия.",
      });
      setFormData({
        company: "",
        inn: "",
        contactName: "",
        phone: "",
        email: "",
        city: "",
        objectType: "",
        quantity: "",
        comment: "",
        consent: false,
      });
    }, 1000);
  };

  const benefits = [
    { icon: Package, text: "Готовые серийные модели из нашего каталога" },
    { icon: Percent, text: "Оптовые скидки и спецусловия по объёму" },
    { icon: Factory, text: "Собственное производство и стабильные поставки" },
    { icon: FileText, text: "Счёт, договор и закрывающие документы для юрлиц" },
  ];

  const targetAudience = [
    {
      icon: Building2,
      title: "Отели, мини-отели, апарт-отели и хостелы",
    },
    {
      icon: UtensilsCrossed,
      title: "Рестораны, кафе, бары",
    },
    {
      icon: Briefcase,
      title: "Офисы, коворкинги и шоурумы",
    },
    {
      icon: MapPin,
      title: "Другие объекты",
    },
  ];

  const productCategories = [
    {
      title: "Зеркала напольные и настенные",
      description: "Для номеров, коридоров, санузлов персонала и примерочных зон.",
    },
    {
      title: "Вешалки напольные",
      description: "Для номеров, коридоров и гардеробных зон: одна и та же модель сразу в нескольких десятках экземпляров.",
    },
    {
      title: "Система Стенвол",
      description: "Модульные настенные системы хранения для организации пространства.",
    },
    {
      title: "Столы и столики",
      description: "Журнальные и придиванные столики для холлов, номеров и зон отдыха.",
    },
    {
      title: "Этажерки",
      description: "Компактные стеллажи для хранения вещей, текстиля и инвентаря.",
    },
    {
      title: "Стеновые декоративные панели",
      description: "Декоративные решения для оформления стен в интерьерах.",
    },
  ];

  const workAdvantages = [
    {
      icon: Percent,
      title: "Оптовые цены от определённого количества",
      description: "Чем больше партия, тем выгоднее условия.",
    },
    {
      icon: CheckCircle,
      title: "Проверенные серийные модели",
      description: "Те же вешалки, стеллажи и зеркала, которые уже продаются частным покупателям и хорошо себя показали.",
    },
    {
      icon: FileText,
      title: "Документы для юрлиц",
      description: "Счёт, договор, закрывающие документы. Работаем с ООО и ИП.",
    },
    {
      icon: Repeat,
      title: "Стабильные поставки",
      description: "Собственное производство позволяет дозаказывать те же модели, когда нужно расширить объект.",
    },
    {
      icon: Truck,
      title: "Доставка по России",
      description: "Отправка транспортными компаниями и СДЭК в любой регион.",
    },
  ];

  const workSteps = [
    { step: 1, title: "Вы оставляете заявку на расчёт партии" },
    { step: 2, title: "Мы подбираем модели из каталога и считаем оптовую цену" },
    { step: 3, title: "Согласуем объём, сроки и доставку" },
    { step: 4, title: "Вы оплачиваете счёт, мы отгружаем заказ" },
  ];

  const exampleKits = [
    {
      title: "Стандартный номер отеля",
      items: ["Напольная вешалка", "Напольное зеркало", "Узкий стеллаж для вещей"],
      note: "Выбираем одну модель и поставляем сразу нужное количество для всех номеров.",
    },
    {
      title: "Гардеробная зона ресторана",
      items: ["Несколько напольных вешалок одной модели"],
      note: "Компактный мобильный гардероб, который легко переставлять.",
    },
    {
      title: "Зона хранения для персонала",
      items: ["Стеллажи для одежды и инвентаря", "Напольные вешалки"],
      note: "Организация пространства для сотрудников без капитального ремонта.",
    },
  ];

  const productionFeatures = [
    { icon: Factory, text: "Собственное производство" },
    { icon: Settings, text: "25+ лет опыта в оборудовании" },
    { icon: CheckCircle, text: "Промышленное качество для интенсивной нагрузки" },
    { icon: Repeat, text: "Повторяемость моделей и наличие серий" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
              «АББОТТ ХОУМ» для гостиниц, ресторанов и корпоративных клиентов
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы производим напольные вешалки, стеллажи, системы хранения, напольные зеркала 
              и аксессуары. Эти же готовые модели можно закупать партиями для отелей, апартаментов, 
              хостелов, ресторанов, офисов и других объектов. Готовый ассортимент, серийные модели, 
              оптовые скидки от определённого количества.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <button onClick={scrollToForm} className="btn-primary">
              Оставить заявку на оптовый расчёт
            </button>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Кому подходят решения АББОТТ ХОУМ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {targetAudience.map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Какие товары можно заказать партиями</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Все товары — те же самые модели из каталога интернет-магазина, без индивидуального производства
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {productCategories.map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Как мы работаем с HoReCa и корпоративными клиентами</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {workAdvantages.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">Этапы работы</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workSteps.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-semibold">
                    {item.step}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Kits */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center">Примеры комплектов из нашего ассортимента</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {exampleKits.map((kit, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">{kit.title}</h3>
                <ul className="space-y-2 mb-4">
                  {kit.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">{kit.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title text-center">Почему на нас можно опираться в проектах</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            За ABBOTT HOME стоит реальное производство с серьёзным оборудованием. 
            Все модели — серийные и отработанные. Удобно, когда нужно много одинаковых 
            позиций для сети или объекта.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productionFeatures.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="horeca-form" className="py-16 md:py-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground text-center mb-4">
              Оставьте заявку на оптовое предложение
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              По заявке мы подберём модели из текущего ассортимента и предложим оптовую цену и условия поставки
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Компания *</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Название компании"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    ИНН компании <span className="text-muted-foreground font-normal">(по желанию)</span>
                  </label>
                  <Input
                    value={formData.inn}
                    onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
                    placeholder="ИНН"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                  <Input
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="Имя и фамилия"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.ru"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Город / регион *</label>
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Москва"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Тип объекта *</label>
                  <Select
                    value={formData.objectType}
                    onValueChange={(value) => setFormData({ ...formData, objectType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип объекта" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotel">Отель / мини-отель / апарт-отель / хостел</SelectItem>
                      <SelectItem value="restaurant">Ресторан / кафе / бар</SelectItem>
                      <SelectItem value="office">Офис / коворкинг / шоурум</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Планируемое количество</label>
                  <Input
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="Например: 20 вешалок, 15 зеркал…"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Комментарий / задача</label>
                <Textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Опишите, какие товары из нашего ассортимента вам нужны и в каком количестве. Можно дать ссылку на карточку товара или указать примерные требования."
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: !!checked })}
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Или свяжитесь с нами напрямую:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a href="tel:+74951234567" className="flex items-center gap-2 text-foreground hover:text-primary">
                  <Phone className="h-4 w-4" />
                  +7 (495) 123-45-67
                </a>
                <a href="mailto:horeca@abbott-home.ru" className="flex items-center gap-2 text-foreground hover:text-primary">
                  <Mail className="h-4 w-4" />
                  horeca@abbott-home.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
