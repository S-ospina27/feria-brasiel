import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Outlet, useNavigate } from "react-router-dom"; // Importa Link de react-router-dom
import Logo from "../../assets/img/logo.avif";
import styled from "../../css/Navbar.module.css";
import { getRoleSession, remove, getJWT } from "../../tools/SessionSettings";

const settings = ["Cerrar sesión"];
function NavbarApp() {
  const [pages, setpages] = useState(getRoleSession());
  const [name, setname] = useState(getJWT("users_name"));
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className={styled.container_app_index}>
        <p>Envío gratis por compras superiores a $150.000, exclusivo online </p>
      </div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", width: "100vw" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <div>
                <img className={styled.img_navbar_logo} src={Logo} alt="Logo" />
              </div>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: "#252B59" }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ color: "#252B59" }}
                    >
                      <Link
                        to={`/${page}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{ mx: 2, color: "#252B59", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon
                    fontSize="large"
                    style={{ color: "#252B59" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <div key={setting}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#252B59",
                        alignItems: "center",
                      }}
                    >
                      <p>{name}</p>
                    </div>
                    <Divider sx={{ mt: 1 }} />
                    <MenuItem
                      onClick={handleCloseUserMenu}
                      sx={{ color: "#252B59" }}
                    >
                      <Typography
                        textAlign="center"
                        onClick={() => {
                          remove("jwt");
                          setpages("");
                          navigate("/");
                        }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  </div>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}

export default NavbarApp;
