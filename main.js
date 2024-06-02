let condicion = 2;


if(condicion > 5 ){
    document.write("codigo en caso de que se cumpla el IF <br>");
    document.write("codigo en caso de que se cumpla el IF <br>");
    document.write("codigo en caso de que se cumpla el IF <br>");
    document.write("codigo en caso de que se cumpla el IF <br>");


}else if(condicion == 2 ){
    document.write("codigo en caso de que se cumpla el ELSE IF <br>");
    document.write("codigo en caso de que se cumpla el ELSE IF <br>");
    document.write("codigo en caso de que se cumpla el ELSE IF <br>");
    document.write("codigo en caso de que se cumpla el ELSE IF <br>");
}

else{
    document.write("codigo en caso de que NO SE cumpla el IF <br>");
    document.write("codigo en caso de que NO SE cumpla el IF <br>");
    document.write("codigo en caso de que NO SE cumpla el IF <br>");
    document.write("codigo en caso de que NO SE cumpla el IF <br>");

}


//Usuario ingresa la hora
//el sistema dice:
//hora 6 - 12: Buenos dias
//hora 13 - 18: Buenas tardes
// resto de horas: buenas noches

let hora = prompt("Ingrese la hora porfavor:")

if (hora>=6 && hora <=12){
    console.log(`Buenos dias, la hora es: ${hora} AM`)

}else if (hora>= 13 && hora <= 18){
    console.log(`Buenas tardes, la hora es ${hora} PM`)

}else if (hora === "14:20"){
    console.log(`Tomate un break la hora es: ${hora}`)

}else{
    console.log(`Buenas noches, la hora es: ${hora}`)
}













