import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {Container, ToggleButton, useMediaQuery} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import TitleIcon from "@mui/icons-material/Title";
import CodeIcon from "@mui/icons-material/Code";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import {
  type IButtonsMapProps,
  type IElementsToMap,
  type IPreviewButton,
} from "../ButtonsTextareaInterfaces";
import MenuMapComponent from "../MenuMap/MenuMapComponent";

export default function ButtonsMapComponent(
  props: IButtonsMapProps
): JSX.Element {
  const {ClickTitle, ClickCodeSnippet, mode, isOpen, anchorEl, HandleClose} =
    props;

  const IS_SMALL: boolean = useMediaQuery(
    "@media only screen and (max-width: 920px)"
  );

  const IS_EXTREM_SMALL: boolean = useMediaQuery(
    "@media only screen and (max-width: 500px)"
  );

  const PREVIEW_BUTTON: Array<IPreviewButton> = [
    {
      value: "title",
      icon: <TitleIcon />,
      ClickAction: ClickTitle,
      isOnSmallScreen: true,
      isOnLargeScreen: true,
    },
    {
      value: "CodeSnippet",
      icon: <CodeIcon />,
      ClickAction: ClickCodeSnippet,
      isOnSmallScreen: true,
      isOnLargeScreen: true,
    },
    {
      value: "bold",
      icon: <FormatBoldIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "italic",
      icon: <FormatItalicIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "quote",
      icon: <FormatQuoteIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "link",
      icon: <InsertLinkIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "numbered list",
      icon: <FormatListNumberedIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "bulleted list",
      icon: <FormatListBulletedIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "checkbox",
      icon: <CheckBoxOutlineBlankIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
      isOnLargeScreen: true,
    },
    {
      value: "listOptions",
      icon: <FormatAlignJustifyIcon />,
      ClickAction: HandleClose,
      isOnSmallScreen: true,
      isOnLargeScreen: false,
    },
  ];

  const HandleCreateNewArray = (): Array<IElementsToMap> => {
    return PREVIEW_BUTTON.filter(
      ({isOnSmallScreen, isOnLargeScreen}) =>
        !isOnSmallScreen && isOnLargeScreen
    ).map((items): IElementsToMap => {
      return {
        element: items.icon,
        ClickAction: items.ClickAction,
        value: items.value,
      };
    });
  };

  return (
    <Container
      sx={{padding: "0 !important", display: "flex", flexDirection: "row"}}
    >
      {PREVIEW_BUTTON.map((buttons): JSX.Element | undefined => {
        if (
          (IS_SMALL &&
            buttons.isOnSmallScreen &&
            mode === "Editor and preview") ||
          (IS_EXTREM_SMALL && buttons.isOnSmallScreen)
        ) {
          return (
            <ToggleButton
              key={buttons.value}
              value={buttons.value}
              sx={{border: 0}}
              onClick={buttons.ClickAction}
            >
              {buttons.icon}
            </ToggleButton>
          );
        } else if (
          (mode !== "Editor and preview" &&
            buttons.isOnLargeScreen &&
            !IS_EXTREM_SMALL) ||
          (mode === "Editor and preview" &&
            !IS_SMALL &&
            !IS_EXTREM_SMALL &&
            buttons.isOnLargeScreen)
        ) {
          return (
            <ToggleButton
              key={buttons.value}
              value={buttons.value}
              sx={{border: 0}}
              onClick={buttons.ClickAction}
            >
              {buttons.icon}
            </ToggleButton>
          );
        }
        return undefined;
      })}
      <MenuMapComponent
        isOpen={isOpen}
        anchorEl={anchorEl}
        HandleClose={HandleClose}
        componentsToMap={HandleCreateNewArray()}
      />
    </Container>
  );
}
