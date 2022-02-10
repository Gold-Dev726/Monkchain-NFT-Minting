import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Hidden } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import Label from "../../components/Label";

import ConnectWalletButton from "components/DappComponents/ConnectWalletButton";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 120;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <AppBar
        sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none" }}
      >
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              bgcolor: "background.default",
              height: { md: APP_BAR_DESKTOP - 16 },
            }),
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <RouterLink to="/">
              <Logo sx={{ mt: 2 }} />
            </RouterLink>
            <Box sx={{ flexGrow: 1 }} />

            <Hidden mdDown>
              <MenuDesktop
                isOffset={isOffset}
                isHome={isHome}
                navConfig={navConfig}
              />
            </Hidden>

            <Hidden mdUp>
              <MenuMobile
                isOffset={isOffset}
                isHome={isHome}
                navConfig={navConfig}
              />
            </Hidden>

            <ConnectWalletButton />
          </Container>
        </ToolbarStyle>
      </AppBar>
      <Box sx={{ height: APP_BAR_DESKTOP }}></Box>
    </>
  );
}
