import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useCart } from "@/lib/cart";
import { Check, MapPin, CreditCard, Package } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Checkout() {
  const { items, totalPrice, promoDiscount, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState<"cdek" | "pickup">("cdek");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "Россия",
    city: "",
    agreeTerms: false,
    comment: "",
  });

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const deliveryCost = deliveryMethod === "pickup" ? 0 : 500;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center max-w-xl mx-auto">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-serif font-semibold mb-4">
            Спасибо за заказ!
          </h1>
          <p className="text-muted-foreground mb-2">
            Номер вашего заказа: <span className="font-semibold text-foreground">#{Math.random().toString().slice(2, 8)}</span>
          </p>
          <p className="text-muted-foreground mb-8">
            Мы свяжемся с вами в ближайшее время для подтверждения заказа и уточнения деталей доставки.
          </p>
          <Link to="/catalog" className="btn-primary">
            Продолжить покупки
          </Link>
        </div>
      </Layout>
    );
  }

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Корзина пуста</h1>
          <Link to="/catalog" className="btn-primary">
            Перейти в каталог
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-foreground">Корзина</Link>
          <span>/</span>
          <span className="text-foreground">Оформление заказа</span>
        </nav>

        <h1 className="text-3xl font-serif font-semibold mb-8">Оформление заказа</h1>

        {/* Steps */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { num: 1, label: "Контакты", icon: Package },
            { num: 2, label: "Доставка", icon: MapPin },
            { num: 3, label: "Оплата", icon: CreditCard },
            { num: 4, label: "Подтверждение", icon: Check },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <button
                onClick={() => s.num <= step && setStep(s.num)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  step === s.num
                    ? "bg-primary text-primary-foreground"
                    : step > s.num
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <s.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < 3 && <div className="w-8 h-px bg-border mx-2" />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Step 1: Contact */}
            {step === 1 && (
              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="font-semibold text-lg mb-6">Контактные данные</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">ФИО</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Телефон</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Страна</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="input-field"
                    >
                      <option>Россия</option>
                      <option>Беларусь</option>
                      <option>Казахстан</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Город</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="input-field"
                      placeholder="Москва"
                    />
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="btn-primary mt-6">
                  Продолжить
                </button>
              </div>
            )}

            {/* Step 2: Delivery */}
            {step === 2 && (
              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="font-semibold text-lg mb-6">Способ доставки</h2>
                <div className="space-y-4">
                  <label
                    className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-colors ${
                      deliveryMethod === "cdek" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryMethod === "cdek"}
                      onChange={() => setDeliveryMethod("cdek")}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium">Доставка СДЭК</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Выберите удобный пункт выдачи или доставку курьером. 
                        Стоимость от 500 ₽, срок 2–14 дней в зависимости от региона.
                      </p>
                      {deliveryMethod === "cdek" && (
                        <div className="mt-4 p-4 bg-secondary rounded-lg">
                          <p className="text-sm mb-2">Доступные пункты выдачи:</p>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                              <input type="radio" name="pvz" defaultChecked />
                              <span>СДЭК, ул. Ленина, 15 — от 500 ₽, 3–5 дней</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <input type="radio" name="pvz" />
                              <span>СДЭК, пр. Мира, 42 — от 500 ₽, 3–5 дней</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-colors ${
                      deliveryMethod === "pickup" ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryMethod === "pickup"}
                      onChange={() => setDeliveryMethod("pickup")}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-medium">Самовывоз</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Бесплатно. Заберите заказ со склада в Московской области.
                      </p>
                      {deliveryMethod === "pickup" && (
                        <div className="mt-4 p-4 bg-secondary rounded-lg">
                          <p className="font-medium text-sm">Склад ABBOTT HOME</p>
                          <p className="text-sm text-muted-foreground">
                            Московская область, г. Подольск, ул. Промышленная, 5
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Пн–Пт: 9:00–18:00
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            При самовывозе возможно обслуживание через дилера, условия уточняйте при подтверждении заказа.
                          </p>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    Назад
                  </button>
                  <button onClick={() => setStep(3)} className="btn-primary">
                    Продолжить
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="font-semibold text-lg mb-6">Способ оплаты</h2>
                <label className="flex items-start gap-4 p-4 border border-primary bg-primary/5 rounded-xl">
                  <input type="radio" name="payment" defaultChecked className="mt-1" />
                  <div>
                    <span className="font-medium">Онлайн-оплата банковской картой</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Оплата происходит через защищённый сервис Робокасса. 
                      Мы не храним данные вашей карты.
                    </p>
                  </div>
                </label>
                <div className="flex gap-3 mt-6">
                  <button onClick={() => setStep(2)} className="btn-secondary">
                    Назад
                  </button>
                  <button onClick={() => setStep(4)} className="btn-primary">
                    Продолжить
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="bg-card p-6 rounded-xl border border-border">
                <h2 className="font-semibold text-lg mb-6">Подтверждение заказа</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm line-clamp-1">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} шт. × {item.product.price.toLocaleString("ru-RU")} ₽
                        </p>
                      </div>
                      <span className="font-medium">
                        {(item.product.price * item.quantity).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm border-t border-border pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка</span>
                    <span>
                      {deliveryCost === 0 ? "Бесплатно" : `${deliveryCost.toLocaleString("ru-RU")} ₽`}
                    </span>
                  </div>
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-primary">
                      <span>Скидка</span>
                      <span>−{promoDiscount.toLocaleString("ru-RU")} ₽</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold text-lg pt-2">
                    <span>Итого</span>
                    <span>{(totalPrice + deliveryCost).toLocaleString("ru-RU")} ₽</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">
                    Комментарий к заказу
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="input-field min-h-[80px]"
                    placeholder="Ваши пожелания..."
                  />
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeTerms: !!checked })
                    }
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    Я принимаю условия{" "}
                    <Link to="#" className="text-primary hover:underline">
                      Пользовательского соглашения
                    </Link>{" "}
                    и{" "}
                    <Link to="#" className="text-primary hover:underline">
                      Политики конфиденциальности
                    </Link>
                  </label>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(3)} className="btn-secondary">
                    Назад
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={!formData.agreeTerms}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-xl border border-border sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Ваш заказ</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Товары ({items.length})</span>
                  <span>{subtotal.toLocaleString("ru-RU")} ₽</span>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Скидка</span>
                    <span>−{promoDiscount.toLocaleString("ru-RU")} ₽</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span>
                    {step < 2
                      ? "Рассчитывается"
                      : deliveryCost === 0
                      ? "Бесплатно"
                      : `${deliveryCost.toLocaleString("ru-RU")} ₽`}
                  </span>
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-border mt-4 pt-4">
                <span>Итого</span>
                <span>
                  {(totalPrice + (step >= 2 ? deliveryCost : 0)).toLocaleString("ru-RU")} ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
