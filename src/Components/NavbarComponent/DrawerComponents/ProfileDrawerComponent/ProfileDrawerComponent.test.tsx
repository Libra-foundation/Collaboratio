import React from "react";
import {fireEvent, render, type RenderResult} from "@testing-library/react";
import ProfileDrawerComponent from "./ProfileDrawerComponent";

describe("Light and dark tests", () => {
  const [IS_OPEN_MENU, SetOpenMenu] = React.useState(false);

  const HandleOpenMenu = (): void => {
    SetOpenMenu((is_open) => !is_open);
  };

  const {getByTestId}: RenderResult = render(
    <ProfileDrawerComponent isOpen={IS_OPEN_MENU} Close={HandleOpenMenu} />
  );

  test("Change light and dark icon", () => {});

  test("Change light and dark test", () => {});

  test("If theme mode button work", () => {
    const THEME_BUTTON: HTMLElement = getByTestId("ChangeThemeButton");
    fireEvent.click(THEME_BUTTON);
  });
});
