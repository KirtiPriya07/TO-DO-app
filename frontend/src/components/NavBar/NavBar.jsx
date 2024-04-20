import React from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Theme } from "../Theme/Theme";

export const NavBar = () => {
  const { logout } = useAuth();
  return (
    <Box minHeight="100vh">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg={useColorModeValue("green.300", "green.600")}
        color="white"
      >
        <Text as="h2" fontSize={24} fontWeight="bold">
          TODO LIST
        </Text>
        <Stack direction="row" align="center" spacing={4}>
          <Theme size="lg" />
          <Button onClick={logout} colorScheme="green">
            Logout
          </Button>
        </Stack>
      </Flex>
      <Outlet />
    </Box>
  );
};
