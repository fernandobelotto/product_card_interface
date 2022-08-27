import "@fontsource/inter/700.css";
import "@fontsource/inter/400.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    green: "#2E6434",
    gray: "#A9A9AA",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `Inter`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
