import React, { Suspense, useEffect } from "react";

import "./assets/sass/main.scss";
import "./App.css";
import AppRouter from "./Router";

function App() {
  useEffect(() => {
    console.log("app");
  }, []);
  return (
    <>
      <Suspense fallback={<span>loading...</span>}>
        <AppRouter />
      </Suspense>
    </>
  );
}
export default App;
