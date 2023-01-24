import React from "react";
import {
  Container,
  TextareaAutosize,
  type Theme,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function MarkdownComponent(): JSX.Element {
  const [MARKDOWN_INPUT, SetMarkdownInput] = React.useState("");

  const THEME: Theme = useTheme();

  return (
    <Container>
      <ToggleButtonGroup>
        <ToggleButton value="test">
          <FormatAlignJustifyIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <TextareaAutosize
        autoFocus
        style={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          resize: "none",
          backgroundColor: THEME.palette.mode === "dark" ? "#1d1e20" : "white",
          color: THEME.palette.mode === "dark" ? "white" : "black",
          borderRadius: "0 0 10px 10px",
          fontFamily: "open sans, sans-serif",
        }}
        onChange={(e): void => {
          SetMarkdownInput(e.target.value);
        }}
      />
    </Container>
  );
}
