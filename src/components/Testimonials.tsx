import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The quality is exceptional. Comfortable, minimal, and perfectly made — this is exactly what luxury streetwear should feel like.",
    author: "Marcus T.",
    title: "Creative Director",
  },
  {
    quote: "Finally a brand that understands less is more. Everything I've bought from FORM has become a daily essential in my wardrobe.",
    author: "Sophia R.",
    title: "Architect",
  },
  {
    quote: "The attention to detail is remarkable. FORM pieces have a quiet confidence that makes everything else in my closet feel basic.",
    author: "James K.",
    title: "Entrepreneur",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-lg md:text-xl text-foreground italic leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="divider-gold mb-5" />
              <p className="font-body text-xs tracking-luxury text-foreground">
                {t.author}
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                {t.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
