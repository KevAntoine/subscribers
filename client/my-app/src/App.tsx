import React, {
  useEffect,
  useState,
  useReducer,
  useCallback,
  createContext,
  useContext,
} from "react";
import logo from "./assets/img/logo.png";
import strategy from "./assets/img/business-entrepreneur-make-strategy-for-product-and-funding-1862193.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import "./assets/sass/main.scss";
import "./App.css";
import axios from "axios";

interface State {
  name?: string;
  email?: string;
}

type ActionType = {
  type: "REGISTER";
  name: string;
  email: string;
};

type useAppStateType = ReturnType<typeof useAppContext>;

const defaultState: State = {
  name: "guest",
  email: "mail@server.com",
};

const appContext = createContext<useAppStateType>({
  state: defaultState,
  registerUser: () => {},
});

function useAppContext(initState: State): {
  state: State;
  registerUser: (data: State) => void;
} {
  const [state, dispatch] = useReducer(
    (state: State, action: ActionType): State => {
      switch (action.type) {
        case "REGISTER":
          return {
            ...state,
            name: action.name,
            email: action.email,
          };
        default:
          return defaultState;
      }
    },
    initState
  );
  const registerUser = useCallback((data) => {
    let body = {
      name: data.name,
      email: data.email,
    };
    let response = axios.post("http://locahost:3000/register", body, {
      headers: { "Content-Type": "application/json" },
    });
    response.then((result) => {
      if (result.data) {
        console.log(result.data);
        dispatch({
          type: "REGISTER",
          name: data.name,
          email: data.email,
        });
      } else {
        console.log(result);
      }
    });
  }, []);
  return { state, registerUser };
}

const Provider: React.FunctionComponent<{ initialState: State }> = ({
  initialState,
  children,
}) => (
  <appContext.Provider value={useAppContext(initialState)}>
    {children}
  </appContext.Provider>
);

const useAppState = (): State => {
  const { state } = useContext(appContext);
  return state;
};

const useAppRegister = (): useAppStateType["registerUser"] => {
  const { registerUser } = useContext(appContext);
  return registerUser;
};

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
    fetch("http://localhost:3000/")
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

type Subscriber = {
  firstName: string;
  lastName: string;
  email: string;
};

function Register() {
  const userRegister = useAppRegister();
  const { register, handleSubmit } = useForm<Subscriber>();
  const onSubmit: SubmitHandler<Subscriber> = (data) => userRegister  (data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <input type="email" {...register("email")} />

      <input type="submit" />
    </form>
  );
}

export default App;
