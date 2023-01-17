import React from "react";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {type DrawerSection} from "./DrawerInterfaces";

export default function DrawerMapComponent(
  props: Readonly<{sections: ReadonlyArray<DrawerSection>}>
): JSX.Element {
  const {sections} = props;

  return (
    <React.Fragment>
      {sections.map((section: Readonly<DrawerSection>) => (
        <ListItemButton key={section.SECTION_NAME}>
          <ListItemIcon>{section.SECTION_ICON}</ListItemIcon>
          <ListItemText primary={section.SECTION_NAME} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
}
