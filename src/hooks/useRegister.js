import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const useRegister = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async(userData, reset, initialValues) => {
        try {
            const { data } = await axios.post('apis/v1/auth/register', userData);
            
            setMessage(data.msg)
            reset(initialValues)
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        } catch (error) {
            setErrorMessage(error.response.data.msg)
        }
    }

    return { message, errorMessage, handleRegister };
}


export default useRegister;