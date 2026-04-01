import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <p className="text-xs tracking-widest text-muted-foreground uppercase font-body mb-2">Get In Touch</p>
        <h1 className="text-4xl md:text-5xl font-display text-foreground mb-16">Contact</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {/* Name */}
              <div>
                <label className="text-xs tracking-widest text-foreground uppercase font-body font-semibold block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs tracking-widest text-foreground uppercase font-body font-semibold block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-8">
              <label className="text-xs tracking-widest text-foreground uppercase font-body font-semibold block mb-3">
                Subject
              </label>
              <div className="relative">
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 text-sm font-body text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                >
                  <option>General Inquiry</option>
                  <option>Wholesale</option>
                  <option>Press</option>
                  <option>Returns & Exchanges</option>
                  <option>Other</option>
                </select>
                <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label className="text-xs tracking-widest text-foreground uppercase font-body font-semibold block mb-3">
                Message
              </label>
              <textarea
                placeholder="Your message"
                rows={5}
                maxLength={1000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-10 bg-foreground text-background px-10 py-4 text-xs tracking-widest uppercase font-body hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
          </form>

          {/* Sidebar Info */}
          <div className="space-y-10">
            {/* Email */}
            <div>
              <h3 className="text-xs tracking-widest text-foreground uppercase font-body font-semibold mb-3">Email</h3>
              <a href="mailto:info@wearform.com" className="text-sm font-body text-foreground hover:opacity-60 transition-opacity">
                info@wearform.com
              </a>
            </div>

            {/* Wholesale */}
            <div>
              <h3 className="text-xs tracking-widest text-foreground uppercase font-body font-semibold mb-3">Wholesale & Business</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed mb-2">
                For wholesale inquiries, stockist applications, and business partnerships, please reach out directly.
              </p>
              <a href="mailto:wholesale@wearform.com" className="text-sm font-body text-foreground hover:opacity-60 transition-opacity">
                wholesale@wearform.com
              </a>
            </div>

            {/* Follow */}
            <div>
              <h3 className="text-xs tracking-widest text-foreground uppercase font-body font-semibold mb-3">Follow</h3>
              <div className="flex flex-col gap-1">
                <a href="#" className="text-sm font-body text-foreground hover:opacity-60 transition-opacity">Instagram</a>
                <a href="#" className="text-sm font-body text-foreground hover:opacity-60 transition-opacity">TikTok</a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xs tracking-widest text-foreground uppercase font-body font-semibold mb-3">Location</h3>
              <p className="text-sm font-body text-foreground">Los Angeles, California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
