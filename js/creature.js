
export class Creature{

    constructor(nombre,vida,vidaMaxima,ataque){
        this._nombre = nombre;
        this._vida = vida;
        this._vidaMaxima = vidaMaxima;
        this._ataque = ataque;
    }
    atacar(){
        return `${this._nombre} ${this._ataque}`;
    }
    
}

let  hero = new Creature('davidR10',80,100,'patada');
let  mounstruo = new Creature ('Orco,',70,80,'Garras0')
let  mounstruo1 = new Creature ('Goblin',80,85,'empujon')
let  mounstruo2 = new Creature ('Kobold',95,100,'quemada')


console.log(mounstruo1.atacar())