import React, { useEffect, useState } from 'react'

export const useFindPokemonType = (uri) => {
  const [getPokemonType, setGetPokemonType] = useState([]);

  useEffect(() => {
    const getFindPokemon = async () => {
      const response = await fetch(uri)
      const pokemon = await response.json()
      setGetPokemonType(pokemon)
    }
    getFindPokemon()
  }, [uri])
  return { getPokemonType }
}