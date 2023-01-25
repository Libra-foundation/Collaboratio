import React from "react";
import {
  Container,
  Paper,
  TextareaAutosize,
  type Theme,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReactMarkdown from "react-markdown";

interface MarkdownComponentProps {
  mode: string;
}

export default function MarkdownComponent(
  props: Readonly<MarkdownComponentProps>
): JSX.Element {
  const {mode} = props;

  const [MARKDOWN_INPUT, SetMarkdownInput] = React.useState("# Hello world");

  const THEME: Theme = useTheme();

  const Size = () => {
    if (mode === "Editor only") {
      return {
        textarea: {
          width: "100%",
        },
        preview: {
          display: "none",
        },
      };
    } else if (mode === "Editor and preview") {
      return {
        textarea: {
          width: "50%",
        },
        preview: {
          width: "50%",
        },
      };
    } else if (mode === "Preview only") {
      return {
        textarea: {
          display: "none",
        },
        preview: {
          width: "100%",
        },
      };
    }
    return {
      textarea: {
        width: "100%",
      },
      preview: {
        display: "none",
      },
    };
  };

  return (
    <Container
      sx={{width: "100%", height: "90%", display: "flex", flexDirection: "row"}}
    >
      <Container sx={Size().textarea}>
        <Paper variant="outlined" square={false}>
          <ToggleButtonGroup sx={{width: "100%"}}>
            <ToggleButton value="test" sx={{border: 0}}>
              <FormatAlignJustifyIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Paper>
        <TextareaAutosize
          value={MARKDOWN_INPUT}
          autoFocus
          style={{
            width: "100%",
            height: "90%",
            boxSizing: "border-box",
            resize: "none",
            backgroundColor:
              THEME.palette.mode === "dark" ? "#1d1e20" : "white",
            color: THEME.palette.mode === "dark" ? "white" : "black",
            borderRadius: "0 0 10px 10px",
            fontFamily: "open sans, sans-serif",
          }}
          onChange={(e): void => {
            SetMarkdownInput(e.target.value);
          }}
        />
      </Container>
      <Container sx={Size().preview}>
        <ReactMarkdown>{MARKDOWN_INPUT}</ReactMarkdown>
      </Container>
    </Container>
  );
}
