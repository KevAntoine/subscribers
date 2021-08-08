import React, { Suspense, useEffect } from "react";

import AppRouter from "./Router";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "./store";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

function App() {
  useEffect(() => {
    console.log("app");
  }, []);
  return (
    <>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<span>loading...</span>}>
          <Provider initialState={{ acceptPrivatePolicy: false }}>
            <AppRouter />
          </Provider>
        </Suspense>
      </ChakraProvider>
    </>
  );
}
export default App;
