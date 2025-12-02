import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { useFavorites } from "@/lib/favorites";
import { 
  User, 
  Package, 
  Heart, 
  MessageSquare, 
  LogIn,
  UserPlus,
  Eye,
  EyeOff,
  Star,
  Edit,
  Trash2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { favorites } = useFavorites();

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });
  const [profileForm, setProfileForm] = useState({
    name: "Иван Иванов",
    phone: "+7 (999) 123-45-67",
    email: "ivan@example.com",
    country: "Россия",
    city: "Москва",
    address: "",
  });

  const mockOrders = [
    {
      id: "123456",
      date: "15.11.2024",
      status: "Доставлен",
      total: 17980,
      items: ["Вешалка с 5 полками", "Зеркало напольное"],
    },
    {
      id: "123455",
      date: "01.11.2024",
      status: "В обработке",
      total: 6490,
      items: ["Стеллаж узкий с 5 полками"],
    },
  ];

  const mockReviews = [
    {
      id: 1,
      product: "Вешалка напольная с 5 полками",
      date: "10.11.2024",
      rating: 5,
      text: "Отличный товар! Качество на высоте.",
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <div className="container-custom py-8 md:py-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Главная</Link>
            <span>/</span>
            <span className="text-foreground">Личный кабинет</span>
          </nav>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setShowLogin(true)}
                className={`flex-1 py-3 text-center font-medium rounded-lg transition-colors ${
                  showLogin
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <LogIn className="h-4 w-4 inline mr-2" />
                Войти
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className={`flex-1 py-3 text-center font-medium rounded-lg transition-colors ${
                  !showLogin
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <UserPlus className="h-4 w-4 inline mr-2" />
                Регистрация
              </button>
            </div>

            {showLogin ? (
              <form onSubmit={handleLogin} className="bg-card p-6 rounded-xl border border-border">
                <h1 className="text-2xl font-serif font-semibold mb-6">Вход</h1>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email или телефон
                    </label>
                    <input
                      type="text"
                      value={loginForm.email}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, email: e.target.value })
                      }
                      className="input-field"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Пароль</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, password: e.target.value })
                        }
                        className="input-field pr-10"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="text-sm text-primary hover:underline inline-block"
                  >
                    Забыли пароль?
                  </Link>
                  <button type="submit" className="btn-primary w-full">
                    Войти
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleRegister}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h1 className="text-2xl font-serif font-semibold mb-6">Регистрация</h1>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">ФИО</label>
                    <input
                      type="text"
                      value={registerForm.name}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, name: e.target.value })
                      }
                      className="input-field"
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={registerForm.email}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, email: e.target.value })
                      }
                      className="input-field"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Телефон</label>
                    <input
                      type="tel"
                      value={registerForm.phone}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, phone: e.target.value })
                      }
                      className="input-field"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Пароль</label>
                    <input
                      type="password"
                      value={registerForm.password}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, password: e.target.value })
                      }
                      className="input-field"
                      placeholder="Минимум 8 символов"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="agree-register"
                      checked={registerForm.agree}
                      onChange={(e) =>
                        setRegisterForm({ ...registerForm, agree: e.target.checked })
                      }
                      className="mt-1"
                    />
                    <label
                      htmlFor="agree-register"
                      className="text-sm text-muted-foreground"
                    >
                      Я принимаю условия{" "}
                      <Link to="#" className="text-primary hover:underline">
                        Пользовательского соглашения
                      </Link>
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Зарегистрироваться
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8 md:py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <span>/</span>
          <span className="text-foreground">Личный кабинет</span>
        </nav>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif font-semibold">Личный кабинет</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Выйти
          </button>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto mb-8 overflow-x-auto">
            <TabsTrigger
              value="profile"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Профиль</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 flex items-center gap-2"
            >
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Мои заказы</span>
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Избранное</span>
              {favorites.length > 0 && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-accent text-accent-foreground rounded-full">
                  {favorites.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3 flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Отзывы</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="max-w-xl">
              <h2 className="font-semibold text-lg mb-6">Личные данные</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">ФИО</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, name: e.target.value })
                    }
                    className="input-field"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Телефон</label>
                    <input
                      type="tel"
                      value={profileForm.phone}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, phone: e.target.value })
                      }
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, email: e.target.value })
                      }
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Страна</label>
                    <select
                      value={profileForm.country}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, country: e.target.value })
                      }
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
                      value={profileForm.city}
                      onChange={(e) =>
                        setProfileForm({ ...profileForm, city: e.target.value })
                      }
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Адрес по умолчанию
                  </label>
                  <input
                    type="text"
                    value={profileForm.address}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, address: e.target.value })
                    }
                    className="input-field"
                    placeholder="ул. Ленина, д. 1, кв. 1"
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Сохранить изменения
                </button>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <h2 className="font-semibold text-lg mb-6">История заказов</h2>
            {mockOrders.length > 0 ? (
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-card p-4 md:p-6 rounded-xl border border-border"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="font-semibold">Заказ #{order.id}</span>
                        <span className="text-muted-foreground ml-3 text-sm">
                          {order.date}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          order.status === "Доставлен"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {order.items.join(", ")}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {order.total.toLocaleString("ru-RU")} ₽
                      </span>
                      <button className="text-sm text-primary hover:underline">
                        Подробнее
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">У вас пока нет заказов</p>
                <Link to="/catalog" className="btn-primary mt-4 inline-block">
                  Перейти в каталог
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="favorites">
            <h2 className="font-semibold text-lg mb-6">Избранные товары</h2>
            {favorites.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {favorites.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  В избранном пока ничего нет
                </p>
                <Link to="/catalog" className="btn-primary mt-4 inline-block">
                  Перейти в каталог
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="reviews">
            <h2 className="font-semibold text-lg mb-6">Ваши отзывы</h2>
            {mockReviews.length > 0 ? (
              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-card p-4 md:p-6 rounded-xl border border-border"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-medium">{review.product}</h3>
                        <div className="flex items-center gap-2 mt-1 mb-2">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-accent fill-accent"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {review.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-muted-foreground hover:text-foreground">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-muted-foreground hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Вы ещё не оставляли отзывов</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
