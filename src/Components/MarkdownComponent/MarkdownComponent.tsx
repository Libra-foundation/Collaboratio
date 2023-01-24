import React from "react";
import {TextareaAutosize, type Theme, useTheme} from "@mui/material";

export default function MarkdownComponent(): JSX.Element {
  const [MARKDOWN_INPUT, SetMarkdownInput] = React.useState("");

  const THEME: Theme = useTheme();

  return (
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
      }}
      onChange={(e): void => {
        SetMarkdownInput(e.target.value);
      }}
    />
  );
}
