import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Counter } from './features/counter/Counter';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/" className="brand-logo">Доктор Натфуллина</a>
        <Navbar />
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
