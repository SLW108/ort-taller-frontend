// Hoisting
// - Fase de creación
// - Fase de ejecución

// No reasignable
// Tengo que inicializarla siempre con un valor
const a = "Hello world";

// Esto me da error
// const b;

function alcanceConVar() {
  if (true) {
    var visible = 1;
  }
  console.log(visible);
}

alcanceConVar();

function alcanceConLet() {
  if (true) {
    let noVisible = 1;
    const tampocoVisible = 2;
  }
  console.log(tampocoVisible);
}

alcanceConLet();
