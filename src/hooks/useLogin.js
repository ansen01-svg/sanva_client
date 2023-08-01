import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const useLogin = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (data, reset, initialValues) => {

        fetch('apis/v1/auth/login', {
            headers: { "Content-Type": 'application/json;charset=utf-8' },
            body: JSON.stringify(data),
            method: 'POST'
        })
        .then(async(response) => {
            if(response.status === 200) {
                localStorage.setItem('user', JSON.stringify(data.email))
                const res = await response.json()
                setMessage(res.msg)
                reset(initialValues)
                navigate('/')
            }
            return response.json()
        })
        .then(data => setErrorMessage(data.msg))
        .catch(error => console.log(error))
    }

    return { message, errorMessage, handleLogin };
}


export default useLogin;