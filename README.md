# 鋼彈卡牌比價

> 建立日期：2026-06-21

## 簡介

比較多家店鋪的鋼彈卡牌市場價格。

## 檔案結構

```
.
├── index.html              # 主要頁面
├── css/
│   └── style.css           # 樣式
├── js/
│   ├── data.js             # 卡牌資料（由 scripts/build_card_data.pl 產生）
│   └── main.js             # 腳本邏輯
├── db/
│   └── prices.json         # 從 yuyu-tei 抓取的價格資料庫
├── scripts/
│   ├── build_card_data.pl  # 從官網抓取卡牌資料的 Perl 腳本
│   ├── scrape_yuyutei.pl   # 從 yuyu-tei 抓取價格的 Perl 腳本
│   └── merge_prices.pl     # 把 yuyu-tei 價格同步到 js/data.js
├── README.md               # 本文件
└── .gitignore              # Git 忽略清單
```

## 功能

- 網格 / 列表切換，偏好會記錄在 localStorage。
- 即時搜尋卡牌名稱、編號或系列。
- 系列篩選下拉選單。
- 稀有度篩選下拉選單（LR++ / LR+ / LR / R+ / R 等）。
- 依最低價低到高或高到低排序。
- 每張卡顯示 Yuyu-tei / B店 / C店 價格，並以綠色凸顯最低價。
- 價格預設為日圓（JPY），訪客可切換為港幣（HKD）。
- 顯示官方卡牌圖片。
- 深色 / 淺色模式切換，預設為深色模式。
- 一鍵清除所有篩選。

## 如何執行

直接用瀏覽器開啟 `index.html`，或用本機伺服器：

```bash
python -m http.server 8000
```

然後打開 http://localhost:8000

## 資料來源

- 卡牌名稱、編號、圖片來自 [GUNDAM CARD GAME 官方網站](https://www.gundam-gcg.com/zh-tw/cards/index.php)。
- 價格資料來自 [遊々亭 yuyu-tei](https://yuyu-tei.jp/top/gcg)，存入 `db/prices.json`。
- 圖片透過 [wsrv.nl](https://wsrv.nl/) proxy 載入，避免官網的跨域限制導致圖片無法顯示。

## 更新資料

重新抓取官方卡牌資料：

```bash
perl scripts/build_card_data.pl > js/data.js
```

抓取 yuyu-tei 價格（會在 `db/prices.json` 新增一筆觀測記錄，不會覆蓋舊資料）：

```bash
perl scripts/scrape_yuyutei.pl
```

把最新 yuyu-tei 價格同步到網頁的 Yuyu-tei 欄位：

```bash
perl scripts/merge_prices.pl
```

如果要一次完成「抓最新價格 + 同步到網頁」：

```bash
perl scripts/scrape_yuyutei.pl && perl scripts/merge_prices.pl
```

## 注意事項

- 卡牌資料包含稀有度（rarity：LR++ / LR+ / LR / R+ / R / U / C 等）。
- 與 yuyu-tei 價格對應時，會優先比對「卡號 + 稀有度」，沒有完全對應時才 fallback 到「卡號」。
- yuyu-tei 是日本的卡牌通路，價格為日圓（JPY），且不含運費與關稅。
- 請勿過於頻繁執行爬蟲，避免對對方伺服器造成負擔。
