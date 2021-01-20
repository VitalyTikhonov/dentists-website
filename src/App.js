import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main} >
        <Switch>
          <Route exact path='/'>
            <DoctorProfile />
          </Route>

          {/* <Route path='/signup'>
          <Signup />
        </Route> */}

          {/* <Route path='/login'>
        <Login />
      </Route> */}

          <Route path='/counter'>
            <Counter />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
