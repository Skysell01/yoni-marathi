import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, Check, Star, Sparkles, Heart, Shield, Clock,
  FileText, Gift, MessageSquareHeart, ChevronDown, Users, Award, Timer,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { FadeUp } from "@/components/site/Section";
import coupleHero from "@/assets/soulmate-couple-hero.jpg";
import coupleLonging from "@/assets/soulmate-longing.jpg";
import sampleSketch from "@/assets/soulmate-sample-sketch.jpg";
import coupleTrust from "@/assets/soulmate-trust.jpg";

export const Route = createFileRoute("/soulmate-sketch")({
  head: () => ({
    meta: [
      { title: "Soulmate Sketch — A Hand-Drawn Portrait of Your Destined Love" },
      { name: "description", content: "Discover the face of your soulmate with a hand-drawn artistic sketch, crafted just for you. A romantic keepsake delivered within 24 hours." },
      { property: "og:title", content: "Soulmate Sketch — Reveal the Face of Your Destined Love" },
      { property: "og:description", content: "A beautifully hand-drawn artistic sketch inspired by your energy — a keepsake of love, hope, and imagination." },
    ],
  }),
  component: SoulmatePage,
});

const RoseTheme = () => (
  <style>{`
    .rose-scope {
      --r-bg: #FBF3EE;
      --r-surface: #F5E4DA;
      --r-ink: #2A1512;
      --r-muted: #7B4B44;
      --r-line: #EBD3C6;
      --r-primary: #B23A48;
      --r-primary-2: #D46A6A;
      --r-accent: #C9873F;
      --r-cream: #FFF8F3;
      --r-shadow: 0 20px 60px -24px rgba(120, 30, 40, 0.28);
      --r-shadow-soft: 0 10px 30px -14px rgba(120, 30, 40, 0.18);
    }
  `}</style>
);

function SoulmatePage() {
  return (
    <SiteLayout
      theme={{
        bg: "#FBF3EE",
        surface: "#F5E4DA",
        ink: "#2A1512",
        muted: "#7B4B44",
        line: "#EBD3C6",
        primary: "#B23A48",
        brandGradient: "linear-gradient(135deg, #B23A48 0%, #D46A6A 100%)",
      }}
    >
      <RoseTheme />
      <div className="rose-scope pb-24" style={{ background: "var(--r-bg)", color: "var(--r-ink)" }}>
        <Hero />
        <Stats />
        <Longing />
        <HowItWorks />
        <PastWork />
        <WhatYouReceive />
        <Testimonials />
        <WhyTrust />
        <FAQ />
        <FinalCTA />
        <StickyOfferBar />
      </div>
    </SiteLayout>
  );
}

