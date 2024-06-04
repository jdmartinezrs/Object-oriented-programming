import { Creature } from "./js/creature.js";
import { Hero } from "./js/hero.js";
import { Monster } from "./js/monster.js";
import { Battle } from "./js/game.js";


let hero1 = new Hero  ("davidR10",95, 100,"Kick")


let monster1 = new Monster ("Goblin",80,90,"Achazo");
let monster2 = new Monster ("Orco",50,70,"Puño");
let monster3 = new Monster ("Kobold",30,40,"trueno");

console.log(hero1);
console.log(monster1);
console.log(monster2);
console.log(monster3);

const hero = new Hero("DavidR10", 95, 100, "Kick");
const monsters = [
  new Monster("Goblin", 80, 90, "Achazo"),
  new Monster("Orco", 50, 70, "Puño"),
  new Monster("Kobold", 30, 40, "Trueno"),
];

const battle = new Battle(hero, monsters);
battle.start();

