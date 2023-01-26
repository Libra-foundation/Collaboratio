import React from "react";
import {Menu, MenuItem} from "@mui/material";
import {type IMapComponentProps} from "../ButtonsTextareaInterfaces";
import {Javascript as jslogo} from "../../../../Assets/LanguageIcons/javascript.svg";
import Typescript from "../../../../Assets/LanguageIcons/typescriptl.svg";
import YAML from "../../../../Assets/LanguageIcons/YAML.svg";
import JSON from "../../../../Assets/LanguageIcons/JSON.svg";

export default function CodeSnippetMapComponent(
  props: IMapComponentProps
): JSX.Element {
  const {isOpen, anchorEl, HandleClose} = props;

  const MENU_ITEM_CODE_SNIPPET: Array<{key: string; icon: HTMLElement}> = [
    {key: "Javascript", icon: jslogo},
  ];

  return (
    <Menu open={isOpen} anchorEl={anchorEl} onClose={HandleClose}>
      {MENU_ITEM_CODE_SNIPPET.map((menu_item) => {
        return <MenuItem key={menu_item.key}>{jslogo}</MenuItem>;
      })}
    </Menu>
  );
}
