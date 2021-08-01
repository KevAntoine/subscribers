import axios from "axios";
import { createContext, useCallback, useReducer, useContext } from "react";
import {State, ActionType} from './types'

type useAppStateType = ReturnType<typeof useAppContext>;

const defaultState: State = {
  name: "guest",
  email: "mail@server.com",
  password: "1234",
  hasBusiness: false,
  languages: ["es", "en", "arabic"],
};

const appContext = createContext<useAppStateType>({
  state: defaultState,
  registerUser: () => {},
});

export function useAppContext(initState: State): {
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
            password: action.password,
            hasBusiness: action.hasBusiness,
            languages: action.languages,
          };
        default:
          return defaultState;
      }
    },
    initState
  );
  const registerUser = useCallback((data) => {
    console.log(data);
    let body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    let response = axios.post("http://localhost:4040/users/register", body, {
      headers: { "Content-Type": "application/json" },
    });
    response.then((result) => {
      if (result.data) {
        console.log(result.data);
        dispatch({
          type: "REGISTER",
          name: data.name,
          email: data.email,
          password: data.password,
        });
      } else {
        console.log(result);
      }
    });
  }, []);
  return { state, registerUser };
}

export const Provider: React.FunctionComponent<{ initialState: State }> = ({
  initialState,
  children,
}) => (
  <appContext.Provider value={useAppContext(initialState)}>
    {children}
  </appContext.Provider>
);

export const useAppState = (): State => {
  const { state } = useContext(appContext);
  return state;
};


export const useAppRegister = (): useAppStateType["registerUser"] => {
  const { registerUser } = useContext(appContext);
  return registerUser;
};