import { motion } from "framer-motion";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";

const images = [lookbook1, lookbook2, lookbook3];

const Lookbook = () => {
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
          Lookbook
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="overflow-hidden group cursor-pointer"
          >
            <img
              src={img}
              alt={`Lookbook ${i + 1}`}
              loading="lazy"
              width={600}
              height={750}
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Lookbook;
