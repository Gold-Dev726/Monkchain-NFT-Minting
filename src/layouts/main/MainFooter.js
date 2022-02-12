import { Icon } from "@iconify/react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Grid,
  Link,
  Divider,
  Container,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
//
import Logo from "../../components/Logo";
import discord from "@iconify/icons-cib/discord";
import twitter from "@iconify/icons-cib/twitter";
import linkedin from "@iconify/icons-cib/linkedin";
import instagram from "@iconify/icons-cib/instagram";
import SvgIconStyle from "components/SvgIconStyle";

// ----------------------------------------------------------------------

const SOCIALS = [
  // { name: 'FaceBook', icon: facebookFill },
  // { name: 'Google', icon: googleFill },
  // { name: 'Linkedin', icon: linkedinFill },
  // { name: 'Twitter', icon: twitterFill }
];
const RootStyle = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <Stack
      textAlign="center"
      sx={{
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 4, md: 0 }}
        >
          <Logo sx={{ width: { xs: 0.6, md: 'inherit' } }} />
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={3}>
              <IconButton
                sx={{
                  bgcolor: "white",
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.1)", bgcolor: "white" },
                }}
                target="_blank"
                href="https://instagram.com/monkchains"
              >
                <Icon icon={instagram} fontSize={18} color="black" />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "white",
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.1)", bgcolor: "white" },
                }}
                target="_blank"
                href="https://twitter.com/monkchains"
              >
                <Icon icon={twitter} fontSize={18} color="black" />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "white",
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.1)", bgcolor: "white" },
                }}
                target="_blank"
                href="https://discord.gg/monkchains"
              >
                <Icon icon={discord} fontSize={18} color="black" />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "white",
                  transition: "all 0.2s",
                  "&:hover": { transform: "scale(1.1)", bgcolor: "white" },
                }}
                target="_blank"
                href="https://opensea.io/monkchains"
              >
                <SvgIconStyle
                  src="/images/icons/opensea.svg"
                  sx={{ width: 20, height: 20, color: "black" }}
                />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction justifyContent="center" sx={{ mt: 1 }}>
            <Typography>© 2022 MonkChains, All Rights Reserved</Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
