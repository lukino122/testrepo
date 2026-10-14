function  shejameba(a,b,c){
return a + b + c;
}

function calculateTotal() {
    const grocery1 = Number(document.getElementById("grocery1").value);
    const grocery2 = Number(document.getElementById("grocery2").value);
    const grocery3 = Number(document.getElementById("grocery3").value);
    
    const total = shejameba(grocery1, grocery2, grocery3);
    
    document.getElementById(`result`).innerText = `The total amount: ${total}`;
    
  }