import { motion } from "framer-motion";
import { Gem, Truck, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest fabrics — each piece crafted from heavyweight cotton, sourced for durability and softness.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary worldwide shipping on all orders. Thoughtfully packaged and delivered to your door.",
  },
  {
    icon: Shield,
    title: "Precision Craft",
    description: "Meticulous stitching and construction. Built to last, designed to transcend seasonal trends.",
  },
  {
    icon: Leaf,
    title: "Ethical Production",
    description: "Responsibly made with care for our planet. Sustainable practices at every stage of production.",
  },
];

const Features = () => {
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
          The Difference
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <feature.icon
              size={24}
              strokeWidth={1}
              className="mx-auto mb-5 text-gold"
            />
            <h3 className="font-body text-xs tracking-luxury text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
