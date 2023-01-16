import React from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

interface ISection {
  sectionName: string;
  sectionIcon: Readonly<JSX.Element>;
}

export default function ProfileDrawerSectionsComponent(): Array<JSX.Element> {
  const SECTIONS: Array<ISection> = [
    {sectionName: "Account settings", sectionIcon: <ManageAccountsIcon />},
  ];

  return SECTIONS.map((sections: Readonly<ISection>) => (
    <ListItemButton key={sections.sectionName}>
      <ListItemIcon>{sections.sectionIcon}</ListItemIcon>
      <ListItemText primary={sections.sectionName} />
    </ListItemButton>
  ));
}
