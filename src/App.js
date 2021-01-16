import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Counter from './components/counter/Counter';
import Navbar from './components/navbar/Navbar';
import DoctorProfile from './components/page-section/PageSection';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.headerBar}>
          <a href="/" className={styles.headerBarLogo}>
            <span className={styles.headerBarName} >Наталья&nbsp;Натфуллина</span>
            Стоматолог
            </a>
          <Navbar />
        </div>
      </header>
      <Switch >
        <Route exact path="/">
          <DoctorProfile />
        </Route>

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
