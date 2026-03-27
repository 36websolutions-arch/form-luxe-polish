import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="section-padding text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto"
      >
        <p className="text-[10px] tracking-luxury font-body text-muted-foreground mb-4">
          Stay Connected
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground font-light italic mb-4">
          Join the FORM world.
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-10 font-light">
          Early access to new drops, exclusive offers, and stories from the studio.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-4 bg-transparent border border-border text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
          />
          <button type="submit" className="btn-luxury">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
