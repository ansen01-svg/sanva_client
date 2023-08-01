import Box from '@mui/material/Box';
import NavContent from './nav_content';


const Navbar = () => {
    return (
        <Box sx={{
            width: 500,
            position: 'fixed',
            bottom: 0,
            left: 0,
        }}        
        >
            <NavContent />
        </Box>
    )
}


export default Navbar;