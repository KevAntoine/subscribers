import { Checkbox, VStack, Link as LinkApp, Text, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";

function Onboarding({ step }: { step: string }) {
  let component;
  switch (step) {
    case "welcome":
      component = <Form />;
      break;
    case "info":
      component = <Experiance />;
      break;
    case "details":
      component = <Languages />;
      break;
    default:
      component = (
        <Link to="/">
          <LinkApp>
            <h1>Return home </h1>
          </LinkApp>
        </Link>
      );
  }
  return component;
}

export default Onboarding;

export const Experiance = () => {
  return (
    <VStack marginBottom="2rem">
      <Text fontSize="3xl">Hi there, guest</Text>
      <Spacer></Spacer>
      <Text>What describe you best?</Text>
      <Checkbox>I have already started a business.</Checkbox>
      <Checkbox>
        I have not started my business yet, but I wish to do so.
      </Checkbox>
      <Checkbox>
        I do not want to be a businessperson, but I want to use your services
        anyways.
      </Checkbox>
    </VStack>
  );
};

export const Languages = () => {
  return (
    <VStack marginBottom="2rem">
      <Checkbox>Language 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </VStack>
  );
};
