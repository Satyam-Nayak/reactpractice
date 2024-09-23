import React from 'react';
import Compo2 from './Compo2';

function Compo1() {
  return (
    <React.Fragment>
      <h3>React Js</h3> 
      <p>React JS codes are modified after the creation of a React app by typing this command:</p>
      <ul><li>
      <p>
        <b>
          <a href="https://legacy.reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noopener noreferrer">
             npx create-react-app my-app
          </a>
        </b>
      </p>
        </li></ul>
      
      <Compo2 />
    </React.Fragment>
  );
}

export default Compo1;
