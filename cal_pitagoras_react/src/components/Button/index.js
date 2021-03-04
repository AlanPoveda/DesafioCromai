import styled from 'styled-components'

const ButtonCalcular = styled.button`
    margin-bottom: 15px;
    cursor: pointer;
    width: 70%;
    height: 40px;
    margin-left: 20%;
    background-color: green;
    color: white;
    border: none;
    border-radius: 2px;

`



function ButtonCal(){

    return <ButtonCalcular > Calcular</ButtonCalcular>
}

export default ButtonCal;