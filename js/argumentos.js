class Empleado{
    #nombre;
    #dpto;

    constructor(nombre,dpto){
        this.#nombre= nombre;
        this.#dpto=dpto;

    }
  obtenerBonificacion(){
    throw new Error("Debe implementar funcionalidad")

  }

}
class Administrativos extends Empleado {
    obtenerbonificacion(){
        console.log('Bonificacion 10%');
    }
}
class Operaciones extends Empleado{
    obtenerBonificacion(){
        console.log('Bonificacion 8%');

    }
}
class Gerentes extends Empleado{
    obtenerBonificacion(){
        

    }
}
const objAdm = new Administrativos('Luisa Caceres','Tesoreria');
objAdm.obtenerBonificacion();

const objOP = new Operaciones('Pedro rivas','Maquinaria');
objOP.obtenerBonificacion();

const objGerente = new Gerentes('Leonardo Jose','Agencia principal');
objGerente.obtenerBonificacion();

const objEmpleado = new Empleado('EMpleado','Genérico');
console.log(objEmpleado);
































































































