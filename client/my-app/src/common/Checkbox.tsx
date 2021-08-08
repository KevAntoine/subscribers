import { Stack, Checkbox } from "@chakra-ui/react";
import {} from "../store";

import React from "react";

const AppCheckbox = ({ hasEmail }: { hasEmail: boolean }) => {
  return (
    <>
      <Stack spacing={10} direction="row">
        {hasEmail ? (
          <Checkbox onChange={(e) => console.log(e.target.value)}>
            Accept
          </Checkbox>
        ) : (
          <Checkbox isDisabled>Accept</Checkbox>
        )}
      </Stack>
    </>
  );
};

export default AppCheckbox;
