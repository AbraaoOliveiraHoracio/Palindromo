

function resul(){
    
const num1=document.getElementById("num1").value;
const numeroInvertido = num1.split("").reverse().join("");

    if (num1 == numeroInvertido) {
     document.getElementById("result").innerHTML = "<div class='alert alert-success'>O número " + num1 + " é um palíndromo!</div>";
    } else {
     document.getElementById("result").innerHTML = "<div class='alert alert-danger'>O número " + num1 + " não é um palíndromo!</div>";
     }


} 
