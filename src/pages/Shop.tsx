import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["ALL", "T-SHIRTS", "HOODIES", "SWEATPANTS", "SHORTS", "HATS"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = activeCategory === "ALL"
    ? products
    : products.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-2">Collection 001</p>
        <h1 className="text-4xl md:text-5xl font-display text-foreground mb-10">The Essentials</h1>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-border pb-4">
          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-wider font-body uppercase transition-opacity pb-1 ${
                  activeCategory === cat
                    ? "text-foreground border-b border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-wider text-muted-foreground uppercase font-body">Sort:</span>
            <select className="text-xs font-body bg-transparent text-foreground border-none focus:outline-none cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard
                image={product.images[0]}
                name={product.name}
                price={product.price}
                category={product.category}
                isNew={product.isNew}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
