import React from "react";
import {Menu, MenuItem} from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks6Icon from "@mui/icons-material/Looks6";
import {type IMapComponentProps} from "../ButtonsTextareaInterfaces";

export default function TitleMapComponent(
  props: IMapComponentProps
): JSX.Element {
  const {isOpen, anchorEl, HandleClose} = props;

  const MENU_ITEM_TITLES: Array<{icon: JSX.Element}> = [
    {icon: <LooksOneIcon />},
    {icon: <LooksTwoIcon />},
    {icon: <Looks3Icon />},
    {icon: <Looks4Icon />},
    {icon: <Looks5Icon />},
    {icon: <Looks6Icon />},
  ];

  return (
    <Menu open={isOpen} anchorEl={anchorEl} onClose={HandleClose}>
      {MENU_ITEM_TITLES.map((menu_item, key) => {
        return <MenuItem key={key}>{menu_item.icon}</MenuItem>;
      })}
    </Menu>
  );
}
