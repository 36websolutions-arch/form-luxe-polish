import { motion } from "framer-motion";
import productTee from "@/assets/product-tee.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productJoggers from "@/assets/product-joggers.jpg";

const products = [
  { image: productTee, name: "Essential Tee", color: "Onyx", price: "$85.00" },
  { image: productHoodie, name: "Essential Hoodie", color: "Onyx", price: "$145.00" },
  { image: productJoggers, name: "Essential Joggers", color: "Onyx", price: "$120.00" },
];

const ProductGrid = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-luxury font-body text-muted-foreground mb-3">
          Shop the Essentials
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
          Curated Staples
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden bg-secondary mb-5">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
              <motion.button
                className="absolute bottom-0 left-0 right-0 btn-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileTap={{ scale: 0.98 }}
              >
                Quick Add
              </motion.button>
            </div>
            <div className="text-center">
              <p className="text-[10px] tracking-luxury font-body text-muted-foreground mb-1">
                {product.color}
              </p>
              <h3 className="font-body text-sm font-medium text-foreground tracking-wide">
                {product.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
