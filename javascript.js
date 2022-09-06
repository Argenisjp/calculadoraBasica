const textOpe1 = document.getElementById("ope1");
const textOperacion = document.getElementById("operacion");
const textOpe2 = document.getElementById("ope2");
const btnCalcular = document.getElementById("calcular");

const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular);
 
function calcular(){
   const operacion = textOperacion.value;
   const ope1 = parseFloat(textOpe1.value);
   const ope2 = parseFloat(textOpe2.value);

   if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(ope1) && !isNaN(ope2) ) {

        let resultado;
        switch (operacion) {
            case "+":
                resultado = ope1 + ope2;
                break;
        
            case "-":
                resultado = ope1 - ope2;
                break;
        
            case "*":
                resultado = ope1 * ope2;
                break;
        
            case "/":
                resultado = ope1 / ope2;
                break;
        
            default:
                break;
        }

        pResultado.style = "color: blue"
       pResultado.innerText = `El resultado es: ${resultado}`
   }else{
    pResultado.style = "color: red"
    pResultado.innerText = "Operacion Incorrecta"
   }
}