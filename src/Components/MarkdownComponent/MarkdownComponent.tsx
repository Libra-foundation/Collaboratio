import React from "react";
import {
  Container,
  Divider,
  Paper,
  type Theme,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ReactMarkdown from "react-markdown";
import MarkdownStyle from "./MarkdownComponentStyle.module.sass";
import TextareaButtonsComponent from "./ButtonsTextareaComponent/TextareaButtonsComponent";

interface IMarkdownComponentProps {
  mode: string;
}

export default function MarkdownComponent(
  props: Readonly<IMarkdownComponentProps>
): JSX.Element {
  const {mode} = props;

  const [MARKDOWN_INPUT, SetMarkdownInput] = React.useState("# Hello world");

  const THEME: Theme = useTheme();

  const [POSITIONS, SetPositions] = React.useState<{
    startPosition: number | null;
    endPosition: number | null;
  }>();

  const HandleChangeMarkdownState = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    SetMarkdownInput(event.target.value);
  };

  const HandleOnSelect = (
    event: React.SyntheticEvent<HTMLTextAreaElement, Event>
  ): void => {
    const TARGET: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    SetPositions({
      ...POSITIONS,
      startPosition: TARGET.selectionStart,
      endPosition: TARGET.selectionEnd,
    });
  };

  const Size = (): Record<string, Record<string, string>> => {
    if (mode === "Editor only") {
      return {
        textarea: {
          borderRadius: "10px",
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
          borderRadius: "10px 0 0 10px",
          borderRight: "0",
          width: "50%",
          overflowY: "auto",
        },
        preview: {
          borderRadius: "0 10px 10px 0",
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
          borderRadius: "10px",
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
      <Paper variant="outlined" square={false} sx={Size().textarea}>
        <TextareaButtonsComponent
          mode={mode}
          positions={POSITIONS ?? undefined}
          SetMarkdownInput={SetMarkdownInput}
          markdownState={MARKDOWN_INPUT}
        />
        <Divider />
        <textarea
          id="TextareaMarkdown"
          onSelect={HandleOnSelect}
          value={MARKDOWN_INPUT}
          autoFocus
          className={MarkdownStyle.textarea}
          style={{color: THEME.palette.mode === "dark" ? "white" : "black"}}
          onChange={HandleChangeMarkdownState}
        />
      </Paper>
      <Paper variant="outlined" square={false} sx={Size().preview}>
        <ToggleButtonGroup sx={{width: "auto", position: "fixed", zIndex: "2"}}>
          <ToggleButton value="test" sx={{border: 0}}>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider sx={{paddingTop: "46px"}} />
        <Container
          sx={{padding: "2%", height: "auto", zIndex: "0", maxWidth: "100%"}}
        >
          <ReactMarkdown className={MarkdownStyle.MarkdownRender}>
            {MARKDOWN_INPUT}
          </ReactMarkdown>
        </Container>
      </Paper>
    </Container>
  );
}
