function findL(A, n) {
  var L = Array(n).fill(1);
  var pre = Array(n).fill(-1);

  for (var j = 1; j < n; j++) {
    for (var i = 0; i < j; i++) {
      if (A[i] < A[j] && L[j] < L[i] + 1) {
        L[j] = L[i] + 1;
        pre[j] = i;
      }
    }
  }

  var max = L[0];
  var maxIndex = 0;

  for (var i = 1; i < L.length; i++) {
    if (L[i] > max) {
      maxIndex = i;
      max = L[i];
    }
  }
  return { A, maxIndex, pre };
}

let arr = [16, 2, 3, 14, 5, 9, 8, 4];
let n = arr.length;

var obs = findL(arr, n);
findSubsequence(obs);

function findSubsequence({ A, maxIndex, pre }) {
  var solution = [];
  console.log(maxIndex);
  console.log(pre);
  console.log(A);

  while (maxIndex >= 0) {
    solution.unshift(A[maxIndex]);
    maxIndex = pre[maxIndex];
  }

  console.log(solution);
}
