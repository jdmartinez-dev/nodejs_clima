require('colors')

const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require('./models/busquedas');

const main = async () => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();
        console.log({opt});
        // options
        switch (opt) {
            case 1: // Buscar
                // Mostrar mensaje
                const lugar = await leerInput('Cuidad: ');
                await busquedas.ciudad(lugar);
                // Buscar los lugares

                // Seleccionar el lugar

                // Clima

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Cuidad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mínima:', );
                console.log('Máxima:', );

                break;
            case 2: // Historial
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
}

main();