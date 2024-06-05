import { Creature } from "./js/creature.js";
import { Hero } from "./js/hero.js";
import { Monster } from "./js/monster.js";
import { Battle } from "./js/game.js";


let hero = new Hero("davidRojas10",100,'KICK',5);


let monster1 = new Monster ("Goblin",90,"Achazo",8);
let monster2 = new Monster ("Orco",70,"Puño",7);
let monster3 = new Monster ("Kobold",40,"Trueno",8);

let monsters = [
  monster1,
  monster2,
  monster3,
];

console.log(hero);
console.log(monsters);

const battle = new Battle(hero, monsters);
battle.start();