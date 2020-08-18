import React, { useContext } from "react";
import ListOfCards from "@components/ListOfCards";
import FormSearchPokemon from "@components/FormSearchPokemon";
import PokemonContext from '../../Context/pockemonType'

const Home = () => {
  const { pokemonTypes } = useContext(PokemonContext)
  return (
    <>
      <FormSearchPokemon />
      <ListOfCards pokemonTypes={pokemonTypes} />
    </>
  );
};

export default Home;
