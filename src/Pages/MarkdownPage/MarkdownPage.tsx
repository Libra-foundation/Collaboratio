import React from "react";
import MarkdownComponent from "../../Components/MarkdownComponent/MarkdownComponent";
import {Container, Theme, useTheme} from "@mui/material";

export default function MarkdownPage(): JSX.Element {
  return (
    <Container
      maxWidth="xl"
      sx={{height: "80vh", marginBottom: "10vh", marginTop: "10vh"}}
    >
      <MarkdownComponent />
    </Container>
  );
}
