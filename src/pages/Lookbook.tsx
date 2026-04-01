import { Link } from "react-router-dom";
import lbCouple from "@/assets/lb-couple.webp";
import lbHoodieBack from "@/assets/lb-hoodie-back.webp";
import lbFemaleCream from "@/assets/lb-female-cream.webp";
import lbHoodieFlat from "@/assets/lb-hoodie-flat.jpg";
import lbTeeDetail from "@/assets/lb-tee-detail.jpg";

const Lookbook = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh]">
        <img src={lbTeeDetail} alt="Lookbook" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <p className="text-xs tracking-widest text-primary-foreground/70 uppercase font-body mb-3">Collection 001</p>
          <h1 className="text-5xl md:text-7xl font-display italic text-primary-foreground">Lookbook</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 lg:px-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display italic text-foreground leading-relaxed">
          Built for presence.<br />Designed for everyday discipline.
        </h2>
      </section>

      {/* Full Width - Hoodie Back */}
      <section className="px-6 lg:px-16 pb-12">
        <img src={lbHoodieBack} alt="FORM hoodie back" loading="lazy" className="w-full h-[500px] object-cover" />
      </section>

      {/* Text Block */}
      <section className="px-6 lg:px-16 pb-24 max-w-3xl">
        <p className="text-sm font-display italic text-foreground leading-relaxed">
          Every piece begins with intention. We process, refine, distill — 
          until the silhouette, the fabric, the purpose are in sync. What remains is essential.
        </p>
      </section>

      {/* Two Column - Female + Hoodie Flat */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 lg:px-16 pb-12">
        <img src={lbFemaleCream} alt="FORM cream set" loading="lazy" className="w-full h-[500px] object-cover" />
        <img src={lbHoodieFlat} alt="FORM hoodie" loading="lazy" className="w-full h-[500px] object-cover" />
      </section>

      {/* Quote */}
      <section className="py-20 px-6 lg:px-16 text-center max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
          "Discipline is the bridge between intention and identity."
        </p>
      </section>

      {/* Full Width - Couple */}
      <section className="px-6 lg:px-16 pb-12">
        <img src={lbCouple} alt="FORM editorial couple" loading="lazy" className="w-full h-[500px] object-cover" />
      </section>

      {/* Text Right */}
      <section className="px-6 lg:px-16 pb-24 flex justify-end">
        <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-md text-right">
          Heavyweight cotton. Structured seams. Garments dyed in small batches. Every detail, considered. Nothing decorative — only deliberate.
        </p>
      </section>

      {/* Final CTA */}
      <section className="relative h-[60vh]">
        <img src={lbHoodieBack} alt="FORM Collection" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display italic text-primary-foreground mb-6">The Collection</h2>
          <Link
            to="/shop"
            className="bg-foreground text-primary-foreground px-8 py-3 text-xs tracking-widest uppercase font-body hover:opacity-80 transition-opacity"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
