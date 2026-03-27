import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="FORM elevated essentials campaign"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/60" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] tracking-luxury font-body text-cream/70 mb-4">
            New Collection
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-light italic leading-[0.95]">
            Elevated
            <br />
            Essentials.
          </h1>
          <p className="font-body text-sm text-cream/60 mt-5 max-w-sm font-light">
            The Autumn Collection — Now Available
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="btn-luxury">
              Shop Now
            </a>
            <a href="#" className="btn-luxury-outline border-cream/40 text-cream hover:bg-cream hover:text-charcoal">
              Explore
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
