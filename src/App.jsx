import './App.css';
import React from 'react';

import Intro from './Intro';
import Compo1 from './Compo1';
import Compo2 from './Compo2';
import Compo3 from './Compo3';
import Compo4 from './Compo4';

function App() {
  console.log("Welcome to my folder");
  return (
    <section>
      <Intro/>
      <Compo1 />
      <Compo2 />
      <Compo3/>
      <Compo4/>
    </section>
  );
}

export default App;
