input = [1, 3, 5, 6];
target1 = 5;
output = -1;
target2 = 2;
target3 = 7;
function myFunction(input, target) {
  if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == target) {
        output = i;
        break;
      } else if (input[i] > target) {
        output = i;
        break;
      } else if (i == input.length - 1) {
        output = i + 1;
        break;
      }
    }
  } else {
    output = 0;
  }
  console.log("Output: ", output);
}
myFunction(input, target1);
