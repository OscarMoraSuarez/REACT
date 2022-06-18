import { useState }from 'react';
import { PropTypes } from "prop-types";

//?cunado la funcion no ocupa nada en el componente en el cual se aloja
//? se recomienda declararla y usarla afuera



const CounterApp=({value})=>{

    const [ counter,setCounter ]=useState(value)
    
    const sumar = () => {

        // setCounter(counter+1);
        setCounter(counter+1)

    }
     const restar = () =>  setCounter(counter - 1);

    
    const resetear = () => setCounter( value) ;

 
   

return(

    <>
        <h1> CounterApp </h1>
        <h2> { counter } </h2>
        <button onClick={ sumar }> 
        +1
        </button>
        <button onClick={ restar }> 
        -1 
        </button >
        <button onClick={ resetear }> 
        reset
        </button>
    </>

)
    
    




}

export {

    CounterApp

}


CounterApp.propTypes={

    value:PropTypes.number.isRequired


}

CounterApp.defaultProps={

    value:456,

}

    