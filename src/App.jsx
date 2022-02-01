import {
  Box,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Spacer,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import logo from "./images/logo.svg";
import icDolar from "./images/icon-dollar.svg";
import icPerson from "./images/icon-person.svg";
import TipButton from "./components/TipButton";
import CustomInput from "./components/CustomInput";
import Display from "./components/Display";
import { AppContext } from "./ContextProvider";

export default function App() {
  const { states } = useContext(AppContext);
  const { setTipValue, peopleValue, setPeopleValue, billValue, setBillValue } =
    states;

  const options = ["5", "10", "15", "25", "50"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "5%",
    onChange: (value) => {
      setTipValue(value);
    },
  });

  const group = getRootProps();

  return (
    <Box bg="lightBlue" minH="100vh">
      <Image src={logo} mx="auto" pt="50px" pb="40px" />
      <Box
        bg="white"
        borderRadius="3xl"
        p={6}
        maxW="860px"
        mx="auto"
        boxShadow="md"
      >
        <SimpleGrid
          rows={[2, 1]}
          columns={[1, 2]}
          spacing="17px"
          color="darkTeal"
        >
          <Box>
            {/* Bill */}
            <Box p="8px">
              <Text fontWeight="semibold">Bill</Text>
              <Flex
                bg="lightGray"
                mt="5px"
                py="6px"
                px="19px"
                alignItems="center"
              >
                <Image src={icDolar} h="fit-content" />
                <Spacer />
                <Input
                  variant="unstyled"
                  fontSize="x-large"
                  fontWeight="bold"
                  placeholder="0"
                  textAlign="right"
                  ml="10px"
                  type="number"
                  value={billValue}
                  onChange={(ev) => setBillValue(ev.target.value)}
                />
              </Flex>
            </Box>

            {/* Select Tip */}
            <Box p="8px" mt="17px">
              <Text fontWeight="semibold">Select Tip %</Text>
              <SimpleGrid
                mt="19px"
                columns={[2, 3]}
                rows={[3, 2]}
                spacing="16px"
                {...group}
              >
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <TipButton key={value} {...radio}>
                      {value}
                    </TipButton>
                  );
                })}
                <CustomInput key="custom" {...getRadioProps("custom")} />
              </SimpleGrid>
            </Box>

            {/* number of people */}
            <Box p="8px" mt="14px">
              <Text fontWeight="semibold">Number of People</Text>
              <Flex
                bg="lightGray"
                mt="5px"
                py="6px"
                px="19px"
                alignItems="center"
              >
                <Image src={icPerson} h="fit-content" />
                <Spacer />
                <Input
                  variant="unstyled"
                  fontSize="x-large"
                  fontWeight="bold"
                  placeholder="0"
                  textAlign="right"
                  ml="10px"
                  type="number"
                  value={peopleValue}
                  onChange={(ev) => setPeopleValue(ev.target.value)}
                />
              </Flex>
            </Box>
          </Box>

          {/* display */}
          <Display />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
