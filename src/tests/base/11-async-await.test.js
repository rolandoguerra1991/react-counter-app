import { getImagen } from "../../base/11-async-await";

describe('Pruebas con 11-async-await.js', () => {
    test('Debe retornar el url de la imagen', async () => { 
        const url = await getImagen();
        expect(typeof url).toBe('string');
     });
});