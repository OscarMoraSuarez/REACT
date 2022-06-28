import { render,screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('Pruebas en <FirsApp/>', () => { 
    const title="Hola, soy Goku";
    const subtitle='Soy un subtitulo';
    test('debe hacer match con el sanpshot', () => { 

        const {container} =render(<FirstApp title={title}/>);
        
        expect(container).toMatchSnapshot();


    });

    test('deb mostrar el mensaje "Hola, soy Goku"', () => { 
        
        render(<FirstApp title={title}/>)
        /* screen.debug()  despues de el render muestra el body del componente*/
        // expect(screen.getByText(title)).not.toBeTruthy();
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Deb mostrar el titulo n un h1', () => { 

        render(<FirstApp title={title} />);
        /* utilizo el es scrren para acceder a los roles que son elementos html en este caso un encabezado
        nivel 1 osea ''h1 */
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)


     })
     test('debe mostrar el subtitulo enviado por props', () => { 

         render(<FirstApp 
            title={title} 
            subtitle={subtitle}
            />);

         expect(screen.getAllByText(subtitle).length).toBe(3);    
      })

})