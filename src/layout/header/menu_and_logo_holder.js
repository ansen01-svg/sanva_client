import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import ImageHolder from "../../components/image_holder";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect, useRef } from "react";

const MenuAndLogoHolder = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  const mobileScreen = useWindowWidth();

  let handleClick = useRef(null);

  useEffect(() => {
    if (mobileScreen) {
      handleClick.current = toggleMobileSidebar(true);
    } else {
      handleClick.current = function () {
        setIsDesktopSidebarOpen((state) => !state);
      };
    }
  }, [mobileScreen, toggleMobileSidebar, setIsDesktopSidebarOpen]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick.current}
      >
        <MenuIcon sx={{ fontSize: "25px" }} />
      </IconButton>
      <ImageHolder src={logo} alt="logo_dark" width="100px" height="40px" />
    </Box>
  );
};

export default MenuAndLogoHolder;
