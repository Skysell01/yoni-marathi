import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageTemplates";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MysticCanvas" },
      { name: "description", content: "How MysticCanvas collects, uses, and protects your personal information." },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>Your privacy matters to us. This policy explains what information we collect when you use MysticCanvas and how we handle it.</p>
      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you provide at checkout (name and email).</li>
        <li>Order preferences and inputs used to create your personalized experience.</li>
        <li>Basic analytics data such as pages visited and device type.</li>
      </ul>
      <h2>How we use your information</h2>
      <ul>
        <li>To create and deliver your personalized digital product.</li>
        <li>To provide customer support and process refunds if needed.</li>
        <li>To improve our website, products, and overall experience.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We do not sell your personal information. We only share data with trusted service providers required to fulfill your order (such as payment and email delivery).</p>
      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal data at any time by emailing our support team.</p>
      <h2>Contact</h2>
      <p>Questions about this policy? Reach out at support@mysticcanvas.example.</p>
    </LegalPage>
  ),
});
