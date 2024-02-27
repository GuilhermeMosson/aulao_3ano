function calcular(){
    var n1 = document.getElementById("num1").valueAsNumber;
    var n2 = document.getElementById("num2").valueAsNumber;
    var resul = document.getElementById("res");

    if(isNaN(n1) || isNaN(n2)){
        alert("Digite números válidos")
        return;
    }
    resul.textContent = n1 + n2;
}

function calcularMedia(){
    var nota1 = document.getElementById("nota1").valueAsNumber;
    var nota2 = document.getElementById("nota2").valueAsNumber;
    var nota3 = document.getElementById("nota3").valueAsNumber;
    var media = document.getElementById("resMed");
    
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert("Digite números válidos")
        return;
    }
    media.textContent = (nota1 + nota2 + nota3) / 3;

    if(media>=7){
        media.style.color = "green";
    }else{
        media.style.color = "red";
    }
}