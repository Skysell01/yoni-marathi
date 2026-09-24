import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight, Check, Star, PenTool, Sparkles, Shield, Zap,
  ScrollText, Award, Crown, Timer, RotateCcw, Clock
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { FadeUp } from "@/components/site/Section";
import signatureImg from "@/assets/signature-warm.jpg";
import rishitaSignature from "@/assets/signature-rishita.png";
import reportMockup from "@/assets/report-mockup.jpg";
import writingHand from "@/assets/writing-hand.jpg";
import signatureCharlie from "@/assets/signature-charlie.png";
import signatureShashikant from "@/assets/signature-shashikant.png";
import signatureSalman from "@/assets/signature-salman.png";

export const Route = createFileRoute("/digital-signature")({
  head: () => ({
    meta: [
      { title: "Professional Signature Generator & Practice Studio — MysticCanvas" },
      { name: "description", content: "Convert your boring signature into a professional signature designed for your career. Get high-quality custom signature designs, tracing sheets, and digital files." },
      { property: "og:title", content: "Professional Signature Designs & Practice Studio" },
      { property: "og:description", content: "Say goodbye to boring signatures. Generate, practice tracing, and order your handcrafted professional signature kit." },
    ],
  }),
  component: SignaturePage,
});

/*
 * Warm, authentic palette scoped to this page only.
 * Terracotta / ochre / clay / cream — no purple.
 */
const WarmTheme = () => (
  <style>{`
    .warm-scope {
      --w-bg: #FBF6EE;
      --w-surface: #F5EBD9;
      --w-ink: #2B1D14;
      --w-muted: #7A5A44;
      --w-line: #E7D6BE;
      --w-primary: #B44A1F;      /* terracotta */
      --w-primary-2: #D96B36;
      --w-accent: #C98A2B;        /* ochre */
      --w-cream: #FFF9EE;
      --w-shadow: 0 20px 60px -24px rgba(74, 33, 12, 0.28);
      --w-shadow-soft: 0 10px 30px -14px rgba(74, 33, 12, 0.2);
    }
    
    /* Load professional signature fonts */
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Allura&family=Alex+Brush&family=Sacramento&family=Homemade+Apple&display=swap');

    /* Premium Shimmer / Flash Animation */
    .cta-shimmer {
      position: relative;
      overflow: hidden;
    }
    
    .cta-shimmer::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -60%;
      width: 30%;
      height: 200%;
      background: rgba(255, 255, 255, 0.35);
      transform: rotate(30deg);
      pointer-events: none;
      animation: cta-flash-animation 4s infinite ease-in-out;
    }
    
    @keyframes cta-flash-animation {
      0% {
        left: -100%;
      }
      100% {
        left: 200%;
      }
    }
    
    /* Soft Periodic Shaker / Shake Animation */
    .cta-shake {
      animation: cta-periodic-shake-animation 6s infinite ease-in-out;
    }
    
    .cta-shake:hover {
      animation-play-state: paused;
    }
    
    @keyframes cta-periodic-shake-animation {
      0%, 82%, 100% { 
        transform: rotate(0deg) scale(1); 
      }
      84% { 
        transform: rotate(-2.5deg) scale(1.03); 
      }
      86% { 
        transform: rotate(2.5deg) scale(1.03); 
      }
      88% { 
        transform: rotate(-2deg) scale(1.03); 
      }
      90% { 
        transform: rotate(2deg) scale(1.03); 
      }
      92% { 
        transform: rotate(0deg) scale(1.03); 
      }
    }
  `}</style>
);

function SignaturePage() {
  const [name] = useState("Rishita Kapoor");

  return (
    <SiteLayout
      theme={{
        bg: "#FBF6EE",
        surface: "#F5EBD9",
        ink: "#2B1D14",
        muted: "#7A5A44",
        line: "#E7D6BE",
        primary: "#B44A1F",
        brandGradient: "linear-gradient(135deg, #B44A1F 0%, #D96B36 100%)",
      }}
    >
      <WarmTheme />
      <div
        className="warm-scope pb-24"
        style={{ background: "var(--w-bg)", color: "var(--w-ink)" }}
      >
        <Hero />
        <TransformSignature />
        
        <WhyUs />
        <Steps />
        <Included />
        <FAQ />
        <Testimonials />
        
        <PricingOffer name={name} />
        
        <FinalCTA />
        <StickyOfferBar />
      </div>
    </SiteLayout>
  );
}

