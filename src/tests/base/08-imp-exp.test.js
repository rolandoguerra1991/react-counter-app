import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp.js', () => {
    test('debe retornar un heroe por el id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroesLocal = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroesLocal).toEqual(heroesData);
    });

    test('Debe retornar un arreglo con los heroes de Marvel y la cantidad debe ser igual a 2', () => {
        const owner = 'Marvel';
        const heroesLocal = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroesLocal).toEqual(heroesData);
        expect(heroesLocal.length).toEqual(2);
    });
});