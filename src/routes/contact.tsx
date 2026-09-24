import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { FadeUp } from "@/components/site/Section";
import { Mail, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MysticCanvas" },
      { name: "description", content: "Get in touch with the MysticCanvas team. We usually reply within one business day." },
      { property: "og:title", content: "Contact — MysticCanvas" },
      { property: "og:description", content: "Questions, custom orders, or feedback — we'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <FadeUp><span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span></FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-[1.05]">
                Let's <span className="text-gradient">talk</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Questions, custom orders, or feedback — send us a note and we'll be in touch shortly.
              </p>
            </FadeUp>
            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, title: "Email", value: "hello@mysticcanvas.example" },
                { icon: MessageCircle, title: "Support", value: "support@mysticcanvas.example" },
                { icon: Clock, title: "Response time", value: "Within one business day" },
              ].map((it, i) => (
                <FadeUp key={it.title} delay={0.15 + i * 0.05}>
                  <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl gradient-brand grid place-items-center shrink-0">
                      <it.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{it.title}</p>
                      <p className="font-semibold truncate">{it.value}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}
              className="glass-card rounded-3xl p-8 space-y-5"
            >
              <div>
                <label className="text-sm font-semibold">Name</label>
                <input required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input required type="email" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-sm font-semibold">Message</label>
                <textarea required rows={5} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full">Send message</button>
            </form>
          </FadeUp>
        </div>
      </section>
    </SiteLayout>
  );
}
