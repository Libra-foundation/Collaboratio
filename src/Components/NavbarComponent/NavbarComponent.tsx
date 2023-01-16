import {AppBar, Container, IconButton, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import MenuDrawerComponent from "./MenuDrawerComponent/MenuDrawerComponent";
import ProfileDrawerComponent from "./ProfileDrawerComponent/ProfileDrawerComponent";

interface NavbarComponentState {
  isMenuOpen: boolean;
  isProfileOpen: boolean;
}

export default function NavbarComponent(): JSX.Element {
  const [IS_OPEN_MENU, SetOpenMenu] = React.useState<NavbarComponentState>({
    isMenuOpen: false,
    isProfileOpen: false,
  });

  const HandleOpenMenu = (): void => {
    SetOpenMenu((old) => {
      return {
        ...old,
        isMenuOpen: !IS_OPEN_MENU.isMenuOpen,
      };
    });
  };

  const HandleOpenProfile = (): void => {
    SetOpenMenu((old) => {
      return {
        ...old,
        isProfileOpen: !IS_OPEN_MENU.isProfileOpen,
      };
    });
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
          aria-label="open menu drawer"
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
        <IconButton
          size="large"
          color="inherit"
          aria-label="open profile drawer"
          onClick={HandleOpenProfile}
        >
          <AccountBoxIcon />
        </IconButton>
      </Container>
      <MenuDrawerComponent
        isOpen={IS_OPEN_MENU.isMenuOpen}
        Close={HandleOpenMenu}
      />
      <ProfileDrawerComponent
        isOpen={IS_OPEN_MENU.isProfileOpen}
        Close={HandleOpenProfile}
      />
    </AppBar>
  );
}
