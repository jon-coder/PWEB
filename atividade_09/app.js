function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
    var pivot = array[0];
    var left = []; 
    var right = [];
    
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
};

function arrange(){
    var unsorted = [];
    var num1 = parseFloat(document.getElementById("numero1").value); 
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    unsorted.push(num1);
    unsorted.push(num2);
    unsorted.push(num3);
    var sorted = quickSort(unsorted);
    document.getElementById('resposta').innerText = ('Ordem Crescente: '  + sorted);
}

function largest() {
    var arr = [];
    var num1 = parseFloat(document.getElementById("numero1").value); 
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);

    var largest = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (largest < arr[i] ) {
            largest = arr[i];
        }
    }

    document.getElementById('resposta').innerText = (' O maior número é ' +  largest)
}
