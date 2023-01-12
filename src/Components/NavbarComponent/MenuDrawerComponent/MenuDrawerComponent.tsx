import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

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
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="test" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
