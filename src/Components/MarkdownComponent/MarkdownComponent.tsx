import React from "react";
import {
  Container,
  Divider,
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

  const Size = (): Record<string, Record<string, string>> => {
    if (mode === "Editor only") {
      return {
        textarea: {
          width: "100%",
          overflowY: "auto",
        },
        preview: {
          display: "none",
        },
      };
    } else if (mode === "Editor and preview") {
      return {
        textarea: {
          width: "50%",
          overflowY: "auto",
        },
        preview: {
          width: "50%",
          overflowY: "auto",
        },
      };
    } else if (mode === "Preview only") {
      return {
        textarea: {
          display: "none",
          overflowY: "auto",
        },
        preview: {
          width: "100%",
          overflowY: "auto",
        },
      };
    }
    return {
      textarea: {
        width: "100%",
        overflowY: "auto",
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
        <Paper
          variant="outlined"
          square={false}
          sx={{borderRadius: "10px 10px 0 0", borderBottom: "0"}}
        >
          <ToggleButtonGroup sx={{width: "100%"}}>
            <ToggleButton value="test" sx={{border: 0}}>
              <FormatAlignJustifyIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Paper>
        <TextareaAutosize
          value={MARKDOWN_INPUT}
          maxRows={50}
          autoFocus
          style={{
            width: "100%",
            height: "90%",
            boxSizing: "border-box",
            resize: "none",
            backgroundColor:
              THEME.palette.mode === "dark" ? "#121212" : "white",
            color: THEME.palette.mode === "dark" ? "white" : "black",
            borderRadius: "0 0 10px 10px",
            border: "1px solid #2f2f2f",
            fontFamily: "open sans, sans-serif",
          }}
          onChange={(e): void => {
            SetMarkdownInput(e.target.value);
          }}
        />
      </Container>
      <Paper variant="outlined" square={false} sx={Size().preview}>
        <ToggleButtonGroup sx={{width: "100%"}}>
          <ToggleButton value="test" sx={{border: 0}}>
            <FormatAlignJustifyIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider />
        <Container sx={{padding: "2%", height: "auto"}}>
          <ReactMarkdown>{MARKDOWN_INPUT}</ReactMarkdown>
        </Container>
      </Paper>
    </Container>
  );
}
