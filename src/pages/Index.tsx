import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-main.webp";
import productHoodie from "@/assets/product-hoodie-v4.png";
import productTee from "@/assets/product-tee-v4.webp";
import productSweatpants from "@/assets/product-sweatpants.webp";
import lookbook1 from "@/assets/lookbook-1.webp";
import lookbook2 from "@/assets/lookbook-2.webp";
import lookbook3 from "@/assets/lookbook-3.webp";
import editorialHoodieBack from "@/assets/editorial-hoodie-back.webp";
import womenImage1 from "@/assets/women-editorial-1.webp";
import womenImage2 from "@/assets/women-editorial-2.webp";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen">
        <img src={heroImage} alt="FORM Los Angeles" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="relative z-10 flex flex-col justify-end h-full px-6 lg:px-16 pb-20">
          <p className="text-xs tracking-widest text-primary-foreground/70 uppercase font-body mb-3">The Essentials</p>
          <h1 className="text-5xl md:text-7xl font-display italic text-primary-foreground leading-tight">
            Elevated Essentials.
          </h1>
          <Link
            to="/shop"
            className="mt-6 inline-block border border-primary-foreground px-8 py-3 text-xs tracking-widest text-primary-foreground uppercase font-body hover:bg-primary-foreground hover:text-foreground transition-colors w-fit"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 px-6 lg:px-16 text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-display italic text-foreground leading-relaxed">
          FORM is a modern Los Angeles lifestyle label built on confidence, discipline, and elevated simplicity. 
          Designed for everyday wear with a luxury feel — each piece is made to embody presence, comfort, and effortless style.
        </p>
      </section>

      {/* Shop the Collection */}
      <section className="px-6 lg:px-16 bg-secondary">
        <div className="py-20">
          <h2 className="text-xs md:text-sm tracking-widest text-foreground uppercase font-body text-center mb-16 font-semibold">
            Shop the Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { image: productHoodie, name: "Form Hoodie", subtitle: "Signature Piece", slug: "heavyweight-hoodie" },
              { image: productTee, name: "Form Tee", subtitle: "", slug: "form-tee" },
              { image: productSweatpants, name: "Form Sweatpants", subtitle: "", slug: "form-sweatpants" },
            ].map((product) => (
              <div key={product.name} className="flex flex-col items-center text-center">
                <div className="w-full aspect-[4/5] overflow-hidden mb-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-[11px] font-body font-semibold text-foreground/70 tracking-widest uppercase">{product.name}</h3>
                {product.subtitle && (
                  <p className="text-sm text-muted-foreground font-display italic mt-1 mb-3">{product.subtitle}</p>
                )}
                {!product.subtitle && <div className="mb-4" />}
                <Link
                  to={`/product/${product.slug}`}
                  className="border border-muted-foreground/40 px-8 py-2.5 text-[10px] tracking-widest text-foreground uppercase font-body hover:bg-foreground hover:text-background transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Preview */}
      <section className="px-6 lg:px-16 py-24">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body text-center mb-12">
          Lookbook
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <img src={lookbook1} alt="Lookbook" loading="lazy" className="w-full aspect-square object-cover" />
          <img src={lookbook2} alt="Lookbook" loading="lazy" className="w-full aspect-square object-cover" />
          <img src={lookbook3} alt="Lookbook" loading="lazy" className="w-full aspect-square object-cover" />
        </div>
      </section>

      {/* Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <img src={editorialHoodieBack} alt="FORM lifestyle" loading="lazy" className="w-full h-[600px] object-cover" />
        <div className="bg-foreground flex items-center justify-center p-12 lg:p-20">
          <div>
            <p className="text-xs tracking-widest text-primary-foreground/50 uppercase font-body mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-display italic text-primary-foreground leading-tight mb-6">
              Designed for<br />everyday discipline.
            </h2>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed max-w-md mb-8">
              Every piece begins with intention. We process, refine, distill — 
              until the silhouette, the fabric, the purpose are in sync. What remains is essential.
            </p>
            <Link
              to="/shop"
              className="border border-primary-foreground px-8 py-3 text-xs tracking-widest text-primary-foreground uppercase font-body hover:bg-primary-foreground hover:text-foreground transition-colors"
            >
              Shop Now →
            </Link>
          </div>
        </div>
      </section>

      {/* FORM Women */}
      <section className="py-24 px-6 lg:px-16 text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-6">Introducing</p>
        <h2 className="text-4xl md:text-5xl font-display italic text-foreground mb-4">FORM Women</h2>
        <p className="text-sm font-display italic text-muted-foreground mb-16">
          Designed for strength, presence, and femininity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <img src={womenImage1} alt="FORM Women" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          <img src={womenImage2} alt="FORM Women" loading="lazy" className="w-full aspect-[3/4] object-cover" />
        </div>
        <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto mt-12 mb-8">
          A refined, feminine extension of the FORM identity. Clean silhouettes, neutral tones, and premium fabrics — designed with the same intention and elevated simplicity.
        </p>
        <button className="border border-muted-foreground/40 px-10 py-3 text-xs tracking-widest text-foreground uppercase font-body hover:bg-foreground hover:text-background transition-colors">
          Coming Soon
        </button>
      </section>

      {/* Features */}
      <section className="py-24 px-6 lg:px-16">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body text-center mb-16">
          Why FORM
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
          {[
            { title: "Premium Fabrics", desc: "Heavyweight cotton, brushed fleece, and custom-milled blends for lasting comfort." },
            { title: "Discipline", desc: "Designed with intention. Every stitch, seam, and silhouette serves a purpose." },
            { title: "LA Culture", desc: "Rooted in the energy and style of Los Angeles street culture and architecture." },
            { title: "Everyday Elevation", desc: "Pieces that elevate your daily routine with minimal, luxurious design." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-body font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-16 bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { quote: "The quality of the fabrics alone sets FORM apart. Will never go back to fast fashion.", author: "Michael R." },
            { quote: "Finally found a brand that matches my everyday style — comfortable, clean, elevated.", author: "Sarah K." },
            { quote: "Wearing FORM feels intentional. Everything fits perfectly and the materials are incredible.", author: "David L." },
          ].map((t) => (
            <div key={t.author} className="text-center">
              <p className="text-sm font-display italic text-foreground leading-relaxed mb-4">"{t.quote}"</p>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 lg:px-16 text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-4">Stay Connected</p>
        <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-8">Join the FORM world.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
          />
          <button className="bg-foreground text-background px-8 py-3 text-xs tracking-widest uppercase font-body hover:opacity-80 transition-opacity whitespace-nowrap">
            Join Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
