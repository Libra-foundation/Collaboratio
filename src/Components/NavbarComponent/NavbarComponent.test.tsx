import React from "react";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import NavbarComponent from "./NavbarComponent";

describe("Test if drawers open", function () {
  const Render = (): void => {
    render(<NavbarComponent />);
  };

  test("If profile drawer open and close", async () => {
    Render();
    const BUTTON_PROFILE_DRAWER: HTMLElement = screen.getByTestId(
      "ButtonOpenProfileDrawer"
    );
    fireEvent.click(BUTTON_PROFILE_DRAWER);
    expect(screen.getByTestId("ThemeButtonIcon")).toBeVisible();
    fireEvent.click(BUTTON_PROFILE_DRAWER);
    await waitFor(() => {
      expect(screen.queryByTestId("ThemeButtonIcon")).not.toBeInTheDocument();
    });
  });

  test("If menu drawer open and close", async () => {
    Render();
    const BUTTON_MENU_DRAWER: HTMLElement = screen.getByTestId(
      "ButtonOpenMenuDrawer"
    );
    fireEvent.click(BUTTON_MENU_DRAWER);
    expect(screen.getByTestId("MenuListItem")).toBeVisible();
    fireEvent.click(BUTTON_MENU_DRAWER);
    await waitFor(() => {
      expect(screen.queryByTestId("ThemeButtonIcon")).not.toBeInTheDocument();
    });
  });

  test("If Collaboratio name is on screen", () => {
    Render();
    expect(screen.getByText(/Collaboratio/i)).toBeVisible();
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
    expect(screen.getByText(/Collaboratio/i)).toBeVisible();
  });
});
