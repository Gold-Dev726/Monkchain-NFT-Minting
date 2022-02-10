import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  List,
  Stack,
  Popover,
  ListItem,
  ListSubheader,
  CardActionArea,
  Typography,
} from "@mui/material";

// ----------------------------------------------------------------------

const LinkStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontSize: 17,
  cursor: 'pointer',
  fontWeight: 200,
  color: "white",
  marginRight: theme.spacing(5),
  textDecoration: "none",
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    opacity: 0.48,
  },
}));

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create("color"),
  "&:hover": {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

function MenuDesktopItem({ item, isHome, isOpen, isOffset, onOpen, onClose }) {
  const { title, path, children } = item;

  console.log("[path]:", path.slice(1));
  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            ...(isHome && { color: "common.white" }),
            ...(isOffset && { color: "text.primary" }),
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Box component={Icon} sx={{ ml: 0.5, width: 16, height: 16 }} />
        </LinkStyle>
      </>
    );
  }

  return (
    <LinkStyle
      to={path.slice(2)}
      component={ScrollLink}
      spy
      smooth
      sx={{
        "&.active": {
          color: "primary.main",
        },
      }}
    >
      {title}
    </LinkStyle>
  );
}

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}
