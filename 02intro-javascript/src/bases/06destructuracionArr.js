const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {

    return ['ABC', 123];

}
const arr = retornaArreglo();
console.log(arr);
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1 primera posicion nombre 
//2 la segunda se llamara setNombre
const usarEstate = (nombre) => {

    return [nombre, () => { console.log(`hola ${nombre}`) }];

}
//destructurar el arreglo aca
const [nombre, setNombre] = usarEstate('goku');
//imprimir nombre
console.log(nombre);
//llamar
setNombre();