import React from "react";
import MarkdownComponent from "../../Components/MarkdownComponent/MarkdownComponent";
import {Container, Tab, Tabs, useMediaQuery} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ImageIcon from "@mui/icons-material/Image";

export default function MarkdownPage(): JSX.Element {
  const [PREVIEW_MODE, SetPreviewMode] = React.useState("Editor only");

  const IS_SMALL_SCREEN: boolean = useMediaQuery(
    "@media only screen and (max-width: 600px)"
  );

  const TabRendering = (): JSX.Element | undefined => {
    if (IS_SMALL_SCREEN && PREVIEW_MODE === "Editor and preview") {
      SetPreviewMode("Editor only");
    } else if (!IS_SMALL_SCREEN) {
      return (
        <Tab
          icon={<MenuBookIcon />}
          label="Editor and preview"
          value="Editor and preview"
        />
      );
    }
    return undefined;
  };

  const HandleChangePreviewMode = (
    event: React.SyntheticEvent,
    new_value: string
  ): void => {
    SetPreviewMode(new_value);
  };

  return (
    <Container
      sx={{
        height: "calc(100vh - 60px)",
        margin: {lg: "60px auto 0 auto", xs: "60px auto 0 auto"},
        width: "100%",
        borderRadius: {lg: "20px", md: "0"},
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Tabs
          value={PREVIEW_MODE}
          onChange={HandleChangePreviewMode}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            icon={<FormatAlignJustifyIcon />}
            label="Editor only"
            value="Editor only"
          />
          {}
          {TabRendering()}
          <Tab icon={<ImageIcon />} label="Preview only" value="Preview only" />
        </Tabs>
      </Container>
      <MarkdownComponent mode={PREVIEW_MODE} />
    </Container>
  );
}
