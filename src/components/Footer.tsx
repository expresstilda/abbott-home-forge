import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-semibold">
                ABBOTT<span className="text-primary-foreground/70">HOME</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              ABBOTT HOME — проект производителя торгового оборудования с 25+ летним опытом. 
              Мы создаём стильную и функциональную мебель для дома, используя профессиональные 
              технологии и материалы.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-muted">
              <p>
                <span className="block text-background/80">Телефон:</span>
                <a href="tel:+74951234567" className="hover:text-background transition-colors">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p>
                <span className="block text-background/80">Email:</span>
                <a href="mailto:info@abbott-home.ru" className="hover:text-background transition-colors">
                  info@abbott-home.ru
                </a>
              </p>
              <p>
                <span className="block text-background/80">Адрес производства:</span>
                Московская область, г. Подольск
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Каталог", href: "/catalog" },
                { name: "О проекте", href: "/about" },
                { name: "Где купить", href: "/contacts" },
                { name: "Оплата и доставка", href: "/contacts" },
                { name: "Гарантия и возврат", href: "/about" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Marketplace */}
          <div>
            <h4 className="font-semibold mb-4">Документы</h4>
            <ul className="space-y-2 text-sm mb-6">
              {[
                "Политика конфиденциальности",
                "Пользовательское соглашение",
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-muted hover:text-background transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-3">Мы на маркетплейсах</h4>
            <div className="flex items-center gap-3">
              {["Ozon", "WB", "Avito"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="px-3 py-1.5 text-xs font-medium bg-background/10 hover:bg-background/20 rounded transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              {["VK", "TG", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center text-xs font-medium bg-background/10 hover:bg-background/20 rounded-full transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-muted">
          <p>© {new Date().getFullYear()} ABBOTT HOME. Все права защищены.</p>
          <p className="mt-1">ООО «ПК Поливер»</p>
        </div>
      </div>
    </footer>
  );
}
