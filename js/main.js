/**
 * 鋼彈卡牌比價
 * 入口檔案
 */

// 假資料：3 間店、6 張卡
const MOCK_DATA = {
  vendors: [
    { id: 'a', name: 'A店' },
    { id: 'b', name: 'B店' },
    { id: 'c', name: 'C店' }
  ],
  cards: [
    {
      id: 1,
      name: 'RX-78-2 鋼彈',
      series: '機動戰士鋼彈',
      prices: { a: 1200, b: 1150, c: 1250 }
    },
    {
      id: 2,
      name: 'MS-06S 夏亞專用薩克 II',
      series: '機動戰士鋼彈',
      prices: { a: 980, b: 1050, c: 920 }
    },
    {
      id: 3,
      name: 'RX-178 鋼彈 Mk-II',
      series: '機動戰士 Z 鋼彈',
      prices: { a: 850, b: 790, c: 880 }
    },
    {
      id: 4,
      name: 'ZGMF-X10A 自由鋼彈',
      series: '機動戰士鋼彈 SEED',
      prices: { a: 1500, b: 1620, c: 1480 }
    },
    {
      id: 5,
      name: 'MBF-P02 迷惘鋼彈紅色機',
      series: '機動戰士鋼彈 SEED ASTRAY',
      prices: { a: 1350, b: 1280, c: 1400 }
    },
    {
      id: 6,
      name: 'MSN-04 沙薩比',
      series: '機動戰士鋼彈 逆襲的夏亞',
      prices: { a: 2100, b: 2050, c: 2300 }
    }
  ]
};

const STORAGE_KEY = 'gundam-price-compare-view';

const state = {
  view: 'grid',       // 'grid' | 'list'
  search: '',
  sort: 'default',    // 'default' | 'price-asc' | 'price-desc'
  data: MOCK_DATA
};

const els = {
  results: document.getElementById('results'),
  search: document.getElementById('search'),
  sort: document.getElementById('sort'),
  viewGrid: document.getElementById('view-grid'),
  viewList: document.getElementById('view-list')
};

// DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  const savedView = getStorage(STORAGE_KEY, 'grid');
  setView(savedView);
  attachListeners();
  render();
}

function attachListeners() {
  els.search.addEventListener('input', debounce((e) => {
    state.search = e.target.value.trim();
    render();
  }, 200));

  els.sort.addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });

  els.viewGrid.addEventListener('click', () => {
    setView('grid');
    setStorage(STORAGE_KEY, 'grid');
    render();
  });

  els.viewList.addEventListener('click', () => {
    setView('list');
    setStorage(STORAGE_KEY, 'list');
    render();
  });
}

function setView(view) {
  state.view = view;
  const isGrid = view === 'grid';
  els.viewGrid.classList.toggle('is-active', isGrid);
  els.viewGrid.setAttribute('aria-pressed', String(isGrid));
  els.viewList.classList.toggle('is-active', !isGrid);
  els.viewList.setAttribute('aria-pressed', String(!isGrid));
}

function getFilteredCards() {
  const term = state.search.toLowerCase();
  if (!term) return state.data.cards.slice();
  return state.data.cards.filter((card) => {
    return (
      card.name.toLowerCase().includes(term) ||
      card.series.toLowerCase().includes(term)
    );
  });
}

function getSortedCards(cards) {
  if (state.sort === 'default') return cards;
  const sorted = cards.slice();
  sorted.sort((a, b) => getMinPrice(a) - getMinPrice(b));
  return state.sort === 'price-asc' ? sorted : sorted.reverse();
}

function render() {
  const cards = getSortedCards(getFilteredCards());

  els.results.className = `results ${state.view}-view`;
  els.results.innerHTML = '';

  if (cards.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = '找不到符合的卡牌';
    els.results.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  cards.forEach((card) => {
    fragment.appendChild(createCardElement(card));
  });
  els.results.appendChild(fragment);
}

function createCardElement(card) {
  const minPrice = getMinPrice(card);
  const maxPrice = getMaxPrice(card);

  const article = document.createElement('article');
  article.className = 'card';

  const image = document.createElement('div');
  image.className = 'card-image';
  image.textContent = '卡片圖片';

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = card.name;

  const series = document.createElement('p');
  series.className = 'card-series';
  series.textContent = card.series;

  const priceList = document.createElement('ul');
  priceList.className = 'price-list';

  state.data.vendors.forEach((vendor) => {
    const price = card.prices[vendor.id];
    const li = document.createElement('li');
    li.className = 'price-item';

    const vendorName = document.createElement('span');
    vendorName.className = 'price-vendor';
    vendorName.textContent = vendor.name;

    const priceValue = document.createElement('span');
    priceValue.className = 'price-value';
    priceValue.textContent = `NT$ ${price.toLocaleString()}`;

    if (price === minPrice) {
      priceValue.classList.add('price-lowest');
    } else if (price === maxPrice) {
      priceValue.classList.add('price-highest');
    }

    li.appendChild(vendorName);
    li.appendChild(priceValue);
    priceList.appendChild(li);
  });

  body.appendChild(title);
  body.appendChild(series);
  body.appendChild(priceList);
  article.appendChild(image);
  article.appendChild(body);

  return article;
}

function getMinPrice(card) {
  return Math.min(...Object.values(card.prices));
}

function getMaxPrice(card) {
  return Math.max(...Object.values(card.prices));
}

// 常用工具函式

/**
 * 防抖函式
 */
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * 安全讀取 localStorage
 */
function getStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    console.warn('getStorage error:', e);
    return fallback;
  }
}

/**
 * 安全寫入 localStorage
 */
function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('setStorage error:', e);
  }
}
