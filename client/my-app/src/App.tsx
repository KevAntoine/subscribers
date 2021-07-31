import React, { useEffect, useState } from "react";
import logo from './assets/img/logo.png'
import './assets/sass/main.scss'
import "./App.css";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{JSON.stringify(state, null)}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
