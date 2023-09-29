
const forme = document.getElementById('formNum')

formeValid= false;

function aMaior (numA, numB){ 
    return numA > numB;
}

forme.addEventListener("submit", function(e){
    e.preventDefault();
    let numA = document.getElementById("numA").value;
    let numB = document.getElementById("numB").value;

    formeValid = aMaior(numA, numB);
    
    if (formeValid){
       alert("Correto!");
    } else {
        alert("Tente novamente. O primeiro número deve ser maior que o segundo.");
    }    
}) 