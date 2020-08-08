import React from "react";
import { ContainerCards } from "./style";
import CardPokemon from "@components/CardPokemon";
import PokemonType from "../../hoc/hocPokemonType";
import Loader from "../../hoc/LoaderHoc";

const ListOfCards = ({ pokemon }) => (
  <ContainerCards>
    {pokemon.map((item, index) => (
      <CardPokemon key={index} {...item} />
    ))}
  </ContainerCards>
);

export default PokemonType(Loader("pokemon")(ListOfCards));
