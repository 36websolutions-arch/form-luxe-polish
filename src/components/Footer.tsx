const footerLinks = {
  Shop: ["New Arrivals", "Essentials", "All Products", "Gift Cards"],
  Help: ["FAQ", "Shipping", "Returns", "Contact"],
  About: ["Our Story", "Sustainability", "Careers", "Press"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg tracking-[0.35em] font-body font-medium text-foreground uppercase">
              FORM
            </span>
            <p className="font-body text-xs text-muted-foreground mt-4 leading-relaxed max-w-[200px]">
              Elevated essentials for the modern individual.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-luxury font-body text-foreground mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-muted-foreground tracking-wide">
            © 2026 FORM. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-[10px] text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
