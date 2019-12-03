import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Layout'
import Inicio from "../Views/inicio"

export default function App() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
                <Route exact path="/" component={Inicio}/>
            </Switch>
          </Layout>
        </BrowserRouter>
      );
}
