interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
  subtitle?: string;
  isNew?: boolean;
}

const ProductCard = ({ image, name, price, category, subtitle, isNew }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
        {isNew && (
          <span className="absolute top-3 left-3 z-10 bg-foreground text-background text-[10px] tracking-wider uppercase font-body px-3 py-1">
            New
          </span>
        )}
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-body font-medium text-foreground">{name}</h3>
          {subtitle && <p className="text-sm text-muted-foreground font-display italic mt-1">{subtitle}</p>}
          <p className="text-xs text-muted-foreground font-body mt-0.5">{category}</p>
        </div>
        <span className="text-sm font-body font-medium text-foreground">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
