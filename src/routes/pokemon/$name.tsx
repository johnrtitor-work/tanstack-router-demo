import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/pokemon/$name')({
  component: () => Pokemon(),
});

function Pokemon() {
  const { name } = Route.useParams();
  return (
    <div>
      Hello World! Who's the pokemon?
      <br /> Right, it's {name}!
    </div>
  );
}
