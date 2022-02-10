import PropTypes from "prop-types";
// material
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();

  return <Box component="img" src="/images/logo-title.png" sx={{ ...sx }} />;
}
