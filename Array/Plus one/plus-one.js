input1 = [1, 2, 3];
output = [];
input2 = [4, 3, 2, 1];
input3 = [9];
function myFunction(input) {
  let temp = "";
  for (let i = 0; i < input.length; i++) {
    temp = temp + input[i];
  }
  temp = Number(temp) + 1;
  temp = temp.toString();
  for (let i = 0; i < temp.length; i++) {
    output.push(Number(temp[i]));
  }
  console.log("Output: ", output);
}
myFunction(input3);
