/* ═══════════════════════════════════════════════
   SOLE DISTRICT — app.js
   Full interactive JavaScript
   ═══════════════════════════════════════════════ */

'use strict';

/* ─── PRODUCT DATABASE ─── */
const PRODUCTS = [
  // NIKE
  { id: 1,  brand: 'Nike', name: 'Air Max 90',          category: 'lifestyle',  price: 129990, oldPrice: 159990, sizes: [39,40,41,42,43,44], stock: 'ok',  badges: ['sale'],         emoji: '👟', description: 'El ícono indiscutido. La Air Max 90 redefinió el sneaker game con su visible Air Unit y su silueta atemporal. Un clásico que nunca falla.', nuevo: false, popular: true  },
  { id: 2,  brand: 'Nike', name: 'Air Max 270',         category: 'lifestyle',  price: 144990, oldPrice: null,   sizes: [40,41,42,43,44,45], stock: 'ok',  badges: ['popular'],      emoji: '👟', description: 'La unidad Air más grande de Nike hasta la fecha, con 270 grados de amortiguación visible. Comfort y estilo en un solo diseño.', nuevo: false, popular: true  },
  { id: 3,  brand: 'Nike', name: 'Dunk Low',            category: 'skate',     price: 119990, oldPrice: null,   sizes: [38,39,40,41,42,43], stock: 'ok',  badges: ['popular','new'], emoji: '👟', description: 'Desde las canchas de baloncesto universitario hasta las calles del mundo. La Dunk Low es el must-have de la cultura sneaker actual.', nuevo: true,  popular: true  },
  { id: 4,  brand: 'Nike', name: 'Dunk High',           category: 'skate',     price: 124990, oldPrice: null,   sizes: [39,40,41,42,43],    stock: 'low', badges: ['new'],          emoji: '👟', description: 'La versión high-top de la silueta más codiciada del momento. Soporte, estilo y statement en cada paso.', nuevo: true,  popular: false },
  { id: 5,  brand: 'Nike', name: 'Air Force 1 Low',     category: 'lifestyle', price: 109990, oldPrice: null,   sizes: [38,39,40,41,42,43,44,45], stock: 'ok',  badges: [],          emoji: '👟', description: 'La AF1 es mucho más que una zapatilla: es patrimonio cultural. Blanca, limpia e irresistible desde 1982.', nuevo: false, popular: true  },
  { id: 6,  brand: 'Nike', name: 'Pegasus 41',          category: 'running',   price: 139990, oldPrice: null,   sizes: [39,40,41,42,43,44], stock: 'ok',  badges: ['new'],          emoji: '🏃', description: 'La zapatilla de running más versátil de Nike. La Pegasus 41 lleva más de 40 años acompañando a corredores de todo nivel.', nuevo: true,  popular: false },
  { id: 7,  brand: 'Nike', name: 'React Infinity Run',  category: 'running',   price: 154990, oldPrice: 179990, sizes: [40,41,42,43,44],    stock: 'ok',  badges: ['sale'],         emoji: '🏃', description: 'Diseñada para reducir lesiones. La espuma React te da una pisada increíblemente suave con retorno de energía superior.', nuevo: false, popular: false },

  // JORDAN
  { id: 8,  brand: 'Jordan', name: 'Jordan 1 High OG',  category: 'basketball', price: 189990, oldPrice: null,   sizes: [39,40,41,42,43,44], stock: 'ok',  badges: ['popular'],      emoji: '🏀', description: 'El modelo que lo inició todo. La Jordan 1 High OG es la zapatilla más influyente de la historia. Historia en cada costura.', nuevo: false, popular: true  },
  { id: 9,  brand: 'Jordan', name: 'Jordan 1 Mid',      category: 'basketball', price: 164990, oldPrice: null,   sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: [],          emoji: '🏀', description: 'El punto de entrada perfecto al universo Jordan. La Mid combina el legado de la 1 con una silueta más accesible y versátil.', nuevo: false, popular: false },
  { id: 10, brand: 'Jordan', name: 'Jordan 1 Low',      category: 'lifestyle',  price: 149990, oldPrice: null,   sizes: [38,39,40,41,42,43], stock: 'ok',  badges: ['new'],          emoji: '🏀', description: 'La Low lleva el ADN Jordan a un formato más casual. Perfecta para el día a día con el cachet de la marca que amas.', nuevo: true,  popular: false },
  { id: 11, brand: 'Jordan', name: 'Jordan 3 Retro',    category: 'basketball', price: 199990, oldPrice: null,   sizes: [40,41,42,43,44],    stock: 'low', badges: ['popular','new'], emoji: '🏀', description: 'La primera Jordan diseñada por Tinker Hatfield y la primera en lucir visible Air y el Jumpman. Icónica en toda la extensión.', nuevo: true,  popular: true  },
  { id: 12, brand: 'Jordan', name: 'Jordan 4 Retro',    category: 'basketball', price: 214990, oldPrice: null,   sizes: [39,40,41,42,43],    stock: 'low', badges: ['hot','popular'], emoji: '🏀', description: 'La Jordan 4 apareció en "Do the Right Thing" y nunca salió del imaginario sneaker. Nets en el talón, mesh en el upper, pura cultura.', nuevo: false, popular: true  },
  { id: 13, brand: 'Jordan', name: 'Jordan 11 Retro',   category: 'basketball', price: 229990, oldPrice: null,   sizes: [40,41,42,43,44,45], stock: 'ok',  badges: ['hot'],          emoji: '🏀', description: 'El diseño más elegante de la línea Jordan. El barniz patent leather y las suelas translúcidas la hacen única entre todas.', nuevo: false, popular: false },

  // ADIDAS
  { id: 14, brand: 'Adidas', name: 'Samba OG',          category: 'lifestyle', price: 114990, oldPrice: null,   sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: ['popular','hot'], emoji: '👟', description: 'La Samba cumple más de 70 años y nunca estuvo más vigente. Diseñada para el fútbol sala, adoptada por la moda global.', nuevo: false, popular: true  },
  { id: 15, brand: 'Adidas', name: 'Campus 00s',        category: 'lifestyle', price: 104990, oldPrice: null,   sizes: [38,39,40,41,42,43], stock: 'ok',  badges: ['new','popular'], emoji: '👟', description: 'Suede premium, suela baja y ese perfil limpio que solo Adidas consigue. La Campus 00s es el calzado del momento.', nuevo: true,  popular: true  },
  { id: 16, brand: 'Adidas', name: 'Ultraboost 24',     category: 'running',   price: 164990, oldPrice: 189990, sizes: [39,40,41,42,43,44,45], stock: 'ok', badges: ['sale'],        emoji: '🏃', description: 'La tecnología Boost redefinió el running. Energía de retorno incomparable con un upper Primeknit que se adapta a tu pie.', nuevo: false, popular: false },
  { id: 17, brand: 'Adidas', name: 'Forum Low',         category: 'lifestyle', price: 99990,  oldPrice: null,   sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: [],          emoji: '👟', description: 'De los courts de baloncesto al street wear. La Forum Low lleva ese strap icónico que la hace reconocible en cualquier lugar.', nuevo: false, popular: false },

  // NEW BALANCE
  { id: 18, brand: 'New Balance', name: 'NB 550',       category: 'lifestyle', price: 124990, oldPrice: null,   sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: ['popular'],     emoji: '👟', description: 'Resucitada del archivo de los 80s y convertida en favorita de modelos y editores. La 550 tiene ese perfil premium inconfundible.', nuevo: false, popular: true  },
  { id: 19, brand: 'New Balance', name: 'NB 9060',      category: 'lifestyle', price: 139990, oldPrice: null,   sizes: [38,39,40,41,42,43],    stock: 'low', badges: ['new','hot'],   emoji: '👟', description: 'La versión chunky y contemporánea de New Balance. Múltiples materiales, suela volcánica y la N que siempre genera doble vistazo.', nuevo: true,  popular: false },

  // VANS
  { id: 20, brand: 'Vans', name: 'Old Skool',           category: 'skate',     price: 79990,  oldPrice: null,   sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: [],            emoji: '🛹', description: 'El stripe de jazz Vans es uno de los logos más reconocibles del planeta. La Old Skool es skate, punk y moda en una sola suela.', nuevo: false, popular: false },
  { id: 21, brand: 'Vans', name: 'Knu Skool',           category: 'lifestyle', price: 89990,  oldPrice: null,   sizes: [38,39,40,41,42,43],    stock: 'ok',  badges: ['new','popular'], emoji: '🛹', description: 'El giro chunky de la Old Skool clásica. La Knu Skool mantiene el ADN Vans pero lo lleva a un territorio más contemporáneo y voluminoso.', nuevo: true, popular: true },

  // CONVERSE
  { id: 22, brand: 'Converse', name: 'Chuck 70 High',   category: 'lifestyle', price: 84990,  oldPrice: null,   sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: [],            emoji: '👟', description: 'La versión premium de la Chuck Taylor. Canvas más grueso, ojales dorados, suela jagged. La misma silueta clásica pero elevada.', nuevo: false, popular: false },

  // PUMA
  { id: 23, brand: 'Puma', name: 'Suede Classic',       category: 'lifestyle', price: 74990,  oldPrice: 89990,  sizes: [38,39,40,41,42,43,44], stock: 'ok',  badges: ['sale'],        emoji: '👟', description: 'Desde que le fue regalada a Tommie Smith en los Juegos Olímpicos del 68, la Suede vive en la historia del deporte y la cultura.', nuevo: false, popular: false },
  { id: 24, brand: 'Puma', name: 'Speedcat OG',         category: 'lifestyle', price: 94990,  oldPrice: null,   sizes: [38,39,40,41,42,43],    stock: 'ok',  badges: ['new','hot'],   emoji: '👟', description: 'Del automovilismo a las pasarelas. La Speedcat OG tiene ese perfil ultra rasante que la diferencia de todo lo demás. El próximo clásico.', nuevo: true, popular: false },
];

