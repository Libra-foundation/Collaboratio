import React, {type ChangeEventHandler} from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";

interface MenuDrawerProps {
  isOpen: boolean;
  Close: ChangeEventHandler<HTMLInputElement>;
}

export default function MenuDrawerComponent(
  props: Readonly<MenuDrawerProps>
): JSX.Element {
  const {isOpen, Close} = props;

  const SECTIONS: Array<{sectionName: string; sectionIcon: JSX.Element}> = [
    {sectionName: "Documents", sectionIcon: <FolderIcon />},
    {sectionName: "Dashboard", sectionIcon: <DashboardIcon />},
  ];

  return (
    <Drawer open={isOpen} onClose={Close}>
      <List>
        {SECTIONS.map((sections) => (
          <ListItemButton key={sections.sectionName}>
            <ListItemIcon>{sections.sectionIcon}</ListItemIcon>
            <ListItemText primary={sections.sectionName} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
