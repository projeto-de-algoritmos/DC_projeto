document.getElementById('botao').addEventListener('click', calculate, false);
var objeto = {};
var meses = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

function calculate() {
  objeto['janeiro'] = parseInt(document.getElementById('janeiro').value);
  objeto['fevereiro'] = parseInt(document.getElementById('fevereiro').value);
  objeto['marco'] = parseInt(document.getElementById('marco').value);
  objeto['abril'] = parseInt(document.getElementById('abril').value);
  objeto['maio'] = parseInt(document.getElementById('maio').value);
  objeto['junho'] = parseInt(document.getElementById('junho').value);
  objeto['julho'] = parseInt(document.getElementById('julho').value);
  objeto['agosto'] = parseInt(document.getElementById('agosto').value);
  objeto['setembro'] = parseInt(document.getElementById('setembro').value);
  objeto['outubro'] = parseInt(document.getElementById('outubro').value);
  objeto['novembro'] = parseInt(document.getElementById('novembro').value);
  objeto['dezembro'] = parseInt(document.getElementById('dezembro').value);

  const arr = [
    objeto.janeiro,
    objeto.fevereiro,
    objeto.marco,
    objeto.abril,
    objeto.maio,
    objeto.junho,
    objeto.julho,
    objeto.agosto,
    objeto.setembro,
    objeto.outubro,
    objeto.novembro,
    objeto.dezembro,
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
  var solutionMeses = [];

  console.log(maxIndex);
  console.log(pre);
  console.log(A);

  while (maxIndex >= 0) {
    solution.unshift(A[maxIndex]);
    solutionMeses.unshift(meses[maxIndex]);
    maxIndex = pre[maxIndex];
  }

  console.log(solution);
  console.log(solutionMeses);

  showAnswer();
}

function showAnswer() {
  var div = document.getElementById('resposta');

  var ans = document.createElement('p');

  ans.innerHTML = 'teste';
  div.appendChild(ans);
}
