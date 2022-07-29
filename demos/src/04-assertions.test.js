// matchers

test('test obj', () => {
  const data = { name: 'Rigo' }; // Para testear objetos se usa .toEqual.
  data.lastname = 'Molina'; // Manipulación del objeto.
  expect(data).toEqual({ name: 'Rigo', lastname: 'Molina' }); // Espero que el objeto de arriba sea igual a este.
});

test('null', () => {
  const data = null;
  expect(data).toBeNull(); // Un nulo está definido como nulo.
  expect(data).toBeDefined(); // Un definido es otro tipo de dato en JS.
  expect(data).not.toBeUndefined(); // Podemos usar negaciones.
});

test('booleans', () => {
  // Booleanos directos.
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  // Datos considerados como booleanos.
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test('string', () => {
  // Podemos preguntar si coincide una parte arbitraria con la cadena.
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  // Podemos preguntar si contiene una parte arbitraria con el arreglo.
  expect(numbers).toContain(3);
});
