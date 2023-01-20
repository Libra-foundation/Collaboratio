import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import ProfileDrawerComponent from "./ProfileDrawerComponent";
import {createTheme, type Theme, ThemeProvider} from "@mui/material";
import {COLORMODECONTEXT} from "../../../../Context/ThemeContext";

describe("Light and dark tests", () => {
  let is_open_menu: boolean = true;
  let mode: "dark" | "light" = "dark";

  const SetMode = (new_val: Readonly<"dark" | "light">): void => {
    mode = new_val;
  };

  const COLORMODE: {ToggleColorMode: () => void} = {
    ToggleColorMode: (): void => {
      SetMode(
        ((): "dark" | "light" => (mode === "light" ? "dark" : "light"))()
      );
    },
  };

  const THEME: Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  Object.defineProperty(THEME.palette, "mode", {
    get: () => {
      return mode;
    },
  });

  const Render = (): void => {
    render(
      <COLORMODECONTEXT.Provider value={COLORMODE}>
        <ThemeProvider theme={THEME}>
          <ProfileDrawerComponent
            isOpen={is_open_menu}
            Close={(): void => {
              is_open_menu = !is_open_menu;
            }}
          />
        </ThemeProvider>
      </COLORMODECONTEXT.Provider>
    );
  };

  test("If dark text work", () => {
    Render();
    expect(screen.getByText(/dark/i)).toBeVisible();
  });

  test("If theme mode button work", () => {
    Render();
    const THEME_BUTTON: HTMLElement = screen.getByTestId("ChangeThemeButton");
    fireEvent.click(THEME_BUTTON);
    expect(THEME.palette.mode).toBe("light");
  });

  test("If light text work", () => {
    Render();
    expect(screen.getByText(/light/i)).toBeVisible();
  });
});
