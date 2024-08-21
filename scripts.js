function appendToDisplay(val) {
    document.getElementById('display').value+=val;
}

function allClear() {
    document.getElementById('display').value = "";
}

function calculate() {
    const expression = document.getElementById('display').value;
    const result = eval(expression)
    document.getElementById('display').value = result;
}