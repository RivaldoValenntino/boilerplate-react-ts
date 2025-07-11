import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../layouts/auth-layout";

export const Route = createFileRoute("/grafik")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <div>Hello "/grafik"!</div>
    </AuthLayout>
  );
}
