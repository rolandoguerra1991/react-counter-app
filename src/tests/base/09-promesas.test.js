import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con 09-promesas.js", () => {
  test("getHeroeByIdAsync debe retornar un Heroe Async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      const heroeData = heroes.find((h) => h.id === id);
      expect(heroe).toBe(heroeData);
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar undefined si no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
