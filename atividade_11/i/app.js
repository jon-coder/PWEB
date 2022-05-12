function Retangulo (x,y){
    this.base = x;
    this.altura = y;

    this.calculaArea = function(){
        return base * altura;
    };

}

var base = 30
var altura = 30

var retangulo = new Retangulo(base, altura)

document.getElementById('base').innerHTML = `Base = ${retangulo.base} m`
document.getElementById('altura').innerHTML = `Altura = ${retangulo.altura} m`
document.getElementById('resultado').innerText = `Área total = ${retangulo.calculaArea()} m2`;