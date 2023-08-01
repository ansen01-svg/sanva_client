import styled from "styled-components";


const FormWrapper = styled.form`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    // border: 1px solid gray;
`


export default FormWrapper;