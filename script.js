const arr=document.querySelectorAll(".keys");
var scr=document.querySelector(".scr")
var a=0;
var b=null;
var operator=null


function isoperator(value){
    return value=='+' || value=='-' || value=='/' || value=='*';
}
for(let i=0;i<arr.length;i++){
    arr[i].onclick=function(){
        var value=this.getAttribute("value")
        var text = scr.textContent.trim();
        if(isoperator(value)){
            operator=value;
            a=parseFloat(text);
            scr.textContent="";
        }

        else if (value == "AC") {
            scr.textContent = "";
        }

        else if (value == "+/-") {
            a = parseFloat(text);
            a = -1 * operand1;
            scr.textContent = operand1;
        }

        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                scr.textContent = text + '.';
            }
        }

        else if (value == "%") {
            a = parseFloat(text);
            a = a / 100;
            scr.textContent = a
        }

         else if (value == "=") {
            b = parseFloat(text);
            var result = eval(a + ' ' + operator + ' ' + b);
            if (result) {
                scr.textContent = result;
                a = result;
                b = null;
                operator = null;
            }
        }
        
        else {
            scr.textContent += value;
        }
    }
}
