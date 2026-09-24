import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/yoni-vashikaran")({
  beforeLoad: () => {
    throw redirect({
      to: "/vashi",
      replace: true,
    });
  },
});
