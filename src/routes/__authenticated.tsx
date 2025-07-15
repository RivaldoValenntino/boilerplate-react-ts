import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/__authenticated")({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const token = context.auth.token;
    const user = context.auth.user;
    if (!token && !user) {
      throw redirect({ to: "/login" });
    }
  },
});

function RouteComponent() {
  return <Outlet />;
}
