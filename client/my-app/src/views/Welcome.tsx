import React, { useContext, useState } from "react";
import {
  setSessionCookie,
  getSessionCookie,
  SessionContext,
} from "../sessions";
import { useHistory } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";

import { useAppWelcomeUser } from "../store";

export const Welcome: React.SFC = () => {
  let history = useHistory();
  const userWelcome = useAppWelcomeUser();
  const [email, setEmail] = useState("");

  const { setSession } = useContext(SessionContext);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    let data = {
      name: email,
      email: email,
      password: "welcome",
      hasBusiness: [],
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
    <Container maxW="xl" centerContent>
      <Box padding="4" bg="gray.100" maxW="3xl">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="btc" type="submit" value="subscribe" />
        </form>
      </Box>
    </Container>
  );
};
