import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Download,
  Star,
  Mail,
  ShieldCheck,
  Sparkles,
  Heart,
  Zap,
  Quote,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/yoni-hero.png";
import ritualImg from "@/assets/yoni-ritual.jpg";
import mantraImg from "@/assets/yoni-mantra.jpg";
import tantricArtImg from "@/assets/yoni-tantric-art.jpg";
import shabarImg from "@/assets/yoni-shabar.jpg";
import diyasImg from "@/assets/yoni-diyas.jpg";

export const Route = createFileRoute("/vashi")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-hex-pattern text-foreground font-sans">
      {/* Ambient auras */}
      <div className="aura h-[420px] w-[420px] left-[-120px] top-[10%]" style={{ background: "oklch(0.45 0.22 300 / 0.55)" }} />
      <div className="aura h-[360px] w-[360px] right-[-100px] top-[45%]" style={{ background: "oklch(0.55 0.2 25 / 0.35)", animationDelay: "1.5s" }} />
      <div className="aura h-[500px] w-[500px] left-[30%] bottom-[5%]" style={{ background: "oklch(0.5 0.2 320 / 0.35)", animationDelay: "3s" }} />

      <Header />
      <main className="relative">
        <Hero />
        <DescriptionSection />
        <FeatureGallery />
        <Reveal>
          <div className="flex justify-center py-6">
            <div className="h-px w-full max-w-5xl bg-white/10" />
          </div>
        </Reveal>
        <LearnSection />
        <IncludedSection />
        <AudienceSection />
        <HighlightsSection />
        <TestimonialsSection />
        <CheckoutSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyOfferBar />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-purple)] shadow-[var(--shadow-glow)] flicker">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Mystic<span className="text-gold">Canvas</span>
          </span>
        </Link>
        <a
          href="https://superprofile.bio/vp/யோனி-வசியக்கலை-–-முழுமையான-வழிகாட்டி?checkout=true"
          className="hidden rounded-full px-4 py-2 text-xs font-semibold text-white btn-glow cta-shine hover:btn-glow-hover sm:inline-flex"
        >
          आत्ताच मिळवा
        </a>
      </div>
    </header>
  );
}

