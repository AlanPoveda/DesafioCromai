let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let res = document.getElementById("res");

function calcular() {
  let num1 = Number(number1.value);
  let num2 = Number(number2.value);
  // Conta da hipotenusa
  let cateto1 = num1 ** 2;
  let cateto2 = num2 ** 2;
  let hipotenusa = (cateto1 + cateto2) ** (1 / 2);

  res.innerHTML = `<strong>Cateto</strong> ${num1}<br> <strong>Cateto</strong> ${num2}<br> <strong>Hipotenusa</strong> ${hipotenusa.toFixed(2)}`;
}
