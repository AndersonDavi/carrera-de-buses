require('colors');
let meta = process.stdout.columns - 25;
let posicion1 = 0;
let posicion2 = 0;

async function carreraDeBuses() {
    while (posicion1 < meta && posicion2 < meta) {
        // Generar el movimiento aleatorio
        posicion1 += Math.random() < 0.65 ? 1 : -1;
        posicion2 += Math.random() < 0.65 ? 1 : -1;

        // Asegurarse de que las posiciones no bajen de 0
        if (posicion1 < 0) posicion1 = 0;
        if (posicion2 < 0) posicion2 = 0;

        // Limpiar la consola
        console.clear();

        // Obtener el ancho de la consola
        const anchoConsola = process.stdout.columns;
        const linea = '-'.repeat(anchoConsola);

        // Mostrar los buses con su posición actual
        console.log("Carrera de buses".underline);
        console.log(linea);
        console.log(`${" ".repeat(posicion1)}       ______________`.green);
        console.log(`${" ".repeat(posicion1)} - - | [][][][][] ||_|`.green);
        console.log(`${" ".repeat(posicion1)} - - |   Sobusa   )   } `.green);
        console.log(`${" ".repeat(posicion1)}     dwb=-OO-----OO-=`.green);
        console.log(linea);
        console.log(`${" ".repeat(posicion2)}       ______________`);
        console.log(`${" ".repeat(posicion2)} - - | [][][][][] ||_|`);
        console.log(`${" ".repeat(posicion2)} - - |   Carolina  )  } `);
        console.log(`${" ".repeat(posicion2)}     dwb=-OO-----OO-=`);
        console.log(linea);

        // Pausa breve para que se note el movimiento
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Determinar el ganador
    if (posicion1 >= meta) {
        console.log("¡El Sobusa ganó la carrera!".green);
    } else if (posicion2 >= meta) {
        console.log("El Carolina ganó la carrera!");
    }
}

// Ejecutar la función de carrera de buses
carreraDeBuses();
