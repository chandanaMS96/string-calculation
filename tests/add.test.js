const { add } = require("../add.js");

describe("String Calculator", () => {
  test("Should returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });
  test("Should throws error for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
  });

  test("Should handles n number of inputs", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("Should ignores numbers > 1000", () => {
    expect(add("2,1001")).toBe(2);
  });
  test("Should handles newline as delimiterShould ", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('Should supports custom delimiterShould  ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("Should supports custom delimiterShould  of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test("Should supports multiple custom delimiterShould s", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("Should supports multiple delimiterShould s of different lengths", () => {
    expect(add("//[***][%%]\n1***2%%3")).toBe(6);
  });
});
