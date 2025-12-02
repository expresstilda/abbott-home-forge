import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useCart } from "@/lib/cart";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    promoCode,
    promoDiscount,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  const handleApplyPromo = () => {
    setPromoError("");
    setPromoSuccess("");
    
    if (applyPromoCode(promoInput)) {
      setPromoSuccess(`Промокод применён. Скидка −${promoDiscount.toLocaleString("ru-RU")} ₽`);
      setPromoInput("");
    } else {
      setPromoError("Промокод недействителен или срок действия истёк");
    }
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-semibold mb-4">Корзина пуста</h1>
          <p className="text-muted-foreground mb-8">
            Добавьте товары из каталога, чтобы оформить заказ
          </p>
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
          <span className="text-foreground">Корзина</span>
        </nav>

        <h1 className="text-3xl font-serif font-semibold mb-8">Корзина</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-card rounded-xl border border-border"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.product.slug}`}
                  className="w-24 h-24 flex-shrink-0 bg-secondary rounded-lg overflow-hidden"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="font-medium text-foreground hover:text-primary line-clamp-2"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Цвет:{" "}
                    <span
                      className="inline-block w-4 h-4 rounded-full border border-border align-middle"
                      style={{ backgroundColor: item.selectedColor }}
                    />
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-border rounded hover:bg-secondary"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border border-border rounded hover:bg-secondary"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="font-semibold">
                      {(item.product.price * item.quantity).toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 text-muted-foreground hover:text-destructive self-start"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-xl border border-border sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Итого</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Промокод</h3>
                {promoCode ? (
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm font-medium text-primary">{promoCode}</span>
                    <button
                      onClick={removePromoCode}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Удалить
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Введите промокод"
                      className="flex-1 input-field text-sm py-2"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-muted"
                    >
                      Применить
                    </button>
                  </div>
                )}
                {promoError && (
                  <p className="text-sm text-destructive mt-2">{promoError}</p>
                )}
                {promoSuccess && (
                  <p className="text-sm text-primary mt-2">{promoSuccess}</p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Товары</span>
                  <span>{subtotal.toLocaleString("ru-RU")} ₽</span>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Скидка по промокоду</span>
                    <span>−{promoDiscount.toLocaleString("ru-RU")} ₽</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="text-muted-foreground">Рассчитывается при оформлении</span>
                </div>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t border-border mt-4 pt-4">
                <span>Итого к оплате</span>
                <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
              </div>

              <Link
                to="/checkout"
                className="btn-primary w-full mt-6 text-center block"
              >
                Перейти к оформлению
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
