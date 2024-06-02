//parametros y argumentos

export function Register (name, lastname, password ){
    if(arguments.lenght>3){
        return 0;
    }
    console.log(arguments.length);
    console.log(name,lastname,password);


}
Register('davidR10','Rojas','Micorreo*','aditional');



//argumentos de las funciones
function understandingParameters (name,lastname,age){
    console.log("")

}
understandingParameters("davidR10","Martinez",28); 

function maximo (){
    if(arguments.length === 0){
    return null;
    }
    let max = arguments[0];
    for (let i = 1; i< arguments.length; i++){
     max = (arguments[i]>m ? arguments [i]: m);
    }
    return m; 
}

//parametros y argumentos en las funciones js 
function multiplicar(a,b){
   console.log(a*b)
};
multiplicar(5,5);



//parametros por defecto, argumentos
export function logros(nombre="jugador",nivel="1"){
    console.log(`${nombre} desbloqueaste el logro, ahora tu nivel es ${nivel} `)
}
logros('davidR10',10);








