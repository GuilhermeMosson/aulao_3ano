function calcularB(){
    var numa = document.getElementById("nuA").valueAsNumber;
    var numb = document.getElementById("nuB").valueAsNumber;
    var numc = document.getElementById("nuC").valueAsNumber;
    var resul01 = document.getElementById("resul1");
    var resul02 = document.getElementById("resul2");

    var delta = (numb*numb) - (4*(numa*numc));
    console.log("Delta: " + delta);

    if(delta<0){
        alert("o DELTA da equção é menor que 0; Delta = " + delta)
    }else{
        resul01.textContent = ((-1*numb)+(Math.sqrt(delta)))/(2*numa).toFixed(3);
        resul02.textContent = ((-1*numb)-(Math.sqrt(delta)))/(2*numa).toFixed(3);
    }
}


