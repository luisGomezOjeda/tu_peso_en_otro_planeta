function calculo_planeta_peso(kg,planeta){
     const tierra = 9.8;
     return ( kg * planeta) / tierra;
}

function recibir_y_calcular(){
    let peso = Number(document.getElementById("peso").value);
    let planeta = document.getElementById("planeta");
    let imagen = document.getElementById("imagen_planeta");
    if(planeta.value == 0){
        alert("selecciona un planeta");
    }
    else if(planeta.value == 1){
        planeta = [8.87,"venus"];
        imagen.src = "./assets/img/venus.png"
    }
    else if(planeta.value == 2){
        planeta = [3.7,"mercurio"];
        imagen.src = "./assets/img/venus.png"
    }
    else if(planeta.value == 3){
        planeta = [3.721,"marte"];
        imagen.src = "./assets/img/marte.png"
    }
    else if(planeta.value == 4){
        planeta = [24.79,"jupiter"];
        imagen.src = "./assets/img/jupiter.png"
    }
    else if(planeta.value == 5){
        planeta = [10.44,"saturno"];
        imagen.src = "./assets/img/saturno.png"
    }
    else if(planeta.value == 6){
        planeta = [8.87,"urano"];
        imagen.src = "./assets/img/urano.png"
    }
    else if(planeta.value == 7){
        planeta = [11.15,"neptuno"];
        imagen.src = "./assets/img/neptuno.png"
    }
    else if(planeta.value == 8){
        planeta = [0.62,"pluton"];
        imagen.src = "./assets/img/pluton.png"
    }

    peso_final = parseInt(calculo_planeta_peso(peso,planeta[0]));

    let resultado_final = document.getElementById("resultado_final");
    resultado_final.innerText = "tu peso en " + planeta[1] + " es de " + peso_final + "kg";
}