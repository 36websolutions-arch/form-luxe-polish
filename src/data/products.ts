import shopHoodie from "@/assets/shop-hoodie.jpg";
import shopTee from "@/assets/shop-tee.jpg";
import productSweatpants from "@/assets/product-sweatpants.webp";
import productShorts from "@/assets/product-shorts.jpg";
import productCap from "@/assets/product-cap.jpg";
import productHoodieWebp from "@/assets/product-hoodie.webp";
import lbHoodieBack from "@/assets/lb-hoodie-back.webp";
import lbCouple from "@/assets/lb-couple.webp";
import lbFemaleCream from "@/assets/lb-female-cream.webp";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  isNew?: boolean;
  fabric?: string;
  fit?: string;
  care?: string;
  shipping?: string;
}

export const products: Product[] = [
  {
    id: "heavyweight-hoodie",
    name: "FORM Heavyweight Hoodie",
    price: 165,
    category: "Hoodies",
    isNew: true,
    images: [shopHoodie, productHoodieWebp, lbHoodieBack, lbCouple],
    description: "Designed with an oversized silhouette and structured premium fleece for a refined, relaxed fit. Finished with clean branding and a minimal Los Angeles identity, built as a modern everyday essential.",
    fabric: "450 GSM heavyweight French terry cotton. Pre-shrunk. Brushed interior for softness.",
    fit: "Oversized relaxed fit. Model wears size L (6'1\", 180 lbs). We recommend sizing down for a more tailored look.",
    care: "Machine wash cold. Tumble dry low. Do not bleach. Iron on low heat if needed.",
    shipping: "Free shipping on orders over $150. Standard delivery 5-7 business days. Express available at checkout.",
  },
  {
    id: "drop-shoulder-tee",
    name: "FORM Drop Shoulder Tee",
    price: 85,
    category: "T-Shirts",
    isNew: true,
    images: [shopTee, lbCouple, lbFemaleCream],
    description: "A premium drop-shoulder tee crafted from heavyweight cotton. Clean minimal branding with a relaxed, structured fit designed for everyday wear.",
    fabric: "280 GSM heavyweight combed cotton. Enzyme washed for a soft, lived-in feel.",
    fit: "Relaxed drop-shoulder fit. Model wears size L.",
    care: "Machine wash cold. Hang dry recommended.",
    shipping: "Free shipping on orders over $150. Standard delivery 5-7 business days.",
  },
  {
    id: "sweatpants",
    name: "FORM Sweatpants",
    price: 145,
    category: "Sweatpants",
    isNew: true,
    images: [productSweatpants, lbFemaleCream, lbCouple],
    description: "Structured heavyweight sweatpants with a tapered leg and elastic cuffs. Built for comfort and presence.",
    fabric: "400 GSM French terry cotton. Ribbed waistband and cuffs.",
    fit: "Relaxed tapered fit with drawstring waist.",
    care: "Machine wash cold. Tumble dry low.",
    shipping: "Free shipping on orders over $150. Standard delivery 5-7 business days.",
  },
  {
    id: "shorts",
    name: "FORM Shorts",
    price: 95,
    category: "Shorts",
    isNew: true,
    images: [productShorts, lbCouple],
    description: "Premium cotton shorts with an elastic waistband and clean FORM branding. 7-inch inseam.",
    fabric: "350 GSM heavyweight cotton twill.",
    fit: "Relaxed fit. 7-inch inseam.",
    care: "Machine wash cold. Hang dry recommended.",
    shipping: "Free shipping on orders over $150. Standard delivery 5-7 business days.",
  },
  {
    id: "6-panel-cap",
    name: "FORM 6-Panel Cap",
    price: 55,
    category: "Hats",
    isNew: true,
    images: [productCap, lbCouple],
    description: "Structured 6-panel cap with embroidered FORM branding. Adjustable strap closure.",
    fabric: "100% cotton twill. Structured front panels.",
    fit: "One size fits most. Adjustable strapback.",
    care: "Spot clean only.",
    shipping: "Free shipping on orders over $150. Standard delivery 5-7 business days.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
