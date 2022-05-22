import { getSaludo } from '../../base/02-template-string.js';
import "@testing-library/jest-dom";

describe('Pruebas en 02-template-string.test,js', () => {
    test('Debe de retornar Hola Rolando!', () => {
        const nombre = 'Rolando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}!`);
    });

    // getSaludo debe de retornar Hola Rodrigo! si no hay argumentos.
    test('getSaludo debe de retornar Hola Rodrigo! si no hay argumentos.', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Rodrigo!');
    });
});