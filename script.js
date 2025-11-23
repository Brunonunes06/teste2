// ... existing code ...

// Remove the discord.js import as it's not needed for web
// const { range } = require("discord.js");

const produtoData = [
  // ... existing produtoData array ...
];

const avaliacoesData = [
  {
    id: 1,
    nome: "Maria Silva",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    cargo: "Empresária",
    texto:
      "Eu adoro o café especial brasileiro! O sabor é incrível e sempre me deixa animada para o dia. Recomendo a todos os amantes de café.",
    rating: 5, // Fixed: was 'ranting'
  },
  {
    id: 2,
    nome: "João Pereira",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    cargo: "Desenvolvedor",
    texto:
      "O café orgânico colombiano é uma ótima escolha para quem procura um sabor mais leve. Eu realmente aprecio o fato de ser cultivado sem pesticidas.",
    rating: 5,
  },
  {
    id: 3,
    nome: "Ana Costa",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    cargo: "Designer",
    texto:
      "Eu sou apaixonada pelo café gourmet etíope! Cada xícara é uma experiência sensorial incrível. Recomendo a todos que apreciam um bom café.",
    rating: 5,
  },
];

// ... existing code ...

function initializeApp() {
  // Inicializar Componentes
  initNavigation();
  initScrollEffects();
  initProdutos();
  initAvaliacoes();
  initForms();
  initAnimations();
  initBackToTop();

  // Carregar Produtos Inicialmente - Fixed syntax error
  loadProdutos('todos');
}

// Navegação - Fixed variable names and methods
function initNavigation() {
  const hamburger = document.getElementById("hamburger"); // Fixed: was 'humburger'
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle menu mobile
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active"); // Fixed: was 'toogle'
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");

      // Atualizar link ativo
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ... existing scroll code ...
}

// ... existing code until loadProdutos function ...

function loadProdutos(categoria) {
    const grid = document.getElementById('produtos-grid');
    const loading = document.getElementById('loading-produtos');

    // Mostra loading
    loading.classList.add('show');
    grid.innerHTML = '';

    // Simula delay de carregamento
    setTimeout(() => {
        const produtosFiltrados = categoria === 'todos'
        ? produtoData // Fixed: was 'produtosData'
        : produtoData.filter(produto => produto.categoria === categoria);

    produtosFiltrados.forEach((produto, index) => { // Fixed: was 'produtos, indexe'
        const produtoCard = createProdutoCard(produto);
        grid.appendChild(produtoCard);

        // Anima entrada dos cards
        setTimeout(() => {
            produtoCard.classList.add('show');
        }, index * 100); // Fixed: was using undefined 'indexe'
    });

    loading.classList.remove('show');
   }, 800);
}

function createProdutoCard(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.setAttribute('data-categoria', produto.categoria);

card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" class="produto-image" loading="lazy">
    <div class="produto-info">
    <span class="produto-categoria">${getCategoriaName(produto.categoria)}</span>
    <h3 class="produto-nome">${produto.nome}</h3>
    <p class="produto-descricao">${produto.descricao}</p>
    <div class="produto-rating">
        <div class="stars">
            ${Array.from({length: 5}, (_, i) => // Fixed: was 'lenght'
            `<span class="star ${i < Math.floor(produto.rating) ? 'filled' : ''}">${i < Math.floor(produto.rating) ? '⭐' : '☆'}</span>` // Fixed: was 'ranting'
        ).join('')}
        </div>
        <span class="rating-text">${produto.rating} (${produto.reviews} avaliações)</span>
    </div>
    <div class="produto-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
    <button class="produto-btn" onclick="adicionarAoCarrinho(${produto.id})"><i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho</button>
    </div>
`;
return card;
}

function getCategoriaName(categoria) {
    const nomes = {
        'especiais': 'Especial',
        'gourmet': 'Gourmet',
        'organicos': 'Orgânico',
        'prençados': 'Prensado' // Added missing category
    };
    return nomes[categoria] || categoria;
}

// ... rest of existing code ...