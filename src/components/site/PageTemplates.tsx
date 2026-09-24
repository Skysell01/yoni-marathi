import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { FadeUp } from "@/components/site/Section";

export function ProductPage({
  eyebrow,
  title,
  gradientWord,
  intro,
  image,
  features,
  includes,
  cta,
  otherLink,
  otherLabel,
}: {
  eyebrow: string;
  title: string;
  gradientWord: string;
  intro: string;
  image: string;
  features: string[];
  includes: { title: string; desc: string }[];
  cta: string;
  otherLink: "/soulmate-sketch" | "/digital-signature";
  otherLabel: string;
}) {
  const titleParts = title.split(gradientWord);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-8 pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
          <div className="blob absolute top-20 right-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" style={{ animationDelay: "-5s" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <FadeUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </span>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                {titleParts[0]}
                <span className="text-gradient">{gradientWord}</span>
                {titleParts[1]}
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">{intro}</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#order" className="btn-primary inline-flex items-center gap-2">
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
                <Link to={otherLink} className="btn-ghost">
                  {otherLabel}
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex gap-0.5 text-accent">
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span>Loved by 50,000+ customers worldwide</span>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 gradient-brand rounded-[2rem] blur-2xl opacity-25" />
              <div className="relative glass-card rounded-[2rem] p-3">
                <img src={image} alt={title} width={1024} height={1024} className="w-full rounded-[1.6rem]" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Includes */}
      <section className="py-20 sm:py-28 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <FadeUp>
            <h2 className="text-center font-display text-3xl sm:text-4xl font-bold">
              What's inside your <span className="text-gradient">experience</span>
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {includes.map((i, idx) => (
              <FadeUp key={i.title} delay={idx * 0.08}>
                <div className="glass-card rounded-3xl p-7 h-full">
                  <div className="h-10 w-10 rounded-xl gradient-brand grid place-items-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg">{i.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="order" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[2rem] gradient-brand p-10 sm:p-14 text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Ready to get started?
              </h2>
              <p className="mt-4 text-white/85">
                Complete a few simple questions and receive your personalized creation by email.
              </p>
              <a href="mailto:hello@mysticcanvas.example" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white text-primary font-semibold px-7 py-4 shadow-2xl hover:-translate-y-1 transition-transform">
                {cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </SiteLayout>
  );
}

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">{title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-10 glass-card rounded-3xl p-8 sm:p-10 prose-content space-y-6 text-[15px] leading-relaxed text-foreground/85 [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-foreground [&_h2]:mt-6 [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
              {children}
            </div>
          </FadeUp>
        </div>
      </section>
    </SiteLayout>
  );
}
