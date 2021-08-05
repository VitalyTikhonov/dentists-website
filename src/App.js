import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import Services from './components/Services/Services';
import UIControls from "./components/UIControls/UIControls";
import Counter from "./components/v1/counter/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path='/'>
            <Cover />
            <Services />
          </Route>

          {/* <Route path='/signup'>
          <Signup />
        </Route> */}

          <Route path="/ui-development">
            <UIControls />
          </Route>

          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
