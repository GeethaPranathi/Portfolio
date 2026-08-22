import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#home" className="flex items-center transition-transform hover:scale-105 active:scale-95">
          <span className="text-gradient font-display text-2xl font-black tracking-tight">KGP</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{l.label}</a>
          ))}
          <a href="/Geetha_Pranathi_Resume.pdf" target="_blank" rel="noreferrer" className="bg-brand-gradient ml-2 rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">View Resume</a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="glass rounded-lg p-2 lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t px-5 pb-5 lg:hidden">
          <div className="grid grid-cols-2 gap-1 pt-3">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{l.label}</a>
            ))}
          </div>
          <a href="/Geetha_Pranathi_Resume.pdf" target="_blank" rel="noreferrer" className="bg-brand-gradient mt-3 block rounded-lg py-2.5 text-center text-sm font-semibold text-primary-foreground">View Resume</a>
        </div>
      )}
    </header>
  );
}
