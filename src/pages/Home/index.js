import React from 'react'
import { ContainerCards } from './style'
import { CardPokemon } from '@components/CardPokemon'

export const Home = () => {
  return (
    <>
      <form action="">
        <select name="" id="">
          <option value="">Type</option>
          <option value="">Type</option>
          <option value="">Type</option>
        </select>
      </form>
      <ContainerCards>
        {
          [1, 2, 3, 4].map((item, index) => <CardPokemon key={index} />)
        }
      </ContainerCards>
    </>
  )
}