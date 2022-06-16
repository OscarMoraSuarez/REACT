const loguearMensaje = () => {

    let activo = true;
    let mensaje;

   /*  mensaje = (activo) ? 'usuario activo' : 'usuario inactivo'; */
   mensaje=activo&&'activo';
    return mensaje;

}

console.log(loguearMensaje());