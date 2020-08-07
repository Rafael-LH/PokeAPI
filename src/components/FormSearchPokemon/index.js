import React, { useEffect, useState } from 'react'
import { getTypesPokemons } from '@hooks/getTypesPokemons'
import { FormStyle } from './styles'

export const FormSearchPokemon = ({ setPokemonType }) => {
  const [typesPokemons, setTypesPokemons] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    async function getType() {
      const results = await getTypesPokemons();
      setTypesPokemons(results)
      setLoader(false);
    }
    getType()
  }, [])
  const handleChange = (e) => {
    setPokemonType(e.target.value)
  }
  return (
    <FormStyle>
      {
        loader ?
          <h1>Loader...</h1>
          :
          <select name="type" defaultValue='default' onChange={handleChange}>
            <option value='default' disabled>Pokemon Type</option>
            {
              typesPokemons.map((item, index) => <option key={index} value={item.url}>
                {`${String(item.name).charAt(0).toUpperCase()}${item.name.slice(1)}`}
              </option>)
            }
          </select>
      }
    </FormStyle>
  )
}