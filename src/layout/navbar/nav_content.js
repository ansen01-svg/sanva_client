import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { bottomNavigation } from '../../utils/arrays';
import {
    storeInSessionStorage,
    getFromSessionStorage,
    removeFromSessionStorage,
    getPageIndex
} from '../.././utils/utils_functions';


const NavContent = () => {
    const currentPage = getFromSessionStorage('currentPage')

    const [index, setIndex] = useState(getPageIndex(currentPage));

    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setIndex(newValue);
    }

    const handleClick = (link, page) => {
        navigate(link)
        
        const currentPage = getFromSessionStorage('currentPage')

        if(currentPage) {
            removeFromSessionStorage('currentPage')
            storeInSessionStorage('currentPage', page)
        } else {
            storeInSessionStorage('currentPage', page)
        }
    }

    return (
        <BottomNavigation
        showLabels
        value={index}
        onChange={(event, newValue) => handleChange(event, newValue)}
        sx={{
            backgroundColor: 'inherit',
            borderTop: '1px solid rgba(57,76,96,.15)',
            '& .MuiSvgIcon-root': {
                fontSize: 25,
            },
            '& .MuiBottomNavigationAction-label': {
                fontSize: 11,
            }
        }}
        >
            {
                bottomNavigation.map(navigationItem => {
                    return <BottomNavigationAction
                                key={navigationItem.id}
                                label={navigationItem.title}
                                icon={navigationItem.icon}
                                onClick={() => handleClick(navigationItem.link, navigationItem.title)}
                            />
                })
            }
        </BottomNavigation>
    )
}


export default NavContent;