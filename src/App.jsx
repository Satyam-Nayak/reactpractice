import './App.css';
import Compo1 from './Compo1';

function App() {
  console.log("Welcome to my folder");
  return (
    <>
      <h1>Hello React Devlopers</h1>
      <p>
        Here we Start our React Js journey
      </p>
      <Compo1 />
      <h2>Before create the react app we have to run this command .</h2>
      <ul>
        <li>
      <p>
        <a href="#">npm install -g create-react-app</a>
        </p>
        </li>
        </ul>
      
      <div>
  <h3>Why run this?</h3>
  <ul>
    <li>`npm install -g create-react-app` was used to globally install `create-react-app` for setting up React applications.</li>
    <li>This allowed the `create-react-app` command to be run from anywhere on your system.</li>
    <li>The command is now deprecated.</li>
    <li>The recommended approach is to use `npx create-react-app my-app`.</li>
    <li>Using `npx` ensures you use the latest version without requiring a global installation.</li>
  </ul>
</div>
    </>
  );
}

export default App;
