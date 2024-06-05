import { Creature } from "./js/creature.js";
import { Hero } from "./js/hero.js";
import { Monster } from "./js/monster.js";
import { Battle } from "./js/game.js";


let hero1 = new Hero("davidR10", 100, 100, 'KICK', 5);


let monster1 = new Monster ("Goblin",80,90,"Achazo",8);
let monster2 = new Monster ("Orco",50,70,"Puño",7);
let monster3 = new Monster ("Kobold",30,40,"trueno",8);

console.log(hero1);
console.log(monster1);
console.log(monster2);
console.log(monster3);

let monsters = [
  monster1,
  monster2,
  monster3,
];

const battle = new Battle(hero1, monsters);
battle.start();