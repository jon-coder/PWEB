function init() {

    do {
        var userValue = parseInt(prompt("Escolha sua opção:\n1-PEDRA\n2-PAPEL\n3-TESOURA"));
    } while (isNaN(userValue) || userValue < 1 || userValue > 3);

    var randomValue = randomIntFromInterval(1, 3);

    var userJokenpoChoice = intToJokenpo(userValue);
    var pcJokenpoChoice = intToJokenpo(randomValue);

    alert(`Você escolheu: ${userJokenpoChoice} | PC escolheu: ${pcJokenpoChoice}`);

    jokenpoGame(userJokenpoChoice, pcJokenpoChoice)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function intToJokenpo(value) {
    switch (value) {
        case 1:
            return "PEDRA";
        case 2:
            return "PAPEL";
        case 3:
            return "TESOURA";
        default:
            return "";
    }
}

function jokenpoGame(user, pc) {
    if (user === pc) {
        alert("EMPATE!");
    } else if (user == "PEDRA" && pc == "TESOURA") {
        alert("VOCÊ GANHOU!");
    } else if (user == "PAPEL" && pc == "PEDRA") {
        alert("VOCÊ GANHOU!");
    } else if (user == "TESOURA" && pc == "PAPEL") {
        alert("VOCÊ GANHOU!");
    } else {
        alert("VOCÊ PERDEU :(");
    }
}