import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

function Hero() {
  return (
    <div>
      <Logo h="60vmin" pointerEvents="none" />
      {/* <Code>tab</Code>
      <Text>{JSON.stringify({ hero: "hero text" }, null, 6)}</Text> */}
      <Link to="/register">
        <Button>Start</Button>
      </Link>
    </div>
  );
}

export default Hero;
