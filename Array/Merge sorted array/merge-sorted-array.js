num1 = [1, 2, 3, 0, 0, 0];
nums1 = [2, 5, 6];
m1 = 3;
n1 = 3;
output_arr = [];
num2 = [1];
nums2 = [];
m2 = 1;
n2 = 0;
num3 = [0];
nums3 = [1];
m3 = 0;
n3 = 1;
function myFunction(nums1, nums2, m, n) {
  let i = 0;
  let j = 0;
  if (nums1.length > 0 && nums2.length > 0) {
    while (i < m) {
      console.log("in first loop - ", output_arr);
      while (j < n) {
        console.log("in second loop - ", output_arr);
        if (nums1[i] < nums2[j]) {
          output_arr.push(nums1[i]);
          i++;
          break;
        } else if (nums1[i] == nums2[j]) {
          output_arr.push(nums1[i]);
          output_arr.push(nums1[i]);
          i++;
          j++;
          break;
        } else {
          output_arr.push(nums2[j]);
          j++;
          break;
        }
      }
    }
    if (j < n) {
      for (let k = j; k < n; k++) {
        output_arr.push(nums2[k]);
      }
    }
    if (i < m) {
      for (let k = i; k < m; k++) {
        output_arr.push(nums1[k]);
      }
    }
  } else if (m > 0 && n == 0) {
    output_arr = nums1;
  } else if (m == 0 && n > 0) {
    output_arr = nums2;
  }
  console.log("Output: ", output_arr);
}
myFunction(num2, nums2, m2, n2);
