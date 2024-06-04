import { Creature } from "./creature.js";
export class Hero extends Creature {
    constructor(name,life,maxLife,attack){
    super();
    this.nombre = name;
    this.vida = life;
    this.vidaMaxima = maxLife;
    this.ataque = attack;
    }

}


