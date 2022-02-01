import { Box, Button, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../ContextProvider";

export default function Display() {
  const { states } = useContext(AppContext);
  const {
    tipValue,
    setTipValue,
    peopleValue,
    setPeopleValue,
    billValue,
    setBillValue,
  } = states;

  const [tipAmount, setTipAmount] = useState("0");
  const [total, setTotal] = useState("0");

  const handleReset = () => {
    setTipValue("");
    setPeopleValue("");
    setBillValue("");
    setTipAmount(0)
    setTotal(0)
  };

  useEffect(() => {
    const bill = parseInt(billValue);
    const people = parseInt(peopleValue);
    const tip = parseInt(tipValue);
    if (isNaN(bill) || isNaN(people) || isNaN(tip)) return;
    console.log("hi");

    setTipAmount((bill * tip) / 100 / people);
    setTotal(bill / people + (bill * tip) / 100 / people);
  }, [peopleValue, billValue, tipValue]);

  return (
    <Box
      bg="#00474B"
      borderRadius="2xl"
      mt="8px"
      color="white"
      p={["23px", "40px"]}
    >
      <VStack
        spacing={6}
        align="left"
        mt={4}
        h={[null, "full"]}
        pb={[null, "20px"]}
      >
        <HStack>
          <VStack align="left" spacing="0px">
            <Text fontWeight="bold">Tip Amount</Text>
            <Text fontSize="smaller" color="gray.400">
              / person
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize={["3xl", "4xl"]} fontWeight="semibold" color="teal">
            ${tipAmount}
          </Text>
        </HStack>
        <HStack>
          <VStack align="left" spacing="0px">
            <Text fontWeight="bold">Total</Text>
            <Text fontSize="smaller" color="gray.400">
              / person
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize={["3xl", "4xl"]} fontWeight="semibold" color="teal">
            ${total}
          </Text>
        </HStack>
        <Spacer />
        <Button
          bg="teal"
          _hover={{ bg: "lightTeal" }}
          _active={{ bg: "teal" }}
          onClick={handleReset}
        >
          RESET
        </Button>
      </VStack>
    </Box>
  );
}
