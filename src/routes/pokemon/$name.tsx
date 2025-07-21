import { createFileRoute } from '@tanstack/react-router';
import { PokemonRecords } from '@/data';

export const Route = createFileRoute('/pokemon/$name')({
  // before the page/component is rendered get this data
  loader: async ({ params }) => {
    return PokemonRecords[params.name.toLowerCase()];
  },
  component: () => Pokemon(),
});

function Pokemon() {
  const { name } = Route.useParams();
  const pokemonData = Route.useLoaderData();

  return (
    <div>
      Hello World! Who's the pokemon?
      <br /> Right, it's {name}!
      {pokemonData != undefined ? (
        <>
          <p>{pokemonData.description}</p>
          <ul>
            <li>Type: {pokemonData.type}</li>
            {pokemonData.evolution != 'None' && (
              <li>Evolves to: {pokemonData.evolution}</li>
            )}
            <li>
              Abilities:{' '}
              {pokemonData.abilities.map((ability) => (
                <>{ability}, </>
              ))}
            </li>
          </ul>
        </>
      ) : (
        <p>Sorry we don't know that pokemon</p>
      )}
    </div>
  );
}
