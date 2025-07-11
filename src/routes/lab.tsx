import { createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../layouts/auth-layout";

export const Route = createFileRoute("/lab")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <div>Hello "/lab"!</div>
    </AuthLayout>
  );
}
