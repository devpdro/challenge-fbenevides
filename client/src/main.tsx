import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { MantineProvider } from "@mantine/core";

import globalStyles from "src/presentation/styles/global.ts";
import theme from "src/presentation/styles/themes/light.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <App />
      </ThemeProvider>
    </MantineProvider>
  </StrictMode>
);
