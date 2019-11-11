var exp = "", number,decimal,equal,operator,allowSr = true;
var textview = document.forms['myForm']['textview'];
function insertNum(num){
    if (equal){
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    }
    else {
        exp = textview.value + num;
        textview.value = exp;
        number = true;
    }
    if (operator) decimal = false;
    SR('a');
}
function insertOp(op){
    textview.value = exp + op;
    operator = true;
    equal = false;
    allowSR = false;
    SR('a');
}
function insertDec(){
    if (number && !decimal){
        textview.value = exp + '.';
        decimal = true;
        operator = false;
    }
}
function equalTo(){
    if (exp){
        exp = eval(exp);
        textview.value = exp;
        equal = true;
        decimal = false;
        number = false;
        allowSR = false;
        SR('a');
    }
}
function clean(){
    exp = '';
    textview.value = exp;
    decimal = false;
}
function del(){
    exp = textview.value;
    exp = exp.substring(0,exp.length - 1);
    textview.value = exp;
}
function SR(x){
    if (x=='r'){
        exp = Math.sqrt(exp);
        textview.value;
    }
    else if (x=='s'){
        exp = exp*exp;
        textview.value = exp;
    }
    else if (x=='a' && allowSR){
        document.getElementById('r').disabled = false;
        document.getElementById('s').disabled = false;
    }
    else if (!allowSR){
        document.getElementById('r').disabled = true;
        document.getElementById('s').disabled = true;
    }
}
function convertNumber(){
    var base = document.getElementById("base").value;
    var base2 = document.getElementById("base2").value;
    var number = parseInt(document.getElementById("number").value, base);
    textview.value = number.toString(base2)
}
function radix(){
    var base = document.getElementById("base").value;
    var number = parseInt(document.getElementById("number").value,base);
    var digits = parseInt(document.getElementById("digits").value, 10);
    exp = Math.pow(base, digits) - number;
    textview.value = exp.toString(base);    
}
function diminishedRadix(x){
    var base = document.getElementById("base").value;
    var number = parseInt(document.getElementById("number").value,base);
    var digits = parseInt(document.getElementById("digits").value, 10);
    exp = (Math.pow(base, digits) - 1) - number;
    textview.value = exp.toString(base);   
}

//Dropdown menu on the navbar//

(function() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });   
})();