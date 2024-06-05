import { Creature } from "./creature.js";
export class Monster extends Creature{
    constructor(name,life,attack,kickAttack){
    super();
    this.nombre = name;
    this.vida = life;
    this.ataque = attack;
    this.ataqueKick= kickAttack;
    }
}