function getNearestToMax(arr) {
  const key = Math.max(...arr);
  const min = key * 0.9;
  const nearestArray = [];

  for (const element of arr) {
    if (element >= min && element !== key) {
      nearestArray.push(element);
    }
  }

  return nearestArray;
}

console.log(getNearestToMax([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(getNearestToMax([2, 13, 95, 29, 19, 5, -5])); // []
