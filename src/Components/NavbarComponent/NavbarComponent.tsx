import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";

interface NavbarComponentState {
  is_openMenu: boolean;
  is_openProfile: boolean;
}

export default function NavbarComponent(): JSX.Element {
  const [IS_OPENMENU, SetOpenMenu] = React.useState<NavbarComponentState>({
    is_openMenu: false,
    is_openProfile: false,
  });

  const HandleOpenMenu = (): void => {
    SetOpenMenu();
  };

  return (
    <AppBar position="fixed">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "5px",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="large"
          color="inherit"
          aria-label="open drawer"
          onClick={HandleOpenMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          sx={{
            display: {xs: "none", md: "flex"},
            fontFamily: "monospace, sans-serif",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
          variant="h6"
          noWrap
          component="a"
          href="/"
        >
          Collaboratio
        </Typography>
        <IconButton size="large" color="inherit" aria-label="open drawer">
          <AccountBoxIcon />
        </IconButton>
      </Container>
      <Drawer open={IS_OPENMENU} onClose={HandleOpenMenu}>
        <List>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemButton>Test</ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
