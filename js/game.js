import { Creature } from "./creature.js";
import { Hero } from "./hero.js";
import { Monster } from "./monster.js";


export class Game {
    constructor(){

    this.historial = []; 

    }

    loguear(accion){
        this.historial.push(accion);
    }

    mostrarHistorial() {
        return this.historial.join('\n');
      }

}

export class Combat{
    #damage = 10;
    constructor(){

    }
    attacks(instrumento= 0){
        if (instrumento)this.#damage += instrumento;
            return instrumento;
        }


    


}