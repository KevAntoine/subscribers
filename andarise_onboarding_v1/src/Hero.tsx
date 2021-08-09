import { Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import SubmittedModal from "./SubmittedModal";

function Hero() {
  const [IsSubmit, setIsSubmit] = useState(false);

  return (
    <div onClick={() => setIsSubmit(!IsSubmit)}>
      {IsSubmit ? (
        <SubmittedModal />
      ) : (
        <Link to="/register">
          <Button>Start</Button>
        </Link>
      )}
      <Center>
        <Logo h="60vmin" pointerEvents="none" />
      </Center>
      {/* <Code>tab</Code>
      <Text>{JSON.stringify({ hero: "hero text" }, null, 6)}</Text> */}
    </div>
  );
}

export default Hero;
