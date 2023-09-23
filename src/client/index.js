import { createRoot } from "react-dom/client";
// import ThemeProvider from "./components/theme-provider";
import { ThemeProvider } from "styled-components";
import Provider from "./slices";
import Layout from "./components/layout";
import React from "react";
import theme from "./theme";

createRoot(document.getElementById("myapp")).render(
  <ThemeProvider theme={theme}>
    <Provider>
      <Layout />
    </Provider>
  </ThemeProvider>
);
