import React from "react";
import { ContentCard, Img } from "./style";
import { useFindPokemonType } from "@hooks/useFindPokemonType";
import Loader from "../../hoc/LoaderHoc";

const CardPokemon = ({ pokemon: { url, name } }, ...props) => {
  const { getPokemonType } = useFindPokemonType(url);

  if (!getPokemonType.sprites) return <h1>Loading...</h1>;

  return (
    <ContentCard>
      <figure>
        <Img
          src={getPokemonType.sprites.other.dream_world.front_default}
          alt={name}
        />
        <h1>{name}</h1>
      </figure>
    </ContentCard>
  );
};

export default CardPokemon;

