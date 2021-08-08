import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { InfoIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function AppMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HamburgerIcon m="1rem" onClick={onOpen} />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Settings</DrawerHeader>
          <DrawerBody>
            <Flex justifyContent="flex-start">
              <ColorModeSwitcher p="0.7rem" />
              <Box m="0.7rem">
                <Text fontWeight="semibold">
                  Toggle Mode{" "}
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "lighter",
                      color: "gray",
                    }}
                  >
                    drak
                  </span>
                </Text>
              </Box>
            </Flex>
            <hr />
            <Flex justifyContent="flex-start">
              <Box p="0.7rem">
                <InfoIcon />
              </Box>
              <Box m="0.7rem">
                <Link>Private Policy</Link>
              </Box>
            </Flex>
            <hr />
            <Flex justifyContent="flex-start">
              <Box p="0.7rem">
                <InfoIcon />
              </Box>
              <Box m="0.7rem">
                <Link>Imprint</Link>
              </Box>
            </Flex>
            <hr />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
