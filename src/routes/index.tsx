import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div id="index-body">
      <h1>VITE PWA + TANSTACK REACT BOILERPLATE</h1>
    </div>
  );
}
