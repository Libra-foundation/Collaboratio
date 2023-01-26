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
  type IPreviewButton,
} from "../ButtonsTextareaInterfaces";
import MenuMapComponent from "../MenuMap/MenuMapComponent";

export default function ButtonsMapComponent(
  props: Readonly<IButtonsMapProps>
): JSX.Element {
  const {ClickTitle, ClickCodeSnippet, mode, isOpen, anchorEl, HandleClose} =
    props;

  const IS_SMALL: boolean = useMediaQuery(
    "@media only screen and (max-width: 750px)"
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
      ClickAction: () => undefined,
      isOnSmallScreen: true,
      isOnLargeScreen: false,
    },
  ];

  const HandleCreateNewArray = (): Array<{
    element: JSX.Element | string | undefined;
  }> => {
    const MY_NEW_ARRAY: Array<{element: JSX.Element | string | undefined}> = [];
    PREVIEW_BUTTON.map(
      (items): Array<{element: JSX.Element | string | undefined}> => {
        if (!items.isOnSmallScreen) {
          MY_NEW_ARRAY.push({element: items.icon});
          return MY_NEW_ARRAY;
        }
        MY_NEW_ARRAY.push({element: undefined});
        return MY_NEW_ARRAY;
      }
    );
    return MY_NEW_ARRAY.length === 0 ? [{element: undefined}] : MY_NEW_ARRAY;
  };
  /*
  const HandleCreateNewArray2 = (): Array<{
    element: JSX.Element | string | undefined;
  }> => {
    const MY_NEW_ARRAY: Array<IPreviewButton}> =
      PREVIEW_BUTTON.filter((item) => {
        return !item.isOnSmallScreen
      });
    const OTHER_ARRAY: Array<{element:JSX.Element | string | undefined}> = []
  };
*/
  return (
    <Container
      sx={{padding: "0 !important", display: "flex", flexDirection: "row"}}
    >
      {PREVIEW_BUTTON.map((buttons): JSX.Element | undefined => {
        if (
          IS_SMALL === buttons.isOnSmallScreen &&
          mode === "Editor and preview"
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
        } else if (mode !== "Editor and preview" && buttons.isOnLargeScreen) {
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
