import React from 'react'
import { ContentCard, Img } from './style'
import { useFindPokemonType } from '@hooks/useFindPokemonType'

export const CardPokemon = ({ pokemon: { url, name } }) => {
  const { getPokemonType } = useFindPokemonType(url);
  if (!getPokemonType.sprites) return <h1>Loading...</h1>
  return (
    <ContentCard>
      <figure>
        <Img src={getPokemonType.sprites.other.dream_world.front_default} alt={name} />
        <h1>{name}</h1>
      </figure>
    </ContentCard>
  )
}