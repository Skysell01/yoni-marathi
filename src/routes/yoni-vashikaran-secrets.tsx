import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/yoni-vashikaran-secrets")({
  beforeLoad: () => {
    throw redirect({
      to: "/vashi",
      replace: true,
    });
  },
});
