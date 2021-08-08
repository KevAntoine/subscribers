import { Container, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import FrameView from "./FrameView";
import Onboarding from "./Onboarding";

function Register() {
  const steps = ["welcome", "info", "details", "contact", "goodbye"];
  const [step, setStep] = useState(0);
  return (
    <FrameView>
      <Container>
        <Box>
          <Onboarding step={steps[step]} />
        </Box>
        {step === 0 || 3 ? null : (
          <Button onClick={() => setStep(step + 1)}>Continue</Button>
        )}
      </Container>
    </FrameView>
  );
}

export default Register;
