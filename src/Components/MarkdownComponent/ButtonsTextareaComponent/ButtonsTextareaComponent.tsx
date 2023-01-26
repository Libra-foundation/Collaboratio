import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ButtonsMapComponent from "./ButtonsMapComponent/ButtonsMapComponent";
import TitleMapComponent from "./TitleMapComponent/TitleMapComponent";
import TitleIcon from "@mui/icons-material/Title";

export default function ButtonsTextareaComponent(): JSX.Element {
  const [ANCHOR_EL, SetAnchorEl] = React.useState<HTMLElement | null>(null);

  const IS_OPEN: boolean = Boolean(ANCHOR_EL);

  const HandleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    SetAnchorEl(event.currentTarget);
  };

  const HandleClose = (): void => {
    SetAnchorEl(null);
  };

  return (
    <ToggleButtonGroup sx={{width: "auto"}}>
      <ToggleButton
        value="ChooseTitleWeight"
        onClick={HandleClick}
        sx={{border: "0"}}
      >
        <TitleIcon />
      </ToggleButton>
      <TitleMapComponent
        isOpen={IS_OPEN}
        anchorEl={ANCHOR_EL}
        HandleClose={HandleClose}
      />
      <ToggleButton value="" sx={{border: 0}}>
        <CodeIcon />
      </ToggleButton>
      <ButtonsMapComponent />
    </ToggleButtonGroup>
  );
}
