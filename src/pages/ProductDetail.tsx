import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Plus, Minus } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground font-body">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.images[0],
    });
  };

  const relatedProducts = products.filter((p) => p.id !== product.id);

  const accordions = [
    { key: "fabric", title: "Fabric & Materials", content: product.fabric },
    { key: "fit", title: "Fit & Sizing", content: product.fit },
    { key: "care", title: "Care Instructions", content: product.care },
    { key: "shipping", title: "Shipping & Returns", content: product.shipping },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <Link to="/shop" className="inline-flex items-center gap-1 text-xs tracking-wider text-muted-foreground uppercase font-body hover:text-foreground transition-colors">
          <ChevronLeft size={14} /> Back to Collection
        </Link>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div>
            <div className="aspect-square bg-secondary overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 overflow-hidden border-2 transition-colors ${
                      selectedImage === i ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-display italic text-foreground mb-2">{product.name}</h1>
            <p className="text-lg font-body font-medium text-foreground mb-6">${product.price}</p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs tracking-widest text-foreground uppercase font-body font-semibold">Size</span>
                <button className="text-xs text-muted-foreground underline font-body">Size Guide</button>
              </div>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-xs font-body font-medium border transition-colors ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs tracking-widest text-foreground uppercase font-body font-semibold block mb-3">Quantity</span>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-body text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-foreground text-background py-4 text-xs tracking-widest uppercase font-body hover:opacity-80 transition-opacity mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                    className="w-full flex items-center justify-between py-4 text-sm font-body font-medium text-foreground"
                  >
                    {acc.title}
                    <Plus size={16} className={`transition-transform ${openAccordion === acc.key ? "rotate-45" : ""}`} />
                  </button>
                  {openAccordion === acc.key && acc.content && (
                    <p className="text-sm font-body text-muted-foreground leading-relaxed pb-4">
                      {acc.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-10">You May Also Like</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`}>
              <ProductCard image={p.images[0]} name={p.name} price={p.price} category={p.category} isNew={p.isNew} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
