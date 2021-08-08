import React from "react";
import { Box, VStack, Grid, Spacer, Flex } from "@chakra-ui/react";
import AppMenu from "./AppMenu";

function FrameView({ children }: { children: React.ReactNode }) {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Flex>
          <Spacer />
          <AppMenu />
        </Flex>
        <VStack spacing={8}>{children}</VStack>
      </Grid>
    </Box>
  );
}

export default FrameView;
