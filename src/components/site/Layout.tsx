import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export type SiteTheme = {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  line: string;
  primary: string;
  brandGradient?: string;
};

export function SiteLayout({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: SiteTheme;
}) {
  const style = theme
    ? ({ background: theme.bg, color: theme.ink } as React.CSSProperties)
    : undefined;
  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-clip"
      style={style}
    >
      <Navbar theme={theme} />
      <main className="pt-24">{children}</main>
      <Footer theme={theme} />
    </div>
  );
}