/* ---------------- PREMIUM CTA BUTTON ---------------- */
interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function CTAButton({ children, className = "", href = "https://superprofile.bio/vp/6a12dfb5a51904001397e82f?checkout=true" }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4.5 text-base font-bold text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cta-shimmer cta-shake ${className}`}
      style={{
        background: "linear-gradient(135deg, var(--w-primary) 0%, var(--w-primary-2) 100%)",
        boxShadow: "0 12px 32px -10px rgba(217, 107, 54, 0.55)",
      }}
    >
      {children}
    </a>
  );
}

/* ---------------- OFFER ALERT BOX ---------------- */
function OfferAlertBox() {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border shadow-sm max-w-2xl mx-auto w-full"
      style={{
        background: "#FFF9EE",
        borderColor: "var(--w-line)"
      }}
    >
      <p className="text-sm font-bold text-neutral-800 text-center sm:text-left">
        Limited Time discount active: <span style={{ color: "var(--w-primary)" }} className="font-extrabold">₹449 only</span>
      </p>
      <a
        href="https://superprofile.bio/vp/6a12dfb5a51904001397e82f?checkout=true"
        className="rounded-full px-5 py-2 text-xs font-bold text-white shadow-md hover:-translate-y-0.5 transition-transform shrink-0"
        style={{ background: "linear-gradient(135deg, var(--w-primary) 0%, var(--w-primary-2) 100%)" }}
      >
        Order Signature Now
      </a>
    </div>
  );
}

/* ---------------- TRANSFORM SIGNATURE ---------------- */
function TransformSignature() {
  const examples = [
    { before: "Charlie", afterImg: signatureCharlie },
    { before: "Shashikant Kale", afterImg: signatureShashikant },
    { before: "Salman Basha", afterImg: signatureSalman }
  ];
  return (
    <section className="py-20" style={{ background: "var(--w-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Transform Your Signature
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--w-muted)" }}>
              See how we turn normal handwriting into executive-level professional signatures.
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-3">
          {examples.map((ex, idx) => (
            <FadeUp key={ex.before} delay={idx * 0.1}>
              <div className="rounded-3xl p-6 bg-white border border-[var(--w-line)] shadow-md flex flex-col gap-4 text-center">
                <div className="rounded-2xl p-4 border border-red-200 bg-red-50/50 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block mb-1">Before</span>
                  <span className="text-base font-medium text-neutral-500 line-through">{ex.before}</span>
                </div>
                <div className="rounded-2xl p-4 border border-green-200 bg-green-50/50 text-center min-h-[120px] flex flex-col justify-center items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 block mb-1">After</span>
                  <img
                    src={ex.afterImg}
                    alt={`Custom signature for ${ex.before}`}
                    width={320}
                    height={100}
                    className="max-h-[70px] w-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-12">
          <OfferAlertBox />
        </div>
      </div>
    </section>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #E9A76B, transparent 60%)" }}
        />
        <div
          className="absolute top-40 right-0 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #B44A1F, transparent 60%)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <FadeUp>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4.5 py-1.5 text-xs font-black uppercase tracking-[0.18em] shadow-sm text-white"
              style={{
                background: "linear-gradient(135deg, var(--w-primary) 0%, var(--w-primary-2) 100%)",
              }}
            >
              ₹449 ONLY
            </span>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ color: "var(--w-ink)" }}
            >
              Get Your Perfect <span style={{ color: "var(--w-primary)" }}>Digital Signature</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              className="mt-6 max-w-lg text-lg leading-relaxed"
              style={{ color: "var(--w-muted)" }}
            >
              Say goodbye to boring signatures. Master your new professional signature with expert designed sheets and video guides.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.12}>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 border border-green-100 px-3.5 py-1.5 rounded-full inline-flex max-w-max shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              1,250+ Professionals Upgraded Their Signature This Month
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 max-w-md w-full justify-center">
              {[
                { title: "3 Custom Concepts", desc: "Tailored designs matching your style and personality" },
                { title: "Video Guides", desc: "Slow-motion stroke-by-stroke guides to practice easily" },
                { title: "Vector Formats", desc: "SVG, PDF and transparent PNG for print and digital use" },
                { title: "Fast Delivery", desc: "Delivered directly to your email in less than 24 hours" }
              ].map((f) => (
                <li key={f.title} className="flex gap-2.5 text-sm font-medium items-start text-left" style={{ color: "var(--w-ink)" }}>
                  <span
                    className="h-5 w-5 rounded-full grid place-items-center shrink-0 mt-0.5 text-white"
                    style={{ background: "var(--w-primary)" }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-bold text-sm leading-none">{f.title}</p>
                    <p className="text-xs mt-1 leading-normal" style={{ color: "var(--w-muted)" }}>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start w-full">
              <CTAButton href="https://superprofile.bio/vp/6a12dfb5a51904001397e82f?checkout=true" className="w-full sm:w-auto">
                Get Started Now <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 text-sm justify-center lg:justify-start">
              <div className="flex gap-0.5" style={{ color: "var(--w-accent)" }}>
                {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-xs font-semibold" style={{ color: "var(--w-muted)" }}>Helping 12,000+ professionals sign with confidence</span>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, #D96B36, #C98A2B)" }}
            />
            <div
              className="relative rounded-[2rem] p-3"
              style={{ background: "var(--w-cream)", boxShadow: "var(--w-shadow)", border: "1px solid var(--w-line)" }}
            >
              <img
                src={signatureImg}
                alt="Handwritten signature on cream paper with fountain pen"
                width={1280}
                height={1024}
                className="w-full h-auto rounded-[1.6rem] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-4 top-8 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md"
              style={{ background: "var(--w-cream)", border: "1px solid var(--w-line)" }}
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center" style={{ background: "var(--w-primary)" }}>
                <ScrollText className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs" style={{ color: "var(--w-muted)" }}>Signature Kit</p>
                <p className="text-sm font-semibold">Instant Tracing Sheets</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 bottom-8 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-md"
              style={{ background: "var(--w-cream)", border: "1px solid var(--w-line)" }}
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center" style={{ background: "var(--w-accent)" }}>
                <Award className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs" style={{ color: "var(--w-muted)" }}>Expert Designed</p>
                <p className="text-sm font-semibold">100% Vector Formats</p>
              </div>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: PenTool, title: "Designed by Expert Artists", desc: "Your signature is custom sketched by professional calligraphers, not generated by software." },
    { icon: Sparkles, title: "Active Tracing Sheet", desc: "Step-by-step tracing worksheets (PDF) sent directly to your email for muscle memory." },
    { icon: Zap, title: "Stroke Video Guide", desc: "Slow-motion video guides showing stroke movements and pen coordinates." },
    { icon: Shield, title: "All Format Export", desc: "Receive vector format files (SVG, PDF, and high-res transparent PNG) for print and digital use." },
    { icon: Clock, title: "Express Delivery", desc: "Complete delivery of your custom worksheets, videos, and source files in less than 24 hours." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--w-primary)" }}>
              Why Choose Us
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Upgrade your boring signature into a professional asset.
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--w-muted)" }}>
              Say goodbye to boring signatures. Master your new professional signature with expert designed sheets and video guides.
            </p>
          </div>
        </FadeUp>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.05}>
              <div
                className="rounded-3xl p-7 h-full flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  background: "var(--w-cream)",
                  border: "1px solid var(--w-line)",
                  boxShadow: "var(--w-shadow-soft)",
                }}
              >
                <div
                  className="h-12 w-12 rounded-2xl grid place-items-center transition-transform group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, var(--w-primary), var(--w-accent))" }}
                >
                  <it.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--w-muted)" }}>
                  {it.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
        
        <div className="mt-12">
          <OfferAlertBox />
        </div>
      </div>
    </section>
  );
}

/* ---------------- STEPS ---------------- */
function Steps() {
  const steps = [
    { n: "01", title: "Submit name & profession", desc: "Provide your name and select your line of work so we study your sign-off profile." },
    { n: "02", title: "We design custom styles", desc: "Our lettering calligraphers sketch three distinct professional concepts for you." },
    { n: "03", title: "Practice with custom guides", desc: "Download step-by-step tracing worksheets and print them or practice online." },
    { n: "04", title: "Sign with high authority", desc: "Receive transparent vector assets to drop directly into digital files and emails." },
  ];
  return (
    <section id="how" className="py-24" style={{ background: "var(--w-bg)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--w-primary)" }}>
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              Get your premium signature in four steps.
            </h2>
          </div>
        </FadeUp>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-center">
          {/* Left — Steps */}
          <div className="grid gap-5">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center lg:items-start text-center lg:text-left h-full"
                  style={{
                    background: "var(--w-cream)",
                    border: "1px solid var(--w-line)",
                    boxShadow: "var(--w-shadow-soft)",
                  }}
                >
                  <div
                    className="h-14 w-14 rounded-xl grid place-items-center shrink-0 font-display font-bold text-lg text-white"
                    style={{ background: "linear-gradient(135deg, var(--w-primary), var(--w-primary-2))" }}
                  >
                    {s.n}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--w-muted)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right — Image */}
          <FadeUp delay={0.15}>
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-25"
                style={{ background: "linear-gradient(135deg, #D96B36, #C98A2B)" }}
              />
              <div
                className="relative rounded-[2rem] p-3"
                style={{ background: "var(--w-cream)", boxShadow: "var(--w-shadow)", border: "1px solid var(--w-line)" }}
              >
                <img
                  src={writingHand}
                  alt="Elegant hand writing a signature with a vintage fountain pen"
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto rounded-[1.6rem] object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Flash CTA button in this section */}
        <FadeUp delay={0.2}>
          <div className="mt-12 flex justify-center">
            <CTAButton className="w-full sm:w-auto">
              Get Started Instantly <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- INCLUDED ---------------- */
function Included() {
  const items = [
    "3 Custom signature concepts",
    "Print-ready tracing worksheets (PDF)",
    "Slow-motion stroke-by-stroke video guides",
    "Transparent background PNG signature files",
    "Vector source files (SVG)",
    "2 Complimentary iteration/refinements",
  ];
  return (
    <section className="py-24" style={{ background: "var(--w-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left — Image */}
          <FadeUp>
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div
                className="absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-25"
                style={{ background: "linear-gradient(135deg, #B44A1F, #C98A2B)" }}
              />
              <div
                className="relative rounded-[2rem] p-3"
                style={{ background: "var(--w-cream)", boxShadow: "var(--w-shadow)", border: "1px solid var(--w-line)" }}
              >
                <img
                  src={reportMockup}
                  alt="Beautifully designed digital signature practice sheet mockup"
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto rounded-[1.6rem] object-cover"
                />
              </div>
            </div>
          </FadeUp>

          {/* Right — Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--w-primary)" }}>
                What's Inside
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
                Your Signature Kit
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--w-muted)" }}>
                Say goodbye to boring signatures. Master your new professional signature with expert designed sheets and video guides.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div
                className="mt-8 rounded-3xl p-8 sm:p-10 grid gap-x-8 gap-y-4 text-center lg:text-left justify-items-center lg:justify-items-start w-full"
                style={{
                  background: "var(--w-cream)",
                  border: "1px solid var(--w-line)",
                  boxShadow: "var(--w-shadow-soft)",
                }}
              >
                {items.map((it) => (
                  <div key={it} className="flex flex-col sm:flex-row items-center lg:items-start gap-3 text-center lg:text-left justify-center lg:justify-start w-full">
                    <span
                      className="h-6 w-6 rounded-full grid place-items-center shrink-0 text-white"
                      style={{ background: "var(--w-primary)" }}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-neutral-800 font-medium">{it}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="mt-14">
          <OfferAlertBox />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    {
      q: "What do I get in the signature kit?",
      a: "You get 3 custom signature concepts, print-ready tracing worksheets (PDF), slow-motion stroke video guides, transparent PNGs, and vector source files (SVG)."
    },
    {
      q: "How long does delivery take?",
      a: "Your custom signature kit will be delivered directly to your email in less than 24 hours."
    },
    {
      q: "Can I get revisions if I don't like it?",
      a: "Yes, you get 2 complimentary redesign/refinement iterations to make sure you love your new signature style."
    },
    {
      q: "How do I master the signature?",
      a: "Use the step-by-step tracing worksheets (print them or trace digitally) and watch the slow-motion stroke guides to learn the rhythm."
    }
  ];
  return (
    <section className="py-24" style={{ background: "var(--w-bg)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--w-primary)" }}>
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              We have answers for you.
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <FadeUp key={faq.q} delay={idx * 0.05}>
                <div className="rounded-2xl border border-[var(--w-line)] bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 font-bold text-left text-neutral-800 hover:text-[var(--w-primary)] transition-colors outline-none"
                  >
                    <span className="text-base">{faq.q}</span>
                    <span className="text-xl font-light text-neutral-400 shrink-0">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-gray-100 bg-neutral-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-12">
          <OfferAlertBox />
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const reviews = [
    { name: "Amit Sharma", loc: "Tech Lead, Bangalore", text: "My signature was so simple. The new design looks professional and clean. The tracing sheets helped me learn it in just a few days." },
    { name: "Sarah K.", loc: "Creative Director, London", text: "I needed a fluid, loops-heavy signature for signing digital canvas artwork. The vector SVGs scale perfectly without loss of resolution. Highly recommended!" },
    { name: "Dr. Amit V.", loc: "Cardiologist, Mumbai", text: "My prescription sheet signatures were just a straight line. The calligrapher made it look swift, professional, and authoritative. Tracing sheets did the magic." },
  ];
  return (
    <section className="py-24" style={{ background: "var(--w-surface)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--w-primary)" }}>
              Testimonials
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
              What professionals are saying.
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--w-muted)" }}>
              Say goodbye to boring signatures. Master your new professional signature with expert designed sheets and video guides.
            </p>
          </div>
        </FadeUp>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeUp key={r.name} delay={i * 0.08}>
              <div
                className="rounded-3xl p-7 h-full flex flex-col items-center lg:items-start text-center lg:text-left"
                style={{
                  background: "var(--w-cream)",
                  border: "1px solid var(--w-line)",
                  boxShadow: "var(--w-shadow-soft)",
                }}
              >
                <div className="flex gap-0.5 justify-center lg:justify-start" style={{ color: "var(--w-accent)" }}>
                  {[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--w-ink)" }}>
                  "{r.text}"
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start w-full">
                  <div
                    className="h-11 w-11 rounded-full grid place-items-center text-white font-bold shrink-0 text-sm"
                    style={{ background: "linear-gradient(135deg, var(--w-primary), var(--w-accent))" }}
                  >
                    {r.name[0]}
                  </div>
                  <div className="min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <p className="text-sm font-semibold truncate">{r.name}</p>
                    <p className="text-xs truncate" style={{ color: "var(--w-muted)" }}>{r.loc}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-12">
          <OfferAlertBox />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING + ORDER CARD SECTION ---------------- */
function PricingOffer({ name }: { name: string }) {
  return (
    <section id="order" className="py-24" style={{ background: "var(--w-bg)" }}>
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left — Sample Signature & Visual Preview */}
        <FadeUp>
          <div
            className="relative rounded-[2rem] p-6 sm:p-8 h-full flex flex-col items-center text-center"
            style={{
              background: "linear-gradient(180deg, #FFF9EE 0%, #F5EBD9 100%)",
              border: "1px solid var(--w-line)",
              boxShadow: "var(--w-shadow-soft)",
            }}
          >
            <div className="absolute top-5 right-5 h-3 w-3 rounded-full" style={{ background: "var(--w-accent)" }} />

            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: "#FBD9C4", color: "var(--w-primary)" }}
              >
                <Sparkles className="h-4 w-4" />
                Featured Concept Sample
              </span>
            </div>

            <div
              className="mt-6 w-full rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center bg-white border border-gray-200"
            >
              <img
                src={rishitaSignature}
                alt="Handwritten signature of Rishita Kapoor"
                width={1024}
                height={512}
                className="w-full max-w-md h-auto"
                loading="lazy"
              />
              <p
                className="mt-4 text-sm font-bold tracking-[0.35em] uppercase text-neutral-800"
              >
                {name || "Rishita Kapoor"}
              </p>
            </div>

            <p
              className="mt-5 text-center text-xs leading-relaxed font-medium text-neutral-600"
              style={{ color: "var(--w-muted)" }}
            >
              Your professional kit is custom designed, fully vectorised, and includes slow-motion tracing videos to master the curves quickly.
            </p>
          </div>
        </FadeUp>

        {/* Right — Product Offer Card */}
        <FadeUp>
          <div
            className="rounded-[2rem] p-8 sm:p-10 bg-white border border-[var(--w-line)] shadow-xl space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="text-center lg:text-left w-full">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: "#FBD9C4", color: "var(--w-primary)" }}
              >
                <Crown className="h-4 w-4 text-[var(--w-primary)]" />
                Custom Calligraphy Pack
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-neutral-900">Custom Signature Kit</h3>
              <p className="text-xs mt-1" style={{ color: "var(--w-muted)" }}>
                Get your custom signature designed by expert artists.
              </p>
            </div>

            <div className="space-y-4 py-2 w-full">
              {[
                "3 Custom signature concepts",
                "Print-ready tracing worksheets (PDF)",
                "Slow-motion stroke-by-stroke video guides",
                "Transparent background PNG signature files",
                "Vector source files (SVG)",
                "2 Complimentary iteration/refinements"
              ].map((item) => (
                <div key={item} className="flex flex-col sm:flex-row items-center lg:items-start gap-2.5 text-sm text-center lg:text-left justify-center lg:justify-start">
                  <span className="h-5 w-5 rounded-full bg-green-50 grid place-items-center text-green-600 shrink-0 mt-0.5 text-center">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-gray-200 my-1 w-full" />

            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-xs font-semibold" style={{ color: "var(--w-muted)" }}>Limited Time Offer Price:</p>
                <div className="flex items-baseline gap-2 mt-1 justify-center sm:justify-start">
                  <span className="text-3xl font-bold font-display" style={{ color: "var(--w-ink)" }}>₹449</span>
                  <span className="text-sm line-through text-gray-400">₹4,999</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">91% OFF</span>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-1 rounded-lg">
                  <Timer className="h-3.5 w-3.5 animate-pulse" />
                  7 Slots Left
                </span>
              </div>
            </div>

            {/* Premium CTA Button linking to checkout */}
            <CTAButton
              href="https://superprofile.bio/vp/6a12dfb5a51904001397e82f?checkout=true"
              className="w-full flex items-center justify-center gap-2"
            >
              <Crown className="h-5 w-5" />
              Get Your Signature Kit
              <ArrowRight className="h-4 w-4" />
            </CTAButton>

            <div className="flex items-center justify-center gap-2 text-[10px] text-center w-full" style={{ color: "var(--w-muted)" }}>
              <Shield className="h-3.5 w-3.5 text-green-600 shrink-0" />
              <span>Secure checkout · Instant delivery guarantee</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  const [seats] = useState(7);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 sm:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, var(--w-primary) 0%, var(--w-primary-2) 55%, var(--w-accent) 100%)",
              boxShadow: "var(--w-shadow)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Queue Limit Reaching Soon
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-5xl font-bold text-white leading-[1.05]">
                Only {seats} custom slots<br />available this week.
              </h2>
              <p className="mt-4 text-white/85 max-w-md mx-auto text-sm leading-relaxed">
                Because every single signature is sketched by hand by our calligraphers, we close orders once our weekly slots fill up.
              </p>
              <CTAButton
                href="https://superprofile.bio/vp/6a12dfb5a51904001397e82f?checkout=true"
                className="mt-8 text-white w-full sm:w-auto"
              >
                Reserve My Signature Slot <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <p className="mt-4 text-[10px] text-white/60">
                Guaranteed high quality. Handcrafted vector artwork designed from scratch.
              </p>
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
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-[var(--w-line)] bg-[var(--w-cream)]/90 backdrop-blur-md"
      style={{ boxShadow: "var(--w-shadow)" }}
    >
      <div className="flex items-center gap-3 flex-row">
        <div className="flex items-center gap-2">
          {[time.h, time.m, time.s].map((n, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg px-2 py-1 font-mono font-bold text-white text-sm min-w-[36px]"
                style={{ background: "linear-gradient(135deg, var(--w-primary), var(--w-primary-2))" }}>
                {pad(n)}
              </div>
              <span className="text-[9px] uppercase tracking-wider" style={{ color: "var(--w-muted)" }}>
                {["hrs", "min", "sec"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--w-primary)" }}>
            Offer ends soon
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold" style={{ color: "var(--w-ink)" }}>₹449</span>
            <span className="line-through opacity-50 text-[10px]" style={{ color: "var(--w-muted)" }}>₹4,999</span>
            <span className="text-[9px] text-green-700 font-bold bg-green-100 px-1 rounded">91% OFF</span>
          </div>
        </div>
      </div>
      <a
        href="https://superprofile.bio/vp/6a12dfb5a51904001397e82f?checkout=true"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white shrink-0 w-full sm:w-auto text-center hover:-translate-y-0.5 transition-transform"
        style={{ background: "linear-gradient(135deg, var(--w-primary), var(--w-primary-2))" }}
      >
        <Crown className="h-4 w-4" />
        Order Signature Kit <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
