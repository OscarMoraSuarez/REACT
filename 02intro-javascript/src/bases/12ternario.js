

const loguearMensaje=()=>{

    const activo = true;
    let mensaje;

    mensaje=(activo)?'usuario activo':'usuario inactivo';
    return mensaje;
    
}

console.log(loguearMensaje());



