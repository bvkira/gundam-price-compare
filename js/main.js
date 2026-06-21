/**
 * 鋼彈卡牌比價
 * 入口檔案
 */

const STORAGE_KEY = 'gundam-price-compare-view';
const THEME_KEY = 'gundam-price-compare-theme';
const CURRENCY_KEY = 'gundam-price-compare-currency';

// 預設匯率（JPY 為基準），會在頁面載入時嘗試更新
const EXCHANGE_RATES = {
  JPY: 1,
  HKD: 0.0486
};

const CURRENCY_FORMAT = {
  JPY: { symbol: '¥', locale: 'ja-JP', digits: 0 },
  HKD: { symbol: 'HK$', locale: 'zh-HK', digits: 1 }
};

const state = {
  view: 'grid',       // 'grid' | 'list'
  search: '',
  series: '',         // 篩選系列
  sort: 'default',    // 'default' | 'price-asc' | 'price-desc'
  currency: 'JPY',    // 'JPY' | 'HKD'
  data: CARD_DATA
};

const els = {
  results: document.getElementById('results'),
  search: document.getElementById('search'),
  sort: document.getElementById('sort'),
  seriesFilter: document.getElementById('series-filter'),
  currencySelect: document.getElementById('currency'),
  viewGrid: document.getElementById('view-grid'),
  viewList: document.getElementById('view-list'),
  themeToggle: document.getElementById('theme-toggle'),
  lastUpdated: document.getElementById('last-updated')
};

// DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  initTheme();
  populateSeriesFilter();
  updateLastUpdated();
  loadExchangeRate();
  const savedView = getStorage(STORAGE_KEY, 'grid');
  const savedCurrency = getStorage(CURRENCY_KEY, 'JPY');
  setView(savedView);
  setCurrency(savedCurrency, false);
  attachListeners();
  render();
}

function updateLastUpdated() {
  if (!els.lastUpdated) return;
  const iso = state.data.lastUpdated;
  if (!iso) {
    els.lastUpdated.textContent = '';
    return;
  }
  try {
    const d = new Date(iso);
    const formatted = d.toLocaleString('zh-Hant', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    els.lastUpdated.textContent = `Yuyu-tei 價格更新時間：${formatted}`;
  } catch (e) {
    els.lastUpdated.textContent = `Yuyu-tei 價格更新時間：${iso}`;
  }
}

function initTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  updateThemeButton(isDark);
}

function populateSeriesFilter() {
  if (!els.seriesFilter) return;
  const seriesSet = new Set();
  state.data.cards.forEach((card) => seriesSet.add(card.series));
  const sorted = Array.from(seriesSet).sort((a, b) => a.localeCompare(b, 'zh-Hant'));
  const fragment = document.createDocumentFragment();
  sorted.forEach((series) => {
    const option = document.createElement('option');
    option.value = series;
    option.textContent = series;
    fragment.appendChild(option);
  });
  els.seriesFilter.appendChild(fragment);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  setStorage(THEME_KEY, isDark ? 'dark' : 'light');
  updateThemeButton(isDark);
}

function updateThemeButton(isDark) {
  if (!els.themeToggle) return;
  els.themeToggle.textContent = isDark ? '☀️' : '🌙';
  els.themeToggle.setAttribute('aria-label', isDark ? '切換淺色模式' : '切換深色模式');
}

function attachListeners() {
  if (els.themeToggle) {
    els.themeToggle.addEventListener('click', toggleTheme);
  }

  els.search.addEventListener('input', debounce((e) => {
    state.search = e.target.value.trim();
    render();
  }, 200));

  if (els.seriesFilter) {
    els.seriesFilter.addEventListener('change', (e) => {
      state.series = e.target.value;
      render();
    });
  }

  els.sort.addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });

  if (els.currencySelect) {
    els.currencySelect.addEventListener('change', (e) => {
      setCurrency(e.target.value, true);
      render();
    });
  }

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

function setCurrency(currency, save) {
  if (!CURRENCY_FORMAT[currency]) return;
  state.currency = currency;
  if (els.currencySelect) {
    els.currencySelect.value = currency;
  }
  if (save) {
    setStorage(CURRENCY_KEY, currency);
  }
}

function convertPrice(jpy) {
  return Math.round(jpy * EXCHANGE_RATES[state.currency]);
}

function formatPrice(jpy) {
  const amount = convertPrice(jpy);
  const cfg = CURRENCY_FORMAT[state.currency];
  return `${cfg.symbol} ${amount.toLocaleString(cfg.locale, {
    minimumFractionDigits: cfg.digits,
    maximumFractionDigits: cfg.digits
  })}`;
}

function loadExchangeRate() {
  if (typeof fetch !== 'function') return;
  fetch('https://api.exchangerate-api.com/v4/latest/JPY')
    .then((res) => res.json())
    .then((data) => {
      if (data && data.rates && data.rates.HKD) {
        EXCHANGE_RATES.HKD = data.rates.HKD;
        render();
      }
    })
    .catch((err) => {
      console.warn('Exchange rate fetch failed:', err);
    });
}

function getFilteredCards() {
  const term = state.search.toLowerCase();
  const selectedSeries = state.series;
  return state.data.cards.filter((card) => {
    const matchesSearch = !term ||
      card.name.toLowerCase().includes(term) ||
      card.series.toLowerCase().includes(term);
    const matchesSeries = !selectedSeries || card.series === selectedSeries;
    return matchesSearch && matchesSeries;
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

  const img = document.createElement('img');
  img.src = card.image;
  img.alt = card.name;
  img.loading = 'lazy';
  image.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = card.name;

  const number = document.createElement('p');
  number.className = 'card-number';
  number.textContent = card.number;

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
    priceValue.textContent = formatPrice(price);

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
  body.appendChild(number);
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
