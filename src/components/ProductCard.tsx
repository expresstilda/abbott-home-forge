import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "discounted";
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn(
        "group card-product flex flex-col",
        variant === "discounted" && "ring-2 ring-accent"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isHit && <span className="badge-hit">Хит</span>}
          {product.isNew && <span className="badge-new">Новинка</span>}
          {product.isSale && <span className="badge-sale">Скидка</span>}
          {product.isDiscounted && <span className="badge-sale">Уценка</span>}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm transition-all",
            isFavorite(product.id) 
              ? "text-accent" 
              : "text-muted-foreground hover:text-accent"
          )}
        >
          <Heart className={cn("h-5 w-5", isFavorite(product.id) && "fill-current")} />
        </button>

        {/* Quick Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-2.5 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-olive-dark"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-1 mb-3">
          {product.shortDescription}
        </p>

        {/* Discount Reason */}
        {product.discountReason && (
          <p className="text-xs text-accent font-medium mb-2">
            Причина уценки: {product.discountReason}
          </p>
        )}

        {/* Colors */}
        <div className="flex items-center gap-1.5 mb-3">
          {product.colors.slice(0, 4).map((color, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.oldPrice.toLocaleString("ru-RU")} ₽
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
