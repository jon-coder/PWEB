var age,
    avarage = 0, 
    cont = 0,
    moreOld = 0,
    moreYoung = 999, 
    bad = 0,
    goodOrGreat = 0,
    femaleNumber = 0;
    maleNumber = 0;


function addData(){
    
    if(cont < 45){
        if(document.getElementById('idade').value == ''){
            alert("O campo idade deve ser preenchido")
        }else if(document.getElementById('feminino').checked == false && document.getElementById('masculino').checked == false) {
            alert("Selecione o sexo do entrevistado")            
        }else{
            setAge()
            setGender()
            setOpinion()
            clean()
            cont++            
            document.getElementById('contador').
            innerText = 'Pessoas entrevistadas ' + cont + '/45'          
        }
    } else {
        document.getElementById("confirmar").disabled = true;
        document.getElementById("contador").innerText = 'Limite Total de pesquisas necessárias. Clique em exibir resultados'
    }
}

function setAge(){     
    age = Number.parseInt(document.getElementById('idade').value)
    avarage += parseFloat(age, 2)
    if(age > moreOld){
        moreOld = age;
    }

    if(age < moreYoung){
        moreYoung = age;
    }

}

function setGender(){
    if(document.querySelector('#feminino').checked == true){
        femaleNumber++ 
    }
    if (document.querySelector('#masculino').checked == true){
        maleNumber++
    }
}

function setOpinion(){
    if(document.querySelector('#otimo').checked == true || document.querySelector('#bom').checked == true){
        goodOrGreat++ 
    }
    if (document.querySelector('#pessimo').checked == true){
        bad++
    }
}

function clean(){
    document.getElementById('idade').value = ""
    document.querySelector('#feminino').checked = false
    document.querySelector('#masculino').checked = false
    document.querySelector('#otimo').checked = false
    document.querySelector('#bom').checked = false
    document.querySelector('#regular').checked = false
    document.querySelector('#pessimo').checked = false
    document.getElementById('h2').innerText =""
    document.getElementById('p').innerText =""

}

function finish(){    
    if(cont < 45){
        document.getElementById('h2').innerText = "Resultado Parcial"
    }else{
        document.getElementById('h2').innerText = "Resultado Final"
    }
    document.getElementById('p').innerText = `Média das idades: ${(avarage/cont).toFixed(2)}\nIdade do mais velho: ${moreOld}\nIdade do mais novo: ${moreYoung}\nQuantidade de avaliações "Péssimo": ${bad}\nPercentual de opiniões "Bom ou Otimo": ${(100*goodOrGreat/cont).toFixed(2)}%\nQuantidade de mulheres: ${femaleNumber}\nQuantidade de homens: ${maleNumber}`
}