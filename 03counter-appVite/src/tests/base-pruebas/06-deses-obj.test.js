import { usContext } from "../../base-pruebas/06-deses-obj"

describe('Pruebas 06-deses-obj', () => { 

    test('usContext debe retornar un objeto', () => { 


        const persona = {
            nombre: 'Oscar',
            edad: 36,
            clave: 'Hetchelzican'
        };
        const testObject=usContext(persona)

        console.log(testObject);

        expect(testObject).toStrictEqual(
            {
                nombreClave: 'Hetchelzican',
                anios: 36,
                latlng: { lat: 14.1232, lng: -12.3232 } 
            }
        
        )

     })


 })