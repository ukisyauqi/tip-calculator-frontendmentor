import { createContext, useRef, useState } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [tipValue, setTipValue] = useState("")
  const [billValue, setBillValue] = useState("");
  const [peopleValue, setPeopleValue] = useState("");

  const myFun1 = () => {
    console.log("Hi");
  };
  const myFun2 = () => {
    console.log("Hi");
  };
  const myFun3 = () => {
    console.log("Hi");
  };

  const states = {
    tipValue, setTipValue,billValue, setBillValue,peopleValue, setPeopleValue
  };

  const functions = {
    myFun1,
    myFun2,
    myFun3,
  };

  return (
    <AppContext.Provider value={{ states, functions }}>
      {props.children}
    </AppContext.Provider>
  );
};
