import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/grafik')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/grafik"!</div>
}