/* ─── STATE ─── */
let currentBrand    = 'all';
let currentSize     = 'all';
let currentPrice    = 'all';
let currentSort     = 'popular';
let currentCategory = 'all';
let searchQuery     = '';
let selectedProduct = null;
let selectedSize    = null;

/* ═══════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════ */
(function initLoader() {
  const loader   = document.getElementById('loader');
  const bar      = document.querySelector('.loader-bar');
  const counter  = document.querySelector('.loader-counter');
  const msgs     = document.querySelectorAll('.loader-msg');

  const messages = [0, 1, 2];
  let msgIdx = 0;
  let progress = 0;

  function setMsg(i) {
    msgs.forEach(m => m.classList.remove('active'));
    if (msgs[i]) msgs[i].classList.add('active');
  }

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 6;
    if (progress > 100) progress = 100;

    bar.style.width = progress + '%';
    counter.textContent = Math.floor(progress) + '%';

    if (progress > 35 && msgIdx === 0) { msgIdx = 1; setMsg(1); }
    if (progress > 70 && msgIdx === 1) { msgIdx = 2; setMsg(2); }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        revealHero();
      }, 600);
    }
  }, 120);
})();

/* ─── HERO REVEAL ─── */
function revealHero() {
  document.querySelectorAll('.line-reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 120);
  });
}

