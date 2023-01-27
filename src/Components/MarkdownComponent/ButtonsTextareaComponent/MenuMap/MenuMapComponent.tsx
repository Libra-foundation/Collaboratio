import React from "react";
import {type IMenuMapProps} from "../ButtonsTextareaInterfaces";
import {Menu, MenuItem} from "@mui/material";

export default function MenuMapComponent(props: IMenuMapProps): JSX.Element {
  const {isOpen, anchorEl, HandleClose, componentsToMap} = props;

  return (
    <Menu open={isOpen} anchorEl={anchorEl} onClose={HandleClose}>
      {componentsToMap.map((menu_item, key): JSX.Element => {
        return (
          <MenuItem key={key} onClick={menu_item.ClickAction}>
            {menu_item.element}
          </MenuItem>
        );
      })}
    </Menu>
  );
}
