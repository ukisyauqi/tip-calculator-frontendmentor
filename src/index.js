import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./style.css";
import theme from "./theme.jsx";
import { AppProvider } from "./ContextProvider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
