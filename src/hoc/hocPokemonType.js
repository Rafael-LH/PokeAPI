import React, { useState } from "react";
import { useFindPokemonType } from "@hooks/useFindPokemonType";

const hocPokemonType = (Component) => {
  const pokemon = (props) => {
    window.localStorage.setItem('lastPokemonType', props.pokemonTypes)
    const [pokemonType, setPokemonType] = useState(props.pokemonTypes);
    const {
      getPokemonType: { pokemon },
    } = useFindPokemonType(props.pokemonTypes);

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
