function main() {
    setData();
}

function setData() {
    let firstNumber = prompt('Digite o primeiro número:');
    let secondNumber = prompt('Digite o segundo número:');
    bussinessLogic(parseFloat(firstNumber), parseFloat(secondNumber));
}

function bussinessLogic(number1, number2) {
    alert(`A soma dos dois números ${(number1 + number2)}\n
    A subtração do primeiro pelo segundo ${number1 - number2}\n
    O produto dos dois ${number1 * number2}\n
    A divisão do primeiro pelo segundo ${number1 / number2}\n
    O resto da divisão do primeiro pelo segundo ${number1 % number2}\n\n`);
}
