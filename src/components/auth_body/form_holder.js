import Form from '../../components/form';
import { Box } from '@mui/material';


const FormHolder = (props) => {
    const { fields } = props;

    return (
        <Box
            sx={{
                width: '100%',
                height: '70%',
            }}
        >
            <Form
                width='100%'
                height='100%'
                fields={fields}
            />
        </Box>
    )
}


export default FormHolder;