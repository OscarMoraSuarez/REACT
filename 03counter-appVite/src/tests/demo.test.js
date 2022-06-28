describe('Pruebas en Demo component', () => { 

    test('Esta prueba no debe fallar', () => {

        //1inicializacion
        const message1 = 'Hola Mundo';
        //2estimulo
        const mesagge2 = message1.trim();
        //3Observar comportamiento
        expect(message1).toBe(mesagge2);

    });


 })

describe('Pruebas en <Demo component/>', () => {

    test('Esta prueba no debe fallar', () => {

        //1inicializacion
        const message1 = 'Hola Mundo';
        //2estimulo
        const mesagge2 = message1.trim();
        //3Observar comportamiento
        expect(message1).toBe(mesagge2);

    });


})