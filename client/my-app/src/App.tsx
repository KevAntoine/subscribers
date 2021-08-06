import React, { Suspense, useEffect } from "react";

import "./assets/sass/main.scss";
import "./App.css";
import AppRouter from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "./store";

function App() {
  useEffect(() => {
    console.log("app");
  }, []);
  return (
    <>
      <Suspense fallback={<span>loading...</span>}>
        <Provider initialState={{ acceptPrivatePolicy: false }}>
          <ChakraProvider>
            <AppRouter />
          </ChakraProvider>
        </Provider>
      </Suspense>
    </>
  );
}
export default App;
