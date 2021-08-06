import React, { useState } from "react";
import { History } from "history";
import Boarding from "../components/Boarding";
import { useAppState } from "../store";

interface ChildComponentProps {
  history: History;
}

const Register: React.SFC<ChildComponentProps> = () => {
  let current = useAppState();
  const steps = ["welcome", "info", "details", "contact", "goodbye"];
  const [step, setStep] = useState(0);

  return (
    <div className="App-header">
      <code>{JSON.stringify(current)}</code>
      {/* <div>
        <img className="App-logo" src={logo} alt="andarise_logo" />
      </div> */}
      <Boarding step={steps[step]}></Boarding>
      <button onClick={() => setStep(step + 1)}>next</button>
    </div>
  );
};

export default Register;
