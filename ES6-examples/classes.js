class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  alimentarse() {
    console.log("Yo como: ");
  }

  moverse() {
    console.log("");
  }
}

class Perro extends Animal {
  constructor(nombre, especie, raza) {
    super(nombre, especie);
    this.raza = raza;
  }
  alimentarse() {
    super.alimentarse();
    console.log("huesos");
  }
  moverse() {
    console.log("Yo camino");
  }
}

class Loro extends Animal {
  constructor(nombre, especie, habitab) {
    super(nombre, especie);
    this.habitab = habitab;
  }

  alimentarse() {
    super.alimentarse();
    console.log("frutas");
  }
  moverse() {
    console.log("Yo vuelo");
  }
}

const perro = new Perro("Firulais", "Mamifero", "Labrador");

console.log(perro.nombre);
perro.alimentarse();

console.log("===========");

const loro = new Loro("Cacho", "Ave", "campo");
console.log(loro.nombre);
loro.alimentarse();
loro.moverse();
