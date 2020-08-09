import React, { useState } from "react";
import { useFindPokemonType } from "@hooks/useFindPokemonType";

const hocPokemonType = (Component) => {
  const pokemon = (props) => {
    const [pokemonType, setPokemonType] = useState(
      "https://pokeapi.co/api/v2/type/3"
    );

    const {
      getPokemonType: { pokemon },
    } = useFindPokemonType(pokemonType);

    const handlePokemonType = (type) => setPokemonType(type);

    return (
      <Component
        {...props}
        pokemon={pokemon}
        handlePokemonType={handlePokemonType}
        pokemonType={pokemonType}
      />
    );
  };

  pokemon.displayName = "<PokemonType>";
  return pokemon;
};

export default hocPokemonType;
