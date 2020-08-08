import React from 'react'
import { ContainerCards } from './style'
import { CardPokemon } from '@components/CardPokemon'
import { hocPokemonType } from '../../hoc/hocPokemonType'

const ListOfCards = ({ pokemon }) => (
  <ContainerCards>
    {
      pokemon.map((item, index) => <CardPokemon key={index} {...item} />)
    }
  </ContainerCards>
)
export default hocPokemonType(ListOfCards, "pokemons")