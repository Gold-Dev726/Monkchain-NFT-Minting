// material
import { styled, alpha } from "@mui/material/styles";
import SvgIconStyle from "./SvgIconStyle";
import {
  Stack,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Icon,
} from "@mui/material";
// import trendingUpFill from "@mui/icons-material/home"
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  width: 68,
  height: 68,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
}));

export default function IconWrapper({ color, icon }) {
  return (
    <IconWrapperStyle
      sx={{
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <SvgIconStyle src={`/images/icons/${icon}.png`} sx={{ width: 40, height: 40 }} />
    </IconWrapperStyle>
  );
}
