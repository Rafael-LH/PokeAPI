import React from "react";
import ListOfCards from "@components/ListOfCards";
import FormSearchPokemon from "@components/FormSearchPokemon";

import PokemonType from "../../hoc/hocPokemonType";

const Home = (props) => {
  const { pokemonTypes, handlePokemonType } = props;

  return (
    <>
      <FormSearchPokemon handlePokemonType={handlePokemonType} />
      <ListOfCards pokemonType={pokemonTypes} />
    </>
  );
};

export default PokemonType(Home);
