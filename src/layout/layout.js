import { useState, useEffect } from 'react';
import Header from './header';
import Navbar from './navbar';
import MobileSidebar from './mobile_sidebar';
import { Box } from '@mui/material';
import Main from './main';
import useWindowWidth from '.././hooks/useWindowWidth';


const Layout = () => {
    const mobileScreen = useWindowWidth();

    const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setIsMObileSidebarOpen] = useState(false);

    useEffect(() => {
        if (!mobileScreen) {
            setIsDesktopSidebarOpen(true)
            setIsMObileSidebarOpen(false)
        } else {
            setIsDesktopSidebarOpen(false)
        }
    }, [mobileScreen])

    const toggleMobileSidebar = (toggle) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsMObileSidebarOpen(toggle);
    };

    return (
        <Box>
            <Header
                toggleMobileSidebar={toggleMobileSidebar}
                setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
            />
            {
                mobileScreen &&
                < MobileSidebar
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            }
            <Main
                isDesktopSidebarOpen={isDesktopSidebarOpen}
                mobileScreen={mobileScreen}
            />
            {mobileScreen && <Navbar />}
        </Box>
    )
}


export default Layout;