const CTAButton = ({ children = "Reveal My Soulmate Now" }: { children?: React.ReactNode }) => (
  <a
    href="https://superprofile.bio/vp/684bf5a6810e8f0012260590?checkout=true"
    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white shadow-[var(--r-shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--r-shadow)] w-full sm:w-auto text-center"
    style={{ background: "linear-gradient(135deg, var(--r-primary) 0%, var(--r-primary-2) 100%)" }}
  >
    {children} <ArrowRight className="h-4 w-4" />
  </a>
);

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #E9A3A3, transparent 60%)" }} />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #B23A48, transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ background: "var(--r-cream)", color: "var(--r-primary)", border: "1px solid var(--r-line)" }}>
              <Heart className="h-3.5 w-3.5" /> Soulmate Sketch
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Meet the face of{" "}
              <span style={{ color: "var(--r-primary)" }}>your destined love</span>{" "}
              — beautifully drawn.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ color: "var(--r-muted)" }}>
              Share a little about yourself and receive a warm, hand-styled artistic portrait
              of the person your heart quietly imagines. A keepsake to smile at, wonder about, and cherish.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center lg:justify-start items-center">
              <CTAButton />
              <a href="#how" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
                style={{ background: "var(--r-cream)", color: "var(--r-ink)", border: "1px solid var(--r-line)" }}>
                See How It Works
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 text-sm text-center lg:text-left" style={{ color: "var(--r-muted)" }}>
              Includes a free bonus love reading with every sketch ✿
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, #D46A6A, #C9873F)" }} />
            <div className="relative rounded-[2rem] p-3 animate-none"
              style={{ background: "var(--r-cream)", boxShadow: "var(--r-shadow)", border: "1px solid var(--r-line)" }}>
              <img src={coupleHero} alt="Happy couple holding a hand-drawn soulmate sketch"
                width={1280} height={1280} className="w-full h-auto rounded-[1.6rem] object-cover" />
              <div className="absolute right-6 bottom-6 rounded-2xl px-4 py-3 text-white text-xs font-semibold text-center shadow-lg"
                style={{ background: "linear-gradient(135deg, var(--r-primary), var(--r-primary-2))" }}>
                SOULMATE SKETCH<br />
                <span className="opacity-90">+ Free Love Reading</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const items = [
    { icon: Users, value: "120,000+", label: "Sketches Delivered" },
    { icon: Star, value: "4.9 / 5", label: "Average Rating" },
    { icon: Timer, value: "24 Hours", label: "Delivery Time" },
    { icon: Award, value: "100%", label: "Satisfaction" },
  ];
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <FadeUp key={it.label} delay={i * 0.05}>
            <div className="rounded-2xl p-5 text-center"
              style={{ background: "var(--r-cream)", border: "1px solid var(--r-line)", boxShadow: "var(--r-shadow-soft)" }}>
              <it.icon className="h-5 w-5 mx-auto" style={{ color: "var(--r-primary)" }} />
              <p className="mt-2 font-display font-bold text-xl">{it.value}</p>
              <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "var(--r-muted)" }}>{it.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

/* ---------------- LONGING ---------------- */
function Longing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <FadeUp>
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Does your heart quietly wonder{" "}
              <span style={{ color: "var(--r-primary)" }}>who they might be?</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--r-muted)" }}>
              Every soul carries a silhouette of the one they're drawn to. Our artists translate
              that quiet feeling into a warm, hand-drawn portrait — a gentle glimpse of the face
              your imagination has always half-remembered.
            </p>
            <p className="mt-4 italic" style={{ color: "var(--r-primary)" }}>
              Your destined connection is closer than it feels. Let it be seen.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start w-full"><CTAButton /></div>
            <p className="mt-3 text-xs text-center lg:text-left" style={{ color: "var(--r-muted)" }}>
              A keepsake — created for entertainment and joy.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, #B23A48, #C9873F)" }} />
            <div className="relative rounded-[2rem] p-3"
              style={{ background: "var(--r-cream)", boxShadow: "var(--r-shadow)", border: "1px solid var(--r-line)" }}>
              <img src={coupleLonging} alt="Woman holding a note about drawing her destined soulmate"
                width={1280} height={1280} loading="lazy" className="w-full h-auto rounded-[1.6rem] object-cover" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { icon: FileText, title: "Tell Us About You", desc: "Answer a few gentle prompts — your energy, what you're drawn to, a wish or two." },
    { icon: Sparkles, title: "Our Artists Begin", desc: "A trained illustrator translates your details into a warm, hand-styled sketch." },
    { icon: Gift, title: "Receive Your Sketch", desc: "Within 24 hours, a beautifully composed portrait lands in your inbox." },
  ];
  return (
    <section id="how" className="py-20" style={{ background: "var(--r-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--r-primary)" }}>How it works</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Three quiet steps to your sketch</h2>
          </div>
        </FadeUp>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <div className="rounded-3xl p-7 h-full text-center flex flex-col items-center justify-center transition-all hover:-translate-y-1 animate-none"
                style={{ background: "var(--r-cream)", border: "1px solid var(--r-line)", boxShadow: "var(--r-shadow-soft)" }}>
                <div className="h-14 w-14 rounded-2xl grid place-items-center mx-auto"
                  style={{ background: "linear-gradient(135deg, var(--r-primary), var(--r-accent))" }}>
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--r-muted)" }}>{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <div className="mt-10 text-center flex justify-center w-full"><CTAButton /></div>
      </div>
    </section>
  );
}