/* ═══════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ═══════════════════════════════════════════════
   RENDER PRODUCTS
   ═══════════════════════════════════════════════ */
function formatPrice(p) {
  return '$' + p.toLocaleString('es-CL');
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;

  const badgeHTML = product.badges.map(b => {
    const map = { new: ['badge-new','NUEVO'], hot: ['badge-hot','🔥 Hot'], popular: ['badge-hot','Popular'], sale: ['badge-sale','Oferta'] };
    const [cls, label] = map[b] || ['badge-new', b];
    return `<span class="badge ${cls}">${label}</span>`;
  }).join('');

  const stockClass = product.stock === 'ok' ? 'stock-ok' : 'stock-low';
  const stockLabel = product.stock === 'ok' ? '● Disponible' : '⚠ Últimas unidades';

  const oldPriceHTML = product.oldPrice
    ? `<span class="card-price-old">${formatPrice(product.oldPrice)}</span>` : '';

  card.innerHTML = `
    <div class="card-img-wrap">
      <div class="card-img-emoji">${product.emoji}</div>
      <div class="card-badges">${badgeHTML}</div>
      <div class="card-stock ${stockClass}">${stockLabel}</div>
    </div>
    <div class="card-body">
      <div class="card-brand">${product.brand}</div>
      <div class="card-name">${product.name}</div>
      <div class="card-sizes">Tallas: ${product.sizes.join(' · ')}</div>
      <div class="card-price-row">
        <div class="card-price">${formatPrice(product.price)}</div>
        ${oldPriceHTML}
      </div>
      <div class="card-actions">
        <button class="btn-card-detail" data-id="${product.id}">Ver detalles</button>
        <button class="btn-card-buy" data-id="${product.id}">Comprar</button>
      </div>
    </div>`;

  card.querySelector('.btn-card-detail').addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(product.id);
  });

  card.querySelector('.btn-card-buy').addEventListener('click', (e) => {
    e.stopPropagation();
    const msg = `Hola! Me interesa: *${product.brand} ${product.name}* — ${formatPrice(product.price)}. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/56912345678?text=${encodeURIComponent(msg)}`, '_blank');
  });

  card.addEventListener('click', () => openModal(product.id));
  return card;
}

