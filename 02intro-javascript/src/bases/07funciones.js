const saludar=(nombre)=> `hola ${nombre}`;
let saludar1 =30; 
/* console.log(saludar('oscar')); */
console.log(saludar('oscar'));
const getUser=()=>({uid:'abc123',userName:'El_Papi1502'})
console.log(getUser());
//Tarea transformar a funcion de flecha
//tiene que retornar un objeto implicito
//probar
function getUsuarioActivo1(nombre){

    return{

        uid:'abc456',
        userName:nombre,
    }
};

const usuarioActivo=getUsuarioActivo1('Fernando');
console.log(usuarioActivo);  

const getUsuario=(nombre)=>({uid:'abc456',nombre:nombre});

console.log(getUsuario('Oscar'));

