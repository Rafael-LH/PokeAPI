import React, { useState } from "react";

const Context = React.createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemonTypes, setPokemonType] = useState(
    "https://pokeapi.co/api/v2/type/3"
  );

  return (
    <Context.Provider value={{ pokemonTypes, setPokemonType }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
export { PokemonContextProvider };
