function lis(A, n) {
  var L = Array(n).fill(1);

  for (var j = 1; j < n; j++) {
    for (var i = 0; i < j; i++) {
      if (A[i] < A[j] && L[j] < L[i] + 1) {
        L[j] = L[i] + 1;
      }
    }
  }

  return L;
}

let arr = [2, 3, 14, 5, 9, 8, 4];
let n = arr.length;
console.log('Length of lis is ' + lis(arr, n) + '\n');
