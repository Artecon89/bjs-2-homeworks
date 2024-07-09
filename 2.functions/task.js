function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams());
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
console.log(summElementsWorker());
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  return difference;
}
console.log(differenceMaxMinWorker());
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}
console.log(differenceEvenOddWorker());
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker());
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88]]
console.log(makeWork(arr, summElementsWorker));

