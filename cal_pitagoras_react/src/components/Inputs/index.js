import styled from 'styled-components';

const InputValue = styled.input`
    padding: 15px;
    margin-bottom: 15px;
    width: 100%;
    text-align: center;
`


export default function Inputs(){
    return(
        <>
            <InputValue placeholder="Coloque um lado do triângulo" type="number"></InputValue>
        </>
    )
}