

 function suma(){
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;
    if(n1==="" || n2===""){
        alert("Valores Vacios")
   }else if(isNaN(n1) || isNaN(n2)){
        alert("No son Numeros")
   }else{
        //Realiza la suma y muestra el resultado por un alert
        alert(parseInt(n1) + parseInt(n2));
   }
}

//Captura el elemento btn
const btn = document.getElementById("btnSumar");
//Asigna un addEventListener al boton, para que al dar clic en el, se ejecute la funcion suma
btn.addEventListener("click",suma);