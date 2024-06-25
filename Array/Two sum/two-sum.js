let input = [2, 7, 11, 15];
let target = 9;
let input1 = [3, 2, 4];
let target1 = 6;
let input2 = [3, 3];
let target2 = 6;
let output = [];
function myfunction(input, target) {
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] == target) {
        output.push(i);
        output.push(j);
      }
    }
  }
  console.log("output: ", output);
}
myfunction(input2, target2);
