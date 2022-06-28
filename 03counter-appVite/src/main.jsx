import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './index.css';
import { CounterApp } from './CounterApp';
/* import { HelloWorld } from './HelloWorldApp'; */
        

/* Functional components */
/* Todos los nombres de lso functional componentes van capitalizados con Uppercamelcase */

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        {/* <FirstApp title='Hola, soy Vegeta'/> */}
        { < CounterApp  value={100}  /> }
        
    </React.StrictMode>
        
          
);
