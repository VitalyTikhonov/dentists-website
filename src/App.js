import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import Services from './components/Services/Services';
import TextSection from './components/TextSection/TextSection';
import Gallery from './components/Gallery/Gallery';
import ContactsSection from './components/ContactsSection/ContactsSection';
import Footer from './components/Footer/Footer';
import UIControls from "./components/UIControls/UIControls";
import Counter from "./components/v1/counter/Counter";

import textAboutDoctor from "./data/text-about-doctor.json";
import textEducation from "./data/text-education.json";

function App() {
  const [showHeaderTitle, setShowHeaderTitle] = useState(false);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);

  useEffect(() => {
    function toggleHeader() {
      if (window.scrollY >= 200) {
        setShowHeaderTitle(true);
      } else {
        setShowHeaderTitle(false);
      }

      if (window.scrollY >= 400) {
        setShowHeaderMenu(true);
      } else {
        setShowHeaderMenu(false);
      }
    }

    window.addEventListener('scroll', toggleHeader);

    return () => window.removeEventListener('scroll', toggleHeader);
  }, []);

  return (
    <div className="App">
      <Header showHeaderTitle={showHeaderTitle} showHeaderMenu={showHeaderMenu} />
      <main className="main">
        <Switch>
          <Route exact path='/'>
            <Cover />

            <Services />

            <TextSection textData={textAboutDoctor} columns />

            <TextSection textData={textEducation} />
            
            <Gallery />
            
            <ContactsSection />
            
            <Footer />
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
