import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const text = 'Ruth megu'

const UserList = () => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        </List>
    )
}


export default UserList;