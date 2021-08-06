import { Stack, Checkbox } from "@chakra-ui/react";
import { useAppAccept } from "../store";

import React from "react";

const AppCheckbox = ({ hasEmail }: { hasEmail: boolean }) => {
  const hasUserAccept = useAppAccept();

  const handleClick = (e: { target: { value: any } }) => {
    hasUserAccept({ acceptPrivatePolicy: !!e.target.value });
  };

  return (
    <>
      <Stack spacing={10} direction="row">
        {hasEmail ? (
          <Checkbox onChange={handleClick}>Accept</Checkbox>
        ) : (
          <Checkbox isDisabled>Accept</Checkbox>
        )}
      </Stack>
    </>
  );
};

export default AppCheckbox;
