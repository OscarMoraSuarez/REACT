import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

describe('test de 09 promesas', () => { 


    test('getheroByIdAsync debe retornar un heroe', (done) => {

        const id=1;
        getHeroeByIdAsync(id).then(heroe=>{

            expect(heroe).toStrictEqual({ "id": 1, "name": "Batman", "owner": "DC" });

            done();
        });


    })
    
    test('getheroByIdAsync debe obtener un error si hero no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
        .then(heroe=>{

            expect(heroe).toBeFalsy();
            done();
        })
        .catch(error=> {

            expect(error).toBe('No se pudo encontrar el héroe'+id);

            done();
        });


    })



 })

