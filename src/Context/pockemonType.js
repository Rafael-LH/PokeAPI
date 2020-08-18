import React, { useState } from "react";

const Context = React.createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemonTypes, setPokemonType] = useState(() => {
    //hago esto porque localStorage es sincrono de manera que si lo dejo direncto afectara un poco a la performance de la aplicación
    return window.localStorage.getItem('lastPokemonType') || "https://pokeapi.co/api/v2/type/3"
  });
  return (
    <Context.Provider value={{ pokemonTypes, setPokemonType }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
export { PokemonContextProvider };
