document.getElementById('botao').addEventListener('click', calcular, false);

function calcular() {
  const janeiro = parseInt(document.getElementById('janeiro').value);
  const fevereiro = parseInt(document.getElementById('fevereiro').value);
  const marco = parseInt(document.getElementById('março').value);
  const abril = parseInt(document.getElementById('abril').value);
  const maio = parseInt(document.getElementById('maio').value);
  const junho = parseInt(document.getElementById('junho').value);
  const julho = parseInt(document.getElementById('julho').value);
  const agosto = parseInt(document.getElementById('agosto').value);
  const setembro = parseInt(document.getElementById('setembro').value);
  const outubro = parseInt(document.getElementById('outubro').value);
  const novembro = parseInt(document.getElementById('novembro').value);
  const dezembro = parseInt(document.getElementById('dezembro').value);

  const arr = [
    janeiro,
    fevereiro,
    marco,
    abril,
    maio,
    junho,
    julho,
    agosto,
    setembro,
    outubro,
    novembro,
    dezembro,
  ];

  var dados = findL(arr, arr.length);
  findSubsequence(dados);
}

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
