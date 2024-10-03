let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let time3 = document.querySelector('.time3');
const button = document.querySelector('button');

// Lista de nomes
const nomes = ['chapa', 'gustavo', 'caique', 'daniel', 'miranda', 'richard', 'andre', 'deryk', 'jose', 'kaue', 'pavani', 'maduro', 'miguel', 'enzo', 'guilherme'];

// Função para sortear e exibir os times
function sortearTimes() {
  // Embaralhar os nomes
  let nomesEmbaralhados = Array.from(nomes).sort(() => 0.5 - Math.random());

  // Dividir os nomes em três times
  let time1Nomes = nomesEmbaralhados.slice(0, 5);  // 5 nomes para o time 1
  let time2Nomes = nomesEmbaralhados.slice(5, 10); // 5 nomes para o time 2
  let time3Nomes = nomesEmbaralhados.slice(10, 15); // 5 nomes para o time 3

  // Exibir os nomes nos times
  time1.innerHTML = 'Time 1: ' + time1Nomes.join(', ');
  time2.innerHTML = 'Time 2: ' + time2Nomes.join(', ');
  time3.innerHTML = 'Time 3: ' + time3Nomes.join(', ');

  // Exibir no console para verificar
  console.log("Times sorteados: ", time1Nomes, time2Nomes, time3Nomes);

  button.classList.add('pulsing');

  setTimeout(() => {
    button.clasList.remove('pulsing')
  }, 500);
}

// Adicionar evento de clique ao botão
button.addEventListener('click', sortearTimes);
