import { getSaludo } from "../../base-pruebas/02-template-string";

describe('02 PRUEBAS EN TEMPLATE STRING', () => { 

    test('saludo debe retornar "Hola Oscar"', () => {

        const name='Goku';
        const message=getSaludo(name);

        expect(message).toBe(`Hola ${name}`);

    })

 })