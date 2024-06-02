

let usuario = {
    nombre: 'davidR10',
    assignature: 'programation',
    estudiante: 'AVANZADO',
    pasaporte: 'true',
    idiomas:{ingles:'avanzado',
             espanol:'nativo',
             portugues: 'basico',
            extrangero:{
                ingles: 'avanzado',
                frances:'medio',
                aleman: 'bajo'
            }}

}

console.log(usuario);
console.log(usuario.assignature);
console.log(usuario.estudiante);

delete usuario.estudiante;
console.log(usuario);


console.log( usuario.hasOwnProperty('aka'))
console.log(usuario['pasaporte'])
console.log(usuario.idiomas.extrangero.ingles);
console.log(usuario.assignature)
console.log(usuario.idiomas.extrangero.aleman)
