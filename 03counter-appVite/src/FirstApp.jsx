import PropTypes from 'prop-types';


/* const saludar=(nombre)=>{

    return nombre.toUpperCase();

} */

const FirstApp = ({title,subtitle,name }) => {



            return (
                    <>      
                        <h1 data-testid="test-title">{title}</h1> 
                        <p>{subtitle}</p>
                        <p>{subtitle}</p>
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
    subtitle: PropTypes.string,



}

/* estas propiedades entran antes que lso PropTypes */
FirstApp.defaultProps={
    name:'RaJSo',
    subtitle:'no hay subtitulo',
    /* title:'No hay titulo', */

     

}