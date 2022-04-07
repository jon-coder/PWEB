function main() {
    setData();
}

function setData() {
    let firstName = prompt('Digite o primeiro nome:');
    let firstGrade = prompt(`Digite a nota do ${firstName}`);   

    let secondName = prompt('Digite o segundo nome:');
    let secondGrade = prompt(`Digite a nota do ${secondName}`);    

    let thirdName = prompt('Digite o terceiro nome:');
    let thirdGrade = prompt(`Digite a nota do ${thirdName}`);    

    var average = setAverageGrade(parseFloat(firstGrade), parseFloat(secondGrade), parseFloat(thirdGrade));
    alert(`A média aritmética final é ${average}`);
}

function setAverageGrade(g1, g2, g3) {
    let average = (g1 + g2 + g3) / 3;
    return average.toFixed(2);
}
