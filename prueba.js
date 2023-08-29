function sumarNumero(arr) {
   let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) { 
      let numAnterior = arr[i - 1]; //guardamos el numero anterior del bucle
      let sumaActual = arr[i] + numAnterior; // sumamos el numero actual con el anterior para obtener la suma total

      if (sumaActual > sum) { // validamos que el numero actual y el anterior sean mayores a la suma del bucle anterior
        sum = sumaActual; 
      }
    }
  }
  return sum; // retornamos la suma mas grande del array
}

const array = [4, 12, 3, 9, 15, 100, 1, 30]; //115
const array2 = [1,3,2,6,10,3]; //16
console.log(sumarNumero(array2));