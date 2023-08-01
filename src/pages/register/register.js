import { Container } from '@mui/material';
import AuthBody from '../.././components/auth_body';
import {
    registerHeading,
    registerHeaderText,
    registerFooterText,
    registerFooterLink,
    registerFooterLinkText
} from '../.././utils/variables';


const Register = () => {
    return (
        <Container
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <AuthBody
                heading={registerHeading}
                headerText={registerHeaderText}
                footerText={registerFooterText}
                footerLink={registerFooterLink}
                footerLinkText={registerFooterLinkText}
                fields='3'
            />
        </Container>
    )
}


export default Register;