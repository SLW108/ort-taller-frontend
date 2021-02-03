const datos = [2, 4, 6, 8];

const dobles = datos.map(dato => {
  return dato * 2;
});

console.log(datos);
console.log(dobles);

const filtro = datos.filter(item => {
  if (item > 4) {
    return true;
  } else {
    return false;
  }
});
console.log(filtro);
