import PropTypes from 'prop-types';


/* const saludar=(nombre)=>{

    return nombre.toUpperCase();

} */

const FirstApp = ({title,subtitle,name }) => {



return (
    <>      
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <span>{name}</span>
    </>
    )
}

export{

    FirstApp

}

FirstApp.propTypes={
    title:PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,



}

/* estas propiedades entran antes que lso PropTypes */
FirstApp.defaultProps={
    name:'RaJSo',
    subtitle:'123',
    title:'No hay titulo',

     

}