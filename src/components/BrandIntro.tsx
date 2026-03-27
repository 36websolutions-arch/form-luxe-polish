import { motion } from "framer-motion";

const BrandIntro = () => {
  return (
    <section className="section-padding text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="divider-gold mb-10" />
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light">
          FORM is a modern lifestyle brand built on confidence, discipline, and elevated simplicity. 
          Designed for everyday wear with a luxury feel — each piece is made to embody presence, 
          comfort, and effortless style.
        </p>
        <div className="divider-gold mt-10" />
      </motion.div>
    </section>
  );
};

export default BrandIntro;
