input1 = [2, 2, 1];
input2 = [4, 1, 2, 1, 2];
input3 = [1];
output = 0;
function myFunction(input) {
  if (input.length == 1) {
    output = input[0];
  } else {
    input = input.sort();
    if (input.length == 1) {
      output = input[0];
    } else {
      for (let i = 0; i < input.length; i++) {
        if (i == 0) {
          if (input[i] != input[i + 1]) {
            output = input[i];
          }
        } else if (i == input.length - 1) {
          if (input[i] != input[i - 1]) {
            output = input[i];
          }
        } else if (input[i] != input[i - 1] && input[i] != input[i + 1]) {
          output = input[i];
        }
      }
    }
  }
  console.log(output);
}
myFunction(input3);
