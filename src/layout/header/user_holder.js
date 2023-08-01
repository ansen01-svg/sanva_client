import Button from '../../components/button';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const UserHolder = (props) => {
    const { id, handleClick } = props;

    return (
        <Box>
            <Button
                color="inherit"
                endIcon={<ExpandMoreIcon />}
                textTransform='capitalize'
                id={id}
                onClick={handleClick}
            >
                ruth megu
            </Button>
        </Box>
    )
}


export default UserHolder;