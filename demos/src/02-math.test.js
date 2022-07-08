const {sum, multiply, divide} = require('./02-math')

//mensaje + callback
test("add 1+3 should be 4", () =>{
  //ejecucion
  const rta = sum(1, 3)

  //resultado esperado
  expect(rta).toBe(4)
})

//mensaje + callback
test("should be 4", () =>{
  //ejecucion
  const rta = multiply(1, 4)

  //resultado esperado
  expect(rta).toBe(4)
})

//mensaje + callback
test("should divide", () =>{
  //ejecucion
  const rta = divide(6, 0)
  //resultado esperado
  expect(rta).toBeNull()

  //ejecucion
  const rta2 = divide(5, 0)
  //resultado esperado
  expect(rta2).toBeNull()
})
