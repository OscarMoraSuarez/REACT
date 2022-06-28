import {getImagen} from '../../base-pruebas/11-async-await';

describe(' pruebas en 11-async-await.js', () => { 


     test('getImagen debe retornar una url de una imagen', async() => { 

        const url=await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

     }) 
     
      /* test('getImagen debe retornar un mensaje de error  "No se encontro la imagen" si hay un error',async() => {
            //  esto pasa si hay una url incorrecta o no tenemos un api key valida 
        const resp= await getImagen();
         expect(resp).toBe('No se encontro la imagen');
        



      }) */
 
 })