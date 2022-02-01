import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useRadio,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState, useContext } from "react";
import { AppContext } from "../ContextProvider";

export default function CustomInput(props) {
  const { states } = useContext(AppContext)
  const { tipValue, setTipValue } = states
  const [customInputValue, setCustomInputValue] = useState("");

  const { getInputProps, getCheckboxProps } = useRadio(props);
  const inputGroupRef = useRef();
  const inputRef = useRef();
  const checkRef = useRef()

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const handleChange = (ev) => {
    if (ev.target.value > 100) return;
    setCustomInputValue(ev.target.value);
    
    inputGroupRef.current.click();
    inputRef.current.focus();
    setTipValue(ev.target.value)
  };
  return (
    <Box as="label" >
      <input {...input} ref={checkRef} />
      <InputGroup
        {...checkbox}
        ref={inputGroupRef}
        cursor="pointer"
        h="full"
        borderRadius="md"
        textAlign="center"
        overflow="hidden"
      >
        <Input
          ref={inputRef}
          size="lg"
          variant="unstyled"
          textAlign="center"
          bg="lightGray"
          fontSize="2xl"
          fontWeight="bold"
          type="number"
          placeholder="Custom"
          value={customInputValue}
          onChange={handleChange}
        />
        <Text
          position="absolute"
          fontSize="2xl"
          right={["20px", "20px"]}
          top="10%"
          display={customInputValue ? "block" : "none"}
        >
          %
        </Text>
      </InputGroup>
    </Box>
  );
}
