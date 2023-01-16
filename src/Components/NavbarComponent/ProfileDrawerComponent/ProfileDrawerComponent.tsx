import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  type Theme,
  useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {COLORMODECONTEXT} from "../../../Scripts/ThemeContext";
import DrawerSectionsMapComponent from "../DrawerSectionsMapComponent/DrawerSectionsMapComponent";
import {type DrawerProps} from "../NavbarInterfaces";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function ProfileDrawerComponent(
  props: Readonly<DrawerProps>
): JSX.Element {
  const {isOpen, Close} = props;

  const THEME: Theme = useTheme();

  const COLORMODE: {ToggleColorMode: () => void} =
    React.useContext(COLORMODECONTEXT);

  return (
    <Drawer open={isOpen} onClose={Close} anchor="right">
      <List>
        <ListItemButton onClick={COLORMODE.ToggleColorMode}>
          <ListItemIcon>
            {THEME.palette.mode === "dark" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </ListItemIcon>
          <ListItemText primary={THEME.palette.mode.concat(" mode")} />
        </ListItemButton>
        {DrawerSectionsMapComponent([
          {
            SECTION_NAME: "Account settings",
            SECTION_ICON: <ManageAccountsIcon />,
          },
        ])}
      </List>
    </Drawer>
  );
}
