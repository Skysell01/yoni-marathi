import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageTemplates";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — MysticCanvas" },
      { name: "description", content: "Our approach to refunds and revisions on MysticCanvas digital products." },
    ],
  }),
  component: () => (
    <LegalPage title="Refund Policy" updated="July 2026">
      <p>We want you to love your MysticCanvas experience. If something isn't right, we're here to help.</p>
      <h2>Digital nature of our products</h2>
      <p>Because our products are digital and personalized, we cannot offer refunds once your order has been delivered — unless there is a clear quality issue on our end.</p>
      <h2>Revisions</h2>
      <p>For illustrated products, we offer one complimentary round of refinements within 48 hours of delivery.</p>
      <h2>When we do refund</h2>
      <ul>
        <li>Your order was never delivered due to a technical failure on our side.</li>
        <li>You were charged twice for the same order.</li>
        <li>The final delivery does not match the product description in a material way.</li>
      </ul>
      <h2>How to request</h2>
      <p>Contact support@mysticcanvas.example within 7 days of delivery with your order details. We usually resolve requests within one business day.</p>
    </LegalPage>
  ),
});
