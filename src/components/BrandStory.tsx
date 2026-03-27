import { motion } from "framer-motion";
import brandStory from "@/assets/brand-story.jpg";

const BrandStory = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden"
      >
        <img
          src={brandStory}
          alt="FORM brand story"
          loading="lazy"
          width={900}
          height={1200}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center bg-primary text-primary-foreground px-8 md:px-16 lg:px-20 py-20"
      >
        <div>
          <p className="text-[10px] tracking-luxury font-body text-primary-foreground/50 mb-6">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-8">
            Designed for
            <br />
            everyday discipline.
          </h2>
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed max-w-md mb-10">
            At its core, FORM is a reflection of how you carry yourself — 
            deliberate, clean, and elevated. Every thread is chosen with 
            intention, every cut designed for the modern individual who 
            values substance over noise.
          </p>
          <a href="#" className="btn-luxury-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Our Story
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandStory;
