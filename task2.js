function sumArrayIntegers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error(`Element at index ${i} is not an integer`);
    }
    sum += arr[i];
  }

  return sum;
}

try {
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumArrayIntegers(inputArray);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
