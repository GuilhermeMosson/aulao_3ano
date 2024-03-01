function checkMajority(){
    var wasBorn = document.getElementById("clientBirth").valueAsNumber;
    var monthBorn = document.getElementById("clientMountyB").valueAsNumber;
    var res = document.getElementById("result");

    if(isNaN(wasBorn) || isNaN(monthBorn)){
        res.textContent = "Type only numbers!";
        res.style.color = "red";
        return;
    }

    if(monthBorn > 12){
        res.textContent = "Type a valid mounty!"
        res.style.color = "red";
        return;
    }

    const thisYear = new Date().getFullYear();
    const thisMounty = new Date().getMonth();

    if(monthBorn >= thisMounty){
        var age = (thisYear - wasBorn) - 1; 
        var month = ((12 + thisMounty) - monthBorn);
        //template string
        document.getElementById("clientAge").innerHTML = `${age} anos de idade e`
        document.getElementById("clientMounty").innerHTML = `${month} meses`
    }else{
        var age = thisYear - wasBorn;
        var month = thisMounty - monthBorn;
        document.getElementById("clientAge").innerHTML = `${age} anos de idade e`
        document.getElementById("clientMounty").innerHTML = `${month} meses`
    }
}