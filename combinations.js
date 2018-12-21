/*
Combinations

Return all possible combinations of N number of item,
for given array. 
*/

const arr = [1, 2, 3, 4];
const N = 3;

function getAllCombinations(arr, N) {
  const combinations = [];
  const picked = [];

  function find(picked) {
    if (picked.length === N) {
      const rst = [];
      for (let i of picked) {
        rst.push(arr[i]);
      }
      combinations.push(rst);
      return;
    } else {
      let start = picked.length ? picked[picked.length - 1] + 1 : 0;
      for (let i = start; i < arr.length; i++) {
        picked.push(i);
        find(picked);
        picked.pop();
      }
    }
  }
  find(picked);
  return combinations;
}

console.log(getAllCombinations(arr, N));
