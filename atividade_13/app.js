const textArea = document.getElementById('text');
const checkUpper = document.getElementById('checkUpper');
const checkDown= document.getElementById('checkDown');

checkUpper.addEventListener('click', function(e) {
    checkDown.checked = false;
    let textValue = textArea.value.toUpperCase();
    textArea.value = textValue;
  });

checkDown.addEventListener('click', function(e) {
    checkUpper.checked = false;
    let textValue = textArea.value.toLowerCase();
    textArea.value = textValue;
});