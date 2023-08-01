import { useState } from "react";


const useRegister = () => {
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = (data, reset, initialValues) => {
        fetch('apis/v1/auth/register', {
            headers: { "Content-Type": 'application/json;charset=utf-8' },
            body: JSON.stringify(data),
            method: 'POST'
        })
        .then(async(response) => {
            if(response.status === 201) {
                const res = await response.json()
                setMessage(res.msg)
                reset(initialValues)
            }
            return response.json()
        })
        .then(data => setErrorMessage(data.msg))
        .catch(error => console.log(error))

    }

    return { message, errorMessage, handleRegister };
}


export default useRegister;