/* ---------------- PAST WORK ---------------- */
function PastWork() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <FadeUp>
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--r-primary)" }}>
              A glimpse of our work
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Real sketches, <span style={{ color: "var(--r-primary)" }}>real stories</span>.
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: "var(--r-muted)" }}>
              Thousands of our readers say the resemblance surprised them — a familiar warmth,
              a certain look in the eyes, a smile they somehow recognized. Every sketch is composed
              by hand with care, romance, and quiet intuition.
            </p>
            <ul className="mt-6 space-y-3 w-full flex flex-col items-center lg:items-start">
              {["Hand-drawn illustration, never generated blindly", "Warm, editorial keepsake style", "Delivered in high resolution"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm justify-center lg:justify-start text-center lg:text-left font-medium">
                  <span className="h-5 w-5 rounded-full grid place-items-center shrink-0"
                    style={{ background: "var(--r-primary)", color: "white" }}>
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-25"
              style={{ background: "linear-gradient(135deg, #D46A6A, #C9873F)" }} />
            <div className="relative rounded-[2rem] p-3 max-w-md mx-auto animate-none"
              style={{ background: "var(--r-cream)", boxShadow: "var(--r-shadow)", border: "1px solid var(--r-line)" }}>
              <img src={sampleSketch} alt="Sample soulmate pencil sketch"
                width={1024} height={1280} loading="lazy" className="w-full h-auto rounded-[1.6rem] object-cover" />
              <p className="mt-3 mb-1 text-center text-xs italic" style={{ color: "var(--r-muted)" }}>
                — a recent reading for a client in Lisbon
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- WHAT YOU RECEIVE ---------------- */
function WhatYouReceive() {
  const items = [
    { icon: Heart, title: "Personalized Soulmate Sketch", desc: "A hand-styled illustration inspired by your energy — yours to keep and share." },
    { icon: MessageSquareHeart, title: "FREE Love Reading", desc: "A gentle written reflection on your emotional patterns, connection style, and what your heart is quietly seeking." },
    { icon: Sparkles, title: "Optional Personal Insights", desc: "Add-on notes on love timing, energy alignment, and small rituals to invite connection in." },
  ];
  return (
    <section className="py-20" style={{ background: "var(--r-surface)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--r-primary)" }}>What you receive</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Inside your keepsake package</h2>
          </div>
        </FadeUp>
        <div className="mt-12 space-y-4">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.08}>
              <div className="rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left"
                style={{ background: "var(--r-cream)", border: "1px solid var(--r-line)", boxShadow: "var(--r-shadow-soft)" }}>
                <div className="h-12 w-12 rounded-xl grid place-items-center shrink-0 mx-auto sm:mx-0"
                  style={{ background: "linear-gradient(135deg, var(--r-primary), var(--r-accent))" }}>
                  <it.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <h3 className="font-display font-bold text-lg" style={{ color: "var(--r-primary)" }}>{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--r-muted)" }}>{it.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-6 text-center text-xs" style={{ color: "var(--r-muted)" }}>
          Everything is private, secure, and delivered digitally.
        </p>
        <div className="mt-8 text-center flex justify-center w-full"><CTAButton /></div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    { name: "Ananya M.", text: "I cried a little when I opened it. The eyes — I don't know how, but they felt so familiar. Truly a keepsake I'll treasure." },
    { name: "Sofia R.", text: "It arrived faster than expected and the artwork is gorgeous. My friends kept asking who drew it. Worth every rupee." },
    { name: "Priya D.", text: "It was fun, romantic and beautifully made. The little love note that came with it made my whole evening softer." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--r-primary)" }}>Loved by readers</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Small stories from our community</h2>
          </div>
        </FadeUp>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div className="rounded-3xl p-7 h-full flex flex-col items-center text-center justify-center"
                style={{ background: "var(--r-cream)", border: "1px solid var(--r-line)", boxShadow: "var(--r-shadow-soft)" }}>
                <div className="flex gap-0.5 justify-center" style={{ color: "var(--r-accent)" }}>
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed italic text-center text-neutral-800" style={{ color: "var(--r-ink)" }}>"{t.text}"</p>
                <p className="mt-5 font-semibold text-sm text-center" style={{ color: "var(--r-primary)" }}>— {t.name}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY TRUST ---------------- */
function WhyTrust() {
  const items = [
    "Over 120,000 sketches delivered worldwide",
    "Average 4.9-star rating from clients",
    "Expert illustrators & warm storytellers",
    "Full satisfaction or your money back",
  ];
  return (
    <section className="py-20" style={{ background: "var(--r-surface)" }}>
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <FadeUp>
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--r-primary)" }}>Why trust us</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              A little magic, held together by <span style={{ color: "var(--r-primary)" }}>real craft</span>.
            </h2>
            <ul className="mt-8 space-y-3 w-full flex flex-col items-center lg:items-start">
              {items.map((f) => (
                <li key={f} className="flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left">
                  <Shield className="h-5 w-5 shrink-0 animate-none" style={{ color: "var(--r-primary)" }} />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-center lg:text-left" style={{ color: "var(--r-muted)" }}>
              Safe, secure, and always respectful of your privacy.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
            <div className="absolute -inset-6 rounded-full blur-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, #B23A48, #C9873F)" }} />
            <div className="relative rounded-full p-3 mx-auto max-w-sm aspect-square overflow-hidden"
              style={{ background: "var(--r-cream)", boxShadow: "var(--r-shadow)", border: "1px solid var(--r-line)" }}>
              <img src={coupleTrust} alt="Happy couple holding a soulmate sketch"
                width={1024} height={1024} loading="lazy" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "How accurate is the soulmate sketch?", a: "Our sketches are a warm, imaginative interpretation designed as a keepsake for joy and entertainment — not a literal forecast." },
    { q: "Will my personal details stay private?", a: "Absolutely. Everything you share is confidential, encrypted in transit, and never sold or shared with third parties." },
    { q: "How will I receive my sketch?", a: "You'll get a beautifully composed digital sketch delivered straight to your inbox, usually within 24 hours." },
    { q: "What if I'm not satisfied?", a: "We're proud of our craft — if you're not delighted, reach out and we'll make it right or refund your order." },
    { q: "Can I get more details about my soulmate?", a: "Yes, you can add optional insights such as personality notes and connection timing during checkout." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <FadeUp>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--r-primary)" }}>Frequently Asked</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">Questions, softly answered</h2>
          </div>
        </FadeUp>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <FadeUp key={it.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full rounded-2xl p-5 transition-all text-center sm:text-left flex flex-col items-center sm:items-stretch"
                style={{ background: "var(--r-cream)", border: "1px solid var(--r-line)", boxShadow: "var(--r-shadow-soft)" }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full">
                  <span className="font-semibold text-center sm:text-left" style={{ color: "var(--r-ink)" }}>{it.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                    style={{ color: "var(--r-primary)" }} />
                </div>
                {open === i && (
                  <p className="mt-3 text-sm leading-relaxed text-center sm:text-left" style={{ color: "var(--r-muted)" }}>{it.a}</p>
                )}
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="order" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2rem] p-10 sm:p-14 text-center"
            style={{ background: "linear-gradient(135deg, var(--r-primary) 0%, var(--r-primary-2) 100%)" }}>
            <Sparkles className="h-8 w-8 text-white/80 mx-auto" />
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">
              Ready to meet them?
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              A hand-drawn sketch, a free love reading, and a keepsake that quietly makes you believe again.
            </p>
            <div className="mt-8 flex justify-center w-full">
              <a href="https://superprofile.bio/vp/684bf5a6810e8f0012260590?checkout=true"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white font-semibold px-8 py-4 shadow-2xl hover:-translate-y-1 transition-transform w-full sm:w-auto text-center"
                style={{ color: "var(--r-primary)" }}>
                Reveal My Soulmate Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- STICKY OFFER BAR ---------------- */
function StickyOfferBar() {
  const [time, setTime] = useState({ h: 9, m: 50, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((v) => {
        let { h, m, s } = v;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <motion.div
      initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-[var(--r-line)] bg-[var(--r-cream)]"
      style={{ boxShadow: "var(--r-shadow)" }}
    >
      <div className="flex items-center gap-3 flex-row">
        <div className="flex items-center gap-2">
          {[time.h, time.m, time.s].map((n, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg px-2 py-1 font-mono font-bold text-white text-sm min-w-[36px]"
                style={{ background: "linear-gradient(135deg, var(--r-primary), var(--r-primary-2))" }}>
                {pad(n)}
              </div>
              <span className="text-[9px] uppercase tracking-wider" style={{ color: "var(--r-muted)" }}>
                {["hrs","min","sec"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--r-primary)" }}>
            Offer ends
          </p>
          <p className="text-sm font-bold">
            <span className="line-through opacity-50 text-xs" style={{ color: "var(--r-muted)" }}>₹999</span>{" "}
            <span style={{ color: "var(--r-ink)" }}>₹299</span>
          </p>
        </div>
      </div>
      <a href="https://superprofile.bio/vp/684bf5a6810e8f0012260590?checkout=true"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shrink-0 w-full sm:w-auto text-center"
        style={{ background: "linear-gradient(135deg, var(--r-primary), var(--r-primary-2))" }}>
        Reveal My Soulmate <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
