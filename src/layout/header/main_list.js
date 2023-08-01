import { useState } from 'react';
import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import { ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { setMode } from '../../redux/app_slice';
import SubList from './sub_list';


const MainList = () => {
    const dispatch = useDispatch();

    const mode = localStorage.getItem('mode');

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(mode === 'dark' ? 1 : 0);

    const handleClick = () => {
        setOpen(!open);
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

        if(index === 0) {
            dispatch(setMode('light'))
            localStorage.setItem('mode', 'light')
        } else {
            dispatch(setMode('dark'))
            localStorage.setItem('mode', 'dark')
        }
    }

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton>
                <ListItemText primary="Sign out" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Appearance" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <SubList
                    selectedIndex={selectedIndex}
                    handleListItemClick={handleListItemClick}
                />
            </Collapse>
        </List>
    )
}


export default MainList;