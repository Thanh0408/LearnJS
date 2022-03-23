var numb_1 = 0;
var numb_2;
var temp;
var operator;

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
    numb_1 = 0;
    printOutput("");
    printHistory("");
}

function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

function calculator(numb_1, numb_2, operator) {
    let result;
    let n1 = parseFloat(numb_1);
    let n2 = parseFloat(numb_2);
    if(operator == "+") result = n1+ n2;
    else if (operator == "-") result = n1 - n2;
    else if (operator == "x") result = n1*n2;
    else if (operator == "=") result = n1;
    else result = n1 / n2;
    // numb_1 = result;
    // temp = 0;
    return result;
}

var operator  = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(){
        if(this.id == "C") {
            clearAll();
        } else if(this.id == "=") {
            if(numb_1 == 0) {
                numb_1 = (getOutput()==NaN?0:getOutput());
                printHistory(numb_1);
                printOutput(numb_1);
            } else {
                temp = getOutput();
                operator == "=" ? printHistory(numb_1) : printHistory(numb_1 + " " + operator + " " + temp);
                numb_1 = calculator(numb_1, temp, operator);
                operator = this.id;
                temp = 0;
                printOutput(numb_1);
            }
        } else if(this.id == "CE") {
            numb_2 = getOutput().slice(0,-1);
            printOutput(separator(numb_2));
        } else {
            if(numb_1 == 0) {
                numb_1 = (getOutput()==NaN?0:getOutput());
                operator = this.id;
                printHistory(numb_1 + " " + operator);
                printOutput("");
            } else {
                if(getOutput() != "") {
                    temp = getOutput();
                    printHistory(calculator(numb_1, temp, operator) + " " + this.id);
                    numb_1 = calculator(numb_1, temp, operator);
                    operator = this.id;
                    temp = 0;
                    printOutput("");
                }
                
            }
            
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


