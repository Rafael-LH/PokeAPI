import React from 'react'
import { ContentCard, Img } from './style'

const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
const NAME = 'overgrow'
export const CardPokemon = ({ url = URL, name = NAME }) => (
  <ContentCard>
    <figure>
      <Img src={url} alt={name} />
    </figure>
  </ContentCard>
)