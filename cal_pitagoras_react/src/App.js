import { createGlobalStyle } from "styled-components";

import Navigation from "./components/navigation";
import DivCalculo from "./components/divCalculo"

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

// Fica logica


/*function CalculoHipotenusa(){
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);

  let cateto1 = num1 ** 2;
  let cateto2 = num2 ** 2;
  let hipotenusa = (cateto1 + cateto2) ** (1 / 2);
}*/


function App() {
  return (
    <>
      <Navigation />
      <DivCalculo />
      <GlobalStyle />
    </>
  );
}

export default App;
