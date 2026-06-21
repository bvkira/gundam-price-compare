# 鋼彈卡牌比價

> 建立日期：2026-06-21

## 簡介

比較多家店鋪的鋼彈卡牌市場價格，先以假資料展示 UI，未來可替換成真實資料來源。

## 檔案結構

```
.
├── index.html              # 主要頁面
├── css/
│   └── style.css           # 樣式
├── js/
│   ├── data.js             # 卡牌資料（由 scripts/build_card_data.pl 產生）
│   └── main.js             # 腳本邏輯
├── scripts/
│   └── build_card_data.pl  # 從官網抓取卡牌資料的 Perl 腳本
├── README.md               # 本文件
└── .gitignore              # Git 忽略清單
```

## 功能

- 網格 / 列表切換，偏好會記錄在 localStorage。
- 即時搜尋卡牌名稱、編號或系列。
- 依最低價低到高或高到低排序。
- 每張卡顯示 A店 / B店 / C店 價格，並以綠色凸顯最低價。
- 顯示官方卡牌圖片。

## 如何執行

直接用瀏覽器開啟 `index.html`，或用本機伺服器：

```bash
python -m http.server 8000
```

然後打開 http://localhost:8000

## 資料來源

卡牌名稱、編號、圖片來自 [GUNDAM CARD GAME 官方網站](https://www.gundam-gcg.com/zh-tw/cards/index.php)。

- 卡牌資料已預先抓取並轉成 `js/data.js`。
- 圖片透過 [wsrv.nl](https://wsrv.nl/) proxy 載入，避免官網的跨域限制導致圖片無法顯示。
- 店家價格目前為示範用假資料，未來可替換為真實市場價格。
- 如需重新抓取，可執行：

```bash
perl scripts/build_card_data.pl > js/data.js
```
