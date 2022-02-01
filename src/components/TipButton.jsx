import { Box, Button, useRadio } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

export default function TipButton(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        bg="darkTeal"
        color="white"
        fontSize="2xl"
        borderRadius="md"
        _checked={{
          bg: "teal",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        py={1.5}
        textAlign="center"
      >
        {props.children}%
      </Box>
    </Box>
  );
}
