input1 = [7, 1, 5, 3, 6, 4];
output = 0;
input2 = [7, 6, 4, 3, 1];
input3 = [7, 2, 5, 3, 8, 1, 4];
function myFunction(input) {
  if (input.length > 1) {
    minPrice = input[0];
    for (let i = 1; i < input.length; i++) {
      if (minPrice > input[i]) minPrice = input[i];

      if (output < input[i] - minPrice) {
        output = input[i] - minPrice;
      }
    }
  }
  console.log("Output: ", output);
}
myFunction(input3);
