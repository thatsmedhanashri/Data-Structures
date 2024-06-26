input1 = [1, 2, 3, 1];
k1 = 3;
input2 = [1, 0, 1, 1];
k2 = 1;
input3 = [1, 2, 3, 1, 2, 3];
k3 = 2;
output = false;
function myFunction(input, k) {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] == input[j] && j - i <= k) {
        output = true;
        break;
      }
    }
  }
  console.log("Output: ", output);
}
myFunction(input3, k3);
