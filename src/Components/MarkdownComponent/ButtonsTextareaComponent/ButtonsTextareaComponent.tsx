import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ButtonsMapComponent from "./ButtonsMapComponent/ButtonsMapComponent";
import TitleMapComponent from "./TitleMapComponent/TitleMapComponent";
import TitleIcon from "@mui/icons-material/Title";

interface IMenuState {
  title: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
  codeSnippet: {
    anchorEl: HTMLElement | null;
    isOpen: boolean;
  };
}

export default function ButtonsTextareaComponent(): JSX.Element {
  const [OPEN_AND_ANCHOR, SetOpenAndAnchor] = React.useState<IMenuState>({
    title: {
      anchorEl: null,
      isOpen: false,
    },
    codeSnippet: {
      anchorEl: null,
      isOpen: false,
    },
  });

  const HandleClickTitle = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      title: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.title.isOpen,
      },
    });
  };

  const HandleClickCodeSnippet = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    SetOpenAndAnchor({
      ...OPEN_AND_ANCHOR,
      codeSnippet: {
        anchorEl: event.currentTarget,
        isOpen: !OPEN_AND_ANCHOR.codeSnippet.isOpen,
      },
    });
  };

  return (
    <ToggleButtonGroup sx={{width: "auto"}}>
      <ToggleButton
        value="ChooseTitleWeight"
        onClick={HandleClickTitle}
        sx={{border: "0"}}
      >
        <TitleIcon />
      </ToggleButton>
      <TitleMapComponent
        isOpen={OPEN_AND_ANCHOR.title.isOpen}
        anchorEl={OPEN_AND_ANCHOR.title.anchorEl}
        HandleClose={HandleClickTitle}
      />
      <ToggleButton
        value="CodeSnippet"
        onClick={HandleClickCodeSnippet}
        sx={{border: 0}}
      >
        <CodeIcon />
      </ToggleButton>
      <ButtonsMapComponent />
    </ToggleButtonGroup>
  );
}
