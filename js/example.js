class Animal {
    constructor(habitat){
        this.habitat = habitat
    }
    comer = () => console.log("Nom nom nom")

}

class Conejo extends Animal {}

const conejo = new Conejo ("pradera")
conejo.comer()
conejo.habitat


class Animal {
    constructor (habitat){
        this.habitat = habitat
    }
    comer =()=> console.log ("Nom nom nom")
}


class Cangrejo extends Animal {
constructor(habitat, color){
    super(habitat)
    this.color = color
  }

}


class Sheep extends Animal {
    constructor (habitat, color, size){
        super(habitat,color)
        this.size = size

    }
}


