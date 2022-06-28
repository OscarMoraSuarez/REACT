import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => { 

    test('debe retornar un objeto Usuario', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
       const user= getUser();
        

        expect(user).toStrictEqual(testUser);

     })
    
    test('getUsuario Activo debe retornan un objeto', () => { 
        
            const  name='Oscar';
          

           const usuario=getUsuarioActivo(name);

        expect(usuario).toStrictEqual({
            uid: 'ABC567',
            username: `${name}`
        });

    })

 })
/* para evaluar objetos se reemplaza el toBe por
toStrictEqual o el toEqual  dos objetnos no son iguales
a pesar de tener los mismos pares de valores si no tienen
 la misma referencia*/
 