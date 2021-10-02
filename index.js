//Encontrar la palabra mas larga de una cadena.
function solutionOne(str) {
  //declarar una variable para acompañar el seguimiento de la longitud maxima.
  let count = 0;

  //convertir una cadena en una matriz con el metodo >>>split()<<<.
  //['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];
  let word = str.split(' '); 

  //recorrer la matriz con el bucle for.
  /*
  almacenando la palabra mas larga en la variable creada,
  asi ira comparando y devolvera la palabra las larga por
  la condicion dada.
  */
  for(let i = 0; i < word.length; i++) {
    if(word[i].length > count) {
      count = word[i].length;
    }
  }

  return count;
}

//resultado de la primera solucion.
console.log("solution 1:")
console.log(solutionOne("The quick brown fox jumped over the lazy dog"));

function solutionTwo(str) {
  //convertir una cadena en una matriz con el metodo >>>split()<<<.
  //['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];
  let word = str.split(' ');

  for(let i = 0; i < word.length; i++) {
    console.log(word[i].length)
  }

  console.log('the function solution:')

  /*
  usar la iteracion reduce para devolver un unico valor atraves de
  una matriz
   */
  return str.split(' ').reduce(function (a,b) {
    return Math.max(a, b.length);
  },0);
}

console.log("solution 2:")
console.log(solutionTwo("The quick brown fox jumped over the lazy dog"));

function solutionThree(str) {
  return str;
}

console.log("solution 3:")
console.log(solutionThree("the quick brown fox jumped over the lazy dog"))