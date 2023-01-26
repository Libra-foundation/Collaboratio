import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {Container, ToggleButton} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import TitleIcon from "@mui/icons-material/Title";
import CodeIcon from "@mui/icons-material/Code";

interface IButtonsMapProps {
  ClickTitle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  ClickCodeSnippet: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function ButtonsMapComponent(
  props: IButtonsMapProps
): JSX.Element {
  const {ClickTitle, ClickCodeSnippet} = props;

  const PREVIEW_BUTTON: Array<{
    value: string;
    icon: JSX.Element;
    ClickAction: (
      event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => undefined | void;
  }> = [
    {value: "title", icon: <TitleIcon />, ClickAction: ClickTitle},
    {value: "CodeSnippet", icon: <CodeIcon />, ClickAction: ClickCodeSnippet},
    {value: "bold", icon: <FormatBoldIcon />, ClickAction: () => undefined},
    {value: "italic", icon: <FormatItalicIcon />, ClickAction: () => undefined},
    {value: "quote", icon: <FormatQuoteIcon />, ClickAction: () => undefined},
    {value: "link", icon: <InsertLinkIcon />, ClickAction: () => undefined},
    {
      value: "numbered list",
      icon: <FormatListNumberedIcon />,
      ClickAction: () => undefined,
    },
    {
      value: "bulleted list",
      icon: <FormatListBulletedIcon />,
      ClickAction: () => undefined,
    },
    {
      value: "checkbox",
      icon: <CheckBoxOutlineBlankIcon />,
      ClickAction: () => undefined,
    },
  ];

  return (
    <Container sx={{padding: "0 !important"}}>
      {PREVIEW_BUTTON.map((buttons) => {
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
      })}
    </Container>
  );
}
