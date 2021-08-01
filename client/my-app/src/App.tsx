import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import strategy from "./assets/img/business-entrepreneur-make-strategy-for-product-and-funding-1862193.png";
import logo from "./assets/img/logo.png";
import Boarding from "./Boarding";

import { Provider, useAppState } from "./store";

import "./assets/sass/main.scss";
import "./App.css";

function App() {
  return (
    <Provider initialState={{ name: "user" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
function Home() {
  const currentState = useAppState();

  const [state, setState] = useState("");
  useEffect(() => {
    fetch("http://localhost:4040/")
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []);
  return (
    <div className="main-container">
      <header className="App-header">
        <code>{JSON.stringify(currentState, null)}</code>
        <img src={logo} className="App-logo" alt="andarise logo" />
        <img src={strategy} className="App-logo" alt="andarise logo" />
        <code>{JSON.stringify(state, null)}</code>
        <Link to="/register">
          <button>pre-register</button>
        </Link>
      </header>
    </div>
  );
}

function Register() {
  const steps = ["welcome", "info", "details", "contact", "goodbye"];
  const [step, setStep] = useState(0);

  return (
    <div className="App-header">
      <div>
        <img className="App-logo" src={logo} alt="andarise_logo" />
      </div>
      <Boarding step={steps[step]}></Boarding>
      <button onClick={() => setStep(step + 1)}>next</button>
    </div>
  );
}
export default App;
