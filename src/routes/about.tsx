import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { FadeUp, SectionHeader } from "@/components/site/Section";
import { Sparkles, Heart, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MysticCanvas" },
      { name: "description", content: "MysticCanvas creates premium personalized digital experiences for curiosity, creativity, and self-reflection." },
      { property: "og:title", content: "About — MysticCanvas" },
      { property: "og:description", content: "The story and values behind MysticCanvas." },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { icon: Sparkles, title: "Craft first", desc: "Every product is designed with the care of a small studio and the polish of a premium brand." },
    { icon: Heart, title: "Human and warm", desc: "We build experiences that feel personal, thoughtful, and delightful to open." },
    { icon: Lightbulb, title: "Curious by nature", desc: "We believe creativity and self-reflection make everyday life more interesting." },
  ];
  return (
    <SiteLayout>
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeUp><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About MysticCanvas</span></FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-[1.05]">
              We create <span className="text-gradient">digital keepsakes</span> for the endlessly curious
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              MysticCanvas is a small independent studio designing personalized digital experiences — beautifully illustrated,
              thoughtfully written, and made purely for creativity, reflection, and entertainment.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="What we believe" title={<>Values that shape<br/>every experience</>} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.08}>
                <div className="glass-card rounded-3xl p-7 h-full">
                  <div className="h-11 w-11 rounded-xl gradient-brand grid place-items-center">
                    <v.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
