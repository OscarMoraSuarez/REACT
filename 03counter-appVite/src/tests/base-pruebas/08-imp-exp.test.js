import { array } from "prop-types";
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
/* import heroes from "../../data/heroes"; */

describe('probando 08 imp-exp', () => { 


    test('getHeroeById debe retornar un objeto heroe', () => { 

        const id=1;
        const heroe = getHeroeById(id)
        expect(heroe).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });  

    })

    test('getHeroByiD debe retornarn undefined si no existe el id', () => { 

        const id = 111;
        const heroe = getHeroeById(id)
         /* expect(heroe).toBe(undefined); */
          expect(heroe).toBeFalsy(); 

     });
     //Tarea hacer el test sobre getHeroOwner
     //Debe retornar un arreglo con los heroes de DC
     //lenght ===3
     //to equal al artreglo filtrado
     test('getHeroOwner debe retornar una rreglo de longitud 3', () => { 
         const owner ='DC';
        const heroes=  getHeroesByOwner(owner);
        console.log(heroes);
         expect(heroes.length).toBe(3); 
         expect(heroes).toStrictEqual([
             { id: 1, name: 'Batman', owner: 'DC' },
             { id: 3, name: 'Superman', owner: 'DC' },
             { id: 4, name: 'Flash', owner: 'DC' }
         ])


      })
     //Debe retornar un arreglo con los heroes de Marvel
     //lenght ===2
     //to equal al artreglo filtrado
      test('getHeroOwner debe retornar un arreglo con los heores Marvel', () => { 
         const owner ='Marvel';
         const heroes= getHeroesByOwner(owner);
         console.log(heroes);
         expect(heroes.length).toBe(2);
         expect(heroes).toEqual(heroes.filter(heroes=>heroes.owner===owner))



       })



})