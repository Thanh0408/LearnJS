var numb_1 = 0;
var numb_2;

function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(numb) {
    document.getElementById("history-value").innerText = numb;
}
function getOutput() {
    return document.getElementById("output-value").innerText.replace(/,/g, '');
}

function printOutput(numb) {
    document.getElementById("output-value").innerText = numb;
}

function clearAll() {
    printOutput("");
    printHistory("");
}

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

function calculator(operator) {
    numb_1 = getOutput();
    //continue 22.3.2022
}

var operator  = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(){
        if(this.id == "C") {
            clearAll();
        } else if(this.id == "CE") {
            numb_2 = getOutput().slice(0,-1);
            printOutput(separator(numb_2));
        } else {
            calculator(this.id);
        }
    })
}

var number = document.getElementsByClassName("number");
for(var j = 0; j < number.length; j++) {
    number[j].addEventListener("click", function(){
        if(getOutput() == "") {
            numb_2 = this.id;
        } else {
            numb_2 = getOutput() + this.id; 
        }
        printOutput(separator(numb_2));
    })
}


