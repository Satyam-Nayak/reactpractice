import React from 'react'

 function Compo4() {
  return (
    <React.Fragment>
        <div>
        <h1>Steps to install "React JS"</h1>
        <ul>
            <li>React JS is a frame work that is available on <a href="https://docs.npmjs.com/about-npm" style={{color:"yellow"}}> "npm" </a> website</li>
        </ul>
        </div>
        <br />

        <div>
        <h2 >"npm" : </h2>
        <ul>
            <li>npm stands for (Node Package Manager).</li>
            <li>npm is a collection of JavaScript libraries and resources that can be utilized in any JavaScript application.</li>
            <li>npm resources can be downloaded with the help of the Node.js application.</li>
            <li>Node.js is a server-side application that allows the user to run JavaScript programs on any system.</li>
            <li>Node.js is a runtime environment that allows you to execute JavaScript on the server-side (outside of a browser). It provides a command-line interface (CLI) to perform backend operations using JavaScript.</li>
            <li>Node.js can create a server to handle requests and responses for JavaScript applications, enabling the development of server-side applications and APIs.</li>
            <li>Node JS.org</li>
        </ul>
        </div>

        <div>
          <h2>How to create a React Application ?</h2>
          <h3>To create a React application we need to set up a react app</h3>
          <ul>
          <li style={{ color: "white" }}>
            Command:{" "}
            <a href="https://chatgpt.com/share/670dd23b-2124-8013-9532-0d14517b1292" target="_blank" rel="noopener noreferrer" style={{ color: "yellow" }}>
            npm install -g create-react-app <p>(using this cmd we can set the react APP globaly)</p> 
            </a>
            </li>
            <li>To install a react app we have to run the this cmnd syntax in the trminal:{" "} 
              <a href="https://create-react-app.dev/docs/getting-started" target="_blank"  rel="noopener noreferrer" style={{ color:"yellow"}}> npx create-react-app my_app_name</a></li>
          </ul>
        </div>
    </React.Fragment>
  )
}
export default Compo4

