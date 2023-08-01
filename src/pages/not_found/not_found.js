import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import { notFoundText } from '../.././utils/variables';


const NotFound = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TextHolder variant='h1'>
                { notFoundText }
            </TextHolder>
        </Box>
    )
}


export default NotFound;