/*Crea un programa que reciba del usuario una frase y te diga si es o no palíndromo.
Un palindromo es una palabra o frase que se lee igual, hacia delante y hacia atras*/

function esPalindromo(frase) {
    // Convertir la frase a minúsculas y eliminar los espacios en blanco
    frase = frase.toLowerCase().replace(/ /g, '');

    // Revertir la frase
    let fraseRevertida = frase.split('').reverse().join('');

    // Comparar la frase original con la revertida
    if (frase === fraseRevertida) {
        return true;
    } else {
        return false;
    }
}

// Función para recibir la entrada del usuario y comprobar si es palíndromo
function verificarPalindromo() {
    // Pedir al usuario que ingrese una frase
    let frase = prompt('Ingrese una frase para verificar si es palíndromo:');
    
    // Verificar si es palíndromo utilizando la función esPalindromo
    if (esPalindromo(frase)) {
        console.log(`"${frase}" es un palíndromo.`);
    } else {
        console.log(`"${frase}" no es un palíndromo.`);
    }
}

// Llamar a la función para iniciar el programa
verificarPalindromo();
