/* import { useState } from "react"; */
import Form from "./Form";
import Languages from "./Languages";
import Message from "../common/Massage";
import { useAppWelcomeUser, useAppState } from "../store";
import { State } from "../types";
import { useState, useEffect } from "react";

export default function Boarding({ step }: { step: string }) {
  let current = useAppState();
  const [user, setUser] = useState<State>();
  /* const [info, setInfo] = useState({hasBusiness: false}) */
  const hasUserBusiness = useAppWelcomeUser();

  const changeHandle = (e: { target: { name: any; value: any } }) => {
    hasUserBusiness({ ...current, hasBusiness: e.target.value });
    console.log(hasUserBusiness);
  };

  useEffect(() => {
    return setUser({
      email: current.email,
      acceptPrivatePolicy: current.acceptPrivatePolicy,
    });
  }, [current.acceptPrivatePolicy, current.email]);

  let component;
  switch (step) {
    case "welcome":
      component = (
        <div>
          <Message text="Welcome"></Message>
          <code>{JSON.stringify(user)}</code>
        </div>
      );
      break;
    case "info":
      component = (
        <div>
          <p>Do you have a business?</p>
          <input name="rr" id="check" type="radio" onChange={changeHandle} />
          <label htmlFor="check">
            <span></span>yes
          </label>
        </div>
      );
      break;
    case "details":
      component = (
        <div>
          <Languages />
          {/* <p>Which language do prefer to speak with us?</p>
          <input type="radio" id="r1" name="rr" />
          <label htmlFor="r1">
            <span></span>English
          </label>
          <input type="radio" id="r2" name="rr" />
          <label htmlFor="r2">
            <span></span>Arabic
          </label>
          <input type="radio" id="r3" name="rr" />
          <label htmlFor="r3">
            <span></span>French
          </label> */}
        </div>
      );
      break;
    case "contact":
      component = (
        <div>
          <Form />
        </div>
      );
      break;
    case "goodbye":
      component = (
        <div>
          <h4>Do you often need to transfer money internationally?</h4>
          <p>
            We offer banking models that support international transactions by
            low fees and easy processes. 
          </p>
        </div>
      );
      break;
    default:
      component = (
        <div>
          <p>
            We are &Arise and offer you a straightforward banking solution from
            day one.
          </p>
        </div>
      );
  }
  return component;
}
