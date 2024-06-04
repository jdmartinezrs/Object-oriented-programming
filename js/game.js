
export class Game {
    constructor(){

    this.historial = [];  
    }

    registrarAccion(accion){
        this.historial.push(accion);
    }

}