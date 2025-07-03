const add = (input) => {
  if (!input) return 0;
  const numbers = extractNumbers(input);
  const sum = numbers.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  return sum;
};

const extractNumbers = (str) => {
  if (str.match(/[A-Za-z]/g)) {
    throw new Error("Invalid Number");
  }
  const numbers = str.match(/-?\d+/g)?.map(Number) || [];
  const negatives = numbers.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numbers.filter((n) => n <= 1000);
};

module.exports = { add };
