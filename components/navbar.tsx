"use client";

import React from "react";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar: React.FC<Props> = ({ window }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const { document } = window?.() ?? {};

  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  if (!isMounted) {
    return null;
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#000" }}>
        𝙷𝚊𝚜𝚜𝚊𝚗 𝙴𝚕𝚊𝚢𝚘𝚞𝚝𝚒
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#000" }}>
              <Link href={item.href}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = document !== undefined ? () => document.body : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex z-[1000]"
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: "transparent", boxShadow: "none", zIndex: 1000 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                color: "#fff",
                fontWeight: "",
                fontSize: "1.5rem",
              },
            }}
          >
            𝙷𝚊𝚜𝚜𝚊𝚗 𝙴𝚕𝚊𝚢𝚘𝚞𝚝𝚒
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                sx={{ color: "#fff" }}
                className="relative before:absolute before:w-full before:bottom-0
                    before:h-1 before:hover:bg-white before:transition-all before:duration-500
                    before:rounded-lg before:-left-full before:hover:left-0 overflow-hidden"
              >
                <Link href={item.href} scroll>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </motion.div>
  );
};

export default Navbar;
