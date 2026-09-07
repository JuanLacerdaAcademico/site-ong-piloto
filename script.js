const PROJECT_ID = 'SEU_PROJECT_ID';
const DATASET = 'production';
const QUERY = encodeURIComponent('*[_type == "aviso"][0]');
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

async function buscarAviso() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    if (data.result) {
      document.getElementById('titulo-aviso').innerText = data.result.titulo;
      document.getElementById('mensagem-aviso').innerText = data.result.mensagem;
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}

buscarAviso();