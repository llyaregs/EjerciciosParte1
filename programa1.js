/*Crea un programa que imprima por consola todos 
los números comprendidos entre 10 y 100 (incluidos)
 pares, y que no son ni el 66 ni múltiplos de 3 */



for (let i = 10; i <= 100; i++) {
    // Verificar si es par
    if (i % 2 === 0) {
        // Verificar si no es el número 66 y no es múltiplo de 3
        if (i !== 66 && i % 3 !== 0) {
            console.log(50);
        }
    }
}
