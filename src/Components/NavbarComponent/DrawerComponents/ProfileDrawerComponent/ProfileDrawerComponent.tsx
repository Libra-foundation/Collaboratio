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
import {
  COLORMODECONTEXT,
  type IThemeContext,
} from "../../../../Context/ThemeContext";
import DrawerMapComponent from "../DrawerMapComponent";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import {type DrawerProps} from "../DrawerInterfaces";

export default function ProfileDrawerComponent(
  props: Readonly<DrawerProps>
): JSX.Element {
  const {isOpen, Close} = props;

  const THEME: Theme = useTheme();

  const COLORMODE: IThemeContext = React.useContext(COLORMODECONTEXT);

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
        <DrawerMapComponent
          sections={[
            {
              SECTION_NAME: "Account settings",
              SECTION_ICON: <ManageAccountsIcon />,
            },
          ]}
        />
      </List>
    </Drawer>
  );
}
