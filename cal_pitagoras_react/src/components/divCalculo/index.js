import styled from "styled-components";

import ButtonCal from "../Button";
import Inputs from "../Inputs";

const TextoTitulo = styled.h1`
  padding-bottom: 15px;
  text-align: center;
  color: rgb(63, 60, 60);
`;

export default function DivCalculo() {
  return (
    <>
      <TextoTitulo>Calcule abaixo a Hipotenusa:</TextoTitulo>
      <Inputs />
      <Inputs />
      <ButtonCal />
      <TextoTitulo> A hipotenusa é: </TextoTitulo>
    </>
  );
}
