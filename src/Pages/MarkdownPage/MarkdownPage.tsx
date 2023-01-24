import React from "react";
import MarkdownComponent from "../../Components/MarkdownComponent/MarkdownComponent";
import {Container, Paper, Tab, Tabs} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ImageIcon from "@mui/icons-material/Image";

export default function MarkdownPage(): JSX.Element {
  const [PREVIEW_MODE, SetPreviewMode] = React.useState(0);

  const HandleChangePreviewMode = (
    event: React.SyntheticEvent,
    new_value: number
  ) => {
    SetPreviewMode(new_value);
  };

  return (
    <Paper
      sx={{
        height: "80vh",
        margin: {lg: "10vh 10vw 10vh 10vw", md: "10vh 0 0 0"},
        width: {lg: "80vw", md: "100vw"},
        borderRadius: "20px",
      }}
      elevation={1}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Tabs value={PREVIEW_MODE} onChange={HandleChangePreviewMode}>
          <Tab icon={<FormatAlignJustifyIcon />} label="Editor only" />
          <Tab icon={<MenuBookIcon />} label="Editor and preview" />
          <Tab icon={<ImageIcon />} label="Preview only" />
        </Tabs>
      </Container>
      <MarkdownComponent />
    </Paper>
  );
}
