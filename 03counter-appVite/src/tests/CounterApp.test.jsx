import { fireEvent, render,screen } from "@testing-library/react"
import { CounterApp } from "../CounterApp"



describe('Pruebas en comp  <CounterApp/> ', () => { 
    const number=10;
    test('debe hacer juego con el snapshot', () => { 
        const {container}=render(<CounterApp value={number}/>);
        expect(container).toMatchSnapshot();
       
    });
      test('el contenido del h2 debe ser "100"',     () => { 
        
         render(<CounterApp value={100} />);
        /* screen es la representacion del componente que etenemos renderizado */
          expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100'); 
          /* expect(screen.getByTestId('counter').innerHTML).toContain(100);  */
          /* expect(screen.getByText('100')).toBeTruthy(); */
      });

      test('Debe incrementar con el boton +1', () => { 

            render(<CounterApp value={number}/>);
            fireEvent.click(screen.getByText('+1')); 
            
            expect(screen.getByText('11')).toBeTruthy();


       });
       test('Debe decrementar con el boton -1', () => { 

           render(<CounterApp value={number}/> )
           fireEvent.click(screen.getByText('-1')); 
           
           expect(screen.getByText('9')).toBeTruthy();
        });

        test('Debe funcionar el botòn de reset', () => { 

            render(<CounterApp value={355} />)
            fireEvent.click(screen.getByText('+1')); 
            fireEvent.click(screen.getByText('+1')); 
            fireEvent.click(screen.getByText('+1')); 
            /* fireEvent.click(screen.getByText('reset')); */
            /* screen.debug(); */
            fireEvent.click(screen.getByRole('button',{name:'reset'}));
             expect(screen.getByText(355)).toBeTruthy(); 





         })
})