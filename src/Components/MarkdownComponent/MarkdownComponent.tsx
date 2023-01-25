import React from "react";
import {
  Container,
  Divider,
  Menu,
  MenuItem,
  Paper,
  type Theme,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ReactMarkdown from "react-markdown";
import MarkdownStyle from "./MarkdownComponentStyle.module.sass";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const PREVIEW_BUTTON: Array<{value: string; icon: JSX.Element}> = [
    {value: "bold", icon: <FormatBoldIcon />},
    {value: "italic", icon: <FormatItalicIcon />},
    {value: "quote", icon: <FormatQuoteIcon />},
  ];

  return (
    <Container
      sx={{width: "100%", height: "90%", display: "flex", flexDirection: "row"}}
    >
      <Paper variant="outlined" square={false} sx={Size().textarea}>
        <ToggleButtonGroup sx={{width: "auto"}}>
          <ToggleButton
            value="ChooseTitleWeight"
            onClick={handleClick}
            sx={{border: "0"}}
          >
            <LooksOneIcon />
          </ToggleButton>
          <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
            <MenuItem>
              <LooksTwoIcon />
            </MenuItem>
            <MenuItem>
              <Looks3Icon />
            </MenuItem>
            <MenuItem>
              <Looks4Icon />
            </MenuItem>
            <MenuItem>
              <Looks5Icon />
            </MenuItem>
            <MenuItem>
              <Looks6Icon />
            </MenuItem>
          </Menu>
          {PREVIEW_BUTTON.map((icons) => {
            return (
              <ToggleButton
                key={icons.value}
                value={icons.value}
                sx={{border: 0}}
              >
                {icons.icon}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
        <Divider />
        <textarea
          value={MARKDOWN_INPUT}
          autoFocus
          className={MarkdownStyle.textarea}
          style={{color: THEME.palette.mode === "dark" ? "white" : "black"}}
          onChange={(e): void => {
            SetMarkdownInput(e.target.value);
          }}
        />
      </Paper>
      <Paper variant="outlined" square={false} sx={Size().preview}>
        <ToggleButtonGroup sx={{width: "auto", position: "fixed", zIndex: "2"}}>
          <ToggleButton value="test" sx={{border: 0}}>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider sx={{paddingTop: "46px"}} />
        <Container sx={{padding: "2%", height: "auto", zIndex: "0"}}>
          <ReactMarkdown>{MARKDOWN_INPUT}</ReactMarkdown>
        </Container>
      </Paper>
    </Container>
  );
}
