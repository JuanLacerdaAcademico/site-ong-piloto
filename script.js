const PROJECT_ID = 'n266tgrj'; // Substitua pelo seu Project ID real do Sanity
const DATASET = 'production';

// Consulta GROQ buscando a imagem convertida para URL via CDN do Sanity
const QUERY = encodeURIComponent(`*[_type == "carrossel"][0]{
  titulo,
  "imagens": imagens[]{
    "url": asset->url,
    legenda,
    alt
  }
}`);

const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

let slideAtual = 0;
let totalSlides = 0;

async function carregarCarrossel() {
  try {
    const response = await fetch(URL);
    const { result } = await response.json();

    if (!result || !result.imagens) {
      document.getElementById('carrossel-titulo').innerText = 'Nenhum carrossel encontrado.';
      return;
    }

    document.getElementById('carrossel-titulo').innerText = result.titulo || 'Destaques';
    
    const container = document.getElementById('slides-container');
    container.innerHTML = '';

    result.imagens.forEach((item) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      slide.innerHTML = `
        <img src="${item.url}" alt="${item.alt || 'Imagem do carrossel'}">
        ${item.legenda ? `<div class="legenda">${item.legenda}</div>` : ''}
      `;

      container.appendChild(slide);
    });

    totalSlides = result.imagens.length;
  } catch (error) {
    console.error('Erro ao carregar o carrossel do Sanity:', error);
  }
}

function mudarSlide(direcao) {
  if (totalSlides === 0) return;

  slideAtual += direcao;

  if (slideAtual >= totalSlides) {
    slideAtual = 0;
  } else if (slideAtual < 0) {
    slideAtual = totalSlides - 1;
  }

  const container = document.getElementById('slides-container');
  container.style.transform = `translateX(-${slideAtual * 100}%)`;
}

// Inicializar ao carregar a página
carregarCarrossel();