import React from "react";
import {Drawer, List} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {type DrawerProps, type DrawerSection} from "../NavbarInterfaces";
import DrawerSectionsMapComponent from "../DrawerSectionsMapComponent/DrawerSectionsMapComponent";

export default function MenuDrawerComponent(
  props: Readonly<DrawerProps>
): JSX.Element {
  const {isOpen, Close} = props;

  const SECTIONS: Array<DrawerSection> = [
    {SECTION_NAME: "Documents", SECTION_ICON: <FolderIcon />},
    {SECTION_NAME: "Dashboard", SECTION_ICON: <DashboardIcon />},
  ];

  return (
    <Drawer open={isOpen} onClose={Close}>
      <List>{DrawerSectionsMapComponent(SECTIONS)}</List>
    </Drawer>
  );
}
