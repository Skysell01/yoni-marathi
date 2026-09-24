import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import type { SiteTheme } from "./Layout";

const nav = [
  { to: "/soulmate-sketch", label: "Soulmate Sketch" },
  { to: "/digital-signature", label: "Digital Signature" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ theme }: { theme?: SiteTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barStyle = theme && scrolled
    ? {
        background: theme.surface,
        borderColor: theme.line,
        color: theme.ink,
      }
    : undefined;

  const ctaStyle = theme
    ? {
        background: theme.brandGradient ?? theme.primary,
        color: "#fff",
      }
    : undefined;

  const linkStyle = theme ? { color: theme.muted } : undefined;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 border ${
            scrolled ? (theme ? "shadow-sm" : "glass-card") : "bg-transparent border-transparent"
          }`}
          style={barStyle}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="grid h-9 w-9 place-items-center rounded-xl shadow-[var(--shadow-soft)]"
              style={
                theme
                  ? { background: theme.brandGradient ?? theme.primary }
                  : undefined
              }
            >
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span
              className="font-display font-bold text-lg tracking-tight"
              style={theme ? { color: theme.ink } : undefined}
            >
              Mystic
              <span
                style={theme ? { color: theme.primary } : undefined}
                className={theme ? "" : "text-gradient"}
              >
                Canvas
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium hover:opacity-100 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all hover:after:w-full"
                style={linkStyle}
                activeProps={
                  theme
                    ? { style: { color: theme.ink } }
                    : { className: "text-foreground" }
                }
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/soulmate-sketch"
              className={theme ? "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5" : "btn-primary text-sm"}
              style={ctaStyle}
            >
              Explore Products
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={theme ? { color: theme.ink } : undefined}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div
            className={`lg:hidden mt-2 rounded-2xl p-4 flex flex-col gap-1 animate-fade-in border ${
              theme ? "" : "glass-card"
            }`}
            style={
              theme
                ? { background: theme.surface, borderColor: theme.line, color: theme.ink }
                : undefined
            }
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-black/5"
                style={theme ? { color: theme.ink } : undefined}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/soulmate-sketch"
              onClick={() => setOpen(false)}
              className={theme ? "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold mt-2" : "btn-primary text-sm text-center mt-2"}
              style={ctaStyle}
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
