const nombre='Oscar';
const apellido='Mora';
/* const nombreCompleto =nombre+''+apellido; */
const nombreCompleto=`${nombre} ${apellido}`;
console.log(nombreCompleto);


function getSaludo(nombreCompleto){

    return `hola ${nombreCompleto}`;

}

console.log(`Esto es un saludo: ${getSaludo(nombreCompleto)}`);