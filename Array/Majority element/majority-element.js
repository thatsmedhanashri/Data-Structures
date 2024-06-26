input1 = [3, 2, 3];
input2 = [2, 2, 1, 1, 1, 2, 2];
output = -1;
function myFunction(input) {
  input = input.sort();
  expected = Math.ceil(input.length / 2);
  counter = 0;
  if (input.length == 1) {
    output = input[0];
  } else {
    counter = 1;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] == input[i + 1]) {
        counter++;
        if (counter == expected) {
          output = input[i];
          break;
        }
      } else {
        counter = 1;
      }
    }
  }
  console.log("Output: ", output);
}
myFunction(input1);
