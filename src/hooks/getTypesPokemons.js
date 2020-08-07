const TYPES_POKEMONS = 'https://pokeapi.co/api/v2/type'

export const getTypesPokemons = async () => {
  const response = await fetch(TYPES_POKEMONS)
  const { results } = await response.json();
  return results
}