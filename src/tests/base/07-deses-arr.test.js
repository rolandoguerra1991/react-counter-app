import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas es 07-deses-arr.js', () => {
    test('debe retornar un string y un numero', () => {
        const [letra, numero] = retornaArreglo();
        expect(typeof letra).toBe('string');
        expect(typeof numero).toBe('number');
        expect(letra).toBe('ABC');
        expect(numero).toBe(123);
    });
});