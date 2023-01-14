import React from "react";
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
  close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function MenuDrawerComponent(
  props: Readonly<MenuDrawerProps>
): JSX.Element {
  const {isOpen, close} = props;

  const SECTIONS = [
    {sectionName: "Folder", sectionIcon: <FolderIcon />},
    {sectionName: "Dashboard", sectionIcon: <DashboardIcon />},
  ];

  return (
    <Drawer open={isOpen} onClose={close}>
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