function renderSection(containerID, products) {
  const container = document.getElementById(containerID);
  if (!container) return;
  container.innerHTML = '';
  products.forEach(p => container.appendChild(createProductCard(p)));
}

/* ─── Initial Sections ─── */
renderSection('nuevosRow',   PRODUCTS.filter(p => p.nuevo).slice(0, 8));
renderSection('vendidosRow', PRODUCTS.filter(p => p.popular).slice(0, 8));

/* ═══════════════════════════════════════════════
   CATALOG FILTERS
   ═══════════════════════════════════════════════ */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (currentBrand !== 'all') {
    list = list.filter(p => p.brand === currentBrand);
  }
  if (currentCategory !== 'all') {
    list = list.filter(p => p.category === currentCategory);
  }
  if (currentSize !== 'all') {
    list = list.filter(p => p.sizes.includes(parseInt(currentSize)));
  }
  if (currentPrice !== 'all') {
    const [min, max] = currentPrice.split('-').map(Number);
    list = list.filter(p => p.price >= min && p.price <= max);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  switch (currentSort) {
    case 'popular':    list.sort((a,b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)); break;
    case 'nuevo':      list.sort((a,b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0)); break;
    case 'precio-asc': list.sort((a,b) => a.price - b.price); break;
    case 'precio-desc':list.sort((a,b) => b.price - a.price); break;
  }

  return list;
}

function renderCatalog() {
  const filtered = getFilteredProducts();
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.classList.add('hidden');
    noResults.classList.remove('hidden');
    count.textContent = 'Sin resultados';
    return;
  }

  grid.classList.remove('hidden');
  noResults.classList.add('hidden');
  count.textContent = `Mostrando ${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

  filtered.forEach(p => grid.appendChild(createProductCard(p)));
}

renderCatalog();

/* ─── Filter event listeners ─── */
document.querySelectorAll('#brandFilter .pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#brandFilter .pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentBrand = btn.dataset.brand;
    currentCategory = 'all';
    renderCatalog();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('sizeFilter').addEventListener('change', e => {
  currentSize = e.target.value;
  renderCatalog();
});

document.getElementById('priceFilter').addEventListener('change', e => {
  currentPrice = e.target.value;
  renderCatalog();
});

document.getElementById('sortFilter').addEventListener('change', e => {
  currentSort = e.target.value;
  renderCatalog();
});

let searchTimeout;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    searchQuery = e.target.value;
    renderCatalog();
  }, 300);
});

window.resetFilters = function() {
  currentBrand    = 'all';
  currentSize     = 'all';
  currentPrice    = 'all';
  currentSort     = 'popular';
  currentCategory = 'all';
  searchQuery     = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('sizeFilter').value  = 'all';
  document.getElementById('priceFilter').value = 'all';
  document.getElementById('sortFilter').value  = 'popular';
  document.querySelectorAll('#brandFilter .pill').forEach(b => b.classList.remove('active'));
  document.querySelector('#brandFilter .pill[data-brand="all"]').classList.add('active');
  renderCatalog();
};

/* ─── Category filter from grid ─── */
window.filterByCategory = function(cat) {
  currentCategory = cat;
  currentBrand = 'all';
  document.querySelectorAll('#brandFilter .pill').forEach(b => b.classList.remove('active'));
  document.querySelector('#brandFilter .pill[data-brand="all"]').classList.add('active');
  renderCatalog();
  setTimeout(() => document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' }), 100);
};

/* ═══════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════ */
const modal     = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  selectedProduct = p;
  selectedSize = null;

  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalName').textContent  = p.name;
  document.getElementById('modalPrice').textContent = formatPrice(p.price);
  document.getElementById('modalDesc').textContent  = p.description;

  const mainImg = document.getElementById('modalMainImg');
  mainImg.textContent = p.emoji;
  mainImg.style.fontSize = '8rem';

  // Badges
  const badgesEl = document.getElementById('modalBadges');
  badgesEl.innerHTML = p.badges.map(b => {
    const map = { new: ['badge-new','NUEVO'], hot: ['badge-hot','🔥 Hot'], popular: ['badge-hot','Popular'], sale: ['badge-sale','Oferta'] };
    const [cls, label] = map[b] || ['badge-new', b];
    return `<span class="badge ${cls}">${label}</span>`;
  }).join('');

  // Stock
  const stockEl = document.getElementById('modalStock');
  stockEl.innerHTML = p.stock === 'ok'
    ? '<span style="color:#4ade80;font-family:var(--font-mono);font-size:0.8rem">● Disponible en stock</span>'
    : '<span style="color:#f59e0b;font-family:var(--font-mono);font-size:0.8rem">⚠ Últimas unidades disponibles</span>';

  // Sizes
  const sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = p.sizes.map(s =>
    `<button class="size-btn" data-size="${s}">${s}</button>`
  ).join('');

  sizesEl.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sizesEl.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
      updateWALink();
    });
  });

  // Thumbs (simulated)
  const thumbRow = document.getElementById('modalThumbs');
  thumbRow.innerHTML = ['👟','👟','👟'].map((e, i) =>
    `<div class="modal-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}">${e}</div>`
  ).join('');
  thumbRow.querySelectorAll('.modal-thumb').forEach(t => {
    t.addEventListener('click', () => {
      thumbRow.querySelectorAll('.modal-thumb').forEach(t2 => t2.classList.remove('active'));
      t.classList.add('active');
    });
  });

  updateWALink();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateWALink() {
  const waBtn = document.getElementById('modalWA');
  if (!selectedProduct) return;
  const sizeText = selectedSize ? ` — Talla: ${selectedSize}` : '';
  const msg = `Hola! Me interesa: *${selectedProduct.brand} ${selectedProduct.name}*${sizeText} — ${formatPrice(selectedProduct.price)}. ¿Hay disponibilidad?`;
  waBtn.href = `https://wa.me/56912345678?text=${encodeURIComponent(msg)}`;
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  selectedProduct = null;
  selectedSize = null;
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ═══════════════════════════════════════════════
   TOAST
   ═══════════════════════════════════════════════ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ═══════════════════════════════════════════════
   LOCAL STATUS (hora dinámica)
   ═══════════════════════════════════════════════ */
