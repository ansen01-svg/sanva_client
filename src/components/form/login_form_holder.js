import FormWrapper from "../.././styled_components/form";
import FieldHolder from './field_holder';
import ButtonHolder from './button_holder';
import MessageHolder from './message_holder';


const LoginFormHolder = (props) => {
    const { width, height, handleFormSubmit, handleSubmit, register,
        reset, initialState, loginMessage, loginErrorMessage,
        watch, } = props;

    const watchFields = watch()
    const disable = (!watchFields.email || !watchFields.password)

    return (
        <>
            <FormWrapper width={width} height={height}
                onSubmit={handleSubmit(data => handleFormSubmit(data, reset, initialState))}               
            >
                <FieldHolder
                    id='email'
                    name='email'
                    type='email'
                    label='Email'
                    variant='outlined'
                    register={register}
                />
                <FieldHolder
                    id='password'
                    name='password'
                    type='password'
                    label='Password'
                    variant='outlined'
                    register={register}
                />
                {
                    (loginMessage || loginErrorMessage) && <MessageHolder
                        message={loginMessage || loginErrorMessage}
                        severity={loginMessage ? 'success' : 'error'}
                    />
                }                
                <ButtonHolder buttonTitle='Sign in' disable={disable} />
            </FormWrapper>
        </>
    )
}


export default LoginFormHolder;