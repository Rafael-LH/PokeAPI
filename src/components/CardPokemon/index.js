import React from 'react'
import { ContentCard, Img } from './style'
import { useFindPokemonType } from '@hooks/useFindPokemonType'

const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
const NAME = 'overgrow'
export const CardPokemon = ({ pokemon: { url, name } }) => {
  console.log(url)
  // const imagePokemon = useFindPokemonType(url);
  return (
    <ContentCard>
      <figure>
        <Img src={url} alt={name} />
        <p>{name}</p>
      </figure>
    </ContentCard>
  )
}