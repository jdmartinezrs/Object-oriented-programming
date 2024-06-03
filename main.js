class Creature{
    nombre;
    vida;
    vidaMaxima;
    ataque;

    constructor(nom,vid,vidM,attack){
        this.nombre = nom;
        this.vida = vid;
        this.vidaMaxima = vidM;
        this.ataque = attack
    }

}

class Hero extends Creature {
    constructor(nom,vid,vidM,attack){
super(nom,vid,vidM,attack);
    }

}
let hero1 = new Hero  ("davidR10",95, 100,"Kick")

class Monster extends Creature{
    constructor(nom,vid,vidM,attack){
        super(nom,vid,vidM,attack);
    }
    
}
let monster1 = new Monster ("Goblin",80,90,"Achazo");
let monster2 = new Monster ("Orco",80,90,"Puño");
let monster3 = new Monster ("Kobold",80,90,"trueno");

console.log(hero1);