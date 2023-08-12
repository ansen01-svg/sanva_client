import { useState, useEffect } from "react";
import Header from "./header";
import Navbar from "./navbar";
import MobileSidebar from "./mobile_sidebar";
import { Box } from "@mui/material";
import Main from "./main";
import useWindowWidth from ".././hooks/useWindowWidth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/app_slice";

const Layout = () => {
  const dispatch = useDispatch();
  const mobileScreen = useWindowWidth();

  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(setUser());
  }, [dispatch]);

  useEffect(() => {
    if (!mobileScreen) {
      setIsDesktopSidebarOpen(true);
      setIsMobileSidebarOpen(false);
    } else {
      setIsDesktopSidebarOpen(false);
    }
  }, [mobileScreen]);

  const toggleMobileSidebar = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsMobileSidebarOpen(toggle);
  };

  return (
    <Box>
      <Header
        toggleMobileSidebar={toggleMobileSidebar}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
      {mobileScreen && (
        <MobileSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        />
      )}
      <Main
        isDesktopSidebarOpen={isDesktopSidebarOpen}
        mobileScreen={mobileScreen}
      />
      {mobileScreen && <Navbar />}
    </Box>
  );
};

export default Layout;
