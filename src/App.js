import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Counter from './components/counter/Counter';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.headerBar}>
          <a href="/" className={styles.brandLogo}>Доктор Натфуллина</a>
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
