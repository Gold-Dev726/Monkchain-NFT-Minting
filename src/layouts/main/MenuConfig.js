import { Icon } from "@iconify/react";
// routes

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "About Us",
    path: "/#about",
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  { title: "Utilities", path: "/#utilities" },
  { title: "Roadmap", path: "/#roadmap" },
  { title: "Team", path: "/#team" },
  { title: "Alpha Collection", path: "/#alpha" },
  { title: "FAQ", path: "/#faq" },
];

export default menuConfig;
