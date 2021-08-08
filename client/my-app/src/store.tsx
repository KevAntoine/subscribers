import axios from "axios";
import { createContext, useCallback, useReducer, useContext } from "react";
import { State, ActionType } from "./types";

type useAppStateType = ReturnType<typeof useAppContext>;

const defaultState: State = {
  name: "guest",
  email: "mail@server.com",
  password: "1234",
  hasBusiness: ["start", "wants_to", "wants_acc"],
  languages: ["es", "en", "arabic"],
  acceptPrivatePolicy: false,
};

const appContext = createContext<useAppStateType>({
  state: defaultState,
  //privatePolicyAccepted: () => true || false,
  welcomeUser: () => {},
  registerUser: () => {},
  //languages: () => [],
});

export function useAppContext(initState: State): {
  state: State;
  registerUser: (data: State) => void;
  welcomeUser: (data: State) => void;
  //privatePolicyAccepted: (data: { acceptPrivatePolicy: boolean }) => Boolean;
  //languages: (data: string[]) => string[];
} {
  const [state, dispatch] = useReducer(
    (state: State, action: ActionType): State => {
      switch (action.type) {
        case "WELCOME":
          return {
            ...state,
            email: action.email,
            acceptPrivatePolicy: action.acceptPrivatePolicy,
            hasBusiness: action.hasBusiness,
          };
        case "SETTINGS":
          return {
            ...state,
            languages: action.languages,
          };
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
  const welcomeUser = useCallback(
    (data: State): State => {
      dispatch({
        type: "WELCOME",
        email: data.email,
        hasBusiness: data.hasBusiness!,
        acceptPrivatePolicy: data.acceptPrivatePolicy!,
      });
      return state;
    },
    [state]
  );

 /*  const languages = useCallback((data: string[]): string[] => {
    let languages = data;
    dispatch({ type: "SETTINGS", languages });
    return languages;
  }, []); */
  const registerUser = useCallback((data) => {
    console.log(data);
    let body = {
      name: data.name,
      email: data.email,
      password: data.password,
      hasBusiness: data.hasBusiness,
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
  return { state, registerUser, welcomeUser};
}

export const useAppState = (): State => {
  const { state } = useContext(appContext);
  return state;
};

export const useAppRegister = (): useAppStateType["registerUser"] => {
  const { registerUser } = useContext(appContext);
  return registerUser;
};
export const useAppWelcomeUser = (): useAppStateType["welcomeUser"] => {
  const { welcomeUser } = useContext(appContext);
  return welcomeUser;
};
/* export const useAppLaguages = (): useAppStateType["languages"] => {
  const { languages } = useContext(appContext);
  return languages;
}; */

export const Provider: React.FunctionComponent<{ initialState: State }> = ({
  initialState,
  children,
}) => (
  <appContext.Provider value={useAppContext(initialState)}>
    {children}
  </appContext.Provider>
);
