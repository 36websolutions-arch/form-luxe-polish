import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.webp";
import editorialHoodieBack from "@/assets/editorial-hoodie-back.webp";
import lookbook2 from "@/assets/lookbook-2.webp";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh]">
        <img src={heroImage} alt="About FORM" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pb-12">
          <p className="text-xs tracking-widest text-primary-foreground/70 uppercase font-body mb-2">The Brand</p>
          <h1 className="text-4xl md:text-5xl font-display italic text-primary-foreground">About FORM</h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-4">Origin</p>
            <h2 className="text-2xl md:text-3xl font-display italic text-foreground leading-relaxed">
              Born from the discipline of form.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              FORM was founded on a simple conviction: that what you wear should reflect how you move through the world. 
              Not loudly. Not for attention. But with the quiet confidence that comes from knowing every detail has been considered.
            </p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Rooted in Los Angeles — a city defined by light, architecture, and the tension between ambition and ease — the 
              label exists at the intersection of luxury and restraint. Each piece is designed to embody presence: structured 
              enough to hold its form, relaxed enough to move with you.
            </p>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              We believe in the power of essentials. In fabrics that improve with wear. In silhouettes that transcend seasons. In 
              the idea that discipline and simplicity are not limitations — they are the foundation of something lasting.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section>
        <img src={editorialHoodieBack} alt="FORM hoodie back" loading="lazy" className="w-full h-[500px] object-cover" />
      </section>

      {/* Principles */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-16">Principles</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-display italic text-foreground mb-4">Elevated Simplicity</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              We strip away the unnecessary. Every stitch, every seam, every proportion is intentional. Luxury is not about addition — it is about refinement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display italic text-foreground mb-4">Disciplined Craft</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Premium heavyweight fabrics. Considered construction. Each piece is built to hold its form and improve with time. We do not cut corners.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-display italic text-foreground mb-4">Los Angeles Identity</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Concrete and sunlight. Shadow and warmth. FORM carries the energy of the city — ambitious, relaxed, and unmistakably its own.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <img src={lookbook2} alt="FORM editorial" loading="lazy" className="w-full h-[600px] object-cover" />
        <div className="bg-foreground flex items-center justify-center p-12 lg:p-20">
          <div>
            <p className="text-xl md:text-2xl font-display italic text-primary-foreground leading-relaxed mb-6">
              "We don't design for trends. We design for the person who has already decided who they are."
            </p>
            <p className="text-xs tracking-widest text-primary-foreground/50 uppercase font-body">FORM</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-4">The Collection</p>
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-8">Experience FORM.</h2>
        <Link
          to="/shop"
          className="inline-block bg-foreground text-background px-8 py-3 text-xs tracking-widest uppercase font-body hover:opacity-80 transition-opacity"
        >
          Shop the Collection →
        </Link>
      </section>
    </div>
  );
};

export default About;
