import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


const LoadingFallback = (props) => {
    const { width, height, color, value } = props;

    return (
        <Box
            sx={{
                width: (width || '100%'),
                height: (height || '100%'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <CircularProgress
                color={color}
                value={value}
            />
        </Box>
    )
}


export default LoadingFallback;