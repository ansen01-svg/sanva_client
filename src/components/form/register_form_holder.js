import FormWrapper from "../.././styled_components/form";
import FieldHolder from './field_holder';
import ButtonHolder from './button_holder';
import MessageHolder from './message_holder';


const RegisterFormHolder = (props) => {
    const { width, height, handleFormSubmit, handleSubmit, register,
        reset, initialState, registerMessage, registerErrorMessage,
        watch, } = props;

    const watchFields = watch()
    const disable = (!watchFields.email || !watchFields.password || !watchFields.username)

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
                    id='username'
                    name='username'
                    type='text'
                    label='Username'
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
                    (registerMessage || registerErrorMessage) && <MessageHolder
                        message={registerMessage || registerErrorMessage}
                        severity={registerMessage ? 'success' : 'error'}
                    />
                } 
                <ButtonHolder buttonTitle='Sign up' disable={disable} />
        </FormWrapper>
        </>
    )
}


export default RegisterFormHolder