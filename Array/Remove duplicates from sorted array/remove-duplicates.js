input1 = [1, 1, 2];
output = 0;
output_array = [];
input2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function myFunction(input) {
  if (input.length > 0) {
    output_array.push(input[0]);
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] != input[i + 1]) {
        output_array.push(input[i + 1]);
      }
    }
    console.log("length: ", output_array.length);
    console.log("output array: ", output_array);
  }
}
myFunction(input2);
