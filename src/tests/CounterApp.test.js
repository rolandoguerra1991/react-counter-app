import { shallow } from "enzyme";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => { 
    test('debe mostrar <CounterApp /> correctamente', () => {
        const value = 1000;
        const wrapper = shallow(<CounterApp value={value}/>);
        expect(wrapper).toMatchSnapshot();
    })
    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const textValue = wrapper.find('h2').text();
        expect(parseInt(textValue)).toBe(100);
    });
    test('debe incrementar el contador +1', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        wrapper.find('button').at(0).simulate('click');

        const textValue = wrapper.find('h2').text().trim();

        expect(parseInt(textValue)).toBe(101);
    });
    test('debe disminuir el contador -1', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        wrapper.find('button').at(2).simulate('click');

        const textValue = wrapper.find('h2').text().trim();

        expect(parseInt(textValue)).toBe(99);
    });
    test('debe establecer el valor por defecto cpn el boton reset', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const textValue = wrapper.find('h2').text().trim();
        
        expect(parseInt(textValue)).toBe(100);
    });
});