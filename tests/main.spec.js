// Ejercicio 1: Verificar si un número es par
describe("isPar kata", () => {
  it("should exist a variable named number", () => {
    expect(number).not.toBe(undefined);
  });
  it("isPar should be a function", () => {
    expect(typeof isPar).toBe("function");
  });
  it("should be a boolean", () => {
    expect(typeof isPar()).toBe("boolean");
  });
  it("should return true for even numbers", () => {
    expect(isPar(2)).toBe(true);
  });
});

// Ejercicio 2: Calcular el factorial de un número
describe("factorial kata", () => {
  it("should exist something named factorial", () => {
    expect(factorial).not.toBe(undefined);
  });
  it("should be a function", () => {
    expect(typeof factorial).toBe("function");
  });
  it("should be a number bigger than 0", () => {
    expect(number).toBeGreaterThanOrEqual(0);
  });
  it("should return 1 for 0", () => {
    expect(factorial(number)).toBe(1);
  });
});
