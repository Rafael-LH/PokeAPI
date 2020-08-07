import React from 'react'
import { ContainerCards } from './style'
import { CardPokemon } from '@components/CardPokemon'
import { useFindPokemonType } from '@hooks/useFindPokemonType'

export const ListOfCards = ({ pokemonType }) => {
  const { getPokemonType: { pokemon } } = useFindPokemonType(pokemonType)

  return (
    <ContainerCards>
      {
        pokemon && pokemon.map((item, index) => <CardPokemon key={index} {...item} />)
      }
    </ContainerCards>
  )
}