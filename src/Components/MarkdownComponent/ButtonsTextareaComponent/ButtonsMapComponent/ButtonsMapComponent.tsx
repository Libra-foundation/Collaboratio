import React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {Container, ToggleButton} from "@mui/material";

export default function ButtonsMapComponent(): JSX.Element {
  const PREVIEW_BUTTON: Array<{value: string; icon: JSX.Element}> = [
    {value: "bold", icon: <FormatBoldIcon />},
    {value: "italic", icon: <FormatItalicIcon />},
    {value: "quote", icon: <FormatQuoteIcon />},
  ];

  return (
    <Container sx={{padding: "0 !important"}}>
      {PREVIEW_BUTTON.map((icons: {value: string; icon: JSX.Element}) => {
        return (
          <ToggleButton key={icons.value} value={icons.value} sx={{border: 0}}>
            {icons.icon}
          </ToggleButton>
        );
      })}
    </Container>
  );
}