/* ---------------- Section wrapper ---------------- */
function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-10 sm:py-12 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Custom simple component that renders a section heading
function SectionHeading({
  eyebrow,
  title,
  icon,
  center,
}: {
  eyebrow?: string;
  title: string;
  icon?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-8 text-center ${center ? "" : "sm:text-left"}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold font-medium">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className={`flex items-center justify-center gap-3 text-2xl font-black text-white sm:text-3xl lg:text-4xl ${center ? "" : "sm:justify-start"}`}>
        {icon && <span className="flicker text-[color:var(--orange-glow)]">{icon}</span>}
        <span className="relative inline-block">
          <span className="text-white">{title}</span>
          <span className={`absolute -bottom-2 h-[3px] w-16 rounded-full bg-[var(--gradient-gold)] left-1/2 -translate-x-1/2 ${center ? "" : "sm:left-0 sm:translate-x-0"}`} />
        </span>
      </h2>
    </Reveal>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <Reveal className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gold font-medium">
            <Sparkles className="h-3.5 w-3.5" /> प्राचीन तांत्रिक ग्रंथ
          </div>
          <h1 className="mb-6 font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl">
            तीव्र योनी <span className="text-gold">वशीकरण साधना</span> <span className="text-white/70 text-2xl sm:text-4xl block sm:inline mt-1 sm:mt-0">(मराठी ई-बुक)</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            प्राचीन तांत्रिक ग्रंथ — शतकानुशतके अत्यंत गुप्त ठेवलेली दिव्य विद्या, आता सोप्या आणि शुद्ध मराठीत.
            मंत्र, यंत्र आणि संपूर्ण साधना पद्धती — आत्ताच डाउनलोड करा.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="https://superprofile.bio/vp/யோனி-வசியக்கலை-–-முழுமையான-வழிகாட்டி?checkout=true"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              आत्ताच डाउनलोड करा — ₹249
            </a>
            <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
              <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
              सुरक्षित पेमेंट · इन्स्टंट डाउनलोड
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-xs text-white/60 sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-start">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.9 / 5 · 2000+ साधक</span>
            </div>
            <span className="flex items-center gap-1.5 font-medium"><BookOpen className="h-3.5 w-3.5" /> PDF · मराठी</span>
          </div>
        </Reveal>

        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img
            src={heroImg}
            alt="योनी वशीकरण विद्या — प्राचीन तांत्रिक ग्रंथ"
            width={1024}
            height={1024}
            className="h-auto w-full transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[color:var(--gold)]/20 rotate-slow" />
          <div className="pointer-events-none absolute -left-16 bottom-8 h-48 w-48 rounded-full border border-[color:var(--accent)]/25 rotate-slow" style={{ animationDirection: "reverse" }} />
          <Sparkles className="pointer-events-none absolute right-8 top-16 h-5 w-5 text-[color:var(--gold)] sparkle" />
          <Sparkles className="pointer-events-none absolute left-10 top-40 h-4 w-4 text-[color:var(--accent)] sparkle" style={{ animationDelay: "1s" }} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Description ---------------- */
function DescriptionSection() {
  return (
    <SectionShell id="about">
      <SectionHeading eyebrow="माहिती" title="या ई-बुकबद्दल" center />
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-relaxed text-white/80 sm:text-lg">
          प्राचीन योनी वशीकरण विद्या हा शतकानुशतके गुरु-शिष्य परंपरेतून अत्यंत गुप्त ठेवण्यात आलेला एक दुर्मिळ आणि
          प्रभावशाली तांत्रिक ग्रंथ आहे. खऱ्या आणि पवित्र मनाने आपल्या आवडत्या व्यक्तीला आकर्षित करण्यासाठी व जीवनात प्रेम
          निर्माण करण्यासाठी इच्छुक असणाऱ्या साधकांसाठी हे ई-बुक तयार करण्यात आले आहे. यामधील मंत्र, यंत्र आणि साधना पद्धती
          अगदी सोप्या व स्पष्ट मराठीत समजावून सांगितल्या आहेत, जेणेकरून कोणालाही घरी बसून योग्य नियमांचे पालन करून याचा
          सराव करता येईल.
        </p>
      </Reveal>
    </SectionShell>
  );
}

/* ---------------- Feature Image Gallery ---------------- */
function FeatureGallery() {
  const items = [
    { src: ritualImg, caption: "वशीकरण कसे करावे — संपूर्ण विधी" },
    { src: diyasImg, caption: "दिवा लावून करा साधना" },
    { src: mantraImg, caption: "फोटोवरून वशीकरण करण्याची पद्धत" },
    { src: tantricArtImg, caption: "गुरु-शिष्य परंपरेतील गुप्त विद्या" },
    { src: shabarImg, caption: "नावावरून वशीकरण — शाबर मंत्र" },
    { src: heroImg, caption: "मोहिनी मंत्र सिद्धी" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="गॅलरी" title="साधनेची एक झलक" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              width={800}
              height={800}
              className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center">
              <p className="text-sm font-bold text-gold">{it.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Learn ---------------- */
function LearnSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading eyebrow="काय शिकाल" title="या ई-बुकमधून तुम्हाला काय शिकायला मिळेल?" icon="✦" />
          <BulletList
            items={[
              "वशीकरण करण्याची संपूर्ण पद्धत (टप्प्याटप्प्याने / Step-by-Step)",
              "मंत्र जपाचे अचूक नियम आणि विधी-विधान",
              "कोणत्या दिवशी व कोणत्या वेळी कोणता मंत्र जपावा",
              "साधनेसाठी शुभ तिथी आणि योग्य मुहूर्त",
              "आवडत्या व्यक्तीला आकर्षित करण्यासाठी अत्यंत शक्तिशाली मंत्र",
              "फोटोवरून वशीकरण करण्याची गुप्त तांत्रिक प्रक्रिया",
            ]}
          />
        </div>
        <Reveal className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={mantraImg} alt="Mantra" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Included ---------------- */
function IncludedSection() {
  const items = [
    "संपूर्ण योनी वशीकरण विद्या",
    "प्रत्येक साधनेचे टप्प्याटप्प्याने मार्गदर्शन",
    "शक्तिशाली मोहिनी मंत्र (Step-by-Step)",
    "सिद्ध यंत्रे आणि त्यांचा अचूक वापर",
    "मनापासून आवडणाऱ्या व्यक्तीला आकर्षित करण्याची गुप्त विद्या",
    "साधनेदरम्यान काय करावे आणि काय करू नये",
    "अत्यंत गुप्त तांत्रिक रहस्ये आणि घ्यावयाची काळजी",
    "१००% परिणामकारक व सिद्ध झालेल्या पद्धती",
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="ई-बुकमध्ये काय आहे" title="यात तुम्हाला काय काय मिळणार?" icon="✦" center />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <Reveal
            key={item}
            className="group rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-gold)] text-black shadow-md">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <p className="text-sm font-semibold text-neutral-900">{item}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Audience ---------------- */
function AudienceSection() {
  return (
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="order-2 lg:order-1 group relative overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-card)]">
          <img src={tantricArtImg} alt="Audience" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="कोणासाठी उपयुक्त" title="हे ई-बुक कोणासाठी फायदेशीर आहे?" icon="♥" />
          <BulletList
            check
            items={[
              "ज्यांना आपल्या आयुष्यात खरे प्रेम हवे आहे",
              "आपल्या आवडत्या व्यक्तीला किंवा जोडीदाराला परत मिळवू इच्छिणाऱ्यांसाठी",
              "पती-पत्नीमधील प्रेम आणि आकर्षण वाढवू इच्छिणाऱ्यांसाठी",
              "एकतर्फी प्रेमात यश मिळवू इच्छिणाऱ्यांसाठी",
              "मोहन क्रिया आणि तांत्रिक साधनेमध्ये रस असणाऱ्या साधकांसाठी",
              "वैवाहिक जीवनात सुख आणि शांती परत आणू इच्छिणाऱ्यांसाठी",
            ]}
          />
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Highlights ---------------- */
function HighlightsSection() {
  const items = [
    { icon: <Download className="h-5 w-5" />, title: "इन्स्टंट डाउनलोड", desc: "पेमेंट पूर्ण होताच क्षणात PDF डाउनलोड लिंक मिळते" },
    { icon: <BookOpen className="h-5 w-5" />, title: "सोपी मराठी भाषा", desc: "स्पष्ट, शुद्ध आणि समजायला अत्यंत सोप्या मराठीत संपूर्ण विधी" },
    { icon: <Zap className="h-5 w-5" />, title: "टप्प्याटप्प्याने विधी", desc: "प्रत्येक साधनेचे सविस्तर आणि अचूक मार्गदर्शन (Step-by-Step)" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "गोपनीय ज्ञान", desc: "गुरु-शिष्य परंपरेतील अत्यंत दुर्मिळ व गुप्त रहस्ये" },
  ];
  return (
    <SectionShell className="bg-black/30">
      <SectionHeading eyebrow="वैशिष्ट्ये" title="ई-बुकची प्रमुख वैशिष्ट्ये" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <Reveal
            key={it.title}
            className="rounded-2xl border border-white/10 bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-purple-700 border border-purple-100 shadow-sm">
              {it.icon}
            </div>
            <h3 className="mb-1 font-bold text-neutral-900">{it.title}</h3>
            <p className="text-sm text-neutral-600 font-medium">{it.desc}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Testimonials ---------------- */
function TestimonialsSection() {
  const list = [
    { name: "राहुल", text: "खूपच अप्रतिम ई-बुक आहे! सर्व पद्धती अतिशय सोप्या मराठीत समजवून सांगितल्या आहेत. मी नियमांचे तंतोतंत पालन करून याचा वापर केला आणि मला खूप चांगले परिणाम मिळाले." },
    { name: "सौरभ", text: "हे पुस्तक वाचून मला खूप मोठा फायदा झाला. यामधील मंत्र आणि यंत्रांची माहिती अत्यंत स्पष्ट आणि अचूक आहे. मनःपूर्वक धन्यवाद!" },
    { name: "दीपक", text: "अत्यंत आश्चर्यकारक आणि शक्तिशाली विद्या आहे. सुरुवातीला मनात थोडी शंका होती, पण योग्य क्रमाने साधना केल्यानंतर आमच्या नात्यातील सर्व वाद मिटले आणि खूप चांगला बदल दिसला." },
    { name: "अनिकेत", text: "खरोखरच एक अप्रतिम गाइड! सर्व गोष्टी मराठीत अगदी व्यवस्थित समजतात. तांत्रिक साधकांसाठी जवळ ठेवण्यासारखा हा एक अनमोल ग्रंथ आहे." },
  ];
  return (
    <SectionShell>
      <SectionHeading eyebrow="अभिप्राय" title="साधकांचे खरे अनुभव" center />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((t) => (
          <Testimonial key={t.name} {...t} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ---------------- Checkout ---------------- */
function CheckoutSection() {
  return (
    <SectionShell id="checkout" className="bg-black/40">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-center lg:text-left">
          <SectionHeading eyebrow="इन्स्टंट ॲक्सेस" title="आत्ताच डाउनलोड करा" icon="✦" />
          <p className="mx-auto mb-6 max-w-md text-white/75 lg:mx-0">
            पेमेंट पूर्ण होताच PDF तुमच्या ईमेलवर त्वरित पाठवली जाईल. आजच तुमची
            साधना सुरू करा.
          </p>
          <ul className="mx-auto inline-block space-y-3 text-left text-sm text-white/85 lg:mx-0 lg:block font-medium">
            {["१००% ई-बुक — इन्स्टंट डाउनलोड", "मोबाईल आणि कम्प्युटर दोन्हीवर सहज वाचा", "लाइफटाइम ॲक्सेस — कधीही आणि कोठेही वाचा"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={3} />
                {x}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="rounded-2xl border border-[color:var(--accent)]/30 bg-card p-6 shadow-[var(--shadow-glow-yoni)] sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-600 font-semibold">एकवेळची किंमत</p>
              <p className="text-3xl font-black text-gold">₹249</p>
            </div>
            <div className="rounded-full border border-[color:var(--deep-red)] bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[color:var(--orange-glow)] flicker">
              Instant
            </div>
          </div>
          <p className="mb-4 text-xs text-neutral-600 font-medium">
            पेमेंट यशस्वी होताच ई-बुक लिंक लगेच तुमच्या ईमेलवर पाठवली जाईल.
          </p>

          <div className="my-5 h-px bg-neutral-200" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600"><span>सबटोटल</span><span className="font-semibold text-neutral-900">₹249</span></div>
            <div className="flex justify-between text-base"><span className="font-semibold text-neutral-900">एकूण रक्कम</span><span className="font-black text-gold">₹249</span></div>
          </div>

          <a
            href="https://superprofile.bio/vp/யோனி-வசியக்கலை-–-முழுமையான-வழிகாட்டி?checkout=true"
            className="group mt-5 flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-sm font-bold text-white btn-glow cta-shine pulse-glow hover:btn-glow-hover"
          >
            <span>आत्ताच खरेदी करा</span>
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/50 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--accent)]" />
            सुरक्षित पेमेंट · इन्स्टंट डाउनलोड
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ---------------- Contact ---------------- */
function ContactSection() {
  return (
    <SectionShell>
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="संपर्क" title="SoulMap Creations शी संपर्क साधा" center />
        <p className="flex items-center justify-center gap-2 text-sm text-white/70 font-medium">
          <Mail className="h-4 w-4 text-[color:var(--accent)]" />
          dh.soulmap@gmail.com
        </p>
        <div className="mt-10 text-left text-xs leading-relaxed text-white/50">
          <h4 className="mb-2 font-semibold text-white/70">महत्त्वाची सूचना व अस्वीकरण (Disclaimer)</h4>
          <p>
            या ई-बुकमध्ये दिलेली सर्व माहिती, मंत्र आणि साधना पद्धती केवळ शैक्षणिक व आध्यात्मिक
            ज्ञानासाठी तयार करण्यात आल्या आहेत. कोणत्याही अनैतिक किंवा चुकीच्या कारणासाठी याचा
            गैरवापर केल्यास प्रकाशक जबाबदार असणार नाहीत. कृपया संपूर्ण भक्तीभावाने आणि शुद्ध
            अंतःकरणानेच साधना करावी.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

/* ---------------- Building blocks ---------------- */
function BulletList({ items, check }: { items: string[]; check?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li
          key={item}
          className="fade-up flex items-start gap-3 text-[15px] text-white/85 transition-transform hover:translate-x-1"
          style={{ animationDelay: `${idx * 70}ms` }}
        >
          <span
            className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] shadow-md ${
              check ? "bg-[var(--gradient-gold)] text-black" : "bg-[var(--gradient-purple)] text-white"
            }`}
          >
            {check ? "✓" : "✦"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent)]/40 hover:shadow-[var(--shadow-glow-yoni)]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex text-[color:var(--gold)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 40}ms` }} />
          ))}
        </div>
        <Quote className="h-5 w-5 text-[color:var(--accent)] transition-transform group-hover:rotate-12" />
      </div>
      <p className="mb-3 text-sm leading-relaxed text-neutral-800">{text}</p>
      <div className="flex items-center gap-2">
        <div className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-purple)] text-xs font-bold text-white">
          {name[0]}
        </div>
        <span className="text-sm font-semibold text-neutral-900">{name}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 pt-8 pb-32">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-1.5 font-medium">
          <Heart className="h-3.5 w-3.5 text-[color:var(--accent)]" />
          © {new Date().getFullYear()} SoulMap Creations · सर्व हक्क राखीव
        </p>
      </div>
    </footer>
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
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg border border-white/10 bg-black/80 backdrop-blur-md"
      style={{ boxShadow: "var(--shadow-glow-yoni)" }}
    >
      <div className="flex items-center gap-3 flex-row">
        <div className="flex items-center gap-2">
          {[time.h, time.m, time.s].map((n, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg px-2 py-1 font-mono font-bold text-white text-sm min-w-[36px] bg-[var(--gradient-purple)]">
                {pad(n)}
              </div>
              <span className="text-[9px] uppercase tracking-wider text-white/50 font-medium">
                {["तास", "मिनिटे", "सेकंद"][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--gold)]">
            ऑफर लवकरच समाप्त होत आहे
          </p>
          <p className="text-sm font-bold text-white">
            <span className="line-through opacity-50 text-xs text-white/60">₹999</span>{" "}
            <span className="text-gold font-extrabold">₹249</span>
          </p>
        </div>
      </div>
      <a
        href="https://superprofile.bio/vp/யோனி-வசியக்கலை-–-முழுமையான-வழிகாட்டி?checkout=true"
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-white btn-glow cta-shine hover:btn-glow-hover shrink-0 w-full sm:w-auto text-center"
      >
        आत्ताच डाउनलोड करा <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}