function updateLocalStatus() {
  const now    = new Date();
  const hour   = now.getHours();
  const day    = now.getDay(); // 0=dom, 6=sab
  const dot    = document.querySelector('.dot');
  const text   = document.getElementById('statusText');

  if (!dot || !text) return;

  const weekdayOpen  = hour >= 10 && hour < 20;
  const saturdayOpen = hour >= 10 && hour < 18;
  const isOpen = (day >= 1 && day <= 5 && weekdayOpen) || (day === 6 && saturdayOpen);

  if (isOpen) {
    dot.classList.remove('closed');
    text.textContent = '🟢 Abierto ahora — Retiro inmediato disponible';
  } else {
    dot.classList.add('closed');
    const tomorrow = day === 0 ? 'Lunes' : day === 6 ? 'Lunes' : 'mañana';
    text.textContent = `🔴 Cerrado — Abrimos ${tomorrow} a las 10:00`;
  }
}

updateLocalStatus();

/* ═══════════════════════════════════════════════
   SCROLL ANIMATIONS (Intersection Observer)
   ═══════════════════════════════════════════════ */
const aoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      aoObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-aos], .benefit-card').forEach(el => {
  aoObserver.observe(el);
});

/* ─── Nav link active state on scroll ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--white)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

/* ─── Smooth scroll for all anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ─── Parallax subtle on hero ─── */
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const scrolled = window.scrollY;
  const heroH = hero.offsetHeight;
  if (scrolled < heroH) {
    const factor = scrolled / heroH;
    document.querySelector('.hero-noise').style.transform = `translateY(${scrolled * 0.3}px)`;
  }
}, { passive: true });

/* ─── Console branding ─── */
console.log('%c SOLE DISTRICT ', 'background:#e8ff00;color:#0a0a0a;font-weight:bold;font-size:16px;padding:4px 8px;border-radius:4px');
console.log('%c Demo comercial — Desarrollado por millesvc.studio ', 'color:#888;font-size:11px');
console.log('%c ¿Querés una web así para tu negocio? → wa.me/56912345678 ', 'color:#e8ff00;font-size:12px');
