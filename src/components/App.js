import React from "react";
import { Router } from "@reach/router";
import Home from "@page/Home";
import { Layout } from "@components/Layout";

export const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
    </Router>
  </Layout>
);
