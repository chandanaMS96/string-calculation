const Add = function (input) {
  if (!input) return 0;
  const numbers = extractNumbers(input);
  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error("negative number is not allowed");
  }
  const sum = numbers.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  console.log(sum);
  return sum;
};

const extractNumbers = function (str) {
  return (
    str
      .match(/\d+/g)
      ?.map(Number)
      .filter((n) => n <= 1000) || []
  );
};

Add("//1,2***,3400");
