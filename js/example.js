function crearContador () {

    let contar =0;

    function incrementar (){
        contar++;
        console.log(contar);
    }
    return incrementar;

}

const contador = crearContador();

contador();
contador();
contador();





//Definicion de SCOPE Of the Variables




let miNOmbre = 'The Unbeatable Mach-1'; //Declaración Global

function datosEstudiante(){
    let edad = 30;//Declaración Local
    console.log (`Mi nombre es: ${miNOmbre} y tengo ${edad} años.`);
}


console.log(`Mi nombre es: ${miNOmbre}`);

datosEstudiante();


//la declaración global se puede llamar desde cualquier función en el codigo
//sin embargo una variable Local solo se ejecuta dentro de si misma 
