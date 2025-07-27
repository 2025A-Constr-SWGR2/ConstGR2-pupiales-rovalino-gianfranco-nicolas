const paqueteSuma = require('2025a-swgr2-gnpr-suma');
const paqueteResta = require('2025a-swgr2-gnpr-resta');
const paqueteMultiplicacion = require('2025a-swgr2-gnpr-multiplicacion');
const paqueteDivision = require('2025a-swgr2-gnpr-division');

// Operaciones establecidas para el examen
const resultadoSuma = paqueteSuma.suma(2, 1);
const resultadoResta = paqueteResta.resta(3, 2);
const resultadoMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);
const resultadoDivision = paqueteDivision.division(9, 3);

console.log('Resultado de la suma:', resultadoSuma);
console.log('Resultado de la resta:', resultadoResta);
console.log('Resultado de la multiplicación:', resultadoMultiplicacion);
console.log('Resultado de la división:', resultadoDivision);
