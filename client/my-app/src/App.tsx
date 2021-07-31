import React, { useEffect, useState } from "react";
import logo from "./assets/img/logo.png";
import strategy from "./assets/img/business-entrepreneur-make-strategy-for-product-and-funding-1862193.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/sass/main.scss";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </Router>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">About</Link>
    </nav>
  );
}

function Home() {
  const [state, setState] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []);
  return (
    <div className="main-container">
      <header className="App-header">
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
  return <div>REGISTER</div>;
}

export default App;
