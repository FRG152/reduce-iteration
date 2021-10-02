[0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
  return valorAnterior + valorActual;
});

// Primera llamada
(valorAnterior = 0), (valorActual = 1), (indice = 1);

// Segunda llamada
(valorAnterior = 1), (valorActual = 2), (indice = 2);

// Tercera llamada
(valorAnterior = 3), (valorActual = 3), (indice = 3);

// Cuarta llamada
(valorAnterior = 6),
  (valorActual = 4),
  (indice = (4)[
    // el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

    // Valor Devuelto: 10

    //proporcinando una valor inicial
    (0, 1, 2, 3, 4)
  ].reduce(function (valorAnterior, valorActual, indice, vector) {
    return valorAnterior + valorActual;
  }, 10));

// Primera llamada
(valorAnterior = 10), (valorActual = 0), (indice = 0);

// Segunda llamada
(valorAnterior = 10), (valorActual = 1), (indice = 1);

// Tercera llamada
(valorAnterior = 11), (valorActual = 2), (indice = 2);

// Cuarta llamada
(valorAnterior = 13), (valorActual = 3), (indice = 3);

// Quinta llamada
(valorAnterior = 16), (valorActual = 4), (indice = 4);

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
