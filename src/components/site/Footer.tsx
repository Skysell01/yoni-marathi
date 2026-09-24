import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import type { SiteTheme } from "./Layout";

export function Footer({ theme }: { theme?: SiteTheme }) {
  const style = theme
    ? {
        background: theme.surface,
        borderColor: theme.line,
        color: theme.ink,
      }
    : undefined;
  const mutedStyle = theme ? { color: theme.muted } : undefined;

  return (
    <footer
      className={`relative mt-32 border-t ${theme ? "" : "border-border/60 bg-surface/50"}`}
      style={style}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div
                className="grid h-9 w-9 place-items-center rounded-xl"
                style={
                  theme
                    ? { background: theme.brandGradient ?? theme.primary }
                    : undefined
                }
              >
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span
                className="font-display font-bold text-lg"
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
            <p
              className={`mt-4 max-w-sm text-sm leading-relaxed ${theme ? "" : "text-muted-foreground"}`}
              style={mutedStyle}
            >
              Personalized digital experiences crafted for curiosity, creativity, and self-reflection.
            </p>
          </div>

          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={theme ? { color: theme.ink } : undefined}
            >
              Products
            </h4>
            <ul
              className={`space-y-3 text-sm ${theme ? "" : "text-muted-foreground"}`}
              style={mutedStyle}
            >
              <li><Link to="/soulmate-sketch" className="hover:opacity-100">Soulmate Sketch</Link></li>
              <li><Link to="/digital-signature" className="hover:opacity-100">Digital Signature</Link></li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-sm mb-4"
              style={theme ? { color: theme.ink } : undefined}
            >
              Company
            </h4>
            <ul
              className={`space-y-3 text-sm ${theme ? "" : "text-muted-foreground"}`}
              style={mutedStyle}
            >
              <li><Link to="/about" className="hover:opacity-100">About</Link></li>
              <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs ${theme ? "" : "border-border/60 text-muted-foreground"}`}
          style={theme ? { borderColor: theme.line, color: theme.muted } : undefined}
        >
          <p>© {new Date().getFullYear()} MysticCanvas. All rights reserved.</p>
          <p>Crafted for curiosity — for entertainment purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
