import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../store";

const Home = () => {
  const currentState = useAppState();
  console.log(currentState);

  const [state, setState] = useState("");
  useEffect(() => {
    console.log('Home component loaded!')
    fetch("http://localhost:4040/")
      .then((res) => res.json())
      .then((json) => setState(json));
  }, []);
  return (
    <div className="main-container">
      <header className="App-header">
        <code>{JSON.stringify(currentState, null)}</code>
        <code>{JSON.stringify(state, null)}</code>
        <Link to="/register">
          <button>pre-register</button>
        </Link>
      </header>
    </div>
  );
};

export default Home;
