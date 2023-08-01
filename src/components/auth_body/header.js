import { Box } from '@mui/material';
import TextHolder from '../.././components/text_holder';


const Header = ({heading, headerText}) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '18%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}
        >
            <TextHolder variant='h1'>
                { heading }
            </TextHolder>
            <TextHolder variant='p'>
                { headerText }
            </TextHolder>
        </Box>
    )
}


export default Header;