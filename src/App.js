import React from "react";
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
import Overlay from "./components//Overlay/Overlay";

import textAboutDoctor from "./data/text-about-doctor.json";
import textEducation from "./data/text-education.json";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path='/'>
            <Cover />

            <Services />

            <TextSection textData={textAboutDoctor} columns />

            <TextSection textData={textEducation} />
            
            <Gallery />
            
            {/* <ContactsSection /> */}
            
            <Footer />
          </Route>

          {/* <Route path='/signup'>
            <Signup />
          </Route> */}

          <Route path="/ui-development">
            <UIControls />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
