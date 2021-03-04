import styled from "styled-components";

const TopoDaPagina = styled.nav`
  background-color: green;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.h1`
  color: #fff;
 
  text-align: center;
  font-size: 40px;
`;

function Navigation() {
  return (
    <TopoDaPagina>
      <Texto> Calculadora de Pitágoras </Texto>
    </TopoDaPagina>
  );
}

export default Navigation;
