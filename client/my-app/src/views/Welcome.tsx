import React, { useContext, useState } from "react";
import {
  setSessionCookie,
  getSessionCookie,
  SessionContext,
} from "../sessions";
import { useHistory } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import AppCheckbox from "../common/Checkbox";

import { useAppWelcomeUser } from "../store";

export const Welcome: React.SFC = () => {
  let history = useHistory();
  const userWelcome = useAppWelcomeUser();
  const [email, setEmail] = useState("");
  //console.log(useContext(SessionContext));

  const { setSession } = useContext(SessionContext);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    let data = {
      name: "Medreco",
      email: email,
      password: "1234",
      hasBusiness: false,
      languages: [],
      acceptPrivatePolicy: true,
    };
    e.preventDefault();
    try {
      userWelcome(data);
      setSessionCookie(email);
      setSession(getSessionCookie());
      history.push("/register");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <Box>
        <Center>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className="btc" type="submit" value="subscribe" />
          </form>
          <AppCheckbox hasEmail={!!email} />
        </Center>
      </Box>
    </div>
  );
};
