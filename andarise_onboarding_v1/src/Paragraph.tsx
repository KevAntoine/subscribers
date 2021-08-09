import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Paragraph = () => {
  return (
    <div>
      <Box maxW="32rem">
        <Heading mb={4}>This Block has not Header</Heading>
        <Text fontSize="xl">
          The early bird catches the worm, but this time the worm is not ready
          yet. While our banking products are currently build, you can already
          pre-register and be the first to use our services. Leave your contact
          here and we will let you know when are bank account is ready. You only
          pay, when you really register to the bank account later. Let's create
          a million businesses together!
        </Text>
      </Box>
    </div>
  );
};

export default Paragraph;
