import React from "react";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {type DrawerSection} from "../NavbarInterfaces";

export default function DrawerSectionsMapComponent(
  sections: ReadonlyArray<DrawerSection>
): Array<JSX.Element> {
  return sections.map((section: Readonly<DrawerSection>) => (
    <ListItemButton key={section.SECTION_NAME}>
      <ListItemIcon>{section.SECTION_ICON}</ListItemIcon>
      <ListItemText primary={section.SECTION_NAME} />
    </ListItemButton>
  ));
}
