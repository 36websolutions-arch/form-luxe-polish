import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const isHeroPage = location.pathname === "/" || location.pathname === "/lookbook";
  const [scrolled, setScrolled] = useState(false);
  const { items, totalItems, removeItem, addItem } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = scrolled || !isHeroPage;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolid ? "bg-background border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        <Link to="/" className="flex flex-col items-center leading-none">
          <span className={`text-lg font-body font-semibold tracking-widest-xl ${showSolid ? "text-foreground" : "text-primary-foreground"}`}>
            F O R M
          </span>
          <span className={`text-[8px] tracking-widest-xl uppercase ${showSolid ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            Los Angeles
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "SHOP", path: "/shop" },
            { label: "LOOKBOOK", path: "/lookbook" },
            { label: "ABOUT", path: "/about" },
            { label: "CONTACT", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs tracking-widest font-body font-medium transition-opacity hover:opacity-60 ${
                showSolid ? "text-foreground" : "text-primary-foreground"
              } ${location.pathname === item.path ? "opacity-100" : "opacity-80"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button className={`relative ${showSolid ? "text-foreground" : "text-primary-foreground"} hover:opacity-60 transition-opacity`}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-[10px] font-body font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent className="flex flex-col w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-sm tracking-widest font-body font-semibold uppercase">
                Your Cart ({totalItems})
              </SheetTitle>
            </SheetHeader>

            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground text-sm font-body">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-6 py-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover bg-muted"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-body font-medium">{item.name}</h4>
                            <button
                              onClick={() => removeItem(item.id, item.size)}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground font-body mt-0.5">Size: {item.size}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 border border-border">
                            <button
                              onClick={() => {
                                if (item.quantity <= 1) {
                                  removeItem(item.id, item.size);
                                } else {
                                  addItem({ ...item, quantity: -1 });
                                }
                              }}
                              className="p-1.5 hover:bg-muted transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-body w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => addItem({ ...item, quantity: 1 })}
                              className="p-1.5 hover:bg-muted transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-body font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-body font-medium tracking-wide uppercase">Subtotal</span>
                    <span className="text-sm font-body font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body">Shipping calculated at checkout</p>
                  <button className="w-full bg-foreground text-background py-3 text-xs tracking-widest font-body font-semibold uppercase hover:opacity-90 transition-opacity">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
