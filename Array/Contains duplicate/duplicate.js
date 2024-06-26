input1 = [1, 2, 3, 1];
input2 = [1, 2, 3, 4];
input3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
input4 = [1, 2, 3, 4, 4];
output = false;
function myFunction(input) {
  input = input.sort();
  if (input.length > 1) {
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] == input[i + 1]) {
        output = true;
        break;
      }
    }
  }
  console.log("Output: ", output);
}
myFunction(input4);
