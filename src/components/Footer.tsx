import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="text-lg font-body font-semibold tracking-widest-xl text-foreground">F O R M</span>
          </div>

          {/* Tagline */}
          <p className="text-xs tracking-widest text-muted-foreground font-body uppercase">
            Minimal. Luxury. Los Angeles.
          </p>

          {/* Social + Subscribe */}
          <div className="flex items-center gap-6">
            <span className="text-xs tracking-wider text-muted-foreground uppercase">Follow Us</span>
            <a href="#" className="text-foreground hover:opacity-60 transition-opacity">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <Link
              to="/contact"
              className="border border-foreground px-5 py-2 text-xs tracking-wider text-foreground font-body uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6">
            {["Contact", "FAQ", "Policies"].map((item) => (
              <Link key={item} to="#" className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase font-body">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body">© 2026 FORM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
