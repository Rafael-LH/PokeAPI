import React from "react";
import { Router } from "@reach/router";
import Home from "@page/Home";
import { Layout } from "@components/Layout";

import { PokemonContextProvider } from '../Context/pockemonType'

export const App = () => (
  <Layout>
    <PokemonContextProvider>
      <Router>
        <Home path="/" />
      </Router>
    </PokemonContextProvider>
  </Layout>
);
