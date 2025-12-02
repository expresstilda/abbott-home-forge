import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, ExternalLink, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "question",
    message: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({
      name: "",
      contact: "",
      subject: "question",
      message: "",
      agree: false,
    });
  };

  const warehouses = [
    {
      name: "Основной склад",
      address: "Московская область, г. Подольск, ул. Промышленная, 5",
      hours: "Пн–Пт: 9:00–18:00",
      note: "Самовывоз по предварительному согласованию",
    },
  ];

  const marketplaces = [
    { name: "Официальный магазин", href: "/catalog", button: "Перейти в каталог" },
    { name: "Ozon", href: "https://ozon.ru", button: "Смотреть на Ozon" },
    { name: "Wildberries", href: "https://wildberries.ru", button: "Смотреть на WB" },
  ];

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Контакты</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">
          Контакты ABBOTT HOME
        </h1>

        {/* Main Contacts */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="font-serif font-semibold text-xl mb-6">Связаться с нами</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Адрес производства</h3>
                  <p className="text-muted-foreground">
                    Московская область, г. Подольск, ул. Промышленная, 5
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <a
                    href="tel:+74951234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:info@abbott-home.ru"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@abbott-home.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн–Пт: 9:00–18:00<br />
                    Сб–Вс: выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="aspect-video bg-secondary rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <MapPin className="h-12 w-12" />
            </div>
          </div>
        </section>

        {/* Warehouses */}
        <section className="mb-16">
          <h2 className="font-serif font-semibold text-xl mb-6">Склады и самовывоз</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {warehouses.map((warehouse) => (
              <div
                key={warehouse.name}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-2">{warehouse.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{warehouse.address}</p>
                <p className="text-sm text-muted-foreground mb-3">{warehouse.hours}</p>
                <p className="text-xs text-muted-foreground italic">{warehouse.note}</p>
                <button className="mt-4 text-sm font-medium text-primary hover:underline flex items-center gap-1">
                  Построить маршрут
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Where to Buy */}
        <section className="mb-16">
          <h2 className="font-serif font-semibold text-xl mb-6">
            Где купить ABBOTT HOME
          </h2>
          <p className="text-muted-foreground mb-6">
            Покупайте там, где вам удобно — в нашем официальном магазине или на маркетплейсах
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {marketplaces.map((mp) => (
              <div
                key={mp.name}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <h3 className="font-semibold mb-4">{mp.name}</h3>
                {mp.href.startsWith("/") ? (
                  <Link to={mp.href} className="btn-primary text-sm">
                    {mp.button}
                  </Link>
                ) : (
                  <a
                    href={mp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm inline-flex items-center gap-2"
                  >
                    {mp.button}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl">
          <h2 className="font-serif font-semibold text-xl mb-6">Напишите нам</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Имя</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Телефон или Email
                </label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="input-field"
                  placeholder="+7 (999) 123-45-67"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Тема обращения</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="input-field"
              >
                <option value="question">Вопрос по заказу</option>
                <option value="wholesale">Оптовое сотрудничество</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Сообщение</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="input-field min-h-[120px]"
                placeholder="Ваше сообщение..."
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agree"
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                className="mt-1"
                required
              />
              <label htmlFor="agree" className="text-sm text-muted-foreground">
                Я согласен на обработку персональных данных в соответствии с{" "}
                <Link to="#" className="text-primary hover:underline">
                  Политикой конфиденциальности
                </Link>
              </label>
            </div>

            <button type="submit" className="btn-primary flex items-center gap-2">
              <Send className="h-4 w-4" />
              Отправить
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}
