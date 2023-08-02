import Button from '../../components/button';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';


const UserHolder = (props) => {
    const { id, handleClick } = props;

    const { user } = useSelector(state => state.appReducer);

    return (
        <Box>
            <Button
                color="inherit"
                endIcon={<ExpandMoreIcon />}
                textTransform='capitalize'
                id={id}
                onClick={handleClick}
            >
                { user && user.user }
            </Button>
        </Box>
    )
}


export default UserHolder;