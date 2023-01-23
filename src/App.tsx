import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  type Theme,
} from "@mui/material";
import React from "react";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import {COLORMODECONTEXT} from "./Context/ThemeContext";
import {RouterProvider} from "react-router-dom";
import {ROUTES} from "./Routes/Routes";

function App(): JSX.Element {
  const [MODE, SetMode] = React.useState<"dark" | "light">("dark");

  const COLORMODE: {ToggleColorMode: () => void} = React.useMemo(
    () => ({
      ToggleColorMode: (): void => {
        SetMode((prev_mode) => (prev_mode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const THEME: Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: MODE,
        },
      }),
    [MODE]
  );

  return (
    <COLORMODECONTEXT.Provider value={COLORMODE}>
      <ThemeProvider theme={THEME}>
        <RouterProvider router={ROUTES} />
        <CssBaseline />
        <NavbarComponent />
      </ThemeProvider>
    </COLORMODECONTEXT.Provider>
  );
}

export default App;
