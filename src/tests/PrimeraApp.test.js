import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
  test('debe mostrar el mensaje "Hola, soy goku"', () => {
    const saludo = "Hola, soy goku";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  });
});
