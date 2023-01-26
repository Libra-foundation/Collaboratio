import React from "react";
import {Menu, MenuItem} from "@mui/material";
import {type IMapMenuProps} from "../ButtonsTextareaInterfaces";

export default function CodeSnippetMapComponent(
  props: IMapMenuProps
): JSX.Element {
  const {isOpen, anchorEl, HandleClose} = props;

  const MENU_ITEM_CODE_SNIPPET: Array<{key: string}> = [
    {key: "Simple block"},
    {key: "Javascript"},
    {key: "Typescript"},
    {key: "JSON"},
    {key: "YAML"},
  ];

  return (
    <Menu open={isOpen} anchorEl={anchorEl} onClose={HandleClose}>
      {MENU_ITEM_CODE_SNIPPET.map((menu_item) => {
        return <MenuItem key={menu_item.key}>{menu_item.key}</MenuItem>;
      })}
    </Menu>
  );
}
