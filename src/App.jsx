import React from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import About from './Components/About';
import UserLookup from './Components/UserLookup';
import Footer from './Components/Footer';
import AboutImage from './Components/AboutImage';
import Welcome from './Components/Welcome';
import Connections from './Components/Connections';
import Background1 from './Components/Background1';
import Groq from './Components/Groq';

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <section id="Home">
        <Background1 />
      </section>
        <Welcome />
      <br />
      <br />
      <br />
      <br />
      <section id="About">
        <About />
      </section>
      <br />
      <section id="Collect">
        <Connections />
      </section>
      <section id="userlookup">
        <UserLookup />
      </section>
      <br />
      <section id="groq">
        <Groq />
      </section>
      <br />
      <Footer />
    </div>
  );
}

export default App;
