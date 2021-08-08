import {
  Checkbox,
  VStack,
  Link as LinkApp,
  Text,
  Spacer,
  CheckboxGroup,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Paragraph from "./Paragraph";

import Form from "./Form";
import SubmittedModal from "./SubmittedModal";

function Onboarding({ step }: { step: string }) {
  let component;
  switch (step) {
    case "welcome":
      component = <Paragraph />;
      break;
    case "info":
      component = <Experiance />;
      break;
    case "details":
      component = <Languages />;
      break;
    case "contact":
      component = <Form />;
      break;
    default:
      component = (
        <>
          <SubmittedModal />
          <Link to="/">
            <LinkApp>
              <h1>Return home </h1>
            </LinkApp>
          </Link>
        </>
      );
  }
  return component;
}

export default Onboarding;

export const Experiance = () => {
  return (
    <VStack marginBottom="2rem">
      <Text fontSize="3xl">Hi there!</Text>
      <Spacer></Spacer>
      <Text as="h3" size="lg">
        What describe you best?
      </Text>
      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <VStack p="0.7rem">
          <Checkbox
            textAlign="left"
            alignSelf="flex-start"
            value="have_bussines"
          >
            I have already started a business.
          </Checkbox>
          <Checkbox textAlign="left" alignSelf="flex-start" value="not_started">
            I have not started my business yet, but I wish to do so.
          </Checkbox>
          <Checkbox
            textAlign="left"
            alignSelf="flex-start"
            value="use_services_only"
          >
            I do not want to be a businessperson, but I want to use your
            services anyways.
          </Checkbox>
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};

export const Languages = () => {
  return (
    <VStack marginBottom="2rem">
      <Text fontSize="3xl">
        Do you want to be the first to test our application for free?
      </Text>
      <Spacer></Spacer>
      <Text as="h3" size="lg">
        You can help us to develop new features by being our test user.
      </Text>
      <CheckboxGroup colorScheme="green" defaultValue={["want_test"]}>
        <VStack p="0.7rem">
          <Radio textAlign="left" alignSelf="flex-start" value="want_test">
            Yes, I want to get a test version for free and give feedback.
          </Radio>
          <Radio textAlign="left" alignSelf="flex-start" value="only_imformed">
            No, I only want to be informed when the bank account is ready.
          </Radio>
        </VStack>
        <Spacer></Spacer>
        <Checkbox
          textAlign="left"
          alignSelf="flex-start"
          value="use_services_only"
        >
          I agree to the Data <Link to="/">Privacy Policy.</Link>
        </Checkbox>
      </CheckboxGroup>
    </VStack>
  );
};
