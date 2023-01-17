import React from "react";
import {render, screen} from "@testing-library/react";
import DrawerSectionsMapComponent from "./DrawerSectionsMapComponent";
import FolderIcon from "@mui/icons-material/Folder";
import type {DrawerSection} from "../NavbarInterfaces";
import {List} from "@mui/material";

const SECTIONS: Array<DrawerSection> = [
  {SECTION_NAME: "Section 1", SECTION_ICON: <FolderIcon />},
  {SECTION_NAME: "Section 2", SECTION_ICON: <FolderIcon />},
  {SECTION_NAME: "Section 3", SECTION_ICON: <FolderIcon />},
  {SECTION_NAME: "Section 4", SECTION_ICON: <FolderIcon />},
];

render(<List>{DrawerSectionsMapComponent(SECTIONS)}</List>);

test("DrawerSectionsMapComponent -- All elements visible", () => {
  let element: HTMLElement;
  for (const SECTION of SECTIONS) {
    element = screen.getByText(SECTION.SECTION_NAME);
    expect(element).toBeVisible();
  }
});
