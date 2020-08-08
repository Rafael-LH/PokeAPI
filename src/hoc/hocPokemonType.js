import React from 'react'
import { useFindPokemonType } from '@hooks/useFindPokemonType'

export const hocPokemonType = (Component, request) => {
  return function (props) {
    const { getPokemonType: { pokemon } } = useFindPokemonType('https://pokeapi.co/api/v2/type/3')
    if (!pokemon) return <h1>Loader...</h1>
    return <Component {...props} pokemon={pokemon} />
  }
}