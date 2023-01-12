import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

interface ProfileDrawerProps {
  isOpen: boolean;
  close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function ProfileDrawerComponent(
  props: Readonly<ProfileDrawerProps>
): JSX.Element {
  const {isOpen, close} = props;

  return (
    <Drawer open={isOpen} onClose={close} anchor="right">
      <List>
        <ListItemButton>
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="Account settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
