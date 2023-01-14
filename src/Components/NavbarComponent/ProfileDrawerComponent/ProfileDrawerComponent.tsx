import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface ProfileDrawerProps {
  isOpen: boolean;
  close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function ProfileDrawerComponent(
  props: Readonly<ProfileDrawerProps>
): JSX.Element {
  const {isOpen, close} = props;

  const SECTIONS = [
    {sectionName: "Account settings", sectionIcon: <ManageAccountsIcon />},
  ];

  const [THEME, setTheme] = React.useState("dark");

  return (
    <Drawer open={isOpen} onClose={close} anchor="right">
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary="Change mode" />
        </ListItemButton>
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
