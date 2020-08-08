import React, { useState } from 'react'
import { ListOfCards } from '@components/ListOfCards'
import { FormSearchPokemon } from '@components/FormSearchPokemon'

export const Home = () => {
  const [pokemonType, setPokemonType] = useState('https://pokeapi.co/api/v2/type/3')

  return (
    <>
      <FormSearchPokemon setPokemonType={setPokemonType} />
      <ListOfCards pokemonType={pokemonType} />
    </>
  )
}