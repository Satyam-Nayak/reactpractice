import React from "react";

function Compo2() {
  return (
    <React.Fragment>
      <h2>Before creating the react app, run this command:</h2>
      <ul>
        <li>
          <button style={{borderRadius:"20px"}}
            onClick={() =>
              alert("Command: npm install -g create-react-app")}>
           <h4>npm install -g create-react-app</h4> 
          </button>
        </li>
      </ul>
      <div>
        <h3>Why run this?</h3>
        <ul>
          <li>
            `npm install -g create-react-app` was used to globally install
            `create-react-app` for setting up React applications.
          </li>
          <li>
            This allowed the `create-react-app` command to be run from anywhere
            on your system.
          </li>
          <li>The command is now deprecated.</li>
          <li>
            The recommended approach is to use `npx create-react-app my-app`.
          </li>
          <li>
            Using `npx` ensures you use the latest version without requiring a
            global installation.
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Compo2;
