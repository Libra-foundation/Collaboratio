import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

interface MenuDrawerProps {
  isOpen: boolean;
  close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function MenuDrawerComponent(
  props: Readonly<MenuDrawerProps>
): JSX.Element {
  const {isOpen, close} = props;

  return (
    <Drawer open={isOpen} onClose={close}>
      <List>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemButton>Test</ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
