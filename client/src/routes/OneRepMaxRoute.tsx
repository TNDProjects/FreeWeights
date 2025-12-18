import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/OneRepMaxRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/OneRepMaxRoute"!</div>
}
