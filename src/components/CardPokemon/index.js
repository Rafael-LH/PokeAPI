import React from 'react'

const URL = 'https://pokeapi.co/api/v2/ability/65/'
const NAME = 'overgrow'
export const CardPokemon = ({ url = URL, name = NAME }) => (
  <div>
    <figure>
      <img src={url} alt={name} />
    </figure>
  </div>
)