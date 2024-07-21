


function diasParaDiaDeMuertosYNavidad() {
    // Obtener la fecha actual
    var fechaActual = new Date();

    // Calcular el año actual
    var anioActual = fechaActual.getFullYear();

    // Definir la fecha del Día de Muertos (2 de noviembre)
    var diaDeMuertos = new Date(añoActual, 10, 2); // Meses en JavaScript van de 0 a 11 (noviembre es 10)

    // Definir la fecha de Navidad (25 de diciembre)
    var navidad = new Date(añoActual, 11, 25); // diciembre es 11

    // Calcular la diferencia en milisegundos entre la fecha actual y las fechas específicas
    var diferenciaDiaDeMuertos = Math.ceil((diaDeMuertos - fechaActual) / (1000 * 60 * 60 * 24));
    var diferenciaNavidad = Math.ceil((navidad - fechaActual) / (1000 * 60 * 60 * 24));

    // Mostrar los resultados
    console.log("Días faltantes para el Día de Muertos (2 de noviembre): " + diferenciaDiaDeMuertos);
    console.log("Días faltantes para Navidad (25 de diciembre): " + diferenciaNavidad);
}

// Ejecutar la función para obtener los resultados
diasParaDiaDeMuertosYNavidad();
