import React from "react";
import {ToggleButtonGroup} from "@mui/material";
import ButtonsMapComponent from "./ButtonsMapComponent/ButtonsMapComponent";
import {type ITextareaButtonsProps} from "./ButtonsTextareaInterfaces";
import MenuMapComponent from "./MenuMap/MenuMapComponent";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";

interface IMenuState {
  title: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
  codeSnippet: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
  optionsMenu: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
}

export default function TextareaButtonsComponent(
  props: Readonly<ITextareaButtonsProps>
): JSX.Element {
  const {mode, positions, markdownInput} = props;

  const [OPEN_AND_ANCHOR, SetOpenAndAnchor] = React.useState<IMenuState>({
    title: {
      anchorEl: null,
      isOpen: false,
    },
    codeSnippet: {
      anchorEl: null,
      isOpen: false,
    },
    optionsMenu: {
      anchorEl: null,
      isOpen: false,
    },
  });

  const HandleClickTitle = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      title: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.title.isOpen,
      },
    });
  };

  const HandleClickCodeSnippet = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      codeSnippet: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.codeSnippet.isOpen,
      },
    });
  };

  const HandleClickOptionsMenu = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      optionsMenu: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.optionsMenu.isOpen,
      },
    });
  };

  const MENU_ITEM_TITLES: Array<{
    element: JSX.Element;
    ClickAction: () => undefined;
  }> = [
    {element: <LooksOneIcon />, ClickAction: () => undefined},
    {element: <LooksTwoIcon />, ClickAction: () => undefined},
    {element: <Looks3Icon />, ClickAction: () => undefined},
    {element: <Looks4Icon />, ClickAction: () => undefined},
    {element: <Looks5Icon />, ClickAction: () => undefined},
    {element: <Looks6Icon />, ClickAction: () => undefined},
  ];
  const MENU_ITEM_CODE_SNIPPET: Array<{
    element: string;
    ClickAction: () => undefined;
  }> = [
    {element: "Simple block", ClickAction: () => undefined},
    {element: "Javascript", ClickAction: () => undefined},
    {element: "Typescript", ClickAction: () => undefined},
    {element: "JSON", ClickAction: () => undefined},
    {element: "YAML", ClickAction: () => undefined},
  ];

  return (
    <ToggleButtonGroup sx={{width: "auto"}}>
      <ButtonsMapComponent
        ClickCodeSnippet={HandleClickCodeSnippet}
        ClickTitle={HandleClickTitle}
        mode={mode}
        isOpen={OPEN_AND_ANCHOR.optionsMenu.isOpen}
        anchorEl={OPEN_AND_ANCHOR.optionsMenu.anchorEl}
        HandleClose={HandleClickOptionsMenu}
        positions={positions}
        markdownInput={markdownInput}
      />
      <MenuMapComponent
        isOpen={OPEN_AND_ANCHOR.title.isOpen}
        anchorEl={OPEN_AND_ANCHOR.title.anchorEl}
        HandleClose={HandleClickTitle}
        componentsToMap={MENU_ITEM_TITLES}
      />
      <MenuMapComponent
        isOpen={OPEN_AND_ANCHOR.codeSnippet.isOpen}
        anchorEl={OPEN_AND_ANCHOR.codeSnippet.anchorEl}
        HandleClose={HandleClickCodeSnippet}
        componentsToMap={MENU_ITEM_CODE_SNIPPET}
      />
    </ToggleButtonGroup>
  );
}
