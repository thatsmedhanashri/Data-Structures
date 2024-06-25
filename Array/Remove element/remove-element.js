input1 = [3, 2, 2, 3];
val1 = 3;
output = 0;
output_array = [];
input2 = [0, 1, 2, 2, 3, 0, 4, 2];
val2 = 2;
function myFunction(input, val) {
  if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] != val) {
        output_array.push(input[i]);
      }
    }
  }
  console.log("length: ", output_array.length);
  console.log("output array: ", output_array);
}
myFunction(input2, val2);
