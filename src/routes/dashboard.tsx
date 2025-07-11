import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../layouts/auth-layout";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <div>Hello "/dashboard"!</div>
    </AuthLayout>
  );
}
