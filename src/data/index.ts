import PokemonRecordsJSON from './pokemon.json' assert { type: 'json' }; // forcefully assert the type to be a JSON

type PokemonInfo = {
  name: string;
  type: string;
  description: string;
  evolution: string;
  abilities: string[];
};
// make sure the data from JSON is properly typed
export const PokemonRecords = PokemonRecordsJSON as Record<string, PokemonInfo>;
