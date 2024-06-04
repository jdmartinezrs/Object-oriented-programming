import { Creature } from "./creature.js";

import { Hero } from "./hero.js";
import { Monster } from "./monster.js";

export class Battle {
  constructor(hero, monsters) {
    this.hero = hero;
    this.monsters = monsters;
    this.currentMonster = this.getRandomMonster();
    this.historial = []; // Initialize historial array within Battle
  }

  getRandomMonster() {
    const randomIndex = Math.floor(Math.random() * this.monsters.length);
    return this.monsters[randomIndex];
  }

  atacar(atacante, atacado, tipoAtaque) {
    const damage = atacante.ataque;
    atacado.vida -= damage;

    this.mostrarEstado(atacante, atacado, tipoAtaque);

    const accion = `${atacante.nombre} ataca a ${atacado.nombre} con ${tipoAtaque}!`;
    this.historial.push(accion); // Log action to historial

    if (atacado.vida <= 0) {
      console.log(`${atacado.nombre} ha sido derrotado!`);
      this.historial.push(`${atacado.nombre} ha sido derrotado!`); // Log defeat to historial

      if (atacado === this.hero) {
        console.log("¡Has perdido la batalla!");
        // End the game or handle defeat logic here
      } else {
        console.log("¡Has derrotado al monstruo!");
        this.currentMonster = this.getRandomMonster(); // Select a new random monster
      }
    }
  }

  mostrarEstado(atacante, atacado, tipoAtaque) {
    console.log(
      `${atacante.nombre} ataca a ${atacado.nombre} con ${tipoAtaque}!`
    );
    console.log(
      `${atacado.nombre} tiene  ${atacado.vidaMaxima} de vida restante.`   
    );
    // ${atacado.vida} de
  }

  start() {
    while (this.hero.vida > 0 && this.currentMonster.vida > 0) {
      // Alternate turns between hero and monster
      this.atacar(this.hero, this.currentMonster, this.hero.ataque);
      if (this.currentMonster.vida > 0) {
        this.atacar(this.currentMonster, this.hero, this.currentMonster.ataque);
      }
    }
  }
}









// class Game {
//     constructor() {
//       this.historial = []; // Empty array to store history
//     }
  
//     loguear(accion) {
//       this.historial.push(accion);
//       console.log(accion); // Display action in the console
//     }
//   }
 
//   Battle Class:
  
//   JavaScript
//   class Battle {
//     constructor(hero, monsters) {
//       this.hero = hero;
//       this.monsters = monsters;
//       this.currentMonster = this.getRandomMonster(); // Initialize with a random monster
//     }
  
//     getRandomMonster() {
//       const randomIndex = Math.floor(Math.random() * this.monsters.length);
//       return this.monsters[randomIndex];
//     }
  
//     atacar(atacante, atacado, tipoAtaque) {
//       const damage = atacante.ataque; // Assume attack value is stored in 'ataque' property
//       atacado.vida -= damage;
  
//       this.mostrarEstado(atacante, atacado);
  
//       if (atacado.vida <= 0) {
//         console.log(`${atacado.nombre} ha sido derrotado!`);
//         if (atacado === this.hero) {
//           console.log("¡Has perdido la batalla!");
//           // End the game or handle defeat logic here
//         } else {
//           console.log("¡Has derrotado al monstruo!");
//           this.currentMonster = this.getRandomMonster(); // Select a new random monster
//         }
//       }
//     }
  
//     mostrarEstado(atacante, atacado) {
//       console.log(
//         `${atacante.nombre} ataca a ${atacado.nombre} con ${tipoAtaque}!`
//       );
//       console.log(
//         `${atacado.nombre} tiene ${atacado.vida} de ${atacado.vidaMaxima} de vida restante.`
//       );
//     }
  
//     start() {
//       while (this.hero.vida > 0 && this.currentMonster.vida > 0) {
//         // Alternate turns between hero and monster
//         this.atacar(this.hero, this.currentMonster, this.hero.ataque);
//         if (this.currentMonster.vida > 0) {
//           this.atacar(this.currentMonster, this.hero, this.currentMonster.ataque);
//         }
//       }
//     }
//   }

// export class Game {
//     constructor(historial) {
//         this.historial = historial || []; // Asigna el historial proporcionado o crea uno vacío
//     }

//     loguear(accion) {
//         this.historial.push(accion);
//     }

//     mostrarHistorial() {
//         return this.historial.join('\n');
//     }
// }
// export class Game {
//     constructor(historial,){

//     this.historial = []; 

//     }

//     loguear(accion){
//         this.historial.push(accion);
//     }

//     mostrarHistorial() {
//         return this.historial.join('\n');
//       }

// }

// export class Combat{
//     #damage = 10;
//     constructor(){

//     }
//     attacks(instrumento= 0){
//         if (instrumento)this.#damage += instrumento;
//             return instrumento;
//         }


    


// }