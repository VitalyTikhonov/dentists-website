import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Counter } from './features/counter/Counter';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__bar">
          <a href="/" className="brand-logo">Доктор Натфуллина</a>
          <Navbar />
        </div>
      </header>
      <Switch >
        {/* <Route path="/signup">
          <Signup />
        </Route> */}

        {/* <Route path="/login">
        <Login />
      </Route> */}

        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
