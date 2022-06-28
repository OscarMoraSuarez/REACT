import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp"

describe('pruebas </FirstApp> ', () => { 

    // test('should be equal to snapshot', () => {
    //     const title='Hola, Soy Goku';
    //     /* renderiza el componente en memoria */
    //    const {container}= render(<FirstApp title={title}/>)
    //    expect( container ).toMatchSnapshot();

    //   })

    test('debe  mostrar el titulo en u h1', () => { 

        const title = 'Hola, Soy Goku';
        const { container,getByText,getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();
        // const h1=container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);     
        expect(getByTestId('test-title')).toBeTruthy()
        // expect(getByTestId('test-title').innerHTML).toBe(title)
        // expect(getByTestId('test-title').innerHTML).toContain(title)
    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, Soy Goku';
        const subtitle = 'Soy un subtitulo';
        const {  getAllByText } = render(
            <FirstApp 
                title={title} 
                subtitle={subtitle} 
            />
        );
        expect(getAllByText(subtitle).length).toBe(3);

    })


 })