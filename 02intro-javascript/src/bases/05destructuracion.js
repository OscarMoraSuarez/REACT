
const persona = {
    nombre: 'Oscar',
    apellido: 'Mora',
    edad: 36
}


const context = ({ nombre, apellido, edad, rango = 'capitan' }) => {

    /* console.log(`las persona es ${nombre} ${apellido} ${edad} ${rango}`) */
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: '14.1516',
            lng: '16.1514',

        }
    };
}
const { nombreClave, anios, latlng: { lat, lng } } = context(persona);
console.log(anios, nombreClave);
console.warn(lat, lng);

