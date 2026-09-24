import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageTemplates";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — MysticCanvas" },
      { name: "description", content: "The terms that govern your use of MysticCanvas and our digital products." },
    ],
  }),
  component: () => (
    <LegalPage title="Terms & Conditions" updated="July 2026">
      <p>By using MysticCanvas, you agree to these terms. Please read them carefully.</p>
      <h2>Use of the service</h2>
      <p>Our digital products are provided for personal use, entertainment, and self-reflection. They are not intended as, and should not be interpreted as, professional advice of any kind.</p>
      <h2>Intellectual property</h2>
      <p>All artwork, layouts, and content produced by MysticCanvas remain our intellectual property. You receive a personal, non-commercial license to enjoy and share your delivered files.</p>
      <h2>Payments</h2>
      <p>All prices are listed in the currency shown at checkout. Payments are processed through secure third-party providers.</p>
      <h2>Limitation of liability</h2>
      <p>MysticCanvas is provided "as is." We are not liable for indirect or incidental damages arising from use of the service.</p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.</p>
    </LegalPage>
  ),
});
