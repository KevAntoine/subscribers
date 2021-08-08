import { Container, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import FrameView from "./FrameView";
import Onboarding from "./Onboarding";

function Register() {
  const steps = ["welcome", "info", "details", "contact"];
  const [step, setStep] = useState(0);
  return (
    <FrameView>
      <Container>
        <Box onClick={() => setStep(step + 1)}>
          <Onboarding step={steps[step]} />
        </Box>
        {step >= 3 ? null : (
          <Button
            size="lg"
            colorScheme="green"
            mt="24px"
            onClick={() => setStep(step + 1)}
          >
            Continue
          </Button>
        )}
      </Container>
    </FrameView>
  );
}

export default Register;
