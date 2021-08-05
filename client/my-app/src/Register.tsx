import React, { useState } from "react";
import Boarding from "./Boarding";

const Register = () => {
  const steps = ["welcome", "info", "details", "contact", "goodbye"];
  const [step, setStep] = useState(0);

  return (
    <div className="App-header">
      {/* <div>
        <img className="App-logo" src={logo} alt="andarise_logo" />
      </div> */}
      <Boarding step={steps[step]}></Boarding>
      <button onClick={() => setStep(step + 1)}>next</button>
    </div>
  );
};

export default Register;
