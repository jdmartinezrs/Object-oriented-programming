class Creature{
    constructor(){
    }
    
        set setNombre(name){
            this.setNombre = name;
        }
        set setVida(life){
            this.setVida = life;
        }
        set setVidaMaxima(maxLife){
            this.setVidaMaxima = maxLife;
        }
        set setAtaque(attack){
            this.setAtaque = attack;
        }
    
    

}

class Hero extends Creature {
    constructor(name,life,maxLife,attack){
    super();
    this.nombre = name;
    this.vida = life;
    this.vidaMaxima = maxLife;
    this.ataque = attack;
    }

}
let hero1 = new Hero  ("davidR10",95, 100,"Kick")


class Monster extends Creature{
    constructor(name,life,maxLife,attack){
        super();
        this.nombre = name;
        this.vida = life;
        this.vidaMaxima = maxLife;
        this.ataque = attack;
    }
    
}
let monster1 = new Monster ("Goblin",80,90,"Achazo");
let monster2 = new Monster ("Orco",80,90,"Puño");
let monster3 = new Monster ("Kobold",80,90,"trueno");

console.log(hero1);
