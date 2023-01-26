import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {Container, Divider, ToggleButton, useMediaQuery} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import TitleIcon from "@mui/icons-material/Title";
import CodeIcon from "@mui/icons-material/Code";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import {type IButtonsMapProps} from "../ButtonsTextareaInterfaces";

export default function ButtonsMapComponent(
  props: IButtonsMapProps
): JSX.Element {
  const {ClickTitle, ClickCodeSnippet, mode} = props;

  const IS_SMALL: boolean = useMediaQuery(
    "@media only screen and (max-width: 750px)"
  );

  const PREVIEW_BUTTON: Array<{
    value: string;
    icon: JSX.Element;
    ClickAction: (
      event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => undefined | void;
    isOnSmallScreen: boolean;
  }> = [
    {
      value: "title",
      icon: <TitleIcon />,
      ClickAction: ClickTitle,
      isOnSmallScreen: true,
    },
    {
      value: "CodeSnippet",
      icon: <CodeIcon />,
      ClickAction: ClickCodeSnippet,
      isOnSmallScreen: true,
    },
    {
      value: "bold",
      icon: <FormatBoldIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "italic",
      icon: <FormatItalicIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "quote",
      icon: <FormatQuoteIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "link",
      icon: <InsertLinkIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "numbered list",
      icon: <FormatListNumberedIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "bulleted list",
      icon: <FormatListBulletedIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "checkbox",
      icon: <CheckBoxOutlineBlankIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: false,
    },
    {
      value: "listOptions",
      icon: <FormatAlignJustifyIcon />,
      ClickAction: () => undefined,
      isOnSmallScreen: true,
    },
  ];

  return (
    <Container
      sx={{padding: "0 !important", display: "flex", flexDirection: "row"}}
    >
      {PREVIEW_BUTTON.map((buttons) => {
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
        } else if (mode !== "Editor and preview" && !buttons.isOnSmallScreen) {
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
      })}
    </Container>
  );
}
