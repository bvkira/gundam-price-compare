const CARD_DATA = {
  vendors: [
    { id: 'a', name: 'A店' },
    { id: 'b', name: 'B店' },
    { id: 'c', name: 'C店' }
  ],
  cards: [
    {
      id: "GD01-001",
      name: "高達",
      number: "GD01-001",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-001.webp?260612",
      prices: { a: 2276, b: 632, c: 1988 }
    },
    {
      id: "GD01-001_p1",
      name: "高達",
      number: "GD01-001_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-001_p1.webp?260612",
      prices: { a: 632, b: 1124, c: 1616 }
    },
    {
      id: "GD01-001_p2",
      name: "高達",
      number: "GD01-001_p2",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-001_p2.webp?260612",
      prices: { a: 633, b: 1131, c: 1629 }
    },
    {
      id: "GD01-002",
      name: "獨角獸高達（破壞模式）",
      number: "GD01-002",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-002.webp?260612",
      prices: { a: 2277, b: 639, c: 2001 }
    },
    {
      id: "GD01-002_p1",
      name: "獨角獸高達（破壞模式）",
      number: "GD01-002_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-002_p1.webp?260612",
      prices: { a: 2423, b: 1661, c: 899 }
    },
    {
      id: "GD01-003",
      name: "獨角獸高達2號機報喪女妖（破壞模式）",
      number: "GD01-003",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-003.webp?260612",
      prices: { a: 2278, b: 646, c: 2014 }
    },
    {
      id: "GD01-003_p1",
      name: "獨角獸高達2號機報喪女妖（破壞模式）",
      number: "GD01-003_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-003_p1.webp?260612",
      prices: { a: 2214, b: 198, c: 1182 }
    },
    {
      id: "GD01-004",
      name: "鋼加農",
      number: "GD01-004",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-004.webp?260612",
      prices: { a: 2279, b: 653, c: 2027 }
    },
    {
      id: "GD01-005",
      name: "獨角獸高達（獨角獸模式）",
      number: "GD01-005",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-005.webp?260612",
      prices: { a: 2280, b: 660, c: 2040 }
    },
    {
      id: "GD01-005_p1",
      name: "獨角獸高達（獨角獸模式）",
      number: "GD01-005_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-005_p1.webp?260612",
      prices: { a: 796, b: 2272, c: 748 }
    },
    {
      id: "GD01-006",
      name: "德爾塔普拉斯",
      number: "GD01-006",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-006.webp?260612",
      prices: { a: 2281, b: 667, c: 2053 }
    },
    {
      id: "GD01-006_p1",
      name: "德爾塔普拉斯",
      number: "GD01-006_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-006_p1.webp?260612",
      prices: { a: 587, b: 809, c: 1031 }
    },
    {
      id: "GD01-007",
      name: "艾亞利茲（諾茵機）",
      number: "GD01-007",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-007.webp?260612",
      prices: { a: 2282, b: 674, c: 2066 }
    },
    {
      id: "GD01-008",
      name: "鋼坦克",
      number: "GD01-008",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-008.webp?260612",
      prices: { a: 2283, b: 681, c: 2079 }
    },
    {
      id: "GD01-009",
      name: "G戰機",
      number: "GD01-009",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-009.webp?260612",
      prices: { a: 2284, b: 688, c: 2092 }
    },
    {
      id: "GD01-010",
      name: "獨角獸高達2號機報喪女妖（獨角獸模式）",
      number: "GD01-010",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-010.webp?260612",
      prices: { a: 2306, b: 842, c: 2378 }
    },
    {
      id: "GD01-011",
      name: "洛特",
      number: "GD01-011",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-011.webp?260612",
      prices: { a: 2307, b: 849, c: 2391 }
    },
    {
      id: "GD01-012",
      name: "里歐（傑克斯機）",
      number: "GD01-012",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-012.webp?260612",
      prices: { a: 2308, b: 856, c: 2404 }
    },
    {
      id: "GD01-013",
      name: "高達",
      number: "GD01-013",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-013.webp?260612",
      prices: { a: 2309, b: 863, c: 2417 }
    },
    {
      id: "GD01-014",
      name: "G飛行器簡易型",
      number: "GD01-014",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-014.webp?260612",
      prices: { a: 2310, b: 870, c: 2430 }
    },
    {
      id: "GD01-015",
      name: "球艇",
      number: "GD01-015",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-015.webp?260612",
      prices: { a: 2311, b: 877, c: 2443 }
    },
    {
      id: "GD01-016",
      name: "傑鋼",
      number: "GD01-016",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-016.webp?260612",
      prices: { a: 2312, b: 884, c: 2456 }
    },
    {
      id: "GD01-017",
      name: "武裝強化型傑鋼",
      number: "GD01-017",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-017.webp?260612",
      prices: { a: 2313, b: 891, c: 2469 }
    },
    {
      id: "GD01-018",
      name: "里歇爾",
      number: "GD01-018",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-018.webp?260612",
      prices: { a: 2314, b: 898, c: 2482 }
    },
    {
      id: "GD01-019",
      name: "拜亞蘭・特裝型",
      number: "GD01-019",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-019.webp?260612",
      prices: { a: 2315, b: 905, c: 2495 }
    },
    {
      id: "GD01-020",
      name: "安克夏",
      number: "GD01-020",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-020.webp?260612",
      prices: { a: 2337, b: 1059, c: 2781 }
    },
    {
      id: "GD01-021",
      name: "派西斯",
      number: "GD01-021",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-021.webp?260612",
      prices: { a: 2338, b: 1066, c: 2794 }
    },
    {
      id: "GD01-022",
      name: "坎沙",
      number: "GD01-022",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-022.webp?260612",
      prices: { a: 2339, b: 1073, c: 2807 }
    },
    {
      id: "GD01-023",
      name: "夏亞專用傑爾古格",
      number: "GD01-023",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-023.webp?260612",
      prices: { a: 2340, b: 1080, c: 2820 }
    },
    {
      id: "GD01-023_p1",
      name: "夏亞專用傑爾古格",
      number: "GD01-023_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-023_p1.webp?260612",
      prices: { a: 256, b: 1492, c: 2728 }
    },
    {
      id: "GD01-024",
      name: "飛翼高達零式",
      number: "GD01-024",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-024.webp?260612",
      prices: { a: 2341, b: 1087, c: 2833 }
    },
    {
      id: "GD01-024_p1",
      name: "飛翼高達零式",
      number: "GD01-024_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-024_p1.webp?260612",
      prices: { a: 3047, b: 3029, c: 3011 }
    },
    {
      id: "GD01-025",
      name: "死神高達",
      number: "GD01-025",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-025.webp?260612",
      prices: { a: 2342, b: 1094, c: 2846 }
    },
    {
      id: "GD01-025_p1",
      name: "死神高達",
      number: "GD01-025_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-025_p1.webp?260612",
      prices: { a: 2838, b: 1566, c: 294 }
    },
    {
      id: "GD01-026",
      name: "夏亞專用薩克Ⅱ",
      number: "GD01-026",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-026.webp?260612",
      prices: { a: 2343, b: 1101, c: 2859 }
    },
    {
      id: "GD01-027",
      name: "畢格・薩姆",
      number: "GD01-027",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-027.webp?260612",
      prices: { a: 2344, b: 1108, c: 2872 }
    },
    {
      id: "GD01-027_p1",
      name: "畢格・薩姆",
      number: "GD01-027_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-027_p1.webp?260612",
      prices: { a: 1420, b: 640, c: 2860 }
    },
    {
      id: "GD01-028",
      name: "沙漠高達",
      number: "GD01-028",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-028.webp?260612",
      prices: { a: 2345, b: 1115, c: 2885 }
    },
    {
      id: "GD01-029",
      name: "神龍高達",
      number: "GD01-029",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-029.webp?260612",
      prices: { a: 2346, b: 1122, c: 2898 }
    },
    {
      id: "GD01-029_p1",
      name: "神龍高達",
      number: "GD01-029_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-029_p1.webp?260612",
      prices: { a: 1002, b: 714, c: 426 }
    },
    {
      id: "GD01-030",
      name: "里克・德姆",
      number: "GD01-030",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-030.webp?260612",
      prices: { a: 2368, b: 1276, c: 184 }
    },
    {
      id: "GD01-031",
      name: "傑爾古格",
      number: "GD01-031",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-031.webp?260612",
      prices: { a: 2369, b: 1283, c: 197 }
    },
    {
      id: "GD01-032",
      name: "吉昂",
      number: "GD01-032",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-032.webp?260612",
      prices: { a: 2370, b: 1290, c: 210 }
    },
    {
      id: "GD01-033",
      name: "死神高達",
      number: "GD01-033",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-033.webp?260612",
      prices: { a: 2371, b: 1297, c: 223 }
    },
    {
      id: "GD01-034",
      name: "重武裝高達",
      number: "GD01-034",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-034.webp?260612",
      prices: { a: 2372, b: 1304, c: 236 }
    },
    {
      id: "GD01-035",
      name: "薩克Ⅱ",
      number: "GD01-035",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-035.webp?260612",
      prices: { a: 2373, b: 1311, c: 249 }
    },
    {
      id: "GD01-036",
      name: "古夫",
      number: "GD01-036",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-036.webp?260612",
      prices: { a: 2374, b: 1318, c: 262 }
    },
    {
      id: "GD01-037",
      name: "葛克",
      number: "GD01-037",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-037.webp?260612",
      prices: { a: 2375, b: 1325, c: 275 }
    },
    {
      id: "GD01-038",
      name: "阿薩姆",
      number: "GD01-038",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-038.webp?260612",
      prices: { a: 2376, b: 1332, c: 288 }
    },
    {
      id: "GD01-039",
      name: "多普戰機",
      number: "GD01-039",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-039.webp?260612",
      prices: { a: 2377, b: 1339, c: 301 }
    },
    {
      id: "GD01-040",
      name: "飛翼高達",
      number: "GD01-040",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-040.webp?260612",
      prices: { a: 2399, b: 1493, c: 587 }
    },
    {
      id: "GD01-041",
      name: "神龍高達",
      number: "GD01-041",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-041.webp?260612",
      prices: { a: 2400, b: 1500, c: 600 }
    },
    {
      id: "GD01-042",
      name: "里歐（迪歐機）",
      number: "GD01-042",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-042.webp?260612",
      prices: { a: 2401, b: 1507, c: 613 }
    },
    {
      id: "GD01-043",
      name: "馬格亞那克（拉席德機）",
      number: "GD01-043",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-043.webp?260612",
      prices: { a: 2402, b: 1514, c: 626 }
    },
    {
      id: "GD01-044",
      name: "剎帝利",
      number: "GD01-044",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-044.webp?260612",
      prices: { a: 2403, b: 1521, c: 639 }
    },
    {
      id: "GD01-044_p1",
      name: "剎帝利",
      number: "GD01-044_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-044_p1.webp?260612",
      prices: { a: 2089, b: 2323, c: 2557 }
    },
    {
      id: "GD01-045",
      name: "決鬥高達 強襲護甲裝備",
      number: "GD01-045",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-045.webp?260612",
      prices: { a: 2404, b: 1528, c: 652 }
    },
    {
      id: "GD01-045_p1",
      name: "決鬥高達 強襲護甲裝備",
      number: "GD01-045_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-045_p1.webp?260612",
      prices: { a: 880, b: 2860, c: 1840 }
    },
    {
      id: "GD01-046",
      name: "暴風高達",
      number: "GD01-046",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-046.webp?260612",
      prices: { a: 2405, b: 1535, c: 665 }
    },
    {
      id: "GD01-046_p1",
      name: "暴風高達",
      number: "GD01-046_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-046_p1.webp?260612",
      prices: { a: 671, b: 1397, c: 2123 }
    },
    {
      id: "GD01-047",
      name: "尚布羅",
      number: "GD01-047",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-047.webp?260612",
      prices: { a: 2406, b: 1542, c: 678 }
    },
    {
      id: "GD01-047_p1",
      name: "尚布羅",
      number: "GD01-047_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-047_p1.webp?260612",
      prices: { a: 462, b: 2934, c: 2406 }
    },
    {
      id: "GD01-048",
      name: "薩克Ⅰ狙擊型",
      number: "GD01-048",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-048.webp?260612",
      prices: { a: 2407, b: 1549, c: 691 }
    },
    {
      id: "GD01-049",
      name: "閃電高達",
      number: "GD01-049",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-049.webp?260612",
      prices: { a: 2408, b: 1556, c: 704 }
    },
    {
      id: "GD01-050",
      name: "拉寇",
      number: "GD01-050",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-050.webp?260612",
      prices: { a: 2430, b: 1710, c: 990 }
    },
    {
      id: "GD01-050_p1",
      name: "拉寇",
      number: "GD01-050_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-050_p1.webp?260612",
      prices: { a: 446, b: 2822, c: 2198 }
    },
    {
      id: "GD01-051",
      name: "剎帝利",
      number: "GD01-051",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-051.webp?260612",
      prices: { a: 2431, b: 1717, c: 1003 }
    },
    {
      id: "GD01-052",
      name: "吉拉・祖魯（親衛隊機）",
      number: "GD01-052",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-052.webp?260612",
      prices: { a: 2432, b: 1724, c: 1016 }
    },
    {
      id: "GD01-053",
      name: "吉拉・德卡（重武裝規格）",
      number: "GD01-053",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-053.webp?260612",
      prices: { a: 2433, b: 1731, c: 1029 }
    },
    {
      id: "GD01-054",
      name: "決鬥高達",
      number: "GD01-054",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-054.webp?260612",
      prices: { a: 2434, b: 1738, c: 1042 }
    },
    {
      id: "GD01-055",
      name: "巴庫",
      number: "GD01-055",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-055.webp?260612",
      prices: { a: 2435, b: 1745, c: 1055 }
    },
    {
      id: "GD01-056",
      name: "吉拉・德卡（帶袖的規格）",
      number: "GD01-056",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-056.webp?260612",
      prices: { a: 2436, b: 1752, c: 1068 }
    },
    {
      id: "GD01-057",
      name: "德萊森（帶袖的規格）",
      number: "GD01-057",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-057.webp?260612",
      prices: { a: 2437, b: 1759, c: 1081 }
    },
    {
      id: "GD01-058",
      name: "卡爾斯K",
      number: "GD01-058",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-058.webp?260612",
      prices: { a: 2438, b: 1766, c: 1094 }
    },
    {
      id: "GD01-059",
      name: "傑・祖魯",
      number: "GD01-059",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-059.webp?260612",
      prices: { a: 2439, b: 1773, c: 1107 }
    },
    {
      id: "GD01-060",
      name: "薩克海中型",
      number: "GD01-060",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-060.webp?260612",
      prices: { a: 2461, b: 1927, c: 1393 }
    },
    {
      id: "GD01-061",
      name: "薩伍特",
      number: "GD01-061",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-061.webp?260612",
      prices: { a: 2462, b: 1934, c: 1406 }
    },
    {
      id: "GD01-062",
      name: "古恩",
      number: "GD01-062",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-062.webp?260612",
      prices: { a: 2463, b: 1941, c: 1419 }
    },
    {
      id: "GD01-063",
      name: "佐諾",
      number: "GD01-063",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-063.webp?260612",
      prices: { a: 2464, b: 1948, c: 1432 }
    },
    {
      id: "GD01-064",
      name: "迪因",
      number: "GD01-064",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-064.webp?260612",
      prices: { a: 2465, b: 1955, c: 1445 }
    },
    {
      id: "GD01-065",
      name: "自由高達",
      number: "GD01-065",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-065.webp?260612",
      prices: { a: 2466, b: 1962, c: 1458 }
    },
    {
      id: "GD01-065_p1",
      name: "自由高達",
      number: "GD01-065_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-065_p1.webp?260612",
      prices: { a: 2922, b: 2154, c: 1386 }
    },
    {
      id: "GD01-066",
      name: "正義高達",
      number: "GD01-066",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-066.webp?260612",
      prices: { a: 2467, b: 1969, c: 1471 }
    },
    {
      id: "GD01-066_p1",
      name: "正義高達",
      number: "GD01-066_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-066_p1.webp?260612",
      prices: { a: 2713, b: 691, c: 1669 }
    },
    {
      id: "GD01-067",
      name: "風靈高達（修改型）",
      number: "GD01-067",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-067.webp?260612",
      prices: { a: 2468, b: 1976, c: 1484 }
    },
    {
      id: "GD01-067_p1",
      name: "風靈高達（修改型）",
      number: "GD01-067_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-067_p1.webp?260612",
      prices: { a: 1504, b: 1228, c: 952 }
    },
    {
      id: "GD01-067_p2",
      name: "風靈高達（修改型）",
      number: "GD01-067_p2",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-067_p2.webp?260612",
      prices: { a: 1505, b: 1235, c: 965 }
    },
    {
      id: "GD01-068",
      name: "完美型突擊高達",
      number: "GD01-068",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-068.webp?260612",
      prices: { a: 2469, b: 1983, c: 1497 }
    },
    {
      id: "GD01-069",
      name: "突擊高達・紅",
      number: "GD01-069",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-069.webp?260612",
      prices: { a: 2470, b: 1990, c: 1510 }
    },
    {
      id: "GD01-069_p1",
      name: "突擊高達・紅",
      number: "GD01-069_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-069_p1.webp?260612",
      prices: { a: 1086, b: 1302, c: 1518 }
    },
    {
      id: "GD01-070",
      name: "風靈高達",
      number: "GD01-070",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-070.webp?260612",
      prices: { a: 2492, b: 2144, c: 1796 }
    },
    {
      id: "GD01-071",
      name: "鐵騎高達",
      number: "GD01-071",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-071.webp?260612",
      prices: { a: 2493, b: 2151, c: 1809 }
    },
    {
      id: "GD01-071_p1",
      name: "鐵騎高達",
      number: "GD01-071_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-071_p1.webp?260612",
      prices: { a: 1279, b: 2653, c: 1027 }
    },
    {
      id: "GD01-072",
      name: "砲戰型突擊高達",
      number: "GD01-072",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-072.webp?260612",
      prices: { a: 2494, b: 2158, c: 1822 }
    },
    {
      id: "GD01-073",
      name: "重劍型突擊高達",
      number: "GD01-073",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-073.webp?260612",
      prices: { a: 2495, b: 2165, c: 1835 }
    },
    {
      id: "GD01-074",
      name: "迪米教練機 雀丘專用機",
      number: "GD01-074",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-074.webp?260612",
      prices: { a: 2496, b: 2172, c: 1848 }
    },
    {
      id: "GD01-075",
      name: "達里巴爾迪",
      number: "GD01-075",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-075.webp?260612",
      prices: { a: 2497, b: 2179, c: 1861 }
    },
    {
      id: "GD01-076",
      name: "惡魔審判者",
      number: "GD01-076",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-076.webp?260612",
      prices: { a: 2498, b: 2186, c: 1874 }
    },
    {
      id: "GD01-077",
      name: "突擊高達",
      number: "GD01-077",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-077.webp?260612",
      prices: { a: 2499, b: 2193, c: 1887 }
    },
    {
      id: "GD01-078",
      name: "密斯特拉爾",
      number: "GD01-078",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-078.webp?260612",
      prices: { a: 2500, b: 2200, c: 1900 }
    },
    {
      id: "GD01-079",
      name: "空中霸者",
      number: "GD01-079",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-079.webp?260612",
      prices: { a: 2501, b: 2207, c: 1913 }
    },
    {
      id: "GD01-080",
      name: "空中霸者（卡佳里機）",
      number: "GD01-080",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-080.webp?260612",
      prices: { a: 2523, b: 2361, c: 2199 }
    },
    {
      id: "GD01-081",
      name: "M1迷惘高達",
      number: "GD01-081",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-081.webp?260612",
      prices: { a: 2524, b: 2368, c: 2212 }
    },
    {
      id: "GD01-082",
      name: "風靈高達（米拉蘇爾社製 飛行組件裝備）",
      number: "GD01-082",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-082.webp?260612",
      prices: { a: 2525, b: 2375, c: 2225 }
    },
    {
      id: "GD01-083",
      name: "迪蘭薩 古爾專用機",
      number: "GD01-083",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-083.webp?260612",
      prices: { a: 2526, b: 2382, c: 2238 }
    },
    {
      id: "GD01-084",
      name: "五號審判者",
      number: "GD01-084",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-084.webp?260612",
      prices: { a: 2527, b: 2389, c: 2251 }
    },
    {
      id: "GD01-085",
      name: "迪米警衛機",
      number: "GD01-085",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-085.webp?260612",
      prices: { a: 2528, b: 2396, c: 2264 }
    },
    {
      id: "GD01-086",
      name: "魔靈高達",
      number: "GD01-086",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-086.webp?260612",
      prices: { a: 2529, b: 2403, c: 2277 }
    },
    {
      id: "GD01-087",
      name: "雪拉・瑪斯",
      number: "GD01-087",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-087.webp?260612",
      prices: { a: 2530, b: 2410, c: 2290 }
    },
    {
      id: "GD01-087_p1",
      name: "雪拉・瑪斯",
      number: "GD01-087_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-087_p1.webp?260612",
      prices: { a: 546, b: 522, c: 498 }
    },
    {
      id: "GD01-088",
      name: "巴納吉・林克斯",
      number: "GD01-088",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-088.webp?260612",
      prices: { a: 2531, b: 2417, c: 2303 }
    },
    {
      id: "GD01-089",
      name: "利迪・馬瑟納斯",
      number: "GD01-089",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-089.webp?260612",
      prices: { a: 2532, b: 2424, c: 2316 }
    },
    {
      id: "GD01-090",
      name: "迪歐・麥斯威爾",
      number: "GD01-090",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-090.webp?260612",
      prices: { a: 2554, b: 2578, c: 2602 }
    },
    {
      id: "GD01-090_p1",
      name: "迪歐・麥斯威爾",
      number: "GD01-090_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-090_p1.webp?260612",
      prices: { a: 530, b: 410, c: 290 }
    },
    {
      id: "GD01-091",
      name: "張五飛",
      number: "GD01-091",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-091.webp?260612",
      prices: { a: 2555, b: 2585, c: 2615 }
    },
    {
      id: "GD01-092",
      name: "馬・克貝",
      number: "GD01-092",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-092.webp?260612",
      prices: { a: 2556, b: 2592, c: 2628 }
    },
    {
      id: "GD01-093",
      name: "瑪莉妲・庫魯斯",
      number: "GD01-093",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-093.webp?260612",
      prices: { a: 2557, b: 2599, c: 2641 }
    },
    {
      id: "GD01-093_p1",
      name: "瑪莉妲・庫魯斯",
      number: "GD01-093_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-093_p1.webp?260612",
      prices: { a: 1903, b: 1021, c: 139 }
    },
    {
      id: "GD01-094",
      name: "伊薩克・焦耳",
      number: "GD01-094",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-094.webp?260612",
      prices: { a: 2558, b: 2606, c: 2654 }
    },
    {
      id: "GD01-095",
      name: "迪安卡・艾斯曼",
      number: "GD01-095",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-095.webp?260612",
      prices: { a: 2559, b: 2613, c: 2667 }
    },
    {
      id: "GD01-096",
      name: "卡佳里・由拉・阿斯哈",
      number: "GD01-096",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-096.webp?260612",
      prices: { a: 2560, b: 2620, c: 2680 }
    },
    {
      id: "GD01-096_p1",
      name: "卡佳里・由拉・阿斯哈",
      number: "GD01-096_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-096_p1.webp?260612",
      prices: { a: 276, b: 1632, c: 2988 }
    },
    {
      id: "GD01-097",
      name: "古爾・杰特克",
      number: "GD01-097",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-097.webp?260612",
      prices: { a: 2561, b: 2627, c: 2693 }
    },
    {
      id: "GD01-098",
      name: "伊蘭・凱萊斯（強化人士四號）",
      number: "GD01-098",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-098.webp?260612",
      prices: { a: 2562, b: 2634, c: 2706 }
    },
    {
      id: "GD01-099",
      name: "迎擊命令",
      number: "GD01-099",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-099.webp?260612",
      prices: { a: 2563, b: 2641, c: 2719 }
    },
    {
      id: "GD01-100",
      name: "覺悟的表露",
      number: "GD01-100",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-100.webp?260612",
      prices: { a: 236, b: 1352, c: 2468 }
    },
    {
      id: "GD01-100_p1",
      name: "覺悟的表露",
      number: "GD01-100_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-100_p1.webp?260612",
      prices: { a: 2992, b: 2644, c: 2296 }
    },
    {
      id: "GD01-101",
      name: "深厚的愛情",
      number: "GD01-101",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-101.webp?260612",
      prices: { a: 237, b: 1359, c: 2481 }
    },
    {
      id: "GD01-102",
      name: "物資運送",
      number: "GD01-102",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-102.webp?260612",
      prices: { a: 238, b: 1366, c: 2494 }
    },
    {
      id: "GD01-103",
      name: "齒輪的倔強",
      number: "GD01-103",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-103.webp?260612",
      prices: { a: 239, b: 1373, c: 2507 }
    },
    {
      id: "GD01-104",
      name: "革命的氣氛",
      number: "GD01-104",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-104.webp?260612",
      prices: { a: 240, b: 1380, c: 2520 }
    },
    {
      id: "GD01-105",
      name: "奮起吧！國民！",
      number: "GD01-105",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-105.webp?260612",
      prices: { a: 241, b: 1387, c: 2533 }
    },
    {
      id: "GD01-105_p1",
      name: "奮起吧！國民！",
      number: "GD01-105_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-105_p1.webp?260612",
      prices: { a: 2947, b: 2329, c: 1711 }
    },
    {
      id: "GD01-106",
      name: "要塞防衛戰",
      number: "GD01-106",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-106.webp?260612",
      prices: { a: 242, b: 1394, c: 2546 }
    },
    {
      id: "GD01-107",
      name: "初次相遇",
      number: "GD01-107",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-107.webp?260612",
      prices: { a: 243, b: 1401, c: 2559 }
    },
    {
      id: "GD01-108",
      name: "戰略級兵器",
      number: "GD01-108",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-108.webp?260612",
      prices: { a: 244, b: 1408, c: 2572 }
    },
    {
      id: "GD01-109",
      name: "勝利與敗北的軌跡",
      number: "GD01-109",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-109.webp?260612",
      prices: { a: 245, b: 1415, c: 2585 }
    },
    {
      id: "GD01-110",
      name: "拉席德的指示",
      number: "GD01-110",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-110.webp?260612",
      prices: { a: 267, b: 1569, c: 2871 }
    },
    {
      id: "GD01-111",
      name: "王牌的戰鬥",
      number: "GD01-111",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-111.webp?260612",
      prices: { a: 268, b: 1576, c: 2884 }
    },
    {
      id: "GD01-111_p1",
      name: "王牌的戰鬥",
      number: "GD01-111_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-111_p1.webp?260612",
      prices: { a: 1304, b: 2828, c: 1352 }
    },
    {
      id: "GD01-112",
      name: "怨仇的盡頭",
      number: "GD01-112",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-112.webp?260612",
      prices: { a: 269, b: 1583, c: 2897 }
    },
    {
      id: "GD01-113",
      name: "沙漠之虎",
      number: "GD01-113",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-113.webp?260612",
      prices: { a: 270, b: 1590, c: 2910 }
    },
    {
      id: "GD01-114",
      name: "特林頓基地襲擊",
      number: "GD01-114",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-114.webp?260612",
      prices: { a: 271, b: 1597, c: 2923 }
    },
    {
      id: "GD01-115",
      name: "吉翁殘黨軍",
      number: "GD01-115",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-115.webp?260612",
      prices: { a: 272, b: 1604, c: 2936 }
    },
    {
      id: "GD01-116",
      name: "隱密作戰",
      number: "GD01-116",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-116.webp?260612",
      prices: { a: 273, b: 1611, c: 2949 }
    },
    {
      id: "GD01-117",
      name: "魔女與新娘",
      number: "GD01-117",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-117.webp?260612",
      prices: { a: 274, b: 1618, c: 2962 }
    },
    {
      id: "GD01-117_p1",
      name: "魔女與新娘",
      number: "GD01-117_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-117_p1.webp?260612",
      prices: { a: 1050, b: 1050, c: 1050 }
    },
    {
      id: "GD01-118",
      name: "洋溢的慈愛",
      number: "GD01-118",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118.webp?260612",
      prices: { a: 275, b: 1625, c: 2975 }
    },
    {
      id: "GD01-118_p1",
      name: "洋溢的慈愛",
      number: "GD01-118_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118_p1.webp?260612",
      prices: { a: 841, b: 2587, c: 1333 }
    },
    {
      id: "GD01-119",
      name: "鐵拳制裁",
      number: "GD01-119",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-119.webp?260612",
      prices: { a: 276, b: 1632, c: 2988 }
    },
    {
      id: "GD01-120",
      name: "艦砲射撃",
      number: "GD01-120",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-120.webp?260612",
      prices: { a: 298, b: 1786, c: 274 }
    },
    {
      id: "GD01-121",
      name: "空中換裝",
      number: "GD01-121",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-121.webp?260612",
      prices: { a: 299, b: 1793, c: 287 }
    },
    {
      id: "GD01-122",
      name: "暗中活動者",
      number: "GD01-122",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-122.webp?260612",
      prices: { a: 300, b: 1800, c: 300 }
    },
    {
      id: "GD01-123",
      name: "擬・阿卡馬",
      number: "GD01-123",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-123.webp?260612",
      prices: { a: 301, b: 1807, c: 313 }
    },
    {
      id: "GD01-124",
      name: "SIDE 7",
      number: "GD01-124",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-124.webp?260612",
      prices: { a: 302, b: 1814, c: 326 }
    },
    {
      id: "GD01-125",
      name: "桑吉巴爾",
      number: "GD01-125",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-125.webp?260612",
      prices: { a: 303, b: 1821, c: 339 }
    },
    {
      id: "GD01-126",
      name: "沙漠地下基地",
      number: "GD01-126",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-126.webp?260612",
      prices: { a: 304, b: 1828, c: 352 }
    },
    {
      id: "GD01-127",
      name: "伽莫夫號",
      number: "GD01-127",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-127.webp?260612",
      prices: { a: 305, b: 1835, c: 365 }
    },
    {
      id: "GD01-128",
      name: "資源衛星帛琉",
      number: "GD01-128",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-128.webp?260612",
      prices: { a: 306, b: 1842, c: 378 }
    },
    {
      id: "GD01-129",
      name: "草薙號",
      number: "GD01-129",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-129.webp?260612",
      prices: { a: 307, b: 1849, c: 391 }
    },
    {
      id: "GD01-130",
      name: "十三號戰術試驗區域",
      number: "GD01-130",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-130.webp?260612",
      prices: { a: 329, b: 2003, c: 677 }
    },
    {
      id: "T-011",
      name: "命運-00",
      number: "T-011",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-011.webp?260612",
      prices: { a: 1105, b: 1435, c: 1765 }
    },
    {
      id: "R-002",
      name: "能源",
      number: "R-002",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-002.webp?260612",
      prices: { a: 2033, b: 1931, c: 1829 }
    },
    {
      id: "R-002_p1",
      name: "能源",
      number: "R-002_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-002_p1.webp?260612",
      prices: { a: 2419, b: 1633, c: 847 }
    },
    {
      id: "R-002_p2",
      name: "能源",
      number: "R-002_p2",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-002_p2.webp?260612",
      prices: { a: 2420, b: 1640, c: 860 }
    },
    {
      id: "R-003",
      name: "能源",
      number: "R-003",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-003.webp?260612",
      prices: { a: 2034, b: 1938, c: 1842 }
    },
    {
      id: "R-003_p1",
      name: "能源",
      number: "R-003_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-003_p1.webp?260612",
      prices: { a: 2210, b: 170, c: 1130 }
    },
    {
      id: "R-004",
      name: "能源",
      number: "R-004",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-004.webp?260612",
      prices: { a: 2035, b: 1945, c: 1855 }
    },
    {
      id: "R-004_p1",
      name: "能源",
      number: "R-004_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-004_p1.webp?260612",
      prices: { a: 2001, b: 1707, c: 1413 }
    },
    {
      id: "R-005",
      name: "能源",
      number: "R-005",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-005.webp?260612",
      prices: { a: 2036, b: 1952, c: 1868 }
    },
    {
      id: "R-005_p1",
      name: "能源",
      number: "R-005_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-005_p1.webp?260612",
      prices: { a: 792, b: 2244, c: 696 }
    },
    {
      id: "R-006",
      name: "能源",
      number: "R-006",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-006.webp?260612",
      prices: { a: 2037, b: 1959, c: 1881 }
    },
    {
      id: "R-006_p1",
      name: "能源",
      number: "R-006_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-006_p1.webp?260612",
      prices: { a: 583, b: 781, c: 979 }
    },
    {
      id: "R-007",
      name: "能源",
      number: "R-007",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-007.webp?260612",
      prices: { a: 2038, b: 1966, c: 1894 }
    },
    {
      id: "R-007_p1",
      name: "能源",
      number: "R-007_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-007_p1.webp?260612",
      prices: { a: 374, b: 2318, c: 1262 }
    },
    {
      id: "R-008",
      name: "能源",
      number: "R-008",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-008.webp?260612",
      prices: { a: 2039, b: 1973, c: 1907 }
    },
    {
      id: "R-008_p1",
      name: "能源",
      number: "R-008_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-008_p1.webp?260612",
      prices: { a: 2165, b: 2855, c: 545 }
    },
    {
      id: "R-009",
      name: "能源",
      number: "R-009",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-009.webp?260612",
      prices: { a: 2040, b: 1980, c: 1920 }
    },
    {
      id: "R-009_p1",
      name: "能源",
      number: "R-009_p1",
      series: "Newtype Rising [GD01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-009_p1.webp?260612",
      prices: { a: 1956, b: 1392, c: 828 }
    },
    {
      id: "GD02-001",
      name: "重高達",
      number: "GD02-001",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-001.webp?260612",
      prices: { a: 797, b: 2279, c: 761 }
    },
    {
      id: "GD02-001_p1",
      name: "重高達",
      number: "GD02-001_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-001_p1.webp?260612",
      prices: { a: 1743, b: 2901, c: 1059 }
    },
    {
      id: "GD02-002",
      name: "高達艾比安",
      number: "GD02-002",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-002.webp?260612",
      prices: { a: 798, b: 2286, c: 774 }
    },
    {
      id: "GD02-002_p1",
      name: "高達艾比安",
      number: "GD02-002_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-002_p1.webp?260612",
      prices: { a: 1534, b: 1438, c: 1342 }
    },
    {
      id: "GD02-003",
      name: "高達Mk-Ⅱ（泰坦斯規格）",
      number: "GD02-003",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-003.webp?260612",
      prices: { a: 799, b: 2293, c: 787 }
    },
    {
      id: "GD02-003_p1",
      name: "高達Mk-Ⅱ（泰坦斯規格）",
      number: "GD02-003_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-003_p1.webp?260612",
      prices: { a: 1325, b: 2975, c: 1625 }
    },
    {
      id: "GD02-004",
      name: "拜亞蘭",
      number: "GD02-004",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-004.webp?260612",
      prices: { a: 800, b: 2300, c: 800 }
    },
    {
      id: "GD02-005",
      name: "托爾吉斯",
      number: "GD02-005",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-005.webp?260612",
      prices: { a: 801, b: 2307, c: 813 }
    },
    {
      id: "GD02-005_p1",
      name: "托爾吉斯",
      number: "GD02-005_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-005_p1.webp?260612",
      prices: { a: 2907, b: 2049, c: 1191 }
    },
    {
      id: "GD02-006",
      name: "禁斷高達",
      number: "GD02-006",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-006.webp?260612",
      prices: { a: 802, b: 2314, c: 826 }
    },
    {
      id: "GD02-007",
      name: "重高達（MA型態）",
      number: "GD02-007",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-007.webp?260612",
      prices: { a: 803, b: 2321, c: 839 }
    },
    {
      id: "GD02-008",
      name: "加布斯雷",
      number: "GD02-008",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-008.webp?260612",
      prices: { a: 804, b: 2328, c: 852 }
    },
    {
      id: "GD02-009",
      name: "瘟神高達",
      number: "GD02-009",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-009.webp?260612",
      prices: { a: 805, b: 2335, c: 865 }
    },
    {
      id: "GD02-010",
      name: "獵殺高達",
      number: "GD02-010",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-010.webp?260612",
      prices: { a: 827, b: 2489, c: 1151 }
    },
    {
      id: "GD02-011",
      name: "梅比烏斯（維和部隊）",
      number: "GD02-011",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-011.webp?260612",
      prices: { a: 828, b: 2496, c: 1164 }
    },
    {
      id: "GD02-012",
      name: "核心推進機",
      number: "GD02-012",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-012.webp?260612",
      prices: { a: 829, b: 2503, c: 1177 }
    },
    {
      id: "GD02-013",
      name: "高性能薩克",
      number: "GD02-013",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-013.webp?260612",
      prices: { a: 830, b: 2510, c: 1190 }
    },
    {
      id: "GD02-014",
      name: "卡爾巴迪β",
      number: "GD02-014",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-014.webp?260612",
      prices: { a: 831, b: 2517, c: 1203 }
    },
    {
      id: "GD02-015",
      name: "馬拉賽",
      number: "GD02-015",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-015.webp?260612",
      prices: { a: 832, b: 2524, c: 1216 }
    },
    {
      id: "GD02-016",
      name: "巴薩姆",
      number: "GD02-016",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-016.webp?260612",
      prices: { a: 833, b: 2531, c: 1229 }
    },
    {
      id: "GD02-017",
      name: "德爾塔普拉斯（WAVE RIDER型態）",
      number: "GD02-017",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-017.webp?260612",
      prices: { a: 834, b: 2538, c: 1242 }
    },
    {
      id: "GD02-018",
      name: "陶拉斯",
      number: "GD02-018",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-018.webp?260612",
      prices: { a: 835, b: 2545, c: 1255 }
    },
    {
      id: "GD02-019",
      name: "獵殺高達（MA型態）",
      number: "GD02-019",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-019.webp?260612",
      prices: { a: 836, b: 2552, c: 1268 }
    },
    {
      id: "GD02-020",
      name: "艾爾美斯",
      number: "GD02-020",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-020.webp?260612",
      prices: { a: 858, b: 2706, c: 1554 }
    },
    {
      id: "GD02-020_p1",
      name: "艾爾美斯",
      number: "GD02-020_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-020_p1.webp?260612",
      prices: { a: 994, b: 658, c: 322 }
    },
    {
      id: "GD02-021",
      name: "高達AGE-1 普通型",
      number: "GD02-021",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-021.webp?260612",
      prices: { a: 859, b: 2713, c: 1567 }
    },
    {
      id: "GD02-021_p1",
      name: "高達AGE-1 普通型",
      number: "GD02-021_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-021_p1.webp?260612",
      prices: { a: 785, b: 2195, c: 605 }
    },
    {
      id: "GD02-022",
      name: "G艾格傑斯",
      number: "GD02-022",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-022.webp?260612",
      prices: { a: 860, b: 2720, c: 1580 }
    },
    {
      id: "GD02-023",
      name: "高達AGE-1 速戰型",
      number: "GD02-023",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-023.webp?260612",
      prices: { a: 861, b: 2727, c: 1593 }
    },
    {
      id: "GD02-023_p1",
      name: "高達AGE-1 速戰型",
      number: "GD02-023_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-023_p1.webp?260612",
      prices: { a: 2367, b: 1269, c: 171 }
    },
    {
      id: "GD02-024",
      name: "紅色高達",
      number: "GD02-024",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-024.webp?260612",
      prices: { a: 862, b: 2734, c: 1606 }
    },
    {
      id: "GD02-024_p1",
      name: "紅色高達",
      number: "GD02-024_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-024_p1.webp?260612",
      prices: { a: 2158, b: 2806, c: 454 }
    },
    {
      id: "GD02-025",
      name: "重砲手高達",
      number: "GD02-025",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-025.webp?260612",
      prices: { a: 863, b: 2741, c: 1619 }
    },
    {
      id: "GD02-026",
      name: "傑諾亞斯特裝型",
      number: "GD02-026",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-026.webp?260612",
      prices: { a: 864, b: 2748, c: 1632 }
    },
    {
      id: "GD02-027",
      name: "高達AGE-1 重擊型",
      number: "GD02-027",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-027.webp?260612",
      prices: { a: 865, b: 2755, c: 1645 }
    },
    {
      id: "GD02-028",
      name: "馬格亞那克（阿布多爾機）",
      number: "GD02-028",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-028.webp?260612",
      prices: { a: 866, b: 2762, c: 1658 }
    },
    {
      id: "GD02-029",
      name: "高達AGE-1 普通型",
      number: "GD02-029",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-029.webp?260612",
      prices: { a: 867, b: 2769, c: 1671 }
    },
    {
      id: "GD02-030",
      name: "傑諾亞斯",
      number: "GD02-030",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-030.webp?260612",
      prices: { a: 889, b: 2923, c: 1957 }
    },
    {
      id: "GD02-031",
      name: "高達AGE-1 重擊型",
      number: "GD02-031",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-031.webp?260612",
      prices: { a: 890, b: 2930, c: 1970 }
    },
    {
      id: "GD02-032",
      name: "白色高達",
      number: "GD02-032",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-032.webp?260612",
      prices: { a: 891, b: 2937, c: 1983 }
    },
    {
      id: "GD02-033",
      name: "齊克羅加（MA型態）（GQ）",
      number: "GD02-033",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-033.webp?260612",
      prices: { a: 892, b: 2944, c: 1996 }
    },
    {
      id: "GD02-034",
      name: "GQuuuuuuX",
      number: "GD02-034",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-034.webp?260612",
      prices: { a: 893, b: 2951, c: 2009 }
    },
    {
      id: "GD02-035",
      name: "軍警薩克 特種部隊規格",
      number: "GD02-035",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-035.webp?260612",
      prices: { a: 894, b: 2958, c: 2022 }
    },
    {
      id: "GD02-036",
      name: "卡碧尼",
      number: "GD02-036",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-036.webp?260612",
      prices: { a: 895, b: 2965, c: 2035 }
    },
    {
      id: "GD02-036_p1",
      name: "卡碧尼",
      number: "GD02-036_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-036_p1.webp?260612",
      prices: { a: 261, b: 1527, c: 2793 }
    },
    {
      id: "GD02-037",
      name: "華沙哥高達",
      number: "GD02-037",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-037.webp?260612",
      prices: { a: 896, b: 2972, c: 2048 }
    },
    {
      id: "GD02-037_p1",
      name: "華沙哥高達",
      number: "GD02-037_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-037_p1.webp?260612",
      prices: { a: 52, b: 64, c: 76 }
    },
    {
      id: "GD02-038",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "GD02-038",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-038.webp?260612",
      prices: { a: 897, b: 2979, c: 2061 }
    },
    {
      id: "GD02-038_p1",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "GD02-038_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-038_p1.webp?260612",
      prices: { a: 2843, b: 1601, c: 359 }
    },
    {
      id: "GD02-038_p2",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "GD02-038_p2",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-038_p2.webp?260612",
      prices: { a: 2844, b: 1608, c: 372 }
    },
    {
      id: "GD02-039",
      name: "卡薩C（哈曼・坎恩專用機）",
      number: "GD02-039",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-039.webp?260612",
      prices: { a: 898, b: 2986, c: 2074 }
    },
    {
      id: "GD02-040",
      name: "阿斯特龍高達",
      number: "GD02-040",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-040.webp?260612",
      prices: { a: 920, b: 140, c: 2360 }
    },
    {
      id: "GD02-040_p1",
      name: "阿斯特龍高達",
      number: "GD02-040_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-040_p1.webp?260612",
      prices: { a: 3036, b: 2952, c: 2868 }
    },
    {
      id: "GD02-041",
      name: "傑爾古格 菅井座機（GQ）",
      number: "GD02-041",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-041.webp?260612",
      prices: { a: 921, b: 147, c: 2373 }
    },
    {
      id: "GD02-041_p1",
      name: "傑爾古格 菅井座機（GQ）",
      number: "GD02-041_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-041_p1.webp?260612",
      prices: { a: 1827, b: 489, c: 2151 }
    },
    {
      id: "GD02-042",
      name: "阿斯特龍高達（MA型態）",
      number: "GD02-042",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-042.webp?260612",
      prices: { a: 922, b: 154, c: 2386 }
    },
    {
      id: "GD02-043",
      name: "德特雷斯武裝型",
      number: "GD02-043",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-043.webp?260612",
      prices: { a: 923, b: 161, c: 2399 }
    },
    {
      id: "GD02-044",
      name: "德特雷斯指揮型",
      number: "GD02-044",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-044.webp?260612",
      prices: { a: 924, b: 168, c: 2412 }
    },
    {
      id: "GD02-045",
      name: "長程強行偵察複座型基恩",
      number: "GD02-045",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-045.webp?260612",
      prices: { a: 925, b: 175, c: 2425 }
    },
    {
      id: "GD02-046",
      name: "雪拉專用輕加農",
      number: "GD02-046",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-046.webp?260612",
      prices: { a: 926, b: 182, c: 2438 }
    },
    {
      id: "GD02-047",
      name: "卡薩C",
      number: "GD02-047",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-047.webp?260612",
      prices: { a: 927, b: 189, c: 2451 }
    },
    {
      id: "GD02-048",
      name: "薩克Ⅲ（袖章軍團規格）",
      number: "GD02-048",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-048.webp?260612",
      prices: { a: 928, b: 196, c: 2464 }
    },
    {
      id: "GD02-049",
      name: "德特雷斯",
      number: "GD02-049",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-049.webp?260612",
      prices: { a: 929, b: 203, c: 2477 }
    },
    {
      id: "GD02-050",
      name: "加索姆（袖章軍團規格）",
      number: "GD02-050",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-050.webp?260612",
      prices: { a: 951, b: 357, c: 2763 }
    },
    {
      id: "GD02-051",
      name: "01高達",
      number: "GD02-051",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-051.webp?260612",
      prices: { a: 952, b: 364, c: 2776 }
    },
    {
      id: "GD02-052",
      name: "鋼加農（GQ）",
      number: "GD02-052",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-052.webp?260612",
      prices: { a: 953, b: 371, c: 2789 }
    },
    {
      id: "GD02-053",
      name: "高達X",
      number: "GD02-053",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-053.webp?260612",
      prices: { a: 954, b: 378, c: 2802 }
    },
    {
      id: "GD02-053_p1",
      name: "高達X",
      number: "GD02-053_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-053_p1.webp?260612",
      prices: { a: 930, b: 210, c: 2490 }
    },
    {
      id: "GD02-054",
      name: "高達巴巴托司（第1型態）",
      number: "GD02-054",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-054.webp?260612",
      prices: { a: 955, b: 385, c: 2815 }
    },
    {
      id: "GD02-054_p1",
      name: "高達巴巴托司（第1型態）",
      number: "GD02-054_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-054_p1.webp?260612",
      prices: { a: 2721, b: 747, c: 1773 }
    },
    {
      id: "GD02-054_p2",
      name: "高達巴巴托司（第1型態）",
      number: "GD02-054_p2",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-054_p2.webp?260612",
      prices: { a: 2722, b: 754, c: 1786 }
    },
    {
      id: "GD02-055",
      name: "高達古辛重鍛型",
      number: "GD02-055",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-055.webp?260612",
      prices: { a: 956, b: 392, c: 2828 }
    },
    {
      id: "GD02-055_p1",
      name: "高達古辛重鍛型",
      number: "GD02-055_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-055_p1.webp?260612",
      prices: { a: 2512, b: 2284, c: 2056 }
    },
    {
      id: "GD02-056",
      name: "高達X",
      number: "GD02-056",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-056.webp?260612",
      prices: { a: 957, b: 399, c: 2841 }
    },
    {
      id: "GD02-057",
      name: "賽達斯",
      number: "GD02-057",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-057.webp?260612",
      prices: { a: 958, b: 406, c: 2854 }
    },
    {
      id: "GD02-058",
      name: "流星號（格雷茲改貳）",
      number: "GD02-058",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-058.webp?260612",
      prices: { a: 959, b: 413, c: 2867 }
    },
    {
      id: "GD02-059",
      name: "空王高達",
      number: "GD02-059",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-059.webp?260612",
      prices: { a: 960, b: 420, c: 2880 }
    },
    {
      id: "GD02-059_p1",
      name: "空王高達",
      number: "GD02-059_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-059_p1.webp?260612",
      prices: { a: 676, b: 1432, c: 2188 }
    },
    {
      id: "GD02-060",
      name: "斑豹高達",
      number: "GD02-060",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-060.webp?260612",
      prices: { a: 982, b: 574, c: 166 }
    },
    {
      id: "GD02-060_p1",
      name: "斑豹高達",
      number: "GD02-060_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-060_p1.webp?260612",
      prices: { a: 1078, b: 1246, c: 1414 }
    },
    {
      id: "GD02-061",
      name: "百里",
      number: "GD02-061",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-061.webp?260612",
      prices: { a: 983, b: 581, c: 179 }
    },
    {
      id: "GD02-062",
      name: "百鍊（阿蜜達機）",
      number: "GD02-062",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-062.webp?260612",
      prices: { a: 984, b: 588, c: 192 }
    },
    {
      id: "GD02-063",
      name: "空王高達（戰機模式）",
      number: "GD02-063",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-063.webp?260612",
      prices: { a: 985, b: 595, c: 205 }
    },
    {
      id: "GD02-064",
      name: "斑豹高達",
      number: "GD02-064",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-064.webp?260612",
      prices: { a: 986, b: 602, c: 218 }
    },
    {
      id: "GD02-065",
      name: "傑尼斯改",
      number: "GD02-065",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-065.webp?260612",
      prices: { a: 987, b: 609, c: 231 }
    },
    {
      id: "GD02-066",
      name: "加夫蘭",
      number: "GD02-066",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-066.webp?260612",
      prices: { a: 988, b: 616, c: 244 }
    },
    {
      id: "GD02-067",
      name: "巴克托",
      number: "GD02-067",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-067.webp?260612",
      prices: { a: 989, b: 623, c: 257 }
    },
    {
      id: "GD02-069",
      name: "Z高達",
      number: "GD02-069",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-069.webp?260612",
      prices: { a: 991, b: 637, c: 283 }
    },
    {
      id: "GD02-069_p1",
      name: "Z高達",
      number: "GD02-069_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-069_p1.webp?260612",
      prices: { a: 197, b: 1079, c: 1961 }
    },
    {
      id: "GD02-070",
      name: "高達錫蒙力",
      number: "GD02-070",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-070.webp?260612",
      prices: { a: 1013, b: 791, c: 569 }
    },
    {
      id: "GD02-070_p1",
      name: "高達錫蒙力",
      number: "GD02-070_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-070_p1.webp?260612",
      prices: { a: 599, b: 893, c: 1187 }
    },
    {
      id: "GD02-071",
      name: "高達Mk-Ⅱ（幽谷規格）",
      number: "GD02-071",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-071.webp?260612",
      prices: { a: 1014, b: 798, c: 582 }
    },
    {
      id: "GD02-072",
      name: "百式",
      number: "GD02-072",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-072.webp?260612",
      prices: { a: 1015, b: 805, c: 595 }
    },
    {
      id: "GD02-072_p1",
      name: "百式",
      number: "GD02-072_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-072_p1.webp?260612",
      prices: { a: 2181, b: 2967, c: 753 }
    },
    {
      id: "GD02-073",
      name: "騎士式格雷茲（凱爾妲機/地上戰規格）",
      number: "GD02-073",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-073.webp?260612",
      prices: { a: 1016, b: 812, c: 608 }
    },
    {
      id: "GD02-073_p1",
      name: "騎士式格雷茲（凱爾妲機/地上戰規格）",
      number: "GD02-073_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-073_p1.webp?260612",
      prices: { a: 1972, b: 1504, c: 1036 }
    },
    {
      id: "GD02-074",
      name: "風靈高達（修改型）",
      number: "GD02-074",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-074.webp?260612",
      prices: { a: 1017, b: 819, c: 621 }
    },
    {
      id: "GD02-075",
      name: "里克・迪亞斯（紅）",
      number: "GD02-075",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-075.webp?260612",
      prices: { a: 1018, b: 826, c: 634 }
    },
    {
      id: "GD02-076",
      name: "暴風高達",
      number: "GD02-076",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-076.webp?260612",
      prices: { a: 1019, b: 833, c: 647 }
    },
    {
      id: "GD02-077",
      name: "燕式格雷茲（艾因機）",
      number: "GD02-077",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-077.webp?260612",
      prices: { a: 1020, b: 840, c: 660 }
    },
    {
      id: "GD02-078",
      name: "鐵騎高達",
      number: "GD02-078",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-078.webp?260612",
      prices: { a: 1021, b: 847, c: 673 }
    },
    {
      id: "GD02-079",
      name: "里克・迪亞斯",
      number: "GD02-079",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-079.webp?260612",
      prices: { a: 1022, b: 854, c: 686 }
    },
    {
      id: "GD02-080",
      name: "尼摩",
      number: "GD02-080",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-080.webp?260612",
      prices: { a: 1044, b: 1008, c: 972 }
    },
    {
      id: "GD02-081",
      name: "梅塔斯",
      number: "GD02-081",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-081.webp?260612",
      prices: { a: 1045, b: 1015, c: 985 }
    },
    {
      id: "GD02-082",
      name: "燕式格雷茲（蓋里歐機）",
      number: "GD02-082",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-082.webp?260612",
      prices: { a: 1046, b: 1022, c: 998 }
    },
    {
      id: "GD02-083",
      name: "騎士式格雷茲（地上戰規格）",
      number: "GD02-083",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-083.webp?260612",
      prices: { a: 1047, b: 1029, c: 1011 }
    },
    {
      id: "GD02-084",
      name: "迪蘭薩 勞達專用機",
      number: "GD02-084",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-084.webp?260612",
      prices: { a: 1048, b: 1036, c: 1024 }
    },
    {
      id: "GD02-085",
      name: "鳳・村雨",
      number: "GD02-085",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-085.webp?260612",
      prices: { a: 1049, b: 1043, c: 1037 }
    },
    {
      id: "GD02-085_p1",
      name: "鳳・村雨",
      number: "GD02-085_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-085_p1.webp?260612",
      prices: { a: 75, b: 225, c: 375 }
    },
    {
      id: "GD02-086",
      name: "傑利特・梅薩",
      number: "GD02-086",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-086.webp?260612",
      prices: { a: 1050, b: 1050, c: 1050 }
    },
    {
      id: "GD02-087",
      name: "歐魯卡＆庫洛特＆夏尼",
      number: "GD02-087",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-087.webp?260612",
      prices: { a: 1051, b: 1057, c: 1063 }
    },
    {
      id: "GD02-088",
      name: "菲利特・明日野",
      number: "GD02-088",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-088.webp?260612",
      prices: { a: 1052, b: 1064, c: 1076 }
    },
    {
      id: "GD02-088_p1",
      name: "菲利特・明日野",
      number: "GD02-088_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-088_p1.webp?260612",
      prices: { a: 1448, b: 836, c: 224 }
    },
    {
      id: "GD02-089",
      name: "拉拉・遜",
      number: "GD02-089",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-089.webp?260612",
      prices: { a: 1053, b: 1071, c: 1089 }
    },
    {
      id: "GD02-090",
      name: "夏里亞・布爾（GQ）",
      number: "GD02-090",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-090.webp?260612",
      prices: { a: 1075, b: 1225, c: 1375 }
    },
    {
      id: "GD02-091",
      name: "哈曼・坎恩",
      number: "GD02-091",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-091.webp?260612",
      prices: { a: 1076, b: 1232, c: 1388 }
    },
    {
      id: "GD02-091_p1",
      name: "哈曼・坎恩",
      number: "GD02-091_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-091_p1.webp?260612",
      prices: { a: 1432, b: 724, c: 3016 }
    },
    {
      id: "GD02-092",
      name: "夏基亞・佛羅斯特",
      number: "GD02-092",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-092.webp?260612",
      prices: { a: 1077, b: 1239, c: 1401 }
    },
    {
      id: "GD02-093",
      name: "歐爾巴・佛羅斯特",
      number: "GD02-093",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-093.webp?260612",
      prices: { a: 1078, b: 1246, c: 1414 }
    },
    {
      id: "GD02-094",
      name: "嘉羅德・蘭＆蒂法・安迪爾",
      number: "GD02-094",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-094.webp?260612",
      prices: { a: 1079, b: 1253, c: 1427 }
    },
    {
      id: "GD02-094_p1",
      name: "嘉羅德・蘭＆蒂法・安迪爾",
      number: "GD02-094_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-094_p1.webp?260612",
      prices: { a: 2805, b: 1335, c: 2865 }
    },
    {
      id: "GD02-095",
      name: "拉芙特・法蘭克蘭登",
      number: "GD02-095",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-095.webp?260612",
      prices: { a: 1080, b: 1260, c: 1440 }
    },
    {
      id: "GD02-096",
      name: "德席爾・加列特",
      number: "GD02-096",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-096.webp?260612",
      prices: { a: 1081, b: 1267, c: 1453 }
    },
    {
      id: "GD02-097",
      name: "嘉美尤・維達",
      number: "GD02-097",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-097.webp?260612",
      prices: { a: 1082, b: 1274, c: 1466 }
    },
    {
      id: "GD02-097_p1",
      name: "嘉美尤・維達",
      number: "GD02-097_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-097_p1.webp?260612",
      prices: { a: 1178, b: 1946, c: 2714 }
    },
    {
      id: "GD02-098",
      name: "克瓦特羅・巴吉納",
      number: "GD02-098",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-098.webp?260612",
      prices: { a: 1083, b: 1281, c: 1479 }
    },
    {
      id: "GD02-099",
      name: "蓋里歐・鮑德溫",
      number: "GD02-099",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-099.webp?260612",
      prices: { a: 1084, b: 1288, c: 1492 }
    },
    {
      id: "GD02-100",
      name: "逆轉之策",
      number: "GD02-100",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-100.webp?260612",
      prices: { a: 1757, b: 2999, c: 1241 }
    },
    {
      id: "GD02-100_p1",
      name: "逆轉之策",
      number: "GD02-100_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-100_p1.webp?260612",
      prices: { a: 1103, b: 1421, c: 1739 }
    },
    {
      id: "GD02-101",
      name: "面具之下",
      number: "GD02-101",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-101.webp?260612",
      prices: { a: 1758, b: 3006, c: 1254 }
    },
    {
      id: "GD02-102",
      name: "瑪雅的信念",
      number: "GD02-102",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-102.webp?260612",
      prices: { a: 1759, b: 3013, c: 1267 }
    },
    {
      id: "GD02-103",
      name: "AGE裝置",
      number: "GD02-103",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-103.webp?260612",
      prices: { a: 1760, b: 3020, c: 1280 }
    },
    {
      id: "GD02-103_p1",
      name: "AGE裝置",
      number: "GD02-103_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-103_p1.webp?260612",
      prices: { a: 2476, b: 2032, c: 1588 }
    },
    {
      id: "GD02-104",
      name: "歷史的分歧點",
      number: "GD02-104",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-104.webp?260612",
      prices: { a: 1761, b: 3027, c: 1293 }
    },
    {
      id: "GD02-105",
      name: "首席畢業生",
      number: "GD02-105",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-105.webp?260612",
      prices: { a: 1762, b: 3034, c: 1306 }
    },
    {
      id: "GD02-106",
      name: "白狼",
      number: "GD02-106",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-106.webp?260612",
      prices: { a: 1763, b: 3041, c: 1319 }
    },
    {
      id: "GD02-107",
      name: "全領域攻擊",
      number: "GD02-107",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-107.webp?260612",
      prices: { a: 1764, b: 3048, c: 1332 }
    },
    {
      id: "GD02-107_p1",
      name: "全領域攻擊",
      number: "GD02-107_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-107_p1.webp?260612",
      prices: { a: 640, b: 1180, c: 1720 }
    },
    {
      id: "GD02-108",
      name: "那架看起來比較強耶？",
      number: "GD02-108",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-108.webp?260612",
      prices: { a: 1765, b: 55, c: 1345 }
    },
    {
      id: "GD02-109",
      name: "揮之不去的執念",
      number: "GD02-109",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-109.webp?260612",
      prices: { a: 1766, b: 62, c: 1358 }
    },
    {
      id: "GD02-110",
      name: "覺醒的力量",
      number: "GD02-110",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-110.webp?260612",
      prices: { a: 1788, b: 216, c: 1644 }
    },
    {
      id: "GD02-110_p1",
      name: "覺醒的力量",
      number: "GD02-110_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-110_p1.webp?260612",
      prices: { a: 624, b: 1068, c: 1512 }
    },
    {
      id: "GD02-111",
      name: "決戰王牌",
      number: "GD02-111",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-111.webp?260612",
      prices: { a: 1789, b: 223, c: 1657 }
    },
    {
      id: "GD02-112",
      name: "片刻的休憩時光",
      number: "GD02-112",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-112.webp?260612",
      prices: { a: 1790, b: 230, c: 1670 }
    },
    {
      id: "GD02-112_p1",
      name: "片刻的休憩時光",
      number: "GD02-112_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-112_p1.webp?260612",
      prices: { a: 206, b: 1142, c: 2078 }
    },
    {
      id: "GD02-113",
      name: "大姊頭",
      number: "GD02-113",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-113.webp?260612",
      prices: { a: 1791, b: 237, c: 1683 }
    },
    {
      id: "GD02-114",
      name: "其名為流星號",
      number: "GD02-114",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-114.webp?260612",
      prices: { a: 1792, b: 244, c: 1696 }
    },
    {
      id: "GD02-115",
      name: "對家人的思念",
      number: "GD02-115",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-115.webp?260612",
      prices: { a: 1793, b: 251, c: 1709 }
    },
    {
      id: "GD02-116",
      name: "夥伴情誼",
      number: "GD02-116",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-116.webp?260612",
      prices: { a: 1794, b: 258, c: 1722 }
    },
    {
      id: "GD02-117",
      name: "新的脈動",
      number: "GD02-117",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-117.webp?260612",
      prices: { a: 1795, b: 265, c: 1735 }
    },
    {
      id: "GD02-118",
      name: "復仇的決心",
      number: "GD02-118",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-118.webp?260612",
      prices: { a: 1796, b: 272, c: 1748 }
    },
    {
      id: "GD02-119",
      name: "面壁九年・堅牢堅固",
      number: "GD02-119",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-119.webp?260612",
      prices: { a: 1797, b: 279, c: 1761 }
    },
    {
      id: "GD02-120",
      name: "機師志願",
      number: "GD02-120",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-120.webp?260612",
      prices: { a: 1819, b: 433, c: 2047 }
    },
    {
      id: "GD02-121",
      name: "主天使號",
      number: "GD02-121",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-121.webp?260612",
      prices: { a: 1820, b: 440, c: 2060 }
    },
    {
      id: "GD02-122",
      name: "亞力山卓",
      number: "GD02-122",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-122.webp?260612",
      prices: { a: 1821, b: 447, c: 2073 }
    },
    {
      id: "GD02-123",
      name: "索頓號",
      number: "GD02-123",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-123.webp?260612",
      prices: { a: 1822, b: 454, c: 2086 }
    },
    {
      id: "GD02-124",
      name: "歌姬號",
      number: "GD02-124",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-124.webp?260612",
      prices: { a: 1823, b: 461, c: 2099 }
    },
    {
      id: "GD02-125",
      name: "格瓦丹",
      number: "GD02-125",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-125.webp?260612",
      prices: { a: 1824, b: 468, c: 2112 }
    },
    {
      id: "GD02-126",
      name: "修司的祕密基地",
      number: "GD02-126",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-126.webp?260612",
      prices: { a: 1825, b: 475, c: 2125 }
    },
    {
      id: "GD02-127",
      name: "和平號",
      number: "GD02-127",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-127.webp?260612",
      prices: { a: 1826, b: 482, c: 2138 }
    },
    {
      id: "GD02-128",
      name: "雙髻鯊",
      number: "GD02-128",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-128.webp?260612",
      prices: { a: 1827, b: 489, c: 2151 }
    },
    {
      id: "GD02-129",
      name: "阿卡馬",
      number: "GD02-129",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-129.webp?260612",
      prices: { a: 1828, b: 496, c: 2164 }
    },
    {
      id: "GD02-129_p1",
      name: "阿卡馬",
      number: "GD02-129_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-129_p1.webp?260612",
      prices: { a: 1264, b: 2548, c: 832 }
    },
    {
      id: "GD02-130",
      name: "八腳神馬號",
      number: "GD02-130",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-130.webp?260612",
      prices: { a: 1850, b: 650, c: 2450 }
    },
    {
      id: "T-012",
      name: "德特雷斯",
      number: "T-012",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-012.webp?260612",
      prices: { a: 1106, b: 1442, c: 1778 }
    },
    {
      id: "R-010",
      name: "能源",
      number: "R-010",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-010.webp?260612",
      prices: { a: 2062, b: 2134, c: 2206 }
    },
    {
      id: "R-010_p1",
      name: "能源",
      number: "R-010_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-010_p1.webp?260612",
      prices: { a: 358, b: 2206, c: 1054 }
    },
    {
      id: "R-011",
      name: "能源",
      number: "R-011",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-011.webp?260612",
      prices: { a: 2063, b: 2141, c: 2219 }
    },
    {
      id: "R-011_p1",
      name: "能源",
      number: "R-011_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-011_p1.webp?260612",
      prices: { a: 2149, b: 2743, c: 337 }
    },
    {
      id: "R-012",
      name: "能源",
      number: "R-012",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-012.webp?260612",
      prices: { a: 2064, b: 2148, c: 2232 }
    },
    {
      id: "R-012_p1",
      name: "能源",
      number: "R-012_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-012_p1.webp?260612",
      prices: { a: 1940, b: 1280, c: 620 }
    },
    {
      id: "R-013",
      name: "能源",
      number: "R-013",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-013.webp?260612",
      prices: { a: 2065, b: 2155, c: 2245 }
    },
    {
      id: "R-013_p1",
      name: "能源",
      number: "R-013_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-013_p1.webp?260612",
      prices: { a: 1731, b: 2817, c: 903 }
    },
    {
      id: "R-014",
      name: "能源",
      number: "R-014",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-014.webp?260612",
      prices: { a: 2066, b: 2162, c: 2258 }
    },
    {
      id: "R-014_p1",
      name: "能源",
      number: "R-014_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-014_p1.webp?260612",
      prices: { a: 522, b: 354, c: 186 }
    },
    {
      id: "R-015",
      name: "能源",
      number: "R-015",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-015.webp?260612",
      prices: { a: 2067, b: 2169, c: 2271 }
    },
    {
      id: "R-015_p1",
      name: "能源",
      number: "R-015_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-015_p1.webp?260612",
      prices: { a: 313, b: 1891, c: 469 }
    },
    {
      id: "R-015_p2",
      name: "能源",
      number: "R-015_p2",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-015_p2.webp?260612",
      prices: { a: 314, b: 1898, c: 482 }
    },
    {
      id: "R-016",
      name: "能源",
      number: "R-016",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-016.webp?260612",
      prices: { a: 2068, b: 2176, c: 2284 }
    },
    {
      id: "R-016_p1",
      name: "能源",
      number: "R-016_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-016_p1.webp?260612",
      prices: { a: 104, b: 428, c: 752 }
    },
    {
      id: "R-017",
      name: "能源",
      number: "R-017",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-017.webp?260612",
      prices: { a: 2069, b: 2183, c: 2297 }
    },
    {
      id: "R-017_p1",
      name: "能源",
      number: "R-017_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-017_p1.webp?260612",
      prices: { a: 1895, b: 965, c: 3035 }
    },
    {
      id: "R-018",
      name: "能源",
      number: "R-018",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-018.webp?260612",
      prices: { a: 2070, b: 2190, c: 2310 }
    },
    {
      id: "R-018_p1",
      name: "能源",
      number: "R-018_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-018_p1.webp?260612",
      prices: { a: 1686, b: 2502, c: 318 }
    },
    {
      id: "R-019",
      name: "能源",
      number: "R-019",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-019.webp?260612",
      prices: { a: 2071, b: 2197, c: 2323 }
    },
    {
      id: "R-019_p1",
      name: "能源",
      number: "R-019_p1",
      series: "Dual Impact [GD02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-019_p1.webp?260612",
      prices: { a: 1477, b: 1039, c: 601 }
    },
    {
      id: "GD01-100_p5",
      name: "覺悟的表露",
      number: "GD01-100_p5",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-100_p5.webp?260612",
      prices: { a: 2996, b: 2672, c: 2348 }
    },
    {
      id: "GD01-107_p3",
      name: "初次相遇",
      number: "GD01-107_p3",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-107_p3.webp?260612",
      prices: { a: 1531, b: 1417, c: 1303 }
    },
    {
      id: "GD01-111_p2",
      name: "王牌的戰鬥",
      number: "GD01-111_p2",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-111_p2.webp?260612",
      prices: { a: 1305, b: 2835, c: 1365 }
    },
    {
      id: "GD01-118_p5",
      name: "洋溢的慈愛",
      number: "GD01-118_p5",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118_p5.webp?260612",
      prices: { a: 845, b: 2615, c: 1385 }
    },
    {
      id: "GD03-001",
      name: "高達NT-1",
      number: "GD03-001",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-001.webp?260612",
      prices: { a: 318, b: 1926, c: 534 }
    },
    {
      id: "GD03-001_p1",
      name: "高達NT-1",
      number: "GD03-001_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-001_p1.webp?260612",
      prices: { a: 854, b: 2678, c: 1502 }
    },
    {
      id: "GD03-002",
      name: "The・O",
      number: "GD03-002",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-002.webp?260612",
      prices: { a: 319, b: 1933, c: 547 }
    },
    {
      id: "GD03-002_p1",
      name: "The・O",
      number: "GD03-002_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-002_p1.webp?260612",
      prices: { a: 645, b: 1215, c: 1785 }
    },
    {
      id: "GD03-003",
      name: "梅薩拉",
      number: "GD03-003",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-003.webp?260612",
      prices: { a: 320, b: 1940, c: 560 }
    },
    {
      id: "GD03-003_p1",
      name: "梅薩拉",
      number: "GD03-003_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-003_p1.webp?260612",
      prices: { a: 436, b: 2752, c: 2068 }
    },
    {
      id: "GD03-004",
      name: "漢摩拉比",
      number: "GD03-004",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-004.webp?260612",
      prices: { a: 321, b: 1947, c: 573 }
    },
    {
      id: "GD03-005",
      name: "剎帝利・修復版",
      number: "GD03-005",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-005.webp?260612",
      prices: { a: 322, b: 1954, c: 586 }
    },
    {
      id: "GD03-006",
      name: "潘娜洛普（中型型態）",
      number: "GD03-006",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-006.webp?260612",
      prices: { a: 323, b: 1961, c: 599 }
    },
    {
      id: "GD03-007",
      name: "全裝甲型高達NT-1",
      number: "GD03-007",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-007.webp?260612",
      prices: { a: 324, b: 1968, c: 612 }
    },
    {
      id: "GD03-008",
      name: "波利諾克・沙曼",
      number: "GD03-008",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-008.webp?260612",
      prices: { a: 325, b: 1975, c: 625 }
    },
    {
      id: "GD03-009",
      name: "帕拉斯・雅典娜",
      number: "GD03-009",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-009.webp?260612",
      prices: { a: 326, b: 1982, c: 638 }
    },
    {
      id: "GD03-010",
      name: "全裝甲獨角獸高達（破壞模式）",
      number: "GD03-010",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-010.webp?260612",
      prices: { a: 348, b: 2136, c: 924 }
    },
    {
      id: "GD03-010_p1",
      name: "全裝甲獨角獸高達（破壞模式）",
      number: "GD03-010_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-010_p1.webp?260612",
      prices: { a: 584, b: 788, c: 992 }
    },
    {
      id: "GD03-011",
      name: "吉姆狙擊型Ⅱ",
      number: "GD03-011",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-011.webp?260612",
      prices: { a: 349, b: 2143, c: 937 }
    },
    {
      id: "GD03-012",
      name: "梅薩拉（MA型態）",
      number: "GD03-012",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-012.webp?260612",
      prices: { a: 350, b: 2150, c: 950 }
    },
    {
      id: "GD03-013",
      name: "高性能薩克",
      number: "GD03-013",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-013.webp?260612",
      prices: { a: 351, b: 2157, c: 963 }
    },
    {
      id: "GD03-014",
      name: "高性能薩克特裝型",
      number: "GD03-014",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-014.webp?260612",
      prices: { a: 352, b: 2164, c: 976 }
    },
    {
      id: "GD03-015",
      name: "獵犬",
      number: "GD03-015",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-015.webp?260612",
      prices: { a: 353, b: 2171, c: 989 }
    },
    {
      id: "GD03-016",
      name: "全裝甲獨角獸高達（獨角獸模式）",
      number: "GD03-016",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-016.webp?260612",
      prices: { a: 354, b: 2178, c: 1002 }
    },
    {
      id: "GD03-017",
      name: "肯普法",
      number: "GD03-017",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-017.webp?260612",
      prices: { a: 355, b: 2185, c: 1015 }
    },
    {
      id: "GD03-017_p1",
      name: "肯普法",
      number: "GD03-017_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-017_p1.webp?260612",
      prices: { a: 121, b: 547, c: 973 }
    },
    {
      id: "GD03-017_p2",
      name: "肯普法",
      number: "GD03-017_p2",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-017_p2.webp?260612",
      prices: { a: 122, b: 554, c: 986 }
    },
    {
      id: "GD03-018",
      name: "雙頭龍高達",
      number: "GD03-018",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-018.webp?260612",
      prices: { a: 356, b: 2192, c: 1028 }
    },
    {
      id: "GD03-018_p1",
      name: "雙頭龍高達",
      number: "GD03-018_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-018_p1.webp?260612",
      prices: { a: 2912, b: 2084, c: 1256 }
    },
    {
      id: "GD03-019",
      name: "高達AGE-2 普通型",
      number: "GD03-019",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-019.webp?260612",
      prices: { a: 357, b: 2199, c: 1041 }
    },
    {
      id: "GD03-019_p1",
      name: "高達AGE-2 普通型",
      number: "GD03-019_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-019_p1.webp?260612",
      prices: { a: 2703, b: 621, c: 1539 }
    },
    {
      id: "GD03-020",
      name: "薩克Ⅱ改",
      number: "GD03-020",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-020.webp?260612",
      prices: { a: 379, b: 2353, c: 1327 }
    },
    {
      id: "GD03-020_p1",
      name: "薩克Ⅱ改",
      number: "GD03-020_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-020_p1.webp?260612",
      prices: { a: 105, b: 435, c: 765 }
    },
    {
      id: "GD03-021",
      name: "地獄死神高達",
      number: "GD03-021",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-021.webp?260612",
      prices: { a: 380, b: 2360, c: 1340 }
    },
    {
      id: "GD03-022",
      name: "主天使高達",
      number: "GD03-022",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-022.webp?260612",
      prices: { a: 381, b: 2367, c: 1353 }
    },
    {
      id: "GD03-022_p1",
      name: "主天使高達",
      number: "GD03-022_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-022_p1.webp?260612",
      prices: { a: 1687, b: 2509, c: 331 }
    },
    {
      id: "GD03-023",
      name: "G包瑟",
      number: "GD03-023",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-023.webp?260612",
      prices: { a: 382, b: 2374, c: 1366 }
    },
    {
      id: "GD03-024",
      name: "高性能葛克",
      number: "GD03-024",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-024.webp?260612",
      prices: { a: 383, b: 2381, c: 1379 }
    },
    {
      id: "GD03-025",
      name: "沙漠高達改",
      number: "GD03-025",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-025.webp?260612",
      prices: { a: 384, b: 2388, c: 1392 }
    },
    {
      id: "GD03-026",
      name: "力天使高達",
      number: "GD03-026",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-026.webp?260612",
      prices: { a: 385, b: 2395, c: 1405 }
    },
    {
      id: "GD03-027",
      name: "茲卡克E",
      number: "GD03-027",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-027.webp?260612",
      prices: { a: 386, b: 2402, c: 1418 }
    },
    {
      id: "GD03-028",
      name: "馬格亞那克（奧達機）",
      number: "GD03-028",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-028.webp?260612",
      prices: { a: 387, b: 2409, c: 1431 }
    },
    {
      id: "GD03-029",
      name: "重砲手高達改",
      number: "GD03-029",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-029.webp?260612",
      prices: { a: 388, b: 2416, c: 1444 }
    },
    {
      id: "GD03-030",
      name: "主天使高達（尾部組件裝備）（飛行型態）",
      number: "GD03-030",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-030.webp?260612",
      prices: { a: 410, b: 2570, c: 1730 }
    },
    {
      id: "GD03-031",
      name: "高達AGE-1 素體型",
      number: "GD03-031",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-031.webp?260612",
      prices: { a: 411, b: 2577, c: 1743 }
    },
    {
      id: "GD03-032",
      name: "薩克 四蛇眼規格[雪怪]（GQ）",
      number: "GD03-032",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-032.webp?260612",
      prices: { a: 412, b: 2584, c: 1756 }
    },
    {
      id: "GD03-033",
      name: "天意高達",
      number: "GD03-033",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-033.webp?260612",
      prices: { a: 413, b: 2591, c: 1769 }
    },
    {
      id: "GD03-033_p1",
      name: "天意高達",
      number: "GD03-033_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-033_p1.webp?260612",
      prices: { a: 999, b: 693, c: 387 }
    },
    {
      id: "GD03-034",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "GD03-034",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-034.webp?260612",
      prices: { a: 414, b: 2598, c: 1782 }
    },
    {
      id: "GD03-034_p1",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "GD03-034_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-034_p1.webp?260612",
      prices: { a: 790, b: 2230, c: 670 }
    },
    {
      id: "GD03-035",
      name: "GFreD",
      number: "GD03-035",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-035.webp?260612",
      prices: { a: 415, b: 2605, c: 1795 }
    },
    {
      id: "GD03-035_p1",
      name: "GFreD",
      number: "GD03-035_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-035_p1.webp?260612",
      prices: { a: 2581, b: 2767, c: 2953 }
    },
    {
      id: "GD03-035_p2",
      name: "GFreD",
      number: "GD03-035_p2",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-035_p2.webp?260612",
      prices: { a: 2582, b: 2774, c: 2966 }
    },
    {
      id: "GD03-036",
      name: "Ξ高達（飛行型態）",
      number: "GD03-036",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-036.webp?260612",
      prices: { a: 416, b: 2612, c: 1808 }
    },
    {
      id: "GD03-036_p1",
      name: "Ξ高達（飛行型態）",
      number: "GD03-036_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-036_p1.webp?260612",
      prices: { a: 2372, b: 1304, c: 236 }
    },
    {
      id: "GD03-037",
      name: "貝爾汀格",
      number: "GD03-037",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-037.webp?260612",
      prices: { a: 417, b: 2619, c: 1821 }
    },
    {
      id: "GD03-037_p1",
      name: "貝爾汀格",
      number: "GD03-037_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-037_p1.webp?260612",
      prices: { a: 2163, b: 2841, c: 519 }
    },
    {
      id: "GD03-038",
      name: "蓋茲（指揮官用）",
      number: "GD03-038",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-038.webp?260612",
      prices: { a: 418, b: 2626, c: 1834 }
    },
    {
      id: "GD03-039",
      name: "紅色高達",
      number: "GD03-039",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-039.webp?260612",
      prices: { a: 419, b: 2633, c: 1847 }
    },
    {
      id: "GD03-040",
      name: "華沙哥高達&阿斯特龍高達",
      number: "GD03-040",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-040.webp?260612",
      prices: { a: 441, b: 2787, c: 2133 }
    },
    {
      id: "GD03-041",
      name: "帕度里亞",
      number: "GD03-041",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-041.webp?260612",
      prices: { a: 442, b: 2794, c: 2146 }
    },
    {
      id: "GD03-042",
      name: "決鬥高達（強襲護甲裝備）",
      number: "GD03-042",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-042.webp?260612",
      prices: { a: 443, b: 2801, c: 2159 }
    },
    {
      id: "GD03-043",
      name: "梅薩F02型",
      number: "GD03-043",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-043.webp?260612",
      prices: { a: 444, b: 2808, c: 2172 }
    },
    {
      id: "GD03-044",
      name: "德特雷斯・飛行型",
      number: "GD03-044",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-044.webp?260612",
      prices: { a: 445, b: 2815, c: 2185 }
    },
    {
      id: "GD03-045",
      name: "巴林",
      number: "GD03-045",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-045.webp?260612",
      prices: { a: 446, b: 2822, c: 2198 }
    },
    {
      id: "GD03-046",
      name: "席古",
      number: "GD03-046",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-046.webp?260612",
      prices: { a: 447, b: 2829, c: 2211 }
    },
    {
      id: "GD03-047",
      name: "迪因（指揮官用）",
      number: "GD03-047",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-047.webp?260612",
      prices: { a: 448, b: 2836, c: 2224 }
    },
    {
      id: "GD03-048",
      name: "GFreD",
      number: "GD03-048",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-048.webp?260612",
      prices: { a: 449, b: 2843, c: 2237 }
    },
    {
      id: "GD03-049",
      name: "能天使高達（TRANS-AM）",
      number: "GD03-049",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-049.webp?260612",
      prices: { a: 450, b: 2850, c: 2250 }
    },
    {
      id: "GD03-049_p1",
      name: "能天使高達（TRANS-AM）",
      number: "GD03-049_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-049_p1.webp?260612",
      prices: { a: 266, b: 1562, c: 2858 }
    },
    {
      id: "GD03-050",
      name: "高達巴巴托司狼式",
      number: "GD03-050",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-050.webp?260612",
      prices: { a: 472, b: 3004, c: 2536 }
    },
    {
      id: "GD03-050_p1",
      name: "高達巴巴托司狼式",
      number: "GD03-050_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-050_p1.webp?260612",
      prices: { a: 668, b: 1376, c: 2084 }
    },
    {
      id: "GD03-051",
      name: "高達X（分裂者）",
      number: "GD03-051",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-051.webp?260612",
      prices: { a: 473, b: 3011, c: 2549 }
    },
    {
      id: "GD03-052",
      name: "德天使高達",
      number: "GD03-052",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-052.webp?260612",
      prices: { a: 474, b: 3018, c: 2562 }
    },
    {
      id: "GD03-052_p1",
      name: "德天使高達",
      number: "GD03-052_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-052_p1.webp?260612",
      prices: { a: 250, b: 1450, c: 2650 }
    },
    {
      id: "GD03-053",
      name: "高達古辛重鍛型FC",
      number: "GD03-053",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-053.webp?260612",
      prices: { a: 475, b: 3025, c: 2575 }
    },
    {
      id: "GD03-053_p1",
      name: "高達古辛重鍛型FC",
      number: "GD03-053_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-053_p1.webp?260612",
      prices: { a: 2041, b: 1987, c: 1933 }
    },
    {
      id: "GD03-054",
      name: "堅德拉",
      number: "GD03-054",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-054.webp?260612",
      prices: { a: 476, b: 3032, c: 2588 }
    },
    {
      id: "GD03-055",
      name: "端白星高達（第2型態）",
      number: "GD03-055",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-055.webp?260612",
      prices: { a: 477, b: 3039, c: 2601 }
    },
    {
      id: "GD03-056",
      name: "高達巴巴托司 適應型",
      number: "GD03-056",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-056.webp?260612",
      prices: { a: 478, b: 3046, c: 2614 }
    },
    {
      id: "GD03-057",
      name: "GN裝甲模組E型",
      number: "GD03-057",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-057.webp?260612",
      prices: { a: 479, b: 53, c: 2627 }
    },
    {
      id: "GD03-058",
      name: "法爾西亞",
      number: "GD03-058",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-058.webp?260612",
      prices: { a: 480, b: 60, c: 2640 }
    },
    {
      id: "GD03-059",
      name: "賽達斯R",
      number: "GD03-059",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-059.webp?260612",
      prices: { a: 481, b: 67, c: 2653 }
    },
    {
      id: "GD03-060",
      name: "CGS機動工兵（指揮官機）",
      number: "GD03-060",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-060.webp?260612",
      prices: { a: 503, b: 221, c: 2939 }
    },
    {
      id: "GD03-061",
      name: "高達巴巴托司（第6型態）",
      number: "GD03-061",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-061.webp?260612",
      prices: { a: 504, b: 228, c: 2952 }
    },
    {
      id: "GD03-062",
      name: "GX-Bit",
      number: "GD03-062",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-062.webp?260612",
      prices: { a: 505, b: 235, c: 2965 }
    },
    {
      id: "GD03-063",
      name: "0高達",
      number: "GD03-063",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-063.webp?260612",
      prices: { a: 506, b: 242, c: 2978 }
    },
    {
      id: "GD03-064",
      name: "迪凡斯",
      number: "GD03-064",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-064.webp?260612",
      prices: { a: 507, b: 249, c: 2991 }
    },
    {
      id: "GD03-065",
      name: "賽達斯M",
      number: "GD03-065",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-065.webp?260612",
      prices: { a: 508, b: 256, c: 3004 }
    },
    {
      id: "GD03-066",
      name: "高達巴巴托司（第5型態/地上戰規格）",
      number: "GD03-066",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-066.webp?260612",
      prices: { a: 509, b: 263, c: 3017 }
    },
    {
      id: "GD03-067",
      name: "漏影",
      number: "GD03-067",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-067.webp?260612",
      prices: { a: 510, b: 270, c: 3030 }
    },
    {
      id: "GD03-068",
      name: "端白星高達",
      number: "GD03-068",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-068.webp?260612",
      prices: { a: 511, b: 277, c: 3043 }
    },
    {
      id: "GD03-069",
      name: "葛拉漢專用聯合旗幟式特裝型",
      number: "GD03-069",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-069.webp?260612",
      prices: { a: 512, b: 284, c: 56 }
    },
    {
      id: "GD03-069_p1",
      name: "葛拉漢專用聯合旗幟式特裝型",
      number: "GD03-069_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-069_p1.webp?260612",
      prices: { a: 1308, b: 2856, c: 1404 }
    },
    {
      id: "GD03-070",
      name: "自由高達",
      number: "GD03-070",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-070.webp?260612",
      prices: { a: 534, b: 438, c: 342 }
    },
    {
      id: "GD03-070_p1",
      name: "自由高達",
      number: "GD03-070_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-070_p1.webp?260612",
      prices: { a: 2710, b: 670, c: 1630 }
    },
    {
      id: "GD03-071",
      name: "Z高達（生化感應器啟動時）",
      number: "GD03-071",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-071.webp?260612",
      prices: { a: 535, b: 445, c: 355 }
    },
    {
      id: "GD03-071_p1",
      name: "Z高達（生化感應器啟動時）",
      number: "GD03-071_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-071_p1.webp?260612",
      prices: { a: 2501, b: 2207, c: 1913 }
    },
    {
      id: "GD03-072",
      name: "機動型突擊高達",
      number: "GD03-072",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-072.webp?260612",
      prices: { a: 536, b: 452, c: 368 }
    },
    {
      id: "GD03-073",
      name: "格雷茲・艾因",
      number: "GD03-073",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-073.webp?260612",
      prices: { a: 537, b: 459, c: 381 }
    },
    {
      id: "GD03-073_p1",
      name: "格雷茲・艾因",
      number: "GD03-073_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-073_p1.webp?260612",
      prices: { a: 1083, b: 1281, c: 1479 }
    },
    {
      id: "GD03-074",
      name: "鐵人式桃子",
      number: "GD03-074",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-074.webp?260612",
      prices: { a: 538, b: 466, c: 394 }
    },
    {
      id: "GD03-075",
      name: "超級高達",
      number: "GD03-075",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-075.webp?260612",
      prices: { a: 539, b: 473, c: 407 }
    },
    {
      id: "GD03-076",
      name: "自由高達（流星裝備）",
      number: "GD03-076",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-076.webp?260612",
      prices: { a: 540, b: 480, c: 420 }
    },
    {
      id: "GD03-077",
      name: "正義高達（流星裝備）",
      number: "GD03-077",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-077.webp?260612",
      prices: { a: 541, b: 487, c: 433 }
    },
    {
      id: "GD03-078",
      name: "鐵人式高機動型",
      number: "GD03-078",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-078.webp?260612",
      prices: { a: 542, b: 494, c: 446 }
    },
    {
      id: "GD03-079",
      name: "G防禦機",
      number: "GD03-079",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-079.webp?260612",
      prices: { a: 543, b: 501, c: 459 }
    },
    {
      id: "GD03-080",
      name: "高達錫蒙力騎兵（騎兵型態）",
      number: "GD03-080",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-080.webp?260612",
      prices: { a: 565, b: 655, c: 745 }
    },
    {
      id: "GD03-081",
      name: "AEU制定式（展示機色）",
      number: "GD03-081",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-081.webp?260612",
      prices: { a: 566, b: 662, c: 758 }
    },
    {
      id: "GD03-082",
      name: "聯合旗幟式",
      number: "GD03-082",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-082.webp?260612",
      prices: { a: 567, b: 669, c: 771 }
    },
    {
      id: "GD03-083",
      name: "AEU暴徒式",
      number: "GD03-083",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-083.webp?260612",
      prices: { a: 568, b: 676, c: 784 }
    },
    {
      id: "GD03-084",
      name: "帕普提瑪斯・西羅克",
      number: "GD03-084",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-084.webp?260612",
      prices: { a: 569, b: 683, c: 797 }
    },
    {
      id: "GD03-084_p1",
      name: "帕普提瑪斯・西羅克",
      number: "GD03-084_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-084_p1.webp?260612",
      prices: { a: 2395, b: 1465, c: 535 }
    },
    {
      id: "GD03-085",
      name: "克莉絲汀・邁肯錫",
      number: "GD03-085",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-085.webp?260612",
      prices: { a: 570, b: 690, c: 810 }
    },
    {
      id: "GD03-086",
      name: "亞贊・蓋伯",
      number: "GD03-086",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-086.webp?260612",
      prices: { a: 571, b: 697, c: 823 }
    },
    {
      id: "GD03-087",
      name: "莎拉・薩比亞羅夫",
      number: "GD03-087",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-087.webp?260612",
      prices: { a: 572, b: 704, c: 836 }
    },
    {
      id: "GD03-088",
      name: "阿瑟姆・明日野",
      number: "GD03-088",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-088.webp?260612",
      prices: { a: 573, b: 711, c: 849 }
    },
    {
      id: "GD03-088_p1",
      name: "阿瑟姆・明日野",
      number: "GD03-088_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-088_p1.webp?260612",
      prices: { a: 559, b: 613, c: 667 }
    },
    {
      id: "GD03-089",
      name: "巴納德・懷茲曼",
      number: "GD03-089",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-089.webp?260612",
      prices: { a: 574, b: 718, c: 862 }
    },
    {
      id: "GD03-090",
      name: "米海爾・卡明斯基",
      number: "GD03-090",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-090.webp?260612",
      prices: { a: 596, b: 872, c: 1148 }
    },
    {
      id: "GD03-091",
      name: "拉烏・魯・克魯澤",
      number: "GD03-091",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-091.webp?260612",
      prices: { a: 597, b: 879, c: 1161 }
    },
    {
      id: "GD03-091_p1",
      name: "拉烏・魯・克魯澤",
      number: "GD03-091_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-091_p1.webp?260612",
      prices: { a: 543, b: 501, c: 459 }
    },
    {
      id: "GD03-092",
      name: "涅安",
      number: "GD03-092",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-092.webp?260612",
      prices: { a: 598, b: 886, c: 1174 }
    },
    {
      id: "GD03-093",
      name: "卡利斯・羅迪拉斯",
      number: "GD03-093",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-093.webp?260612",
      prices: { a: 599, b: 893, c: 1187 }
    },
    {
      id: "GD03-094",
      name: "哲哈特・加列特",
      number: "GD03-094",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-094.webp?260612",
      prices: { a: 600, b: 900, c: 1200 }
    },
    {
      id: "GD03-094_p1",
      name: "哲哈特・加列特",
      number: "GD03-094_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-094_p1.webp?260612",
      prices: { a: 1916, b: 1112, c: 308 }
    },
    {
      id: "GD03-095",
      name: "雅芝・古魯明",
      number: "GD03-095",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-095.webp?260612",
      prices: { a: 601, b: 907, c: 1213 }
    },
    {
      id: "GD03-096",
      name: "賈米爾・尼特",
      number: "GD03-096",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-096.webp?260612",
      prices: { a: 602, b: 914, c: 1226 }
    },
    {
      id: "GD03-097",
      name: "威斯塔利歐・阿法姆",
      number: "GD03-097",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-097.webp?260612",
      prices: { a: 603, b: 921, c: 1239 }
    },
    {
      id: "GD03-098",
      name: "葛拉漢・耶卡",
      number: "GD03-098",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-098.webp?260612",
      prices: { a: 604, b: 928, c: 1252 }
    },
    {
      id: "GD03-098_p1",
      name: "葛拉漢・耶卡",
      number: "GD03-098_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-098_p1.webp?260612",
      prices: { a: 80, b: 260, c: 440 }
    },
    {
      id: "GD03-099",
      name: "艾瑪・辛",
      number: "GD03-099",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-099.webp?260612",
      prices: { a: 605, b: 935, c: 1265 }
    },
    {
      id: "GD03-100",
      name: "索瑪・皮利斯",
      number: "GD03-100",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-100.webp?260612",
      prices: { a: 1278, b: 2646, c: 1014 }
    },
    {
      id: "GD03-101",
      name: "旺盛的好奇心",
      number: "GD03-101",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-101.webp?260612",
      prices: { a: 1279, b: 2653, c: 1027 }
    },
    {
      id: "GD03-101_p1",
      name: "旺盛的好奇心",
      number: "GD03-101_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-101_p1.webp?260612",
      prices: { a: 3005, b: 2735, c: 2465 }
    },
    {
      id: "GD03-102",
      name: "特權階級",
      number: "GD03-102",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-102.webp?260612",
      prices: { a: 1280, b: 2660, c: 1040 }
    },
    {
      id: "GD03-103",
      name: "部隊指令",
      number: "GD03-103",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-103.webp?260612",
      prices: { a: 1281, b: 2667, c: 1053 }
    },
    {
      id: "GD03-104",
      name: "蕾柯亞的氣息",
      number: "GD03-104",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-104.webp?260612",
      prices: { a: 1282, b: 2674, c: 1066 }
    },
    {
      id: "GD03-105",
      name: "艦橋船員",
      number: "GD03-105",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-105.webp?260612",
      prices: { a: 1283, b: 2681, c: 1079 }
    },
    {
      id: "GD03-105_p1",
      name: "艦橋船員",
      number: "GD03-105_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-105_p1.webp?260612",
      prices: { a: 1169, b: 1883, c: 2597 }
    },
    {
      id: "GD03-106",
      name: "M.A.V.戰術",
      number: "GD03-106",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-106.webp?260612",
      prices: { a: 1284, b: 2688, c: 1092 }
    },
    {
      id: "GD03-107",
      name: "渡河穿林",
      number: "GD03-107",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-107.webp?260612",
      prices: { a: 1285, b: 2695, c: 1105 }
    },
    {
      id: "GD03-108",
      name: "離戰場還有幾英里？",
      number: "GD03-108",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-108.webp?260612",
      prices: { a: 1286, b: 2702, c: 1118 }
    },
    {
      id: "GD03-109",
      name: "戰技精進",
      number: "GD03-109",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-109.webp?260612",
      prices: { a: 1287, b: 2709, c: 1131 }
    },
    {
      id: "GD03-109_p1",
      name: "戰技精進",
      number: "GD03-109_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-109_p1.webp?260612",
      prices: { a: 2333, b: 1031, c: 2729 }
    },
    {
      id: "GD03-110",
      name: "目標排除",
      number: "GD03-110",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-110.webp?260612",
      prices: { a: 1309, b: 2863, c: 1417 }
    },
    {
      id: "GD03-111",
      name: "現場潛入員",
      number: "GD03-111",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-111.webp?260612",
      prices: { a: 1310, b: 2870, c: 1430 }
    },
    {
      id: "GD03-112",
      name: "扭曲之念",
      number: "GD03-112",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-112.webp?260612",
      prices: { a: 1311, b: 2877, c: 1443 }
    },
    {
      id: "GD03-113",
      name: "人類的業果",
      number: "GD03-113",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-113.webp?260612",
      prices: { a: 1312, b: 2884, c: 1456 }
    },
    {
      id: "GD03-114",
      name: "決意的眼神",
      number: "GD03-114",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-114.webp?260612",
      prices: { a: 1313, b: 2891, c: 1469 }
    },
    {
      id: "GD03-114_p1",
      name: "決意的眼神",
      number: "GD03-114_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-114_p1.webp?260612",
      prices: { a: 899, b: 2993, c: 2087 }
    },
    {
      id: "GD03-115",
      name: "久別重逢",
      number: "GD03-115",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-115.webp?260612",
      prices: { a: 1314, b: 2898, c: 1482 }
    },
    {
      id: "GD03-116",
      name: "邁向命運",
      number: "GD03-116",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-116.webp?260612",
      prices: { a: 1315, b: 2905, c: 1495 }
    },
    {
      id: "GD03-117",
      name: "歐格的號令",
      number: "GD03-117",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-117.webp?260612",
      prices: { a: 1316, b: 2912, c: 1508 }
    },
    {
      id: "GD03-118",
      name: "能力覺醒",
      number: "GD03-118",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-118.webp?260612",
      prices: { a: 1317, b: 2919, c: 1521 }
    },
    {
      id: "GD03-118_p1",
      name: "能力覺醒",
      number: "GD03-118_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-118_p1.webp?260612",
      prices: { a: 2063, b: 2141, c: 2219 }
    },
    {
      id: "GD03-119",
      name: "笨拙地接近",
      number: "GD03-119",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-119.webp?260612",
      prices: { a: 1318, b: 2926, c: 1534 }
    },
    {
      id: "GD03-120",
      name: "不死身的克拉桑瓦",
      number: "GD03-120",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-120.webp?260612",
      prices: { a: 1340, b: 80, c: 1820 }
    },
    {
      id: "GD03-121",
      name: "獨斷出擊",
      number: "GD03-121",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-121.webp?260612",
      prices: { a: 1341, b: 87, c: 1833 }
    },
    {
      id: "GD03-122",
      name: "老練的戰法",
      number: "GD03-122",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-122.webp?260612",
      prices: { a: 1342, b: 94, c: 1846 }
    },
    {
      id: "GD03-123",
      name: "丘比特里斯號",
      number: "GD03-123",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-123.webp?260612",
      prices: { a: 1343, b: 101, c: 1859 }
    },
    {
      id: "GD03-124",
      name: "里伯殖民地",
      number: "GD03-124",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-124.webp?260612",
      prices: { a: 1344, b: 108, c: 1872 }
    },
    {
      id: "GD03-125",
      name: "萬年和平號",
      number: "GD03-125",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-125.webp?260612",
      prices: { a: 1345, b: 115, c: 1885 }
    },
    {
      id: "GD03-126",
      name: "獨眼巨人隊",
      number: "GD03-126",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-126.webp?260612",
      prices: { a: 1346, b: 122, c: 1898 }
    },
    {
      id: "GD03-127",
      name: "雅金・杜威",
      number: "GD03-127",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-127.webp?260612",
      prices: { a: 1347, b: 129, c: 1911 }
    },
    {
      id: "GD03-128",
      name: "多利德亞",
      number: "GD03-128",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-128.webp?260612",
      prices: { a: 1348, b: 136, c: 1924 }
    },
    {
      id: "GD03-129",
      name: "螢火",
      number: "GD03-129",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-129.webp?260612",
      prices: { a: 1349, b: 143, c: 1937 }
    },
    {
      id: "GD03-130",
      name: "達尼斯",
      number: "GD03-130",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-130.webp?260612",
      prices: { a: 1371, b: 297, c: 2223 }
    },
    {
      id: "GD03-131",
      name: "永恆號",
      number: "GD03-131",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-131.webp?260612",
      prices: { a: 1372, b: 304, c: 2236 }
    },
    {
      id: "GD03-132",
      name: "拉迪修",
      number: "GD03-132",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-132.webp?260612",
      prices: { a: 1373, b: 311, c: 2249 }
    },
    {
      id: "ST05-010_p3",
      name: "三日月・奧古斯",
      number: "ST05-010_p3",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-010_p3.webp?260612",
      prices: { a: 156, b: 792, c: 1428 }
    },
    {
      id: "ST05-013_p3",
      name: "鐵與血",
      number: "ST05-013_p3",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-013_p3.webp?260612",
      prices: { a: 1529, b: 1403, c: 1277 }
    },
    {
      id: "ST05-014_p4",
      name: "致命一擊",
      number: "ST05-014_p4",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-014_p4.webp?260612",
      prices: { a: 321, b: 1947, c: 573 }
    },
    {
      id: "T-013",
      name: "高性能葛克",
      number: "T-013",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-013.webp?260612",
      prices: { a: 1107, b: 1449, c: 1791 }
    },
    {
      id: "T-014",
      name: "廣告氣球",
      number: "T-014",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-014.webp?260612",
      prices: { a: 1108, b: 1456, c: 1804 }
    },
    {
      id: "T-015",
      name: "CGS機動工兵",
      number: "T-015",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-015.webp?260612",
      prices: { a: 1109, b: 1463, c: 1817 }
    },
    {
      id: "T-016",
      name: "格雷茲改",
      number: "T-016",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-016.webp?260612",
      prices: { a: 1110, b: 1470, c: 1830 }
    },
    {
      id: "T-017",
      name: "高達巴巴托司(第4形態)",
      number: "T-017",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-017.webp?260612",
      prices: { a: 1111, b: 1477, c: 1843 }
    },
    {
      id: "T-018",
      name: "紅色高達",
      number: "T-018",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-018.webp?260612",
      prices: { a: 1112, b: 1484, c: 1856 }
    },
    {
      id: "T-019",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "T-019",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-019.webp?260612",
      prices: { a: 1113, b: 1491, c: 1869 }
    },
    {
      id: "T-020",
      name: "GFreD",
      number: "T-020",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-020.webp?260612",
      prices: { a: 1135, b: 1645, c: 2155 }
    },
    {
      id: "R-020",
      name: "能源",
      number: "R-020",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-020.webp?260612",
      prices: { a: 2093, b: 2351, c: 2609 }
    },
    {
      id: "R-020_p1",
      name: "能源",
      number: "R-020_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-020_p1.webp?260612",
      prices: { a: 1879, b: 853, c: 2827 }
    },
    {
      id: "R-021",
      name: "能源",
      number: "R-021",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-021.webp?260612",
      prices: { a: 2094, b: 2358, c: 2622 }
    },
    {
      id: "R-021_p1",
      name: "能源",
      number: "R-021_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-021_p1.webp?260612",
      prices: { a: 1670, b: 2390, c: 110 }
    },
    {
      id: "R-022",
      name: "能源",
      number: "R-022",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-022.webp?260612",
      prices: { a: 2095, b: 2365, c: 2635 }
    },
    {
      id: "R-022_p1",
      name: "能源",
      number: "R-022_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-022_p1.webp?260612",
      prices: { a: 1461, b: 927, c: 393 }
    },
    {
      id: "R-023",
      name: "能源",
      number: "R-023",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-023.webp?260612",
      prices: { a: 2096, b: 2372, c: 2648 }
    },
    {
      id: "R-023_p1",
      name: "能源",
      number: "R-023_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-023_p1.webp?260612",
      prices: { a: 252, b: 1464, c: 2676 }
    },
    {
      id: "R-024",
      name: "能源",
      number: "R-024",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-024.webp?260612",
      prices: { a: 2097, b: 2379, c: 2661 }
    },
    {
      id: "R-024_p1",
      name: "能源",
      number: "R-024_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-024_p1.webp?260612",
      prices: { a: 3043, b: 3001, c: 2959 }
    },
    {
      id: "R-025",
      name: "能源",
      number: "R-025",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-025.webp?260612",
      prices: { a: 2098, b: 2386, c: 2674 }
    },
    {
      id: "R-025_p1",
      name: "能源",
      number: "R-025_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-025_p1.webp?260612",
      prices: { a: 2834, b: 1538, c: 242 }
    },
    {
      id: "R-025_p2",
      name: "能源",
      number: "R-025_p2",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-025_p2.webp?260612",
      prices: { a: 2835, b: 1545, c: 255 }
    },
    {
      id: "R-026",
      name: "能源",
      number: "R-026",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-026.webp?260612",
      prices: { a: 2099, b: 2393, c: 2687 }
    },
    {
      id: "R-026_p1",
      name: "能源",
      number: "R-026_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-026_p1.webp?260612",
      prices: { a: 1625, b: 2075, c: 2525 }
    },
    {
      id: "R-027",
      name: "能源",
      number: "R-027",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-027.webp?260612",
      prices: { a: 2100, b: 2400, c: 2700 }
    },
    {
      id: "R-027_p1",
      name: "能源",
      number: "R-027_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-027_p1.webp?260612",
      prices: { a: 1416, b: 612, c: 2808 }
    },
    {
      id: "R-028",
      name: "能源",
      number: "R-028",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-028.webp?260612",
      prices: { a: 2101, b: 2407, c: 2713 }
    },
    {
      id: "R-028_p1",
      name: "能源",
      number: "R-028_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-028_p1.webp?260612",
      prices: { a: 1207, b: 2149, c: 91 }
    },
    {
      id: "R-029",
      name: "能源",
      number: "R-029",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-029.webp?260612",
      prices: { a: 2102, b: 2414, c: 2726 }
    },
    {
      id: "R-029_p1",
      name: "能源",
      number: "R-029_p1",
      series: "Steel Requiem [GD03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-029_p1.webp?260612",
      prices: { a: 998, b: 686, c: 374 }
    },
    {
      id: "ST04-001_p4",
      name: "機動型突擊高達",
      number: "ST04-001_p4",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-001_p4.webp?260612",
      prices: { a: 1316, b: 2912, c: 1508 }
    },
    {
      id: "GD01-002_p2",
      name: "獨角獸高達（破壞模式）",
      number: "GD01-002_p2",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-002_p2.webp?260612",
      prices: { a: 2424, b: 1668, c: 912 }
    },
    {
      id: "GD03-026_p1",
      name: "力天使高達",
      number: "GD03-026_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-026_p1.webp?260612",
      prices: { a: 2851, b: 1657, c: 463 }
    },
    {
      id: "GD03-039_p1",
      name: "紅色高達",
      number: "GD03-039_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-039_p1.webp?260612",
      prices: { a: 745, b: 1915, c: 85 }
    },
    {
      id: "GD03-056_p1",
      name: "高達巴巴托司 適應型",
      number: "GD03-056_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-056_p1.webp?260612",
      prices: { a: 1414, b: 598, c: 2782 }
    },
    {
      id: "GD04-001",
      name: "高達",
      number: "GD04-001",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-001.webp?260612",
      prices: { a: 2839, b: 1573, c: 307 }
    },
    {
      id: "GD04-001_p1",
      name: "高達",
      number: "GD04-001_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-001_p1.webp?260612",
      prices: { a: 2965, b: 2455, c: 1945 }
    },
    {
      id: "GD04-002",
      name: "潘娜洛普（飛行型態）",
      number: "GD04-002",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-002.webp?260612",
      prices: { a: 2840, b: 1580, c: 320 }
    },
    {
      id: "GD04-002_p1",
      name: "潘娜洛普（飛行型態）",
      number: "GD04-002_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-002_p1.webp?260612",
      prices: { a: 2756, b: 992, c: 2228 }
    },
    {
      id: "GD04-003",
      name: "V高達",
      number: "GD04-003",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-003.webp?260612",
      prices: { a: 2841, b: 1587, c: 333 }
    },
    {
      id: "GD04-003_p1",
      name: "V高達",
      number: "GD04-003_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-003_p1.webp?260612",
      prices: { a: 1547, b: 1529, c: 1511 }
    },
    {
      id: "GD04-004",
      name: "重高達Mk-II",
      number: "GD04-004",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-004.webp?260612",
      prices: { a: 2842, b: 1594, c: 346 }
    },
    {
      id: "GD04-005",
      name: "吉姆Ⅲ",
      number: "GD04-005",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-005.webp?260612",
      prices: { a: 2843, b: 1601, c: 359 }
    },
    {
      id: "GD04-006",
      name: "V Dash高達",
      number: "GD04-006",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-006.webp?260612",
      prices: { a: 2844, b: 1608, c: 372 }
    },
    {
      id: "GD04-006_p1",
      name: "V Dash高達",
      number: "GD04-006_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-006_p1.webp?260612",
      prices: { a: 920, b: 140, c: 2360 }
    },
    {
      id: "GD04-007",
      name: "V Dash高達HEXA",
      number: "GD04-007",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-007.webp?260612",
      prices: { a: 2845, b: 1615, c: 385 }
    },
    {
      id: "GD04-008",
      name: "高達",
      number: "GD04-008",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-008.webp?260612",
      prices: { a: 2846, b: 1622, c: 398 }
    },
    {
      id: "GD04-009",
      name: "鋼加農（108）&鋼加農（109）",
      number: "GD04-009",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-009.webp?260612",
      prices: { a: 2847, b: 1629, c: 411 }
    },
    {
      id: "GD04-009_p1",
      name: "鋼加農（108）&鋼加農（109）",
      number: "GD04-009_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-009_p1.webp?260612",
      prices: { a: 2293, b: 751, c: 2209 }
    },
    {
      id: "GD04-010",
      name: "蓋布蘭",
      number: "GD04-010",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-010.webp?260612",
      prices: { a: 2869, b: 1783, c: 697 }
    },
    {
      id: "GD04-011",
      name: "V高達",
      number: "GD04-011",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-011.webp?260612",
      prices: { a: 2870, b: 1790, c: 710 }
    },
    {
      id: "GD04-012",
      name: "核心推進機（005）&核心推進機（006）",
      number: "GD04-012",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-012.webp?260612",
      prices: { a: 2871, b: 1797, c: 723 }
    },
    {
      id: "GD04-013",
      name: "核心戰機",
      number: "GD04-013",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-013.webp?260612",
      prices: { a: 2872, b: 1804, c: 736 }
    },
    {
      id: "GD04-014",
      name: "夏柯",
      number: "GD04-014",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-014.webp?260612",
      prices: { a: 2873, b: 1811, c: 749 }
    },
    {
      id: "GD04-015",
      name: "鋼伊基",
      number: "GD04-015",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-015.webp?260612",
      prices: { a: 2874, b: 1818, c: 762 }
    },
    {
      id: "GD04-016",
      name: "索羅安特（神聖軍事同盟規格）",
      number: "GD04-016",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-016.webp?260612",
      prices: { a: 2875, b: 1825, c: 775 }
    },
    {
      id: "GD04-017",
      name: "吉翁克",
      number: "GD04-017",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-017.webp?260612",
      prices: { a: 2876, b: 1832, c: 788 }
    },
    {
      id: "GD04-017_p1",
      name: "吉翁克",
      number: "GD04-017_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-017_p1.webp?260612",
      prices: { a: 2232, b: 324, c: 1416 }
    },
    {
      id: "GD04-017_p2",
      name: "吉翁克",
      number: "GD04-017_p2",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-017_p2.webp?260612",
      prices: { a: 2233, b: 331, c: 1429 }
    },
    {
      id: "GD04-018",
      name: "鐵騎高達",
      number: "GD04-018",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-018.webp?260612",
      prices: { a: 2877, b: 1839, c: 801 }
    },
    {
      id: "GD04-018_p1",
      name: "鐵騎高達",
      number: "GD04-018_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-018_p1.webp?260612",
      prices: { a: 2023, b: 1861, c: 1699 }
    },
    {
      id: "GD04-019",
      name: "GN裝甲模組D型（TRANS-AM）",
      number: "GD04-019",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-019.webp?260612",
      prices: { a: 2878, b: 1846, c: 814 }
    },
    {
      id: "GD04-020",
      name: "烏爾魔靈高達",
      number: "GD04-020",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-020.webp?260612",
      prices: { a: 2900, b: 2000, c: 1100 }
    },
    {
      id: "GD04-021",
      name: "索恩魔靈高達",
      number: "GD04-021",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-021.webp?260612",
      prices: { a: 2901, b: 2007, c: 1113 }
    },
    {
      id: "GD04-021_p1",
      name: "索恩魔靈高達",
      number: "GD04-021_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-021_p1.webp?260612",
      prices: { a: 2007, b: 1749, c: 1491 }
    },
    {
      id: "GD04-022",
      name: "齊克羅加（MS型態）（GQ)",
      number: "GD04-022",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-022.webp?260612",
      prices: { a: 2902, b: 2014, c: 1126 }
    },
    {
      id: "GD04-022_p1",
      name: "齊克羅加（MS型態）（GQ)",
      number: "GD04-022_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-022_p1.webp?260612",
      prices: { a: 798, b: 2286, c: 774 }
    },
    {
      id: "GD04-023",
      name: "主天使高達（尾部推進器裝備）",
      number: "GD04-023",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-023.webp?260612",
      prices: { a: 2903, b: 2021, c: 1139 }
    },
    {
      id: "GD04-024",
      name: "風靈高達（修改型）",
      number: "GD04-024",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-024.webp?260612",
      prices: { a: 2904, b: 2028, c: 1152 }
    },
    {
      id: "GD04-025",
      name: "鋼沃爾瓦",
      number: "GD04-025",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-025.webp?260612",
      prices: { a: 2905, b: 2035, c: 1165 }
    },
    {
      id: "GD04-026",
      name: "多普戰機（卡爾馬・薩比専用）",
      number: "GD04-026",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-026.webp?260612",
      prices: { a: 2906, b: 2042, c: 1178 }
    },
    {
      id: "GD04-027",
      name: "畢格羅",
      number: "GD04-027",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-027.webp?260612",
      prices: { a: 2907, b: 2049, c: 1191 }
    },
    {
      id: "GD04-028",
      name: "薩克雷洛",
      number: "GD04-028",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-028.webp?260612",
      prices: { a: 2908, b: 2056, c: 1204 }
    },
    {
      id: "GD04-029",
      name: "力天使高達（GN全身盾）",
      number: "GD04-029",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-029.webp?260612",
      prices: { a: 2909, b: 2063, c: 1217 }
    },
    {
      id: "GD04-030",
      name: "迪米教練機 雀丘專用機",
      number: "GD04-030",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-030.webp?260612",
      prices: { a: 2931, b: 2217, c: 1503 }
    },
    {
      id: "GD04-031",
      name: "海因德里",
      number: "GD04-031",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-031.webp?260612",
      prices: { a: 2932, b: 2224, c: 1516 }
    },
    {
      id: "GD04-032",
      name: "艾格沙貝専用吉昂（白瓷矛裝備）（GQ）",
      number: "GD04-032",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-032.webp?260612",
      prices: { a: 2933, b: 2231, c: 1529 }
    },
    {
      id: "GD04-033",
      name: "新吉翁克",
      number: "GD04-033",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-033.webp?260612",
      prices: { a: 2934, b: 2238, c: 1542 }
    },
    {
      id: "GD04-033_p1",
      name: "新吉翁克",
      number: "GD04-033_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-033_p1.webp?260612",
      prices: { a: 110, b: 470, c: 830 }
    },
    {
      id: "GD04-034",
      name: "主天使高達",
      number: "GD04-034",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-034.webp?260612",
      prices: { a: 2935, b: 2245, c: 1555 }
    },
    {
      id: "GD04-034_p1",
      name: "主天使高達",
      number: "GD04-034_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-034_p1.webp?260612",
      prices: { a: 1901, b: 1007, c: 113 }
    },
    {
      id: "GD04-035",
      name: "Ξ高達",
      number: "GD04-035",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-035.webp?260612",
      prices: { a: 2936, b: 2252, c: 1568 }
    },
    {
      id: "GD04-036",
      name: "座天使高達一型",
      number: "GD04-036",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-036.webp?260612",
      prices: { a: 2937, b: 2259, c: 1581 }
    },
    {
      id: "GD04-036_p1",
      name: "座天使高達一型",
      number: "GD04-036_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-036_p1.webp?260612",
      prices: { a: 1483, b: 1081, c: 679 }
    },
    {
      id: "GD04-037",
      name: "主天使高達（TRANS-AM）",
      number: "GD04-037",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-037.webp?260612",
      prices: { a: 2938, b: 2266, c: 1594 }
    },
    {
      id: "GD04-038",
      name: "能天使高達",
      number: "GD04-038",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-038.webp?260612",
      prices: { a: 2939, b: 2273, c: 1607 }
    },
    {
      id: "GD04-039",
      name: "羅森・祖魯",
      number: "GD04-039",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-039.webp?260612",
      prices: { a: 2940, b: 2280, c: 1620 }
    },
    {
      id: "GD04-040",
      name: "疾風・卡爾斯",
      number: "GD04-040",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-040.webp?260612",
      prices: { a: 2962, b: 2434, c: 1906 }
    },
    {
      id: "GD04-041",
      name: "座天使高達三型",
      number: "GD04-041",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-041.webp?260612",
      prices: { a: 2963, b: 2441, c: 1919 }
    },
    {
      id: "GD04-042",
      name: "重高達（GQ）",
      number: "GD04-042",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-042.webp?260612",
      prices: { a: 2964, b: 2448, c: 1932 }
    },
    {
      id: "GD04-042_p1",
      name: "重高達（GQ）",
      number: "GD04-042_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-042_p1.webp?260612",
      prices: { a: 2840, b: 1580, c: 320 }
    },
    {
      id: "GD04-043",
      name: "茲沙（帶袖的規格）",
      number: "GD04-043",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-043.webp?260612",
      prices: { a: 2965, b: 2455, c: 1945 }
    },
    {
      id: "GD04-044",
      name: "喀帝爾",
      number: "GD04-044",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-044.webp?260612",
      prices: { a: 2966, b: 2462, c: 1958 }
    },
    {
      id: "GD04-045",
      name: "座天使高達二型",
      number: "GD04-045",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-045.webp?260612",
      prices: { a: 2967, b: 2469, c: 1971 }
    },
    {
      id: "GD04-046",
      name: "力天使高達",
      number: "GD04-046",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-046.webp?260612",
      prices: { a: 2968, b: 2476, c: 1984 }
    },
    {
      id: "GD04-047",
      name: "德天使高達",
      number: "GD04-047",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-047.webp?260612",
      prices: { a: 2969, b: 2483, c: 1997 }
    },
    {
      id: "GD04-048",
      name: "漢摩拉比（GQ）",
      number: "GD04-048",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-048.webp?260612",
      prices: { a: 2970, b: 2490, c: 2010 }
    },
    {
      id: "GD04-049",
      name: "高達X",
      number: "GD04-049",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-049.webp?260612",
      prices: { a: 2971, b: 2497, c: 2023 }
    },
    {
      id: "GD04-049_p1",
      name: "高達X",
      number: "GD04-049_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-049_p1.webp?260612",
      prices: { a: 2377, b: 1339, c: 301 }
    },
    {
      id: "GD04-050",
      name: "命運高達",
      number: "GD04-050",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-050.webp?260612",
      prices: { a: 2993, b: 2651, c: 2309 }
    },
    {
      id: "GD04-050_p1",
      name: "命運高達",
      number: "GD04-050_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-050_p1.webp?260612",
      prices: { a: 2779, b: 1153, c: 2527 }
    },
    {
      id: "GD04-050_p2",
      name: "命運高達",
      number: "GD04-050_p2",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-050_p2.webp?260612",
      prices: { a: 2780, b: 1160, c: 2540 }
    },
    {
      id: "GD04-051",
      name: "爆烈空王高達",
      number: "GD04-051",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-051.webp?260612",
      prices: { a: 2994, b: 2658, c: 2322 }
    },
    {
      id: "GD04-052",
      name: "斑豹毀滅者高達",
      number: "GD04-052",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-052.webp?260612",
      prices: { a: 2995, b: 2665, c: 2335 }
    },
    {
      id: "GD04-053",
      name: "瞬發型薩克幽靈（雷専用機）",
      number: "GD04-053",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-053.webp?260612",
      prices: { a: 2996, b: 2672, c: 2348 }
    },
    {
      id: "GD04-053_p1",
      name: "瞬發型薩克幽靈（雷専用機）",
      number: "GD04-053_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-053_p1.webp?260612",
      prices: { a: 1152, b: 1764, c: 2376 }
    },
    {
      id: "GD04-054",
      name: "德天使高達（TRANS-AM）",
      number: "GD04-054",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-054.webp?260612",
      prices: { a: 2997, b: 2679, c: 2361 }
    },
    {
      id: "GD04-055",
      name: "古夫烈焰型（海涅・威斯坦弗斯專用機）",
      number: "GD04-055",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-055.webp?260612",
      prices: { a: 2998, b: 2686, c: 2374 }
    },
    {
      id: "GD04-056",
      name: "雙劍型衝擊高達",
      number: "GD04-056",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-056.webp?260612",
      prices: { a: 2999, b: 2693, c: 2387 }
    },
    {
      id: "GD04-057",
      name: "中性高達",
      number: "GD04-057",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-057.webp?260612",
      prices: { a: 3000, b: 2700, c: 2400 }
    },
    {
      id: "GD04-058",
      name: "高達X（賈米爾機）",
      number: "GD04-058",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-058.webp?260612",
      prices: { a: 3001, b: 2707, c: 2413 }
    },
    {
      id: "GD04-059",
      name: "德特雷斯HMC智鼠德特雷斯",
      number: "GD04-059",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-059.webp?260612",
      prices: { a: 3002, b: 2714, c: 2426 }
    },
    {
      id: "GD04-060",
      name: "Esperansa",
      number: "GD04-060",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-060.webp?260612",
      prices: { a: 3024, b: 2868, c: 2712 }
    },
    {
      id: "GD04-061",
      name: "G戰隼",
      number: "GD04-061",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-061.webp?260612",
      prices: { a: 3025, b: 2875, c: 2725 }
    },
    {
      id: "GD04-062",
      name: "砲擊型薩克戰士（露娜瑪莉亞・霍克專用機）",
      number: "GD04-062",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-062.webp?260612",
      prices: { a: 3026, b: 2882, c: 2738 }
    },
    {
      id: "GD04-063",
      name: "GN裝甲模組E型",
      number: "GD04-063",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-063.webp?260612",
      prices: { a: 3027, b: 2889, c: 2751 }
    },
    {
      id: "GD04-064",
      name: "能天使高達",
      number: "GD04-064",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-064.webp?260612",
      prices: { a: 3028, b: 2896, c: 2764 }
    },
    {
      id: "GD04-065",
      name: "獨角獸高達2號機 報喪女妖·命運女神型（破壞模式）",
      number: "GD04-065",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-065.webp?260612",
      prices: { a: 3029, b: 2903, c: 2777 }
    },
    {
      id: "GD04-065_p1",
      name: "獨角獸高達2號機 報喪女妖·命運女神型（破壞模式）",
      number: "GD04-065_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-065_p1.webp?260612",
      prices: { a: 2255, b: 485, c: 1715 }
    },
    {
      id: "GD04-066",
      name: "獨角獸高達（覺醒）",
      number: "GD04-066",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-066.webp?260612",
      prices: { a: 3030, b: 2910, c: 2790 }
    },
    {
      id: "GD04-066_p1",
      name: "獨角獸高達（覺醒）",
      number: "GD04-066_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-066_p1.webp?260612",
      prices: { a: 2046, b: 2022, c: 1998 }
    },
    {
      id: "GD04-067",
      name: "∀高達",
      number: "GD04-067",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-067.webp?260612",
      prices: { a: 3031, b: 2917, c: 2803 }
    },
    {
      id: "GD04-067_p1",
      name: "∀高達",
      number: "GD04-067_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-067_p1.webp?260612",
      prices: { a: 1837, b: 559, c: 2281 }
    },
    {
      id: "GD04-068",
      name: "銀彈",
      number: "GD04-068",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-068.webp?260612",
      prices: { a: 3032, b: 2924, c: 2816 }
    },
    {
      id: "GD04-068_p1",
      name: "銀彈",
      number: "GD04-068_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-068_p1.webp?260612",
      prices: { a: 1628, b: 2096, c: 2564 }
    },
    {
      id: "GD04-069",
      name: "∀高達",
      number: "GD04-069",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-069.webp?260612",
      prices: { a: 3033, b: 2931, c: 2829 }
    },
    {
      id: "GD04-070",
      name: "沙瑟斯專用AEU制定式特裝型（摩拉利亞開發實驗型）",
      number: "GD04-070",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-070.webp?260612",
      prices: { a: 55, b: 85, c: 115 }
    },
    {
      id: "GD04-071",
      name: "葛拉漢專用聯合旗幟式特裝型Ⅱ（GN旗幟式）",
      number: "GD04-071",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-071.webp?260612",
      prices: { a: 56, b: 92, c: 128 }
    },
    {
      id: "GD04-071_p1",
      name: "葛拉漢專用聯合旗幟式特裝型Ⅱ（GN旗幟式）",
      number: "GD04-071_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-071_p1.webp?260612",
      prices: { a: 612, b: 984, c: 1356 }
    },
    {
      id: "GD04-072",
      name: "獨角獸高達2號機 報喪女妖·命運女神型（獨角獸模式）",
      number: "GD04-072",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-072.webp?260612",
      prices: { a: 57, b: 99, c: 141 }
    },
    {
      id: "GD04-073",
      name: "∀高達",
      number: "GD04-073",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-073.webp?260612",
      prices: { a: 58, b: 106, c: 154 }
    },
    {
      id: "GD04-074",
      name: "卡普爾",
      number: "GD04-074",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-074.webp?260612",
      prices: { a: 59, b: 113, c: 167 }
    },
    {
      id: "GD04-075",
      name: "GN-X",
      number: "GD04-075",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-075.webp?260612",
      prices: { a: 60, b: 120, c: 180 }
    },
    {
      id: "GD04-076",
      name: "Hip Heavy",
      number: "GD04-076",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-076.webp?260612",
      prices: { a: 61, b: 127, c: 193 }
    },
    {
      id: "GD04-077",
      name: "弗拉特（民兵團規格）",
      number: "GD04-077",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-077.webp?260612",
      prices: { a: 62, b: 134, c: 206 }
    },
    {
      id: "GD04-078",
      name: "伯爾加納",
      number: "GD04-078",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-078.webp?260612",
      prices: { a: 63, b: 141, c: 219 }
    },
    {
      id: "GD04-079",
      name: "亞格利沙",
      number: "GD04-079",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-079.webp?260612",
      prices: { a: 64, b: 148, c: 232 }
    },
    {
      id: "GD04-080",
      name: "阿爾瓦特雷",
      number: "GD04-080",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-080.webp?260612",
      prices: { a: 86, b: 302, c: 518 }
    },
    {
      id: "GD04-081",
      name: "「胡索・艾溫」",
      number: "GD04-081",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-081.webp?260612",
      prices: { a: 87, b: 309, c: 531 }
    },
    {
      id: "GD04-081_p1",
      name: "「胡索・艾溫」",
      number: "GD04-081_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-081_p1.webp?260612",
      prices: { a: 133, b: 631, c: 1129 }
    },
    {
      id: "GD04-082",
      name: "羅莎米亞・巴達姆",
      number: "GD04-082",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-082.webp?260612",
      prices: { a: 88, b: 316, c: 544 }
    },
    {
      id: "GD04-083",
      name: "瑪貝特・芬格哈特",
      number: "GD04-083",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-083.webp?260612",
      prices: { a: 89, b: 323, c: 557 }
    },
    {
      id: "GD04-084",
      name: "史列加・羅",
      number: "GD04-084",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-084.webp?260612",
      prices: { a: 90, b: 330, c: 570 }
    },
    {
      id: "GD04-085",
      name: "蘇萊塔・墨丘利",
      number: "GD04-085",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-085.webp?260612",
      prices: { a: 91, b: 337, c: 583 }
    },
    {
      id: "GD04-085_p1",
      name: "蘇萊塔・墨丘利",
      number: "GD04-085_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-085_p1.webp?260612",
      prices: { a: 1297, b: 2779, c: 1261 }
    },
    {
      id: "GD04-086",
      name: "卡爾馬・薩比",
      number: "GD04-086",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-086.webp?260612",
      prices: { a: 92, b: 344, c: 596 }
    },
    {
      id: "GD04-087",
      name: "伊蘭・凱萊斯（強化人士五號）",
      number: "GD04-087",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-087.webp?260612",
      prices: { a: 93, b: 351, c: 609 }
    },
    {
      id: "GD04-088",
      name: "特克瓦恩",
      number: "GD04-088",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-088.webp?260612",
      prices: { a: 94, b: 358, c: 622 }
    },
    {
      id: "GD04-089",
      name: "妮娜・崔尼提",
      number: "GD04-089",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-089.webp?260612",
      prices: { a: 95, b: 365, c: 635 }
    },
    {
      id: "GD04-089_p1",
      name: "妮娜・崔尼提",
      number: "GD04-089_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-089_p1.webp?260612",
      prices: { a: 2461, b: 1927, c: 1393 }
    },
    {
      id: "GD04-090",
      name: "哈雷路亞・帕普提茲姆",
      number: "GD04-090",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-090.webp?260612",
      prices: { a: 117, b: 519, c: 921 }
    },
    {
      id: "GD04-091",
      name: "貳・村雨",
      number: "GD04-091",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-091.webp?260612",
      prices: { a: 118, b: 526, c: 934 }
    },
    {
      id: "GD04-092",
      name: "米歇爾・崔尼提",
      number: "GD04-092",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-092.webp?260612",
      prices: { a: 119, b: 533, c: 947 }
    },
    {
      id: "GD04-093",
      name: "雷・札・巴雷爾",
      number: "GD04-093",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-093.webp?260612",
      prices: { a: 120, b: 540, c: 960 }
    },
    {
      id: "GD04-093_p1",
      name: "雷・札・巴雷爾",
      number: "GD04-093_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-093_p1.webp?260612",
      prices: { a: 1236, b: 2352, c: 468 }
    },
    {
      id: "GD04-094",
      name: "帕拉・希斯",
      number: "GD04-094",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-094.webp?260612",
      prices: { a: 121, b: 547, c: 973 }
    },
    {
      id: "GD04-095",
      name: "露娜瑪莉亞・霍克",
      number: "GD04-095",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-095.webp?260612",
      prices: { a: 122, b: 554, c: 986 }
    },
    {
      id: "GD04-095_p1",
      name: "露娜瑪莉亞・霍克",
      number: "GD04-095_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-095_p1.webp?260612",
      prices: { a: 818, b: 2426, c: 1034 }
    },
    {
      id: "GD04-096",
      name: "艾妮爾・愛爾",
      number: "GD04-096",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-096.webp?260612",
      prices: { a: 123, b: 561, c: 999 }
    },
    {
      id: "GD04-097",
      name: "羅蘭・謝亞克",
      number: "GD04-097",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-097.webp?260612",
      prices: { a: 124, b: 568, c: 1012 }
    },
    {
      id: "GD04-097_p1",
      name: "羅蘭・謝亞克",
      number: "GD04-097_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-097_p1.webp?260612",
      prices: { a: 2400, b: 1500, c: 600 }
    },
    {
      id: "GD04-098",
      name: "利迪・馬瑟納斯",
      number: "GD04-098",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-098.webp?260612",
      prices: { a: 125, b: 575, c: 1025 }
    },
    {
      id: "GD04-099",
      name: "阿里・亞爾・沙瑟斯",
      number: "GD04-099",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-099.webp?260612",
      prices: { a: 126, b: 582, c: 1038 }
    },
    {
      id: "GD04-100",
      name: "索西葉・海姆",
      number: "GD04-100",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-100.webp?260612",
      prices: { a: 799, b: 2293, c: 787 }
    },
    {
      id: "GD04-101",
      name: "溫柔的本性",
      number: "GD04-101",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-101.webp?260612",
      prices: { a: 800, b: 2300, c: 800 }
    },
    {
      id: "GD04-102",
      name: "片刻的休息",
      number: "GD04-102",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-102.webp?260612",
      prices: { a: 801, b: 2307, c: 813 }
    },
    {
      id: "GD04-102_p1",
      name: "片刻的休息",
      number: "GD04-102_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-102_p1.webp?260612",
      prices: { a: 907, b: 3049, c: 2191 }
    },
    {
      id: "GD04-103",
      name: "精神支柱",
      number: "GD04-103",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-103.webp?260612",
      prices: { a: 802, b: 2314, c: 826 }
    },
    {
      id: "GD04-104",
      name: "伯勞隊的壁壘",
      number: "GD04-104",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-104.webp?260612",
      prices: { a: 803, b: 2321, c: 839 }
    },
    {
      id: "GD04-105",
      name: "邂逅",
      number: "GD04-105",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-105.webp?260612",
      prices: { a: 804, b: 2328, c: 852 }
    },
    {
      id: "GD04-105_p1",
      name: "邂逅",
      number: "GD04-105_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-105_p1.webp?260612",
      prices: { a: 280, b: 1660, c: 3040 }
    },
    {
      id: "GD04-106",
      name: "無差別的暴力",
      number: "GD04-106",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-106.webp?260612",
      prices: { a: 805, b: 2335, c: 865 }
    },
    {
      id: "GD04-107",
      name: "宿命的戰鬥",
      number: "GD04-107",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-107.webp?260612",
      prices: { a: 806, b: 2342, c: 878 }
    },
    {
      id: "GD04-108",
      name: "地球的魔女",
      number: "GD04-108",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-108.webp?260612",
      prices: { a: 807, b: 2349, c: 891 }
    },
    {
      id: "GD04-109",
      name: "強大的壓力",
      number: "GD04-109",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-109.webp?260612",
      prices: { a: 808, b: 2356, c: 904 }
    },
    {
      id: "GD04-110",
      name: "出資者",
      number: "GD04-110",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-110.webp?260612",
      prices: { a: 830, b: 2510, c: 1190 }
    },
    {
      id: "GD04-110_p1",
      name: "出資者",
      number: "GD04-110_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-110_p1.webp?260612",
      prices: { a: 1846, b: 622, c: 2398 }
    },
    {
      id: "GD04-111",
      name: "崔尼提",
      number: "GD04-111",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-111.webp?260612",
      prices: { a: 831, b: 2517, c: 1203 }
    },
    {
      id: "GD04-112",
      name: "監視者",
      number: "GD04-112",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-112.webp?260612",
      prices: { a: 832, b: 2524, c: 1216 }
    },
    {
      id: "GD04-113",
      name: "傷害控制",
      number: "GD04-113",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-113.webp?260612",
      prices: { a: 833, b: 2531, c: 1229 }
    },
    {
      id: "GD04-114",
      name: "帶來變革者",
      number: "GD04-114",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-114.webp?260612",
      prices: { a: 834, b: 2538, c: 1242 }
    },
    {
      id: "GD04-114_p1",
      name: "帶來變革者",
      number: "GD04-114_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-114_p1.webp?260612",
      prices: { a: 3010, b: 2770, c: 2530 }
    },
    {
      id: "GD04-115",
      name: "支援",
      number: "GD04-115",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-115.webp?260612",
      prices: { a: 835, b: 2545, c: 1255 }
    },
    {
      id: "GD04-116",
      name: "可靠的兄長",
      number: "GD04-116",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-116.webp?260612",
      prices: { a: 836, b: 2552, c: 1268 }
    },
    {
      id: "GD04-117",
      name: "優雅的舉止",
      number: "GD04-117",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-117.webp?260612",
      prices: { a: 837, b: 2559, c: 1281 }
    },
    {
      id: "GD04-117_p1",
      name: "優雅的舉止",
      number: "GD04-117_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-117_p1.webp?260612",
      prices: { a: 1383, b: 381, c: 2379 }
    },
    {
      id: "GD04-118",
      name: "世界的扭曲",
      number: "GD04-118",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-118.webp?260612",
      prices: { a: 838, b: 2566, c: 1294 }
    },
    {
      id: "GD04-119",
      name: "孤軍奮戰",
      number: "GD04-119",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-119.webp?260612",
      prices: { a: 839, b: 2573, c: 1307 }
    },
    {
      id: "GD04-120",
      name: "機械人偶部隊",
      number: "GD04-120",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-120.webp?260612",
      prices: { a: 861, b: 2727, c: 1593 }
    },
    {
      id: "GD04-121",
      name: "Rin Hosu Jr.",
      number: "GD04-121",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-121.webp?260612",
      prices: { a: 862, b: 2734, c: 1606 }
    },
    {
      id: "GD04-122",
      name: "賈布羅",
      number: "GD04-122",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-122.webp?260612",
      prices: { a: 863, b: 2741, c: 1619 }
    },
    {
      id: "GD04-123",
      name: "阿・巴瓦・庫",
      number: "GD04-123",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-123.webp?260612",
      prices: { a: 864, b: 2748, c: 1632 }
    },
    {
      id: "GD04-124",
      name: "九號戰術試驗區域",
      number: "GD04-124",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-124.webp?260612",
      prices: { a: 865, b: 2755, c: 1645 }
    },
    {
      id: "GD04-125",
      name: "崔尼提艦",
      number: "GD04-125",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-125.webp?260612",
      prices: { a: 866, b: 2762, c: 1658 }
    },
    {
      id: "GD04-126",
      name: "伊茲瑪殖民地",
      number: "GD04-126",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-126.webp?260612",
      prices: { a: 867, b: 2769, c: 1671 }
    },
    {
      id: "GD04-127",
      name: "和平號Ⅱ",
      number: "GD04-127",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-127.webp?260612",
      prices: { a: 868, b: 2776, c: 1684 }
    },
    {
      id: "GD04-128",
      name: "軍械庫一號",
      number: "GD04-128",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-128.webp?260612",
      prices: { a: 869, b: 2783, c: 1697 }
    },
    {
      id: "GD04-129",
      name: "威爾傑姆",
      number: "GD04-129",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-129.webp?260612",
      prices: { a: 870, b: 2790, c: 1710 }
    },
    {
      id: "GD04-130",
      name: "工業7號",
      number: "GD04-130",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-130.webp?260612",
      prices: { a: 892, b: 2944, c: 1996 }
    },
    {
      id: "T-021",
      name: "零件",
      number: "T-021",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-021.webp?260612",
      prices: { a: 1136, b: 1652, c: 2168 }
    },
    {
      id: "T-022",
      name: "有線式手臂",
      number: "T-022",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-022.webp?260612",
      prices: { a: 1137, b: 1659, c: 2181 }
    },
    {
      id: "T-023",
      name: "吉翁克（頭部）",
      number: "T-023",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-023.webp?260612",
      prices: { a: 1138, b: 1666, c: 2194 }
    },
    {
      id: "T-024",
      name: "阿爾瓦亞隆",
      number: "T-024",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-024.webp?260612",
      prices: { a: 1139, b: 1673, c: 2207 }
    },
    {
      id: "R-031",
      name: "能源",
      number: "R-031",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-031.webp?260612",
      prices: { a: 2125, b: 2575, c: 3025 }
    },
    {
      id: "R-031_p1",
      name: "能源",
      number: "R-031_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-031_p1.webp?260612",
      prices: { a: 1191, b: 2037, c: 2883 }
    },
    {
      id: "R-032",
      name: "能源",
      number: "R-032",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-032.webp?260612",
      prices: { a: 2126, b: 2582, c: 3038 }
    },
    {
      id: "R-032_p1",
      name: "能源",
      number: "R-032_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-032_p1.webp?260612",
      prices: { a: 2982, b: 2574, c: 2166 }
    },
    {
      id: "R-033",
      name: "能源",
      number: "R-033",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-033.webp?260612",
      prices: { a: 2127, b: 2589, c: 51 }
    },
    {
      id: "R-033_p1",
      name: "能源",
      number: "R-033_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-033_p1.webp?260612",
      prices: { a: 2773, b: 1111, c: 2449 }
    },
    {
      id: "R-034",
      name: "能源",
      number: "R-034",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-034.webp?260612",
      prices: { a: 2128, b: 2596, c: 64 }
    },
    {
      id: "R-034_p1",
      name: "能源",
      number: "R-034_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-034_p1.webp?260612",
      prices: { a: 2564, b: 2648, c: 2732 }
    },
    {
      id: "R-035",
      name: "能源",
      number: "R-035",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-035.webp?260612",
      prices: { a: 2129, b: 2603, c: 77 }
    },
    {
      id: "R-035_p1",
      name: "能源",
      number: "R-035_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-035_p1.webp?260612",
      prices: { a: 2355, b: 1185, c: 3015 }
    },
    {
      id: "R-036",
      name: "能源",
      number: "R-036",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-036.webp?260612",
      prices: { a: 2130, b: 2610, c: 90 }
    },
    {
      id: "R-036_p1",
      name: "能源",
      number: "R-036_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-036_p1.webp?260612",
      prices: { a: 1146, b: 1722, c: 2298 }
    },
    {
      id: "R-037",
      name: "能源",
      number: "R-037",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-037.webp?260612",
      prices: { a: 2131, b: 2617, c: 103 }
    },
    {
      id: "R-037_p1",
      name: "能源",
      number: "R-037_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-037_p1.webp?260612",
      prices: { a: 937, b: 259, c: 2581 }
    },
    {
      id: "R-038",
      name: "能源",
      number: "R-038",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-038.webp?260612",
      prices: { a: 2132, b: 2624, c: 116 }
    },
    {
      id: "R-038_p1",
      name: "能源",
      number: "R-038_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-038_p1.webp?260612",
      prices: { a: 728, b: 1796, c: 2864 }
    },
    {
      id: "R-038_p2",
      name: "能源",
      number: "R-038_p2",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-038_p2.webp?260612",
      prices: { a: 729, b: 1803, c: 2877 }
    },
    {
      id: "R-039",
      name: "能源",
      number: "R-039",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-039.webp?260612",
      prices: { a: 2133, b: 2631, c: 129 }
    },
    {
      id: "R-039_p1",
      name: "能源",
      number: "R-039_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-039_p1.webp?260612",
      prices: { a: 2519, b: 2333, c: 2147 }
    },
    {
      id: "R-040",
      name: "能源",
      number: "R-040",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-040.webp?260612",
      prices: { a: 2155, b: 2785, c: 415 }
    },
    {
      id: "R-040_p1",
      name: "能源",
      number: "R-040_p1",
      series: "Phantom Aria [GD04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-040_p1.webp?260612",
      prices: { a: 921, b: 147, c: 2373 }
    },
    {
      id: "ST01-001",
      name: "高達",
      number: "ST01-001",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001.webp?260612",
      prices: { a: 2504, b: 2228, c: 1952 }
    },
    {
      id: "ST01-001_p1",
      name: "高達",
      number: "ST01-001_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p1.webp?260612",
      prices: { a: 980, b: 560, c: 140 }
    },
    {
      id: "ST01-002",
      name: "高達（MA型態）",
      number: "ST01-002",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-002.webp?260612",
      prices: { a: 2505, b: 2235, c: 1965 }
    },
    {
      id: "ST01-002_p1",
      name: "高達（MA型態）",
      number: "ST01-002_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-002_p1.webp?260612",
      prices: { a: 771, b: 2097, c: 423 }
    },
    {
      id: "ST01-003",
      name: "鋼加農",
      number: "ST01-003",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-003.webp?260612",
      prices: { a: 2506, b: 2242, c: 1978 }
    },
    {
      id: "ST01-003_p1",
      name: "鋼加農",
      number: "ST01-003_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-003_p1.webp?260612",
      prices: { a: 562, b: 634, c: 706 }
    },
    {
      id: "ST01-004",
      name: "鋼坦克",
      number: "ST01-004",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-004.webp?260612",
      prices: { a: 2507, b: 2249, c: 1991 }
    },
    {
      id: "ST01-004_p1",
      name: "鋼坦克",
      number: "ST01-004_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-004_p1.webp?260612",
      prices: { a: 2353, b: 1171, c: 2989 }
    },
    {
      id: "ST01-005",
      name: "吉姆",
      number: "ST01-005",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-005.webp?260612",
      prices: { a: 2508, b: 2256, c: 2004 }
    },
    {
      id: "ST01-005_p1",
      name: "吉姆",
      number: "ST01-005_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-005_p1.webp?260612",
      prices: { a: 2144, b: 2708, c: 272 }
    },
    {
      id: "ST01-006",
      name: "風靈高達（帕梅特刻痕6）",
      number: "ST01-006",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-006.webp?260612",
      prices: { a: 2509, b: 2263, c: 2017 }
    },
    {
      id: "ST01-006_p1",
      name: "風靈高達（帕梅特刻痕6）",
      number: "ST01-006_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-006_p1.webp?260612",
      prices: { a: 1935, b: 1245, c: 555 }
    },
    {
      id: "ST01-007",
      name: "風靈高達（Bit on Form）",
      number: "ST01-007",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-007.webp?260612",
      prices: { a: 2510, b: 2270, c: 2030 }
    },
    {
      id: "ST01-007_p1",
      name: "風靈高達（Bit on Form）",
      number: "ST01-007_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-007_p1.webp?260612",
      prices: { a: 726, b: 1782, c: 2838 }
    },
    {
      id: "ST01-008",
      name: "迪米教練機",
      number: "ST01-008",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-008.webp?260612",
      prices: { a: 2511, b: 2277, c: 2043 }
    },
    {
      id: "ST01-008_p1",
      name: "迪米教練機",
      number: "ST01-008_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-008_p1.webp?260612",
      prices: { a: 517, b: 319, c: 121 }
    },
    {
      id: "ST01-009",
      name: "佐渥特",
      number: "ST01-009",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-009.webp?260612",
      prices: { a: 2512, b: 2284, c: 2056 }
    },
    {
      id: "ST01-009_p1",
      name: "佐渥特",
      number: "ST01-009_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-009_p1.webp?260612",
      prices: { a: 308, b: 1856, c: 404 }
    },
    {
      id: "ST01-010",
      name: "阿姆羅・雷",
      number: "ST01-010",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-010.webp?260612",
      prices: { a: 2534, b: 2438, c: 2342 }
    },
    {
      id: "ST01-010_p1",
      name: "阿姆羅・雷",
      number: "ST01-010_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-010_p1.webp?260612",
      prices: { a: 710, b: 1670, c: 2630 }
    },
    {
      id: "ST01-011",
      name: "蘇萊塔・墨丘利",
      number: "ST01-011",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-011.webp?260612",
      prices: { a: 2535, b: 2445, c: 2355 }
    },
    {
      id: "ST01-011_p1",
      name: "蘇萊塔・墨丘利",
      number: "ST01-011_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-011_p1.webp?260612",
      prices: { a: 501, b: 207, c: 2913 }
    },
    {
      id: "ST01-012",
      name: "滿身瘡痍",
      number: "ST01-012",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-012.webp?260612",
      prices: { a: 2536, b: 2452, c: 2368 }
    },
    {
      id: "ST01-012_p1",
      name: "滿身瘡痍",
      number: "ST01-012_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-012_p1.webp?260612",
      prices: { a: 292, b: 1744, c: 196 }
    },
    {
      id: "ST01-013",
      name: "凱的決心",
      number: "ST01-013",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-013.webp?260612",
      prices: { a: 2537, b: 2459, c: 2381 }
    },
    {
      id: "ST01-013_p1",
      name: "凱的決心",
      number: "ST01-013_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-013_p1.webp?260612",
      prices: { a: 2083, b: 2281, c: 2479 }
    },
    {
      id: "ST01-014",
      name: "意外事變",
      number: "ST01-014",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014.webp?260612",
      prices: { a: 2538, b: 2466, c: 2394 }
    },
    {
      id: "ST01-014_p1",
      name: "意外事變",
      number: "ST01-014_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p1.webp?260612",
      prices: { a: 1874, b: 818, c: 2762 }
    },
    {
      id: "ST01-015",
      name: "白色基地",
      number: "ST01-015",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-015.webp?260612",
      prices: { a: 2539, b: 2473, c: 2407 }
    },
    {
      id: "ST01-015_p1",
      name: "白色基地",
      number: "ST01-015_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-015_p1.webp?260612",
      prices: { a: 1665, b: 2355, c: 3045 }
    },
    {
      id: "ST01-016",
      name: "阿斯提卡西亞高等專門學園 地球宿舍",
      number: "ST01-016",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-016.webp?260612",
      prices: { a: 2540, b: 2480, c: 2420 }
    },
    {
      id: "ST01-016_p1",
      name: "阿斯提卡西亞高等專門學園 地球宿舍",
      number: "ST01-016_p1",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-016_p1.webp?260612",
      prices: { a: 456, b: 2892, c: 2328 }
    },
    {
      id: "T-001",
      name: "高達",
      number: "T-001",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-001.webp?260612",
      prices: { a: 1074, b: 1218, c: 1362 }
    },
    {
      id: "T-002",
      name: "鋼加農",
      number: "T-002",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-002.webp?260612",
      prices: { a: 1075, b: 1225, c: 1375 }
    },
    {
      id: "T-003",
      name: "鋼坦克",
      number: "T-003",
      series: "Heroic Beginnings [ST01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-003.webp?260612",
      prices: { a: 1076, b: 1232, c: 1388 }
    },
    {
      id: "ST02-001",
      name: "飛翼高達",
      number: "ST02-001",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-001.webp?260612",
      prices: { a: 2025, b: 1875, c: 1725 }
    },
    {
      id: "ST02-001_p1",
      name: "飛翼高達",
      number: "ST02-001_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-001_p1.webp?260612",
      prices: { a: 91, b: 337, c: 583 }
    },
    {
      id: "ST02-002",
      name: "飛翼高達（鳥型型態）",
      number: "ST02-002",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-002.webp?260612",
      prices: { a: 2026, b: 1882, c: 1738 }
    },
    {
      id: "ST02-002_p1",
      name: "飛翼高達（鳥型型態）",
      number: "ST02-002_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-002_p1.webp?260612",
      prices: { a: 2882, b: 1874, c: 866 }
    },
    {
      id: "ST02-003",
      name: "重砲手高達",
      number: "ST02-003",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-003.webp?260612",
      prices: { a: 2027, b: 1889, c: 1751 }
    },
    {
      id: "ST02-003_p1",
      name: "重砲手高達",
      number: "ST02-003_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-003_p1.webp?260612",
      prices: { a: 1673, b: 2411, c: 149 }
    },
    {
      id: "ST02-004",
      name: "沙漠高達",
      number: "ST02-004",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-004.webp?260612",
      prices: { a: 2028, b: 1896, c: 1764 }
    },
    {
      id: "ST02-004_p1",
      name: "沙漠高達",
      number: "ST02-004_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-004_p1.webp?260612",
      prices: { a: 1464, b: 948, c: 432 }
    },
    {
      id: "ST02-005",
      name: "馬格亞那克",
      number: "ST02-005",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-005.webp?260612",
      prices: { a: 2029, b: 1903, c: 1777 }
    },
    {
      id: "ST02-005_p1",
      name: "馬格亞那克",
      number: "ST02-005_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-005_p1.webp?260612",
      prices: { a: 1255, b: 2485, c: 715 }
    },
    {
      id: "ST02-006",
      name: "托爾吉斯",
      number: "ST02-006",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-006.webp?260612",
      prices: { a: 2030, b: 1910, c: 1790 }
    },
    {
      id: "ST02-006_p1",
      name: "托爾吉斯",
      number: "ST02-006_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-006_p1.webp?260612",
      prices: { a: 3046, b: 3022, c: 2998 }
    },
    {
      id: "ST02-007",
      name: "里歐",
      number: "ST02-007",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-007.webp?260612",
      prices: { a: 2031, b: 1917, c: 1803 }
    },
    {
      id: "ST02-007_p1",
      name: "里歐",
      number: "ST02-007_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-007_p1.webp?260612",
      prices: { a: 2837, b: 1559, c: 281 }
    },
    {
      id: "ST02-008",
      name: "艾亞利茲",
      number: "ST02-008",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-008.webp?260612",
      prices: { a: 2032, b: 1924, c: 1816 }
    },
    {
      id: "ST02-008_p1",
      name: "艾亞利茲",
      number: "ST02-008_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-008_p1.webp?260612",
      prices: { a: 2628, b: 96, c: 564 }
    },
    {
      id: "ST02-009",
      name: "特拉哥斯",
      number: "ST02-009",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-009.webp?260612",
      prices: { a: 2033, b: 1931, c: 1829 }
    },
    {
      id: "ST02-009_p1",
      name: "特拉哥斯",
      number: "ST02-009_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-009_p1.webp?260612",
      prices: { a: 2419, b: 1633, c: 847 }
    },
    {
      id: "ST02-010",
      name: "希洛・唯",
      number: "ST02-010",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-010.webp?260612",
      prices: { a: 2055, b: 2085, c: 2115 }
    },
    {
      id: "ST02-010_p1",
      name: "希洛・唯",
      number: "ST02-010_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-010_p1.webp?260612",
      prices: { a: 2821, b: 1447, c: 73 }
    },
    {
      id: "ST02-011",
      name: "傑克斯・馬吉斯",
      number: "ST02-011",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-011.webp?260612",
      prices: { a: 2056, b: 2092, c: 2128 }
    },
    {
      id: "ST02-011_p1",
      name: "傑克斯・馬吉斯",
      number: "ST02-011_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-011_p1.webp?260612",
      prices: { a: 2612, b: 2984, c: 356 }
    },
    {
      id: "ST02-012",
      name: "全彈發射",
      number: "ST02-012",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-012.webp?260612",
      prices: { a: 2057, b: 2099, c: 2141 }
    },
    {
      id: "ST02-012_p1",
      name: "全彈發射",
      number: "ST02-012_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-012_p1.webp?260612",
      prices: { a: 1403, b: 521, c: 2639 }
    },
    {
      id: "ST02-013",
      name: "溫和的音色",
      number: "ST02-013",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-013.webp?260612",
      prices: { a: 2058, b: 2106, c: 2154 }
    },
    {
      id: "ST02-013_p1",
      name: "溫和的音色",
      number: "ST02-013_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-013_p1.webp?260612",
      prices: { a: 1194, b: 2058, c: 2922 }
    },
    {
      id: "ST02-014",
      name: "包圍戰術",
      number: "ST02-014",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-014.webp?260612",
      prices: { a: 2059, b: 2113, c: 2167 }
    },
    {
      id: "ST02-014_p1",
      name: "包圍戰術",
      number: "ST02-014_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-014_p1.webp?260612",
      prices: { a: 985, b: 595, c: 205 }
    },
    {
      id: "ST02-015",
      name: "聖加百列學園",
      number: "ST02-015",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-015.webp?260612",
      prices: { a: 2060, b: 2120, c: 2180 }
    },
    {
      id: "ST02-015_p1",
      name: "聖加百列學園",
      number: "ST02-015_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-015_p1.webp?260612",
      prices: { a: 776, b: 2132, c: 488 }
    },
    {
      id: "ST02-016",
      name: "科西嘉基地",
      number: "ST02-016",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-016.webp?260612",
      prices: { a: 2061, b: 2127, c: 2193 }
    },
    {
      id: "ST02-016_p1",
      name: "科西嘉基地",
      number: "ST02-016_p1",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-016_p1.webp?260612",
      prices: { a: 2567, b: 2669, c: 2771 }
    },
    {
      id: "T-004",
      name: "里歐",
      number: "T-004",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-004.webp?260612",
      prices: { a: 1077, b: 1239, c: 1401 }
    },
    {
      id: "T-005",
      name: "托爾吉斯",
      number: "T-005",
      series: "Wings of Advance [ST02]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-005.webp?260612",
      prices: { a: 1078, b: 1246, c: 1414 }
    },
    {
      id: "ST03-001",
      name: "新安州",
      number: "ST03-001",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-001.webp?260612",
      prices: { a: 1546, b: 1522, c: 1498 }
    },
    {
      id: "ST03-001_p1",
      name: "新安州",
      number: "ST03-001_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-001_p1.webp?260612",
      prices: { a: 2202, b: 114, c: 1026 }
    },
    {
      id: "ST03-002",
      name: "吉拉・祖魯（安傑羅・梭斐專用機）",
      number: "ST03-002",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-002.webp?260612",
      prices: { a: 1547, b: 1529, c: 1511 }
    },
    {
      id: "ST03-002_p1",
      name: "吉拉・祖魯（安傑羅・梭斐專用機）",
      number: "ST03-002_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-002_p1.webp?260612",
      prices: { a: 1993, b: 1651, c: 1309 }
    },
    {
      id: "ST03-003",
      name: "吉拉・祖魯",
      number: "ST03-003",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-003.webp?260612",
      prices: { a: 1548, b: 1536, c: 1524 }
    },
    {
      id: "ST03-003_p1",
      name: "吉拉・祖魯",
      number: "ST03-003_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-003_p1.webp?260612",
      prices: { a: 784, b: 2188, c: 592 }
    },
    {
      id: "ST03-004",
      name: "卡薩D（帶袖的規格）",
      number: "ST03-004",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-004.webp?260612",
      prices: { a: 1549, b: 1543, c: 1537 }
    },
    {
      id: "ST03-004_p1",
      name: "卡薩D（帶袖的規格）",
      number: "ST03-004_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-004_p1.webp?260612",
      prices: { a: 575, b: 725, c: 875 }
    },
    {
      id: "ST03-005",
      name: "特拉傑（帶袖的規格）",
      number: "ST03-005",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-005.webp?260612",
      prices: { a: 1550, b: 1550, c: 1550 }
    },
    {
      id: "ST03-005_p1",
      name: "特拉傑（帶袖的規格）",
      number: "ST03-005_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-005_p1.webp?260612",
      prices: { a: 366, b: 2262, c: 1158 }
    },
    {
      id: "ST03-006",
      name: "夏亞專用薩克Ⅱ",
      number: "ST03-006",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-006.webp?260612",
      prices: { a: 1551, b: 1557, c: 1563 }
    },
    {
      id: "ST03-006_p1",
      name: "夏亞專用薩克Ⅱ",
      number: "ST03-006_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-006_p1.webp?260612",
      prices: { a: 2157, b: 2799, c: 441 }
    },
    {
      id: "ST03-007",
      name: "薩克Ⅰ",
      number: "ST03-007",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-007.webp?260612",
      prices: { a: 1552, b: 1564, c: 1576 }
    },
    {
      id: "ST03-007_p1",
      name: "薩克Ⅰ",
      number: "ST03-007_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-007_p1.webp?260612",
      prices: { a: 1948, b: 1336, c: 724 }
    },
    {
      id: "ST03-008",
      name: "薩克Ⅱ",
      number: "ST03-008",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-008.webp?260612",
      prices: { a: 1553, b: 1571, c: 1589 }
    },
    {
      id: "ST03-008_p1",
      name: "薩克Ⅱ",
      number: "ST03-008_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-008_p1.webp?260612",
      prices: { a: 1739, b: 2873, c: 1007 }
    },
    {
      id: "ST03-009",
      name: "古夫",
      number: "ST03-009",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-009.webp?260612",
      prices: { a: 1554, b: 1578, c: 1602 }
    },
    {
      id: "ST03-009_p1",
      name: "古夫",
      number: "ST03-009_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-009_p1.webp?260612",
      prices: { a: 530, b: 410, c: 290 }
    },
    {
      id: "ST03-010",
      name: "弗爾・伏朗托",
      number: "ST03-010",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-010.webp?260612",
      prices: { a: 1576, b: 1732, c: 1888 }
    },
    {
      id: "ST03-010_p1",
      name: "弗爾・伏朗托",
      number: "ST03-010_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-010_p1.webp?260612",
      prices: { a: 1932, b: 1224, c: 516 }
    },
    {
      id: "ST03-011",
      name: "夏亞・阿茲那布爾",
      number: "ST03-011",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-011.webp?260612",
      prices: { a: 1577, b: 1739, c: 1901 }
    },
    {
      id: "ST03-011_p1",
      name: "夏亞・阿茲那布爾",
      number: "ST03-011_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-011_p1.webp?260612",
      prices: { a: 1723, b: 2761, c: 799 }
    },
    {
      id: "ST03-012",
      name: "激昂",
      number: "ST03-012",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-012.webp?260612",
      prices: { a: 1578, b: 1746, c: 1914 }
    },
    {
      id: "ST03-012_p1",
      name: "激昂",
      number: "ST03-012_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-012_p1.webp?260612",
      prices: { a: 514, b: 298, c: 82 }
    },
    {
      id: "ST03-013",
      name: "格鬥戰",
      number: "ST03-013",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-013.webp?260612",
      prices: { a: 1579, b: 1753, c: 1927 }
    },
    {
      id: "ST03-013_p1",
      name: "格鬥戰",
      number: "ST03-013_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-013_p1.webp?260612",
      prices: { a: 305, b: 1835, c: 365 }
    },
    {
      id: "ST03-014",
      name: "青色巨星",
      number: "ST03-014",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-014.webp?260612",
      prices: { a: 1580, b: 1760, c: 1940 }
    },
    {
      id: "ST03-014_p1",
      name: "青色巨星",
      number: "ST03-014_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-014_p1.webp?260612",
      prices: { a: 96, b: 372, c: 648 }
    },
    {
      id: "ST03-015",
      name: "雷烏路拉",
      number: "ST03-015",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-015.webp?260612",
      prices: { a: 1581, b: 1767, c: 1953 }
    },
    {
      id: "ST03-015_p1",
      name: "雷烏路拉",
      number: "ST03-015_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-015_p1.webp?260612",
      prices: { a: 1887, b: 909, c: 2931 }
    },
    {
      id: "ST03-016",
      name: "法爾梅爾",
      number: "ST03-016",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-016.webp?260612",
      prices: { a: 1582, b: 1774, c: 1966 }
    },
    {
      id: "ST03-016_p1",
      name: "法爾梅爾",
      number: "ST03-016_p1",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-016_p1.webp?260612",
      prices: { a: 1678, b: 2446, c: 214 }
    },
    {
      id: "T-006",
      name: "夏亞專用薩克Ⅱ",
      number: "T-006",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-006.webp?260612",
      prices: { a: 1079, b: 1253, c: 1427 }
    },
    {
      id: "T-007",
      name: "薩克Ⅱ",
      number: "T-007",
      series: "Zeon's Rush [ST03]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-007.webp?260612",
      prices: { a: 1080, b: 1260, c: 1440 }
    },
    {
      id: "ST04-001",
      name: "機動型突擊高達",
      number: "ST04-001",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-001.webp?260612",
      prices: { a: 1067, b: 1169, c: 1271 }
    },
    {
      id: "ST04-001_p1",
      name: "機動型突擊高達",
      number: "ST04-001_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-001_p1.webp?260612",
      prices: { a: 1313, b: 2891, c: 1469 }
    },
    {
      id: "ST04-002",
      name: "突擊高達",
      number: "ST04-002",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-002.webp?260612",
      prices: { a: 1068, b: 1176, c: 1284 }
    },
    {
      id: "ST04-002_p1",
      name: "突擊高達",
      number: "ST04-002_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-002_p1.webp?260612",
      prices: { a: 104, b: 428, c: 752 }
    },
    {
      id: "ST04-003",
      name: "梅比烏斯零式",
      number: "ST04-003",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-003.webp?260612",
      prices: { a: 1069, b: 1183, c: 1297 }
    },
    {
      id: "ST04-003_p1",
      name: "梅比烏斯零式",
      number: "ST04-003_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-003_p1.webp?260612",
      prices: { a: 2895, b: 1965, c: 1035 }
    },
    {
      id: "ST04-004",
      name: "梅比烏斯",
      number: "ST04-004",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-004.webp?260612",
      prices: { a: 1070, b: 1190, c: 1310 }
    },
    {
      id: "ST04-004_p1",
      name: "梅比烏斯",
      number: "ST04-004_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-004_p1.webp?260612",
      prices: { a: 2686, b: 502, c: 1318 }
    },
    {
      id: "ST04-005",
      name: "突擊達加",
      number: "ST04-005",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-005.webp?260612",
      prices: { a: 1071, b: 1197, c: 1323 }
    },
    {
      id: "ST04-005_p1",
      name: "突擊達加",
      number: "ST04-005_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-005_p1.webp?260612",
      prices: { a: 1477, b: 1039, c: 601 }
    },
    {
      id: "ST04-006",
      name: "神盾高達",
      number: "ST04-006",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-006.webp?260612",
      prices: { a: 1072, b: 1204, c: 1336 }
    },
    {
      id: "ST04-006_p1",
      name: "神盾高達",
      number: "ST04-006_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-006_p1.webp?260612",
      prices: { a: 1268, b: 2576, c: 884 }
    },
    {
      id: "ST04-007",
      name: "神盾高達（MA型態）",
      number: "ST04-007",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-007.webp?260612",
      prices: { a: 1073, b: 1211, c: 1349 }
    },
    {
      id: "ST04-007_p1",
      name: "神盾高達（MA型態）",
      number: "ST04-007_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-007_p1.webp?260612",
      prices: { a: 1059, b: 1113, c: 1167 }
    },
    {
      id: "ST04-008",
      name: "基恩",
      number: "ST04-008",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-008.webp?260612",
      prices: { a: 1074, b: 1218, c: 1362 }
    },
    {
      id: "ST04-008_p1",
      name: "基恩",
      number: "ST04-008_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-008_p1.webp?260612",
      prices: { a: 850, b: 2650, c: 1450 }
    },
    {
      id: "ST04-009",
      name: "基恩（米蓋爾・艾曼專用機）",
      number: "ST04-009",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-009.webp?260612",
      prices: { a: 1075, b: 1225, c: 1375 }
    },
    {
      id: "ST04-009_p1",
      name: "基恩（米蓋爾・艾曼專用機）",
      number: "ST04-009_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-009_p1.webp?260612",
      prices: { a: 2641, b: 187, c: 733 }
    },
    {
      id: "ST04-010",
      name: "基拉・大和",
      number: "ST04-010",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-010.webp?260612",
      prices: { a: 1097, b: 1379, c: 1661 }
    },
    {
      id: "ST04-010_p1",
      name: "基拉・大和",
      number: "ST04-010_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-010_p1.webp?260612",
      prices: { a: 1043, b: 1001, c: 959 }
    },
    {
      id: "ST04-011",
      name: "阿斯蘭・薩拉",
      number: "ST04-011",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-011.webp?260612",
      prices: { a: 1098, b: 1386, c: 1674 }
    },
    {
      id: "ST04-011_p1",
      name: "阿斯蘭・薩拉",
      number: "ST04-011_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-011_p1.webp?260612",
      prices: { a: 2834, b: 1538, c: 242 }
    },
    {
      id: "ST04-012",
      name: "突擊背包",
      number: "ST04-012",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-012.webp?260612",
      prices: { a: 1099, b: 1393, c: 1687 }
    },
    {
      id: "ST04-012_p1",
      name: "攻擊背包",
      number: "ST04-012_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-012_p1.webp?260612",
      prices: { a: 2625, b: 75, c: 525 }
    },
    {
      id: "ST04-013",
      name: "安迪米翁之鷹",
      number: "ST04-013",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-013.webp?260612",
      prices: { a: 1100, b: 1400, c: 1700 }
    },
    {
      id: "ST04-013_p1",
      name: "安迪米翁之鷹",
      number: "ST04-013_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-013_p1.webp?260612",
      prices: { a: 2416, b: 1612, c: 808 }
    },
    {
      id: "ST04-014",
      name: "黃昏的魔彈",
      number: "ST04-014",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-014.webp?260612",
      prices: { a: 1101, b: 1407, c: 1713 }
    },
    {
      id: "ST04-014_p1",
      name: "黃昏的魔彈",
      number: "ST04-014_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-014_p1.webp?260612",
      prices: { a: 2207, b: 149, c: 1091 }
    },
    {
      id: "ST04-015",
      name: "大天使號",
      number: "ST04-015",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-015.webp?260612",
      prices: { a: 1102, b: 1414, c: 1726 }
    },
    {
      id: "ST04-015_p1",
      name: "大天使號",
      number: "ST04-015_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-015_p1.webp?260612",
      prices: { a: 998, b: 686, c: 374 }
    },
    {
      id: "ST04-016",
      name: "維薩里號",
      number: "ST04-016",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-016.webp?260612",
      prices: { a: 1103, b: 1421, c: 1739 }
    },
    {
      id: "ST04-016_p1",
      name: "維薩里號",
      number: "ST04-016_p1",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-016_p1.webp?260612",
      prices: { a: 789, b: 2223, c: 657 }
    },
    {
      id: "T-008",
      name: "機動型突擊高達",
      number: "T-008",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-008.webp?260612",
      prices: { a: 1081, b: 1267, c: 1453 }
    },
    {
      id: "T-009",
      name: "砲戰型突擊高達",
      number: "T-009",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-009.webp?260612",
      prices: { a: 1082, b: 1274, c: 1466 }
    },
    {
      id: "T-010",
      name: "重劍型突擊高達",
      number: "T-010",
      series: "SEED Strike [ST04]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-010.webp?260612",
      prices: { a: 1104, b: 1428, c: 1752 }
    },
    {
      id: "ST01-014_p4",
      name: "意外事變",
      number: "ST01-014_p4",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p4.webp?260612",
      prices: { a: 1877, b: 839, c: 2801 }
    },
    {
      id: "ST01-014_p5",
      name: "意外事變",
      number: "ST01-014_p5",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p5.webp?260612",
      prices: { a: 1878, b: 846, c: 2814 }
    },
    {
      id: "ST05-001",
      name: "高達巴巴托司(第4形態)",
      number: "ST05-001",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-001.webp?260612",
      prices: { a: 2588, b: 2816, c: 3044 }
    },
    {
      id: "ST05-001_p1",
      name: "高達巴巴托司(第4形態)",
      number: "ST05-001_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-001_p1.webp?260612",
      prices: { a: 424, b: 2668, c: 1912 }
    },
    {
      id: "ST05-002",
      name: "高達巴巴托司(第2形態)",
      number: "ST05-002",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-002.webp?260612",
      prices: { a: 2589, b: 2823, c: 57 }
    },
    {
      id: "ST05-002_p1",
      name: "高達巴巴托司(第2形態)",
      number: "ST05-002_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-002_p1.webp?260612",
      prices: { a: 2215, b: 205, c: 1195 }
    },
    {
      id: "ST05-003",
      name: "CGS機動工兵",
      number: "ST05-003",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-003.webp?260612",
      prices: { a: 2590, b: 2830, c: 70 }
    },
    {
      id: "ST05-003_p1",
      name: "CGS機動工兵",
      number: "ST05-003_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-003_p1.webp?260612",
      prices: { a: 2006, b: 1742, c: 1478 }
    },
    {
      id: "ST05-004",
      name: "格雷茲改",
      number: "ST05-004",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-004.webp?260612",
      prices: { a: 2591, b: 2837, c: 83 }
    },
    {
      id: "ST05-004_p1",
      name: "格雷茲改",
      number: "ST05-004_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-004_p1.webp?260612",
      prices: { a: 1797, b: 279, c: 1761 }
    },
    {
      id: "ST05-005",
      name: "高達古辛重鍛型",
      number: "ST05-005",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-005.webp?260612",
      prices: { a: 2592, b: 2844, c: 96 }
    },
    {
      id: "ST05-005_p1",
      name: "高達古辛重鍛型",
      number: "ST05-005_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-005_p1.webp?260612",
      prices: { a: 588, b: 816, c: 1044 }
    },
    {
      id: "ST05-006",
      name: "百鍊",
      number: "ST05-006",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-006.webp?260612",
      prices: { a: 2593, b: 2851, c: 109 }
    },
    {
      id: "ST05-006_p1",
      name: "百鍊",
      number: "ST05-006_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-006_p1.webp?260612",
      prices: { a: 379, b: 2353, c: 1327 }
    },
    {
      id: "ST05-007",
      name: "燕式格雷茲（麥吉利斯機）",
      number: "ST05-007",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-007.webp?260612",
      prices: { a: 2594, b: 2858, c: 122 }
    },
    {
      id: "ST05-007_p1",
      name: "燕式格雷茲（麥吉利斯機）",
      number: "ST05-007_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-007_p1.webp?260612",
      prices: { a: 170, b: 890, c: 1610 }
    },
    {
      id: "ST05-008",
      name: "格雷茲（指揮官機）",
      number: "ST05-008",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-008.webp?260612",
      prices: { a: 2595, b: 2865, c: 135 }
    },
    {
      id: "ST05-008_p1",
      name: "格雷茲（指揮官機）",
      number: "ST05-008_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-008_p1.webp?260612",
      prices: { a: 1961, b: 1427, c: 893 }
    },
    {
      id: "ST05-009",
      name: "格雷茲",
      number: "ST05-009",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-009.webp?260612",
      prices: { a: 2596, b: 2872, c: 148 }
    },
    {
      id: "ST05-009_p1",
      name: "格雷茲",
      number: "ST05-009_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-009_p1.webp?260612",
      prices: { a: 1752, b: 2964, c: 1176 }
    },
    {
      id: "ST05-010",
      name: "三日月・奧古斯",
      number: "ST05-010",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-010.webp?260612",
      prices: { a: 2618, b: 3026, c: 434 }
    },
    {
      id: "ST05-010_p1",
      name: "三日月・奧古斯",
      number: "ST05-010_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-010_p1.webp?260612",
      prices: { a: 154, b: 778, c: 1402 }
    },
    {
      id: "ST05-011",
      name: "昭弘・亞特蘭大",
      number: "ST05-011",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-011.webp?260612",
      prices: { a: 2619, b: 3033, c: 447 }
    },
    {
      id: "ST05-011_p1",
      name: "昭弘・亞特蘭大",
      number: "ST05-011_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-011_p1.webp?260612",
      prices: { a: 1945, b: 1315, c: 685 }
    },
    {
      id: "ST05-012",
      name: "麥吉利斯・法里德",
      number: "ST05-012",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-012.webp?260612",
      prices: { a: 2620, b: 3040, c: 460 }
    },
    {
      id: "ST05-012_p1",
      name: "麥吉利斯・法里德",
      number: "ST05-012_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-012_p1.webp?260612",
      prices: { a: 1736, b: 2852, c: 968 }
    },
    {
      id: "ST05-013",
      name: "鐵與血",
      number: "ST05-013",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-013.webp?260612",
      prices: { a: 2621, b: 3047, c: 473 }
    },
    {
      id: "ST05-013_p1",
      name: "鐵與血",
      number: "ST05-013_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-013_p1.webp?260612",
      prices: { a: 1527, b: 1389, c: 1251 }
    },
    {
      id: "ST05-014",
      name: "致命一擊",
      number: "ST05-014",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-014.webp?260612",
      prices: { a: 2622, b: 54, c: 486 }
    },
    {
      id: "ST05-014_p1",
      name: "致命一擊",
      number: "ST05-014_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-014_p1.webp?260612",
      prices: { a: 318, b: 1926, c: 534 }
    },
    {
      id: "ST05-015",
      name: "漁火",
      number: "ST05-015",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-015.webp?260612",
      prices: { a: 2623, b: 61, c: 499 }
    },
    {
      id: "ST05-015_p1",
      name: "漁火",
      number: "ST05-015_p1",
      series: "Iron Bloom [ST05]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-015_p1.webp?260612",
      prices: { a: 109, b: 463, c: 817 }
    },
    {
      id: "ST03-013_p3",
      name: "格鬥戰",
      number: "ST03-013_p3",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-013_p3.webp?260612",
      prices: { a: 307, b: 1849, c: 391 }
    },
    {
      id: "ST03-013_p4",
      name: "格鬥戰",
      number: "ST03-013_p4",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-013_p4.webp?260612",
      prices: { a: 308, b: 1856, c: 404 }
    },
    {
      id: "ST06-001",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-001",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-001.webp?260612",
      prices: { a: 2109, b: 2463, c: 2817 }
    },
    {
      id: "ST06-001_p1",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-001_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-001_p1.webp?260612",
      prices: { a: 1535, b: 1445, c: 1355 }
    },
    {
      id: "ST06-002",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-002",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-002.webp?260612",
      prices: { a: 2110, b: 2470, c: 2830 }
    },
    {
      id: "ST06-002_p1",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-002_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-002_p1.webp?260612",
      prices: { a: 1326, b: 2982, c: 1638 }
    },
    {
      id: "ST06-003",
      name: "里克・德姆 蓋亞機（GQ）",
      number: "ST06-003",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-003.webp?260612",
      prices: { a: 2111, b: 2477, c: 2843 }
    },
    {
      id: "ST06-003_p1",
      name: "里克・德姆 蓋亞機（GQ）",
      number: "ST06-003_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-003_p1.webp?260612",
      prices: { a: 1117, b: 1519, c: 1921 }
    },
    {
      id: "ST06-004",
      name: "傑爾古格（GQ）",
      number: "ST06-004",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-004.webp?260612",
      prices: { a: 2112, b: 2484, c: 2856 }
    },
    {
      id: "ST06-004_p1",
      name: "傑爾古格（GQ）",
      number: "ST06-004_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-004_p1.webp?260612",
      prices: { a: 908, b: 56, c: 2204 }
    },
    {
      id: "ST06-005",
      name: "紅色高達",
      number: "ST06-005",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-005.webp?260612",
      prices: { a: 2113, b: 2491, c: 2869 }
    },
    {
      id: "ST06-005_p1",
      name: "紅色高達",
      number: "ST06-005_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-005_p1.webp?260612",
      prices: { a: 2699, b: 593, c: 1487 }
    },
    {
      id: "ST06-006",
      name: "紅色高達",
      number: "ST06-006",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-006.webp?260612",
      prices: { a: 2114, b: 2498, c: 2882 }
    },
    {
      id: "ST06-006_p1",
      name: "紅色高達",
      number: "ST06-006_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-006_p1.webp?260612",
      prices: { a: 2490, b: 2130, c: 1770 }
    },
    {
      id: "ST06-007",
      name: "里克・德姆 奧爾迪加機（GQ）",
      number: "ST06-007",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-007.webp?260612",
      prices: { a: 2115, b: 2505, c: 2895 }
    },
    {
      id: "ST06-007_p1",
      name: "里克・德姆 奧爾迪加機（GQ）",
      number: "ST06-007_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-007_p1.webp?260612",
      prices: { a: 2281, b: 667, c: 2053 }
    },
    {
      id: "ST06-008",
      name: "傑爾古格 菅井座機（GQ）",
      number: "ST06-008",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-008.webp?260612",
      prices: { a: 2116, b: 2512, c: 2908 }
    },
    {
      id: "ST06-008_p1",
      name: "傑爾古格 菅井座機（GQ）",
      number: "ST06-008_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-008_p1.webp?260612",
      prices: { a: 1072, b: 1204, c: 1336 }
    },
    {
      id: "ST06-009",
      name: "天手讓葉（瑪秋）",
      number: "ST06-009",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-009.webp?260612",
      prices: { a: 2117, b: 2519, c: 2921 }
    },
    {
      id: "ST06-009_p1",
      name: "天手讓葉（瑪秋）",
      number: "ST06-009_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-009_p1.webp?260612",
      prices: { a: 863, b: 2741, c: 1619 }
    },
    {
      id: "ST06-010",
      name: "修司伊藤",
      number: "ST06-010",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-010.webp?260612",
      prices: { a: 2139, b: 2673, c: 207 }
    },
    {
      id: "ST06-010_p1",
      name: "修司伊藤",
      number: "ST06-010_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-010_p1.webp?260612",
      prices: { a: 1265, b: 2555, c: 845 }
    },
    {
      id: "ST06-011",
      name: "鐵血戰術",
      number: "ST06-011",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-011.webp?260612",
      prices: { a: 2140, b: 2680, c: 220 }
    },
    {
      id: "ST06-011_p1",
      name: "鐵血戰術",
      number: "ST06-011_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-011_p1.webp?260612",
      prices: { a: 1056, b: 1092, c: 1128 }
    },
    {
      id: "ST06-012",
      name: "女高中生與走私人",
      number: "ST06-012",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-012.webp?260612",
      prices: { a: 2141, b: 2687, c: 233 }
    },
    {
      id: "ST06-012_p1",
      name: "女高中生與走私人",
      number: "ST06-012_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-012_p1.webp?260612",
      prices: { a: 847, b: 2629, c: 1411 }
    },
    {
      id: "ST06-013",
      name: "猛將聯合",
      number: "ST06-013",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-013.webp?260612",
      prices: { a: 2142, b: 2694, c: 246 }
    },
    {
      id: "ST06-013_p1",
      name: "猛將聯合",
      number: "ST06-013_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-013_p1.webp?260612",
      prices: { a: 638, b: 1166, c: 1694 }
    },
    {
      id: "ST06-014",
      name: "戰團對決",
      number: "ST06-014",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-014.webp?260612",
      prices: { a: 2143, b: 2701, c: 259 }
    },
    {
      id: "ST06-014_p1",
      name: "戰團對決",
      number: "ST06-014_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-014_p1.webp?260612",
      prices: { a: 2429, b: 1703, c: 977 }
    },
    {
      id: "ST06-015",
      name: "加涅邦有限公司",
      number: "ST06-015",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-015.webp?260612",
      prices: { a: 2144, b: 2708, c: 272 }
    },
    {
      id: "ST06-015_p1",
      name: "加涅邦有限公司",
      number: "ST06-015_p1",
      series: "Clan Unity [ST06]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-015_p1.webp?260612",
      prices: { a: 2220, b: 240, c: 1260 }
    },
    {
      id: "ST05-014_p2",
      name: "致命一擊",
      number: "ST05-014_p2",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-014_p2.webp?260612",
      prices: { a: 319, b: 1933, c: 547 }
    },
    {
      id: "ST05-014_p3",
      name: "致命一擊",
      number: "ST05-014_p3",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-014_p3.webp?260612",
      prices: { a: 320, b: 1940, c: 560 }
    },
    {
      id: "ST07-001",
      name: "能天使高達",
      number: "ST07-001",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-001.webp?260612",
      prices: { a: 1630, b: 2110, c: 2590 }
    },
    {
      id: "ST07-001_p1",
      name: "能天使高達",
      number: "ST07-001_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-001_p1.webp?260612",
      prices: { a: 646, b: 1222, c: 1798 }
    },
    {
      id: "ST07-002",
      name: "能天使高達",
      number: "ST07-002",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-002.webp?260612",
      prices: { a: 1631, b: 2117, c: 2603 }
    },
    {
      id: "ST07-002_p1",
      name: "能天使高達",
      number: "ST07-002_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-002_p1.webp?260612",
      prices: { a: 437, b: 2759, c: 2081 }
    },
    {
      id: "ST07-003",
      name: "德天使高達",
      number: "ST07-003",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-003.webp?260612",
      prices: { a: 1632, b: 2124, c: 2616 }
    },
    {
      id: "ST07-003_p1",
      name: "德天使高達",
      number: "ST07-003_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-003_p1.webp?260612",
      prices: { a: 228, b: 1296, c: 2364 }
    },
    {
      id: "ST07-004",
      name: "德天使高達",
      number: "ST07-004",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-004.webp?260612",
      prices: { a: 1633, b: 2131, c: 2629 }
    },
    {
      id: "ST07-004_p1",
      name: "德天使高達",
      number: "ST07-004_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-004_p1.webp?260612",
      prices: { a: 2019, b: 1833, c: 1647 }
    },
    {
      id: "ST07-005",
      name: "力天使高達",
      number: "ST07-005",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-005.webp?260612",
      prices: { a: 1634, b: 2138, c: 2642 }
    },
    {
      id: "ST07-005_p1",
      name: "力天使高達",
      number: "ST07-005_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-005_p1.webp?260612",
      prices: { a: 1810, b: 370, c: 1930 }
    },
    {
      id: "ST07-006",
      name: "力天使高達",
      number: "ST07-006",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-006.webp?260612",
      prices: { a: 1635, b: 2145, c: 2655 }
    },
    {
      id: "ST07-006_p1",
      name: "力天使高達",
      number: "ST07-006_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-006_p1.webp?260612",
      prices: { a: 1601, b: 1907, c: 2213 }
    },
    {
      id: "ST07-007",
      name: "主天使高達",
      number: "ST07-007",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-007.webp?260612",
      prices: { a: 1636, b: 2152, c: 2668 }
    },
    {
      id: "ST07-007_p1",
      name: "主天使高達",
      number: "ST07-007_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-007_p1.webp?260612",
      prices: { a: 392, b: 2444, c: 1496 }
    },
    {
      id: "ST07-008",
      name: "主天使高達（飛行型態）",
      number: "ST07-008",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-008.webp?260612",
      prices: { a: 1637, b: 2159, c: 2681 }
    },
    {
      id: "ST07-008_p1",
      name: "主天使高達（飛行型態）",
      number: "ST07-008_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-008_p1.webp?260612",
      prices: { a: 183, b: 981, c: 1779 }
    },
    {
      id: "ST07-009",
      name: "剎那・F・塞耶",
      number: "ST07-009",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-009.webp?260612",
      prices: { a: 1638, b: 2166, c: 2694 }
    },
    {
      id: "ST07-009_p1",
      name: "剎那・F・塞耶",
      number: "ST07-009_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-009_p1.webp?260612",
      prices: { a: 2974, b: 2518, c: 2062 }
    },
    {
      id: "ST07-010",
      name: "提耶利亞・厄德",
      number: "ST07-010",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-010.webp?260612",
      prices: { a: 1660, b: 2320, c: 2980 }
    },
    {
      id: "ST07-010_p1",
      name: "提耶利亞・厄德",
      number: "ST07-010_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-010_p1.webp?260612",
      prices: { a: 376, b: 2332, c: 1288 }
    },
    {
      id: "ST07-011",
      name: "洛克昂・史特拉托斯（尼爾・狄蘭迪）",
      number: "ST07-011",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-011.webp?260612",
      prices: { a: 1661, b: 2327, c: 2993 }
    },
    {
      id: "ST07-011_p1",
      name: "洛克昂・史特拉托斯（尼爾・狄蘭迪）",
      number: "ST07-011_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-011_p1.webp?260612",
      prices: { a: 167, b: 869, c: 1571 }
    },
    {
      id: "ST07-012",
      name: "阿雷路亞・帕普提茲姆",
      number: "ST07-012",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-012.webp?260612",
      prices: { a: 1662, b: 2334, c: 3006 }
    },
    {
      id: "ST07-012_p1",
      name: "阿雷路亞・帕普提茲姆",
      number: "ST07-012_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-012_p1.webp?260612",
      prices: { a: 2958, b: 2406, c: 1854 }
    },
    {
      id: "ST07-013",
      name: "武力介入",
      number: "ST07-013",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-013.webp?260612",
      prices: { a: 1663, b: 2341, c: 3019 }
    },
    {
      id: "ST07-013_p1",
      name: "武力介入",
      number: "ST07-013_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-013_p1.webp?260612",
      prices: { a: 1749, b: 2943, c: 1137 }
    },
    {
      id: "ST07-014",
      name: "戰術預報員",
      number: "ST07-014",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-014.webp?260612",
      prices: { a: 1664, b: 2348, c: 3032 }
    },
    {
      id: "ST07-014_p1",
      name: "戰術預報員",
      number: "ST07-014_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-014_p1.webp?260612",
      prices: { a: 1540, b: 1480, c: 1420 }
    },
    {
      id: "ST07-015",
      name: "托勒密號",
      number: "ST07-015",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-015.webp?260612",
      prices: { a: 1665, b: 2355, c: 3045 }
    },
    {
      id: "ST07-015_p1",
      name: "托勒密號",
      number: "ST07-015_p1",
      series: "Celestial Drive [ST07]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-015_p1.webp?260612",
      prices: { a: 1331, b: 3017, c: 1703 }
    },
    {
      id: "ST02-014_p2",
      name: "包圍戰術",
      number: "ST02-014_p2",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-014_p2.webp?260612",
      prices: { a: 986, b: 602, c: 218 }
    },
    {
      id: "ST02-014_p3",
      name: "包圍戰術",
      number: "ST02-014_p3",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-014_p3.webp?260612",
      prices: { a: 987, b: 609, c: 231 }
    },
    {
      id: "ST08-001",
      name: "Ξ高達",
      number: "ST08-001",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-001.webp?260612",
      prices: { a: 1151, b: 1757, c: 2363 }
    },
    {
      id: "ST08-001_p1",
      name: "Ξ高達",
      number: "ST08-001_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-001_p1.webp?260612",
      prices: { a: 2757, b: 999, c: 2241 }
    },
    {
      id: "ST08-002",
      name: "Ξ高達",
      number: "ST08-002",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-002.webp?260612",
      prices: { a: 1152, b: 1764, c: 2376 }
    },
    {
      id: "ST08-002_p1",
      name: "Ξ高達",
      number: "ST08-002_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-002_p1.webp?260612",
      prices: { a: 2548, b: 2536, c: 2524 }
    },
    {
      id: "ST08-003",
      name: "梅薩F型裸裝 指揮官機",
      number: "ST08-003",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-003.webp?260612",
      prices: { a: 1153, b: 1771, c: 2389 }
    },
    {
      id: "ST08-003_p1",
      name: "梅薩F型裸裝 指揮官機",
      number: "ST08-003_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-003_p1.webp?260612",
      prices: { a: 2339, b: 1073, c: 2807 }
    },
    {
      id: "ST08-004",
      name: "梅薩F01型",
      number: "ST08-004",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-004.webp?260612",
      prices: { a: 1154, b: 1778, c: 2402 }
    },
    {
      id: "ST08-004_p1",
      name: "梅薩F01型",
      number: "ST08-004_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-004_p1.webp?260612",
      prices: { a: 1130, b: 1610, c: 2090 }
    },
    {
      id: "ST08-005",
      name: "梅薩F02型用機雷",
      number: "ST08-005",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-005.webp?260612",
      prices: { a: 1155, b: 1785, c: 2415 }
    },
    {
      id: "ST08-005_p1",
      name: "梅薩F02型用機雷",
      number: "ST08-005_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-005_p1.webp?260612",
      prices: { a: 921, b: 147, c: 2373 }
    },
    {
      id: "ST08-006",
      name: "潘娜洛普",
      number: "ST08-006",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-006.webp?260612",
      prices: { a: 1156, b: 1792, c: 2428 }
    },
    {
      id: "ST08-006_p1",
      name: "潘娜洛普",
      number: "ST08-006_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-006_p1.webp?260612",
      prices: { a: 712, b: 1684, c: 2656 }
    },
    {
      id: "ST08-007",
      name: "潘娜洛普",
      number: "ST08-007",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-007.webp?260612",
      prices: { a: 1157, b: 1799, c: 2441 }
    },
    {
      id: "ST08-007_p1",
      name: "潘娜洛普",
      number: "ST08-007_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-007_p1.webp?260612",
      prices: { a: 2503, b: 2221, c: 1939 }
    },
    {
      id: "ST08-008",
      name: "古斯塔夫・卡爾00型",
      number: "ST08-008",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-008.webp?260612",
      prices: { a: 1158, b: 1806, c: 2454 }
    },
    {
      id: "ST08-008_p1",
      name: "古斯塔夫・卡爾00型",
      number: "ST08-008_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-008_p1.webp?260612",
      prices: { a: 2294, b: 758, c: 2222 }
    },
    {
      id: "ST08-009",
      name: "陸戰用傑鋼A型（獵人頭部隊規格）",
      number: "ST08-009",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-009.webp?260612",
      prices: { a: 1159, b: 1813, c: 2467 }
    },
    {
      id: "ST08-009_p1",
      name: "陸戰用傑鋼A型（獵人頭部隊規格）",
      number: "ST08-009_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-009_p1.webp?260612",
      prices: { a: 2085, b: 2295, c: 2505 }
    },
    {
      id: "ST08-010",
      name: "哈薩威・諾亞",
      number: "ST08-010",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-010.webp?260612",
      prices: { a: 1181, b: 1967, c: 2753 }
    },
    {
      id: "ST08-010_p1",
      name: "哈薩威・諾亞",
      number: "ST08-010_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-010_p1.webp?260612",
      prices: { a: 2487, b: 2109, c: 1731 }
    },
    {
      id: "ST08-011",
      name: "雷恩・艾姆",
      number: "ST08-011",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-011.webp?260612",
      prices: { a: 1182, b: 1974, c: 2766 }
    },
    {
      id: "ST08-011_p1",
      name: "雷恩・艾姆",
      number: "ST08-011_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-011_p1.webp?260612",
      prices: { a: 2278, b: 646, c: 2014 }
    },
    {
      id: "ST08-012",
      name: "為哈薩威振奮士氣",
      number: "ST08-012",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-012.webp?260612",
      prices: { a: 1183, b: 1981, c: 2779 }
    },
    {
      id: "ST08-012_p1",
      name: "為哈薩威振奮士氣",
      number: "ST08-012_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-012_p1.webp?260612",
      prices: { a: 2069, b: 2183, c: 2297 }
    },
    {
      id: "ST08-013",
      name: "幸運女神",
      number: "ST08-013",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-013.webp?260612",
      prices: { a: 1184, b: 1988, c: 2792 }
    },
    {
      id: "ST08-013_p1",
      name: "幸運女神",
      number: "ST08-013_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-013_p1.webp?260612",
      prices: { a: 860, b: 2720, c: 1580 }
    },
    {
      id: "ST08-014",
      name: "英勇號",
      number: "ST08-014",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-014.webp?260612",
      prices: { a: 1185, b: 1995, c: 2805 }
    },
    {
      id: "ST08-014_p1",
      name: "英勇號",
      number: "ST08-014_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-014_p1.webp?260612",
      prices: { a: 651, b: 1257, c: 1863 }
    },
    {
      id: "ST08-015",
      name: "大堡",
      number: "ST08-015",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-015.webp?260612",
      prices: { a: 1186, b: 2002, c: 2818 }
    },
    {
      id: "ST08-015_p1",
      name: "大堡",
      number: "ST08-015_p1",
      series: "Flash of Radiance [ST08]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-015_p1.webp?260612",
      prices: { a: 442, b: 2794, c: 2146 }
    },
    {
      id: "ST01-014_p6",
      name: "意外事變",
      number: "ST01-014_p6",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p6.webp?260612",
      prices: { a: 1879, b: 853, c: 2827 }
    },
    {
      id: "ST04-002_p4",
      name: "突擊高達",
      number: "ST04-002_p4",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-002_p4.webp?260612",
      prices: { a: 107, b: 449, c: 791 }
    },
    {
      id: "ST04-007_p2",
      name: "神盾高達（MA型態）",
      number: "ST04-007_p2",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-007_p2.webp?260612",
      prices: { a: 1060, b: 1120, c: 1180 }
    },
    {
      id: "ST04-010_p5",
      name: "基拉・大和",
      number: "ST04-010_p5",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-010_p5.webp?260612",
      prices: { a: 1047, b: 1029, c: 1011 }
    },
    {
      id: "ST04-011_p4",
      name: "阿斯蘭・薩拉",
      number: "ST04-011_p4",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-011_p4.webp?260612",
      prices: { a: 2837, b: 1559, c: 281 }
    },
    {
      id: "ST04-015_p3",
      name: "大天使號",
      number: "ST04-015_p3",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-015_p3.webp?260612",
      prices: { a: 1000, b: 700, c: 400 }
    },
    {
      id: "ST04-016_p2",
      name: "維薩里號",
      number: "ST04-016_p2",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-016_p2.webp?260612",
      prices: { a: 790, b: 2230, c: 670 }
    },
    {
      id: "ST09-001",
      name: "衝擊高達",
      number: "ST09-001",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-001.webp?260612",
      prices: { a: 2672, b: 404, c: 1136 }
    },
    {
      id: "ST09-001_p1",
      name: "衝擊高達",
      number: "ST09-001_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-001_p1.webp?260612",
      prices: { a: 1868, b: 776, c: 2684 }
    },
    {
      id: "ST09-002",
      name: "強攻型衝擊高達",
      number: "ST09-002",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-002.webp?260612",
      prices: { a: 2673, b: 411, c: 1149 }
    },
    {
      id: "ST09-002_p1",
      name: "強攻型衝擊高達",
      number: "ST09-002_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-002_p1.webp?260612",
      prices: { a: 1659, b: 2313, c: 2967 }
    },
    {
      id: "ST09-003",
      name: "救世高達",
      number: "ST09-003",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-003.webp?260612",
      prices: { a: 2674, b: 418, c: 1162 }
    },
    {
      id: "ST09-003_p1",
      name: "救世高達",
      number: "ST09-003_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-003_p1.webp?260612",
      prices: { a: 450, b: 2850, c: 2250 }
    },
    {
      id: "ST09-004",
      name: "自由高達",
      number: "ST09-004",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-004.webp?260612",
      prices: { a: 2675, b: 425, c: 1175 }
    },
    {
      id: "ST09-004_p1",
      name: "自由高達",
      number: "ST09-004_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-004_p1.webp?260612",
      prices: { a: 241, b: 1387, c: 2533 }
    },
    {
      id: "ST09-005",
      name: "薩克戰士",
      number: "ST09-005",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-005.webp?260612",
      prices: { a: 2676, b: 432, c: 1188 }
    },
    {
      id: "ST09-005_p1",
      name: "薩克戰士",
      number: "ST09-005_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-005_p1.webp?260612",
      prices: { a: 3032, b: 2924, c: 2816 }
    },
    {
      id: "ST09-006",
      name: "雙劍型衝擊高達",
      number: "ST09-006",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-006.webp?260612",
      prices: { a: 2677, b: 439, c: 1201 }
    },
    {
      id: "ST09-006_p1",
      name: "雙劍型衝擊高達",
      number: "ST09-006_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-006_p1.webp?260612",
      prices: { a: 1823, b: 461, c: 2099 }
    },
    {
      id: "ST09-007",
      name: "爆破型衝擊高達",
      number: "ST09-007",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-007.webp?260612",
      prices: { a: 2678, b: 446, c: 1214 }
    },
    {
      id: "ST09-007_p1",
      name: "爆破型衝擊高達",
      number: "ST09-007_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-007_p1.webp?260612",
      prices: { a: 1614, b: 1998, c: 2382 }
    },
    {
      id: "ST09-008",
      name: "真・飛鳥",
      number: "ST09-008",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-008.webp?260612",
      prices: { a: 2679, b: 453, c: 1227 }
    },
    {
      id: "ST09-008_p1",
      name: "真・飛鳥",
      number: "ST09-008_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-008_p1.webp?260612",
      prices: { a: 1405, b: 535, c: 2665 }
    },
    {
      id: "ST09-009",
      name: "巨人殺手",
      number: "ST09-009",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-009.webp?260612",
      prices: { a: 2680, b: 460, c: 1240 }
    },
    {
      id: "ST09-009_p1",
      name: "巨人殺手",
      number: "ST09-009_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-009_p1.webp?260612",
      prices: { a: 1196, b: 2072, c: 2948 }
    },
    {
      id: "ST09-010",
      name: "智慧女神號",
      number: "ST09-010",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-010.webp?260612",
      prices: { a: 2702, b: 614, c: 1526 }
    },
    {
      id: "ST09-010_p1",
      name: "智慧女神號",
      number: "ST09-010_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST09-010_p1.webp?260612",
      prices: { a: 1598, b: 1886, c: 2174 }
    },
    {
      id: "GD01-049_p1",
      name: "閃電高達",
      number: "GD01-049_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-049_p1.webp?260612",
      prices: { a: 2044, b: 2008, c: 1972 }
    },
    {
      id: "GD01-054_p1",
      name: "決鬥高達",
      number: "GD01-054_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-054_p1.webp?260612",
      prices: { a: 610, b: 970, c: 1330 }
    },
    {
      id: "GD01-111_p3",
      name: "王牌的戰鬥",
      number: "GD01-111_p3",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-111_p3.webp?260612",
      prices: { a: 1306, b: 2842, c: 1378 }
    },
    {
      id: "GD01-118_p6",
      name: "洋溢的慈愛",
      number: "GD01-118_p6",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118_p6.webp?260612",
      prices: { a: 846, b: 2622, c: 1398 }
    },
    {
      id: "GD02-076_p1",
      name: "暴風高達",
      number: "GD02-076_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-076_p1.webp?260612",
      prices: { a: 345, b: 2115, c: 885 }
    },
    {
      id: "GD02-110_p2",
      name: "覺醒的力量",
      number: "GD02-110_p2",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-110_p2.webp?260612",
      prices: { a: 625, b: 1075, c: 1525 }
    },
    {
      id: "R-030",
      name: "能源",
      number: "R-030",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-030.webp?260612",
      prices: { a: 2124, b: 2568, c: 3012 }
    },
    {
      id: "R-030_p1",
      name: "能源",
      number: "R-030_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-030_p1.webp?260612",
      prices: { a: 1400, b: 500, c: 2600 }
    },
    {
      id: "EXB-002",
      name: "EX基地",
      number: "EXB-002",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXB-002.webp?260612",
      prices: { a: 2974, b: 2518, c: 2062 }
    },
    {
      id: "EXB-002_p1",
      name: "EX基地",
      number: "EXB-002_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXB-002_p1.webp?260612",
      prices: { a: 750, b: 1950, c: 150 }
    },
    {
      id: "EXR-002",
      name: "EX能源",
      number: "EXR-002",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXR-002.webp?260612",
      prices: { a: 310, b: 1870, c: 430 }
    },
    {
      id: "EXR-002_p1",
      name: "EX能源",
      number: "EXR-002_p1",
      series: "Destiny Ignition [ST09]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXR-002_p1.webp?260612",
      prices: { a: 1526, b: 1382, c: 1238 }
    },
    {
      id: "ST10-001",
      name: "Z高達（EX）",
      number: "ST10-001",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-001.webp?260612",
      prices: { a: 2134, b: 2638, c: 142 }
    },
    {
      id: "ST10-002",
      name: "Z高達",
      number: "ST10-002",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-002.webp?260612",
      prices: { a: 2135, b: 2645, c: 155 }
    },
    {
      id: "ST10-003",
      name: "高達Mk-Ⅱ（幽谷規格）",
      number: "ST10-003",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-003.webp?260612",
      prices: { a: 2136, b: 2652, c: 168 }
    },
    {
      id: "ST10-004",
      name: "超級高達",
      number: "ST10-004",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-004.webp?260612",
      prices: { a: 2137, b: 2659, c: 181 }
    },
    {
      id: "ST10-005",
      name: "尼摩",
      number: "ST10-005",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-005.webp?260612",
      prices: { a: 2138, b: 2666, c: 194 }
    },
    {
      id: "ST10-006",
      name: "鳳凰高達（能力解放）（EX）",
      number: "ST10-006",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-006.webp?260612",
      prices: { a: 2139, b: 2673, c: 207 }
    },
    {
      id: "ST10-007",
      name: "高達巴巴托斯（第4型態）",
      number: "ST10-007",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-007.webp?260612",
      prices: { a: 2140, b: 2680, c: 220 }
    },
    {
      id: "ST10-008",
      name: "高達巴巴托斯（第1型態）",
      number: "ST10-008",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-008.webp?260612",
      prices: { a: 2141, b: 2687, c: 233 }
    },
    {
      id: "ST10-009",
      name: "格雷茲（決鬥規格）",
      number: "ST10-009",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-009.webp?260612",
      prices: { a: 2142, b: 2694, c: 246 }
    },
    {
      id: "ST10-010",
      name: "鐵華團機動工兵",
      number: "ST10-010",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-010.webp?260612",
      prices: { a: 2164, b: 2848, c: 532 }
    },
    {
      id: "ST10-011",
      name: "嘉美尤・維達",
      number: "ST10-011",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-011.webp?260612",
      prices: { a: 2165, b: 2855, c: 545 }
    },
    {
      id: "ST10-012",
      name: "馬克・吉爾達",
      number: "ST10-012",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-012.webp?260612",
      prices: { a: 2166, b: 2862, c: 558 }
    },
    {
      id: "ST10-013",
      name: "戰術訓練",
      number: "ST10-013",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-013.webp?260612",
      prices: { a: 2167, b: 2869, c: 571 }
    },
    {
      id: "ST10-014",
      name: "解鎖開發路徑圖",
      number: "ST10-014",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-014.webp?260612",
      prices: { a: 2168, b: 2876, c: 584 }
    },
    {
      id: "ST10-015",
      name: "擴散光束砲",
      number: "ST10-015",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-015.webp?260612",
      prices: { a: 2169, b: 2883, c: 597 }
    },
    {
      id: "ST10-016",
      name: "露娜・瑪那＆運載基地",
      number: "ST10-016",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST10-016.webp?260612",
      prices: { a: 2170, b: 2890, c: 610 }
    },
    {
      id: "R-041",
      name: "能源",
      number: "R-041",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-041.webp?260612",
      prices: { a: 2156, b: 2792, c: 428 }
    },
    {
      id: "EXB-003",
      name: "EX基地",
      number: "EXB-003",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXB-003.webp?260612",
      prices: { a: 2975, b: 2525, c: 2075 }
    },
    {
      id: "EXR-003",
      name: "EX能源",
      number: "EXR-003",
      series: "Generation Pulse [ST10]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXR-003.webp?260612",
      prices: { a: 311, b: 1877, c: 443 }
    },
    {
      id: "T-025",
      name: "能天使高達",
      number: "T-025",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-025.webp?260612",
      prices: { a: 1140, b: 1680, c: 2220 }
    },
    {
      id: "EB01-001",
      name: "異端高達紅色機改（EX）",
      number: "EB01-001",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-001.webp?260612",
      prices: { a: 2692, b: 544, c: 1396 }
    },
    {
      id: "EB01-002",
      name: "Hi-ν高達（EX）",
      number: "EB01-002",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-002.webp?260612",
      prices: { a: 2693, b: 551, c: 1409 }
    },
    {
      id: "EB01-003",
      name: "敘述高達 A裝備（EX）",
      number: "EB01-003",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-003.webp?260612",
      prices: { a: 2694, b: 558, c: 1422 }
    },
    {
      id: "EB01-004",
      name: "高達巴巴托司狼王式（EX）",
      number: "EB01-004",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-004.webp?260612",
      prices: { a: 2695, b: 565, c: 1435 }
    },
    {
      id: "EB01-005",
      name: "Z高達3號機P2型",
      number: "EB01-005",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-005.webp?260612",
      prices: { a: 2696, b: 572, c: 1448 }
    },
    {
      id: "EB01-006",
      name: "迷惘高達金色機 天",
      number: "EB01-006",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-006.webp?260612",
      prices: { a: 2697, b: 579, c: 1461 }
    },
    {
      id: "EB01-007",
      name: "高達TR-1[海茲勒]",
      number: "EB01-007",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-007.webp?260612",
      prices: { a: 2698, b: 586, c: 1474 }
    },
    {
      id: "EB01-008",
      name: "δ高達改",
      number: "EB01-008",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-008.webp?260612",
      prices: { a: 2699, b: 593, c: 1487 }
    },
    {
      id: "EB01-009",
      name: "全裝甲型・高達（雷霆宙域版）（EX）",
      number: "EB01-009",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-009.webp?260612",
      prices: { a: 2700, b: 600, c: 1500 }
    },
    {
      id: "EB01-010",
      name: "高達巴巴托司（第6型態）",
      number: "EB01-010",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-010.webp?260612",
      prices: { a: 2722, b: 754, c: 1786 }
    },
    {
      id: "EB01-011",
      name: "初始高達",
      number: "EB01-011",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-011.webp?260612",
      prices: { a: 2723, b: 761, c: 1799 }
    },
    {
      id: "EB01-012",
      name: "德姆無腿型",
      number: "EB01-012",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-012.webp?260612",
      prices: { a: 2724, b: 768, c: 1812 }
    },
    {
      id: "EB01-013",
      name: "紅色高達",
      number: "EB01-013",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-013.webp?260612",
      prices: { a: 2725, b: 775, c: 1825 }
    },
    {
      id: "EB01-014",
      name: "古夫勝利型",
      number: "EB01-014",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-014.webp?260612",
      prices: { a: 2726, b: 782, c: 1838 }
    },
    {
      id: "EB01-015",
      name: "試作亞席瑪TR-3[基哈爾]",
      number: "EB01-015",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-015.webp?260612",
      prices: { a: 2727, b: 789, c: 1851 }
    },
    {
      id: "EB01-016",
      name: "旋風高達",
      number: "EB01-016",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-016.webp?260612",
      prices: { a: 2728, b: 796, c: 1864 }
    },
    {
      id: "EB01-017",
      name: "哈囉",
      number: "EB01-017",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-017.webp?260612",
      prices: { a: 2729, b: 803, c: 1877 }
    },
    {
      id: "EB01-018",
      name: "迷惘高達藍色機 二型L",
      number: "EB01-018",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-018.webp?260612",
      prices: { a: 2730, b: 810, c: 1890 }
    },
    {
      id: "EB01-019",
      name: "妖精高達",
      number: "EB01-019",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-019.webp?260612",
      prices: { a: 2731, b: 817, c: 1903 }
    },
    {
      id: "EB01-020",
      name: "高達Mk-Ⅲ",
      number: "EB01-020",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-020.webp?260612",
      prices: { a: 2753, b: 971, c: 2189 }
    },
    {
      id: "EB01-021",
      name: "創建突擊高達（全裝備型）（EX）",
      number: "EB01-021",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-021.webp?260612",
      prices: { a: 2754, b: 978, c: 2202 }
    },
    {
      id: "EB01-022",
      name: "能天使高達（EX）",
      number: "EB01-022",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-022.webp?260612",
      prices: { a: 2755, b: 985, c: 2215 }
    },
    {
      id: "EB01-023",
      name: "天鵝（EX）",
      number: "EB01-023",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-023.webp?260612",
      prices: { a: 2756, b: 992, c: 2228 }
    },
    {
      id: "EB01-024",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "EB01-024",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-024.webp?260612",
      prices: { a: 2757, b: 999, c: 2241 }
    },
    {
      id: "EB01-025",
      name: "托爾吉斯Ⅱ",
      number: "EB01-025",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-025.webp?260612",
      prices: { a: 2758, b: 1006, c: 2254 }
    },
    {
      id: "EB01-026",
      name: "高达·阿斯塔罗特原型",
      number: "EB01-026",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-026.webp?260612",
      prices: { a: 2759, b: 1013, c: 2267 }
    },
    {
      id: "EB01-027",
      name: "托爾吉斯",
      number: "EB01-027",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-027.webp?260612",
      prices: { a: 2760, b: 1020, c: 2280 }
    },
    {
      id: "EB01-028",
      name: "審判女神高達",
      number: "EB01-028",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-028.webp?260612",
      prices: { a: 2761, b: 1027, c: 2293 }
    },
    {
      id: "EB01-029",
      name: "高达·阿斯塔罗特重生型（EX）",
      number: "EB01-029",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-029.webp?260612",
      prices: { a: 2762, b: 1034, c: 2306 }
    },
    {
      id: "EB01-030",
      name: "畢格・朗格",
      number: "EB01-030",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-030.webp?260612",
      prices: { a: 2784, b: 1188, c: 2592 }
    },
    {
      id: "EB01-031",
      name: "歐格",
      number: "EB01-031",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-031.webp?260612",
      prices: { a: 2785, b: 1195, c: 2605 }
    },
    {
      id: "EB01-032",
      name: "高達Ez8高機動型",
      number: "EB01-032",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-032.webp?260612",
      prices: { a: 2786, b: 1202, c: 2618 }
    },
    {
      id: "EB01-033",
      name: "陶拉斯（山克王國規格）",
      number: "EB01-033",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-033.webp?260612",
      prices: { a: 2787, b: 1209, c: 2631 }
    },
    {
      id: "EB01-034",
      name: "烏爾魔靈高達",
      number: "EB01-034",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-034.webp?260612",
      prices: { a: 2788, b: 1216, c: 2644 }
    },
    {
      id: "EB01-035",
      name: "索恩魔靈高達",
      number: "EB01-035",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-035.webp?260612",
      prices: { a: 2789, b: 1223, c: 2657 }
    },
    {
      id: "EB01-036",
      name: "達里巴爾迪",
      number: "EB01-036",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-036.webp?260612",
      prices: { a: 2790, b: 1230, c: 2670 }
    },
    {
      id: "EB01-037",
      name: "茲達（1號機）",
      number: "EB01-037",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-037.webp?260612",
      prices: { a: 2791, b: 1237, c: 2683 }
    },
    {
      id: "EB01-038",
      name: "G-叛徒",
      number: "EB01-038",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-038.webp?260612",
      prices: { a: 2792, b: 1244, c: 2696 }
    },
    {
      id: "EB01-039",
      name: "飛昇自由高達",
      number: "EB01-039",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-039.webp?260612",
      prices: { a: 2793, b: 1251, c: 2709 }
    },
    {
      id: "EB01-040",
      name: "高達艾比安",
      number: "EB01-040",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-040.webp?260612",
      prices: { a: 2815, b: 1405, c: 2995 }
    },
    {
      id: "EB01-041",
      name: "突擊自由高達（EX）",
      number: "EB01-041",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-041.webp?260612",
      prices: { a: 2816, b: 1412, c: 3008 }
    },
    {
      id: "EB01-042",
      name: "腦波傳導哈囉（EX）",
      number: "EB01-042",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-042.webp?260612",
      prices: { a: 2817, b: 1419, c: 3021 }
    },
    {
      id: "EB01-043",
      name: "蒼藍命運1號機（EX）",
      number: "EB01-043",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-043.webp?260612",
      prices: { a: 2818, b: 1426, c: 3034 }
    },
    {
      id: "EB01-044",
      name: "正義高達（EX）",
      number: "EB01-044",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-044.webp?260612",
      prices: { a: 2819, b: 1433, c: 3047 }
    },
    {
      id: "EB01-045",
      name: "腦波傳導型薩克（EX）",
      number: "EB01-045",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-045.webp?260612",
      prices: { a: 2820, b: 1440, c: 60 }
    },
    {
      id: "EB01-046",
      name: "特裝型打擊型吉姆（EX）",
      number: "EB01-046",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-046.webp?260612",
      prices: { a: 2821, b: 1447, c: 73 }
    },
    {
      id: "EB01-047",
      name: "卡斯巴爾專用高達",
      number: "EB01-047",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-047.webp?260612",
      prices: { a: 2822, b: 1454, c: 86 }
    },
    {
      id: "EB01-048",
      name: "S高達",
      number: "EB01-048",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-048.webp?260612",
      prices: { a: 2823, b: 1461, c: 99 }
    },
    {
      id: "EB01-049",
      name: "蒼白騎士（陸戰重裝規格）",
      number: "EB01-049",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-049.webp?260612",
      prices: { a: 2824, b: 1468, c: 112 }
    },
    {
      id: "EB01-050",
      name: "骰子高達",
      number: "EB01-050",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-050.webp?260612",
      prices: { a: 2846, b: 1622, c: 398 }
    },
    {
      id: "EB01-051",
      name: "傑卡克",
      number: "EB01-051",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-051.webp?260612",
      prices: { a: 2847, b: 1629, c: 411 }
    },
    {
      id: "EB01-052",
      name: "戰狼",
      number: "EB01-052",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-052.webp?260612",
      prices: { a: 2848, b: 1636, c: 424 }
    },
    {
      id: "EB01-053",
      name: "高達試作0號機",
      number: "EB01-053",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-053.webp?260612",
      prices: { a: 2849, b: 1643, c: 437 }
    },
    {
      id: "EB01-054",
      name: "蓋布蘭TR-5[弗萊爾]1號機",
      number: "EB01-054",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-054.webp?260612",
      prices: { a: 2850, b: 1650, c: 450 }
    },
    {
      id: "EB01-055",
      name: "德姆大刀型",
      number: "EB01-055",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-055.webp?260612",
      prices: { a: 2851, b: 1657, c: 463 }
    },
    {
      id: "EB01-056",
      name: "高達傑姆納斯01",
      number: "EB01-056",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-056.webp?260612",
      prices: { a: 2852, b: 1664, c: 476 }
    },
    {
      id: "EB01-057",
      name: "高達傑姆納斯02",
      number: "EB01-057",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-057.webp?260612",
      prices: { a: 2853, b: 1671, c: 489 }
    },
    {
      id: "EB01-058",
      name: "極限高達",
      number: "EB01-058",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-058.webp?260612",
      prices: { a: 2854, b: 1678, c: 502 }
    },
    {
      id: "EB01-059",
      name: "腦波傳導型薩克",
      number: "EB01-059",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-059.webp?260612",
      prices: { a: 2855, b: 1685, c: 515 }
    },
    {
      id: "EB01-060",
      name: "水瓶座高達",
      number: "EB01-060",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-060.webp?260612",
      prices: { a: 2877, b: 1839, c: 801 }
    },
    {
      id: "EB01-061",
      name: "愛麗絲・克洛德",
      number: "EB01-061",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-061.webp?260612",
      prices: { a: 2878, b: 1846, c: 814 }
    },
    {
      id: "EB01-062",
      name: "約拿・巴斯特",
      number: "EB01-062",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-062.webp?260612",
      prices: { a: 2879, b: 1853, c: 827 }
    },
    {
      id: "EB01-063",
      name: "伊歐・弗萊明",
      number: "EB01-063",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-063.webp?260612",
      prices: { a: 2880, b: 1860, c: 840 }
    },
    {
      id: "EB01-064",
      name: "隆德・吉納・薩哈克",
      number: "EB01-064",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-064.webp?260612",
      prices: { a: 2881, b: 1867, c: 853 }
    },
    {
      id: "EB01-065",
      name: "梅亞・希瓦",
      number: "EB01-065",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-065.webp?260612",
      prices: { a: 2882, b: 1874, c: 866 }
    },
    {
      id: "EB01-066",
      name: "嶺司",
      number: "EB01-066",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-066.webp?260612",
      prices: { a: 2883, b: 1881, c: 879 }
    },
    {
      id: "EB01-067",
      name: "雅絲娜・愛爾瑪莉特",
      number: "EB01-067",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-067.webp?260612",
      prices: { a: 2884, b: 1888, c: 892 }
    },
    {
      id: "EB01-068",
      name: "雪兒・亞克斯迪卡",
      number: "EB01-068",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-068.webp?260612",
      prices: { a: 2885, b: 1895, c: 905 }
    },
    {
      id: "EB01-069",
      name: "畢賽德・佩因",
      number: "EB01-069",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-069.webp?260612",
      prices: { a: 2886, b: 1902, c: 918 }
    },
    {
      id: "EB01-070",
      name: "戴瑞・羅倫茲",
      number: "EB01-070",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-070.webp?260612",
      prices: { a: 2908, b: 2056, c: 1204 }
    },
    {
      id: "EB01-071",
      name: "伊藤・劍",
      number: "EB01-071",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-071.webp?260612",
      prices: { a: 2909, b: 2063, c: 1217 }
    },
    {
      id: "EB01-072",
      name: "勇・鹿島",
      number: "EB01-072",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-072.webp?260612",
      prices: { a: 2910, b: 2070, c: 1230 }
    },
    {
      id: "EB01-073",
      name: "角色請求",
      number: "EB01-073",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-073.webp?260612",
      prices: { a: 2911, b: 2077, c: 1243 }
    },
    {
      id: "EB01-074",
      name: "永恆之路",
      number: "EB01-074",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-074.webp?260612",
      prices: { a: 2912, b: 2084, c: 1256 }
    },
    {
      id: "EB01-075",
      name: "強敵來襲",
      number: "EB01-075",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-075.webp?260612",
      prices: { a: 2913, b: 2091, c: 1269 }
    },
    {
      id: "EB01-076",
      name: "菊一文字",
      number: "EB01-076",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-076.webp?260612",
      prices: { a: 2914, b: 2098, c: 1282 }
    },
    {
      id: "EB01-077",
      name: "大師聯盟開戰",
      number: "EB01-077",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-077.webp?260612",
      prices: { a: 2915, b: 2105, c: 1295 }
    },
    {
      id: "EB01-078",
      name: "高級機體補給",
      number: "EB01-078",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-078.webp?260612",
      prices: { a: 2916, b: 2112, c: 1308 }
    },
    {
      id: "EB01-079",
      name: "選配零件",
      number: "EB01-079",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-079.webp?260612",
      prices: { a: 2917, b: 2119, c: 1321 }
    },
    {
      id: "EB01-080",
      name: "鐵拳火箭彈",
      number: "EB01-080",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-080.webp?260612",
      prices: { a: 2939, b: 2273, c: 1607 }
    },
    {
      id: "EB01-081",
      name: "MAP兵器",
      number: "EB01-081",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-081.webp?260612",
      prices: { a: 2940, b: 2280, c: 1620 }
    },
    {
      id: "EB01-082",
      name: "戰艦巡航",
      number: "EB01-082",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-082.webp?260612",
      prices: { a: 2941, b: 2287, c: 1633 }
    },
    {
      id: "EB01-083",
      name: "SP化晶片",
      number: "EB01-083",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-083.webp?260612",
      prices: { a: 2942, b: 2294, c: 1646 }
    },
    {
      id: "EB01-084",
      name: "30cm砲（APFSDS彈）",
      number: "EB01-084",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-084.webp?260612",
      prices: { a: 2943, b: 2301, c: 1659 }
    },
    {
      id: "EB01-085",
      name: "庫德莉雅・藍那・伯恩斯坦＆漁火",
      number: "EB01-085",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-085.webp?260612",
      prices: { a: 2944, b: 2308, c: 1672 }
    },
    {
      id: "EB01-086",
      name: "基西莉亞・薩比＆格瓦金",
      number: "EB01-086",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-086.webp?260612",
      prices: { a: 2945, b: 2315, c: 1685 }
    },
    {
      id: "EB01-087",
      name: "瑪莉娜・伊士麥＆托勒密號2",
      number: "EB01-087",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-087.webp?260612",
      prices: { a: 2946, b: 2322, c: 1698 }
    },
    {
      id: "EB01-088",
      name: "米奧琳涅・連布蘭＆學園艦",
      number: "EB01-088",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-088.webp?260612",
      prices: { a: 2947, b: 2329, c: 1711 }
    },
    {
      id: "EB01-089",
      name: "拉克絲・克萊因＆永恆號",
      number: "EB01-089",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-089.webp?260612",
      prices: { a: 2948, b: 2336, c: 1724 }
    },
    {
      id: "EB01-090",
      name: "蒂法・安迪爾＆和平號",
      number: "EB01-090",
      series: "Eternal Nexus [EB01]",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EB01-090.webp?260612",
      prices: { a: 2970, b: 2490, c: 2010 }
    },
    {
      id: "ST01-001_p4",
      name: "高達",
      number: "ST01-001_p4",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p4.webp?260612",
      prices: { a: 983, b: 581, c: 179 }
    },
    {
      id: "ST02-010_p4",
      name: "希洛・唯",
      number: "ST02-010_p4",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-010_p4.webp?260612",
      prices: { a: 2824, b: 1468, c: 112 }
    },
    {
      id: "ST03-008_p4",
      name: "薩克Ⅱ",
      number: "ST03-008_p4",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-008_p4.webp?260612",
      prices: { a: 1742, b: 2894, c: 1046 }
    },
    {
      id: "ST05-001_p2",
      name: "高達巴巴托司(第4形態)",
      number: "ST05-001_p2",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-001_p2.webp?260612",
      prices: { a: 425, b: 2675, c: 1925 }
    },
    {
      id: "ST05-002_p3",
      name: "高達巴巴托司(第2形態)",
      number: "ST05-002_p3",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-002_p3.webp?260612",
      prices: { a: 2217, b: 219, c: 1221 }
    },
    {
      id: "ST05-007_p2",
      name: "燕式格雷茲（麥吉利斯機）",
      number: "ST05-007_p2",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-007_p2.webp?260612",
      prices: { a: 171, b: 897, c: 1623 }
    },
    {
      id: "ST05-010_p4",
      name: "三日月・奧古斯",
      number: "ST05-010_p4",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-010_p4.webp?260612",
      prices: { a: 157, b: 799, c: 1441 }
    },
    {
      id: "ST06-001_p2",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-001_p2",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-001_p2.webp?260612",
      prices: { a: 1536, b: 1452, c: 1368 }
    },
    {
      id: "ST06-002_p3",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-002_p3",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-002_p3.webp?260612",
      prices: { a: 1328, b: 2996, c: 1664 }
    },
    {
      id: "ST06-005_p2",
      name: "紅色高達",
      number: "ST06-005_p2",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-005_p2.webp?260612",
      prices: { a: 2700, b: 600, c: 1500 }
    },
    {
      id: "GD01-068_p2",
      name: "完美型突擊高達",
      number: "GD01-068_p2",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-068_p2.webp?260612",
      prices: { a: 1296, b: 2772, c: 1248 }
    },
    {
      id: "GD01-086_p2",
      name: "魔靈高達",
      number: "GD01-086_p2",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-086_p2.webp?260612",
      prices: { a: 756, b: 1992, c: 228 }
    },
    {
      id: "GD01-100_p4",
      name: "覺悟的表露",
      number: "GD01-100_p4",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-100_p4.webp?260612",
      prices: { a: 2995, b: 2665, c: 2335 }
    },
    {
      id: "GD02-110_p3",
      name: "覺醒的力量",
      number: "GD02-110_p3",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-110_p3.webp?260612",
      prices: { a: 626, b: 1082, c: 1538 }
    },
    {
      id: "GD03-048_p1",
      name: "GFreD",
      number: "GD03-048_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-048_p1.webp?260612",
      prices: { a: 475, b: 3025, c: 2575 }
    },
    {
      id: "GD03-060_p1",
      name: "CGS機動工兵（指揮官機）",
      number: "GD03-060_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-060_p1.webp?260612",
      prices: { a: 189, b: 1023, c: 1857 }
    },
    {
      id: "GD03-106_p1",
      name: "M.A.V.戰術",
      number: "GD03-106_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-106_p1.webp?260612",
      prices: { a: 2960, b: 2420, c: 1880 }
    },
    {
      id: "GD03-117_p1",
      name: "歐格的號令",
      number: "GD03-117_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-117_p1.webp?260612",
      prices: { a: 2272, b: 604, c: 1936 }
    },
    {
      id: "T-015_p1",
      name: "CGS機動工兵",
      number: "T-015_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-015_p1.webp?260612",
      prices: { a: 1535, b: 1445, c: 1355 }
    },
    {
      id: "T-016_p1",
      name: "格雷茲改",
      number: "T-016_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-016_p1.webp?260612",
      prices: { a: 326, b: 1982, c: 638 }
    },
    {
      id: "T-017_p1",
      name: "高達巴巴托司(第4形態)",
      number: "T-017_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-017_p1.webp?260612",
      prices: { a: 117, b: 519, c: 921 }
    },
    {
      id: "T-018_p1",
      name: "紅色高達",
      number: "T-018_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-018_p1.webp?260612",
      prices: { a: 2908, b: 2056, c: 1204 }
    },
    {
      id: "T-019_p1",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "T-019_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-019_p1.webp?260612",
      prices: { a: 2699, b: 593, c: 1487 }
    },
    {
      id: "T-020_p1",
      name: "GFreD",
      number: "T-020_p1",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-020_p1.webp?260612",
      prices: { a: 101, b: 407, c: 713 }
    },
    {
      id: "RP-024",
      name: "能源",
      number: "RP-024",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-024.webp?260612",
      prices: { a: 437, b: 2759, c: 2081 }
    },
    {
      id: "RP-025",
      name: "能源",
      number: "RP-025",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-025.webp?260612",
      prices: { a: 438, b: 2766, c: 2094 }
    },
    {
      id: "RP-026",
      name: "能源",
      number: "RP-026",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-026.webp?260612",
      prices: { a: 439, b: 2773, c: 2107 }
    },
    {
      id: "RP-027",
      name: "能源",
      number: "RP-027",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-027.webp?260612",
      prices: { a: 440, b: 2780, c: 2120 }
    },
    {
      id: "RP-028",
      name: "能源",
      number: "RP-028",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-028.webp?260612",
      prices: { a: 441, b: 2787, c: 2133 }
    },
    {
      id: "RP-029",
      name: "能源",
      number: "RP-029",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-029.webp?260612",
      prices: { a: 442, b: 2794, c: 2146 }
    },
    {
      id: "RP-030",
      name: "能源",
      number: "RP-030",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-030.webp?260612",
      prices: { a: 464, b: 2948, c: 2432 }
    },
    {
      id: "RP-031",
      name: "能源",
      number: "RP-031",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-031.webp?260612",
      prices: { a: 465, b: 2955, c: 2445 }
    },
    {
      id: "RP-032",
      name: "能源",
      number: "RP-032",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-032.webp?260612",
      prices: { a: 466, b: 2962, c: 2458 }
    },
    {
      id: "RP-033",
      name: "能源",
      number: "RP-033",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-033.webp?260612",
      prices: { a: 467, b: 2969, c: 2471 }
    },
    {
      id: "RP-034",
      name: "能源",
      number: "RP-034",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-034.webp?260612",
      prices: { a: 468, b: 2976, c: 2484 }
    },
    {
      id: "RP-035",
      name: "能源",
      number: "RP-035",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-035.webp?260612",
      prices: { a: 469, b: 2983, c: 2497 }
    },
    {
      id: "RP-036",
      name: "能源",
      number: "RP-036",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-036.webp?260612",
      prices: { a: 470, b: 2990, c: 2510 }
    },
    {
      id: "RP-037",
      name: "能源",
      number: "RP-037",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-037.webp?260612",
      prices: { a: 471, b: 2997, c: 2523 }
    },
    {
      id: "RP-038",
      name: "能源",
      number: "RP-038",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-038.webp?260612",
      prices: { a: 472, b: 3004, c: 2536 }
    },
    {
      id: "RP-039",
      name: "能源",
      number: "RP-039",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-039.webp?260612",
      prices: { a: 473, b: 3011, c: 2549 }
    },
    {
      id: "RP-040",
      name: "能源",
      number: "RP-040",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-040.webp?260612",
      prices: { a: 495, b: 165, c: 2835 }
    },
    {
      id: "RP-041",
      name: "能源",
      number: "RP-041",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-041.webp?260612",
      prices: { a: 496, b: 172, c: 2848 }
    },
    {
      id: "RP-042",
      name: "能源",
      number: "RP-042",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-042.webp?260612",
      prices: { a: 497, b: 179, c: 2861 }
    },
    {
      id: "RP-043",
      name: "能源",
      number: "RP-043",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-043.webp?260612",
      prices: { a: 498, b: 186, c: 2874 }
    },
    {
      id: "EXRP-004",
      name: "EX能源",
      number: "EXRP-004",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-004.webp?260612",
      prices: { a: 962, b: 434, c: 2906 }
    },
    {
      id: "EXRP-005",
      name: "EX能源",
      number: "EXRP-005",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-005.webp?260612",
      prices: { a: 963, b: 441, c: 2919 }
    },
    {
      id: "EXRP-006",
      name: "EX能源",
      number: "EXRP-006",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-006.webp?260612",
      prices: { a: 964, b: 448, c: 2932 }
    },
    {
      id: "EXRP-007",
      name: "EX能源",
      number: "EXRP-007",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-007.webp?260612",
      prices: { a: 965, b: 455, c: 2945 }
    },
    {
      id: "EXRP-008",
      name: "EX能源",
      number: "EXRP-008",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-008.webp?260612",
      prices: { a: 966, b: 462, c: 2958 }
    },
    {
      id: "EXRP-009",
      name: "EX能源",
      number: "EXRP-009",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-009.webp?260612",
      prices: { a: 967, b: 469, c: 2971 }
    },
    {
      id: "EXRP-010",
      name: "EX能源",
      number: "EXRP-010",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-010.webp?260612",
      prices: { a: 989, b: 623, c: 257 }
    },
    {
      id: "EXRP-011",
      name: "EX能源",
      number: "EXRP-011",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-011.webp?260612",
      prices: { a: 990, b: 630, c: 270 }
    },
    {
      id: "EXRP-012",
      name: "EX能源",
      number: "EXRP-012",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-012.webp?260612",
      prices: { a: 991, b: 637, c: 283 }
    },
    {
      id: "EXRP-013",
      name: "EX能源",
      number: "EXRP-013",
      series: "限定商品收錄卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-013.webp?260612",
      prices: { a: 992, b: 644, c: 296 }
    },
    {
      id: "ST01-001_p2",
      name: "高達",
      number: "ST01-001_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p2.webp?260612",
      prices: { a: 981, b: 567, c: 153 }
    },
    {
      id: "ST01-001_p3",
      name: "高達",
      number: "ST01-001_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p3.webp?260612",
      prices: { a: 982, b: 574, c: 166 }
    },
    {
      id: "ST01-002_p2",
      name: "高達（MA型態）",
      number: "ST01-002_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-002_p2.webp?260612",
      prices: { a: 772, b: 2104, c: 436 }
    },
    {
      id: "ST01-005_p2",
      name: "吉姆",
      number: "ST01-005_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-005_p2.webp?260612",
      prices: { a: 2145, b: 2715, c: 285 }
    },
    {
      id: "ST01-007_p2",
      name: "風靈高達（Bit on Form）",
      number: "ST01-007_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-007_p2.webp?260612",
      prices: { a: 727, b: 1789, c: 2851 }
    },
    {
      id: "ST01-008_p2",
      name: "迪米教練機",
      number: "ST01-008_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-008_p2.webp?260612",
      prices: { a: 518, b: 326, c: 134 }
    },
    {
      id: "ST01-010_p2",
      name: "阿姆羅・雷",
      number: "ST01-010_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-010_p2.webp?260612",
      prices: { a: 711, b: 1677, c: 2643 }
    },
    {
      id: "ST01-011_p2",
      name: "蘇萊塔・墨丘利",
      number: "ST01-011_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-011_p2.webp?260612",
      prices: { a: 502, b: 214, c: 2926 }
    },
    {
      id: "ST01-011_p3",
      name: "蘇萊塔・墨丘利",
      number: "ST01-011_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-011_p3.webp?260612",
      prices: { a: 503, b: 221, c: 2939 }
    },
    {
      id: "ST01-012_p2",
      name: "滿身瘡痍",
      number: "ST01-012_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-012_p2.webp?260612",
      prices: { a: 293, b: 1751, c: 209 }
    },
    {
      id: "ST01-013_p2",
      name: "凱的決心",
      number: "ST01-013_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-013_p2.webp?260612",
      prices: { a: 2084, b: 2288, c: 2492 }
    },
    {
      id: "ST01-015_p2",
      name: "白色基地",
      number: "ST01-015_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-015_p2.webp?260612",
      prices: { a: 1666, b: 2362, c: 58 }
    },
    {
      id: "ST01-016_p2",
      name: "阿斯提卡西亞高等專門學園 地球宿舍",
      number: "ST01-016_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-016_p2.webp?260612",
      prices: { a: 457, b: 2899, c: 2341 }
    },
    {
      id: "ST02-001_p2",
      name: "飛翼高達",
      number: "ST02-001_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-001_p2.webp?260612",
      prices: { a: 92, b: 344, c: 596 }
    },
    {
      id: "ST02-001_p3",
      name: "飛翼高達",
      number: "ST02-001_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-001_p3.webp?260612",
      prices: { a: 93, b: 351, c: 609 }
    },
    {
      id: "ST02-002_p2",
      name: "飛翼高達（鳥型型態）",
      number: "ST02-002_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-002_p2.webp?260612",
      prices: { a: 2883, b: 1881, c: 879 }
    },
    {
      id: "ST02-005_p2",
      name: "馬格亞那克",
      number: "ST02-005_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-005_p2.webp?260612",
      prices: { a: 1256, b: 2492, c: 728 }
    },
    {
      id: "ST02-010_p2",
      name: "希洛・唯",
      number: "ST02-010_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-010_p2.webp?260612",
      prices: { a: 2822, b: 1454, c: 86 }
    },
    {
      id: "ST02-012_p2",
      name: "全彈發射",
      number: "ST02-012_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-012_p2.webp?260612",
      prices: { a: 1404, b: 528, c: 2652 }
    },
    {
      id: "ST02-013_p2",
      name: "溫和的音色",
      number: "ST02-013_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-013_p2.webp?260612",
      prices: { a: 1195, b: 2065, c: 2935 }
    },
    {
      id: "ST02-015_p2",
      name: "聖加百列學園",
      number: "ST02-015_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-015_p2.webp?260612",
      prices: { a: 777, b: 2139, c: 501 }
    },
    {
      id: "ST03-007_p2",
      name: "薩克Ⅰ",
      number: "ST03-007_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-007_p2.webp?260612",
      prices: { a: 1949, b: 1343, c: 737 }
    },
    {
      id: "ST03-008_p2",
      name: "薩克Ⅱ",
      number: "ST03-008_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-008_p2.webp?260612",
      prices: { a: 1740, b: 2880, c: 1020 }
    },
    {
      id: "ST03-011_p2",
      name: "夏亞・阿茲那布爾",
      number: "ST03-011_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-011_p2.webp?260612",
      prices: { a: 1724, b: 2768, c: 812 }
    },
    {
      id: "ST03-011_p3",
      name: "夏亞・阿茲那布爾",
      number: "ST03-011_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-011_p3.webp?260612",
      prices: { a: 1725, b: 2775, c: 825 }
    },
    {
      id: "ST03-016_p2",
      name: "法爾梅爾",
      number: "ST03-016_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-016_p2.webp?260612",
      prices: { a: 1679, b: 2453, c: 227 }
    },
    {
      id: "ST04-001_p2",
      name: "機動型突擊高達",
      number: "ST04-001_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-001_p2.webp?260612",
      prices: { a: 1314, b: 2898, c: 1482 }
    },
    {
      id: "ST04-001_p3",
      name: "機動型突擊高達",
      number: "ST04-001_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-001_p3.webp?260612",
      prices: { a: 1315, b: 2905, c: 1495 }
    },
    {
      id: "ST04-002_p2",
      name: "突擊高達",
      number: "ST04-002_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-002_p2.webp?260612",
      prices: { a: 105, b: 435, c: 765 }
    },
    {
      id: "ST04-005_p2",
      name: "突擊達加",
      number: "ST04-005_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-005_p2.webp?260612",
      prices: { a: 1478, b: 1046, c: 614 }
    },
    {
      id: "ST04-010_p2",
      name: "基拉・大和",
      number: "ST04-010_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-010_p2.webp?260612",
      prices: { a: 1044, b: 1008, c: 972 }
    },
    {
      id: "ST04-013_p2",
      name: "安迪米翁之鷹",
      number: "ST04-013_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-013_p2.webp?260612",
      prices: { a: 2417, b: 1619, c: 821 }
    },
    {
      id: "ST04-015_p2",
      name: "大天使號",
      number: "ST04-015_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-015_p2.webp?260612",
      prices: { a: 999, b: 693, c: 387 }
    },
    {
      id: "GD01-004_p1",
      name: "鋼加農",
      number: "GD01-004_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-004_p1.webp?260612",
      prices: { a: 2005, b: 1735, c: 1465 }
    },
    {
      id: "GD01-004_p2",
      name: "鋼加農",
      number: "GD01-004_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-004_p2.webp?260612",
      prices: { a: 2006, b: 1742, c: 1478 }
    },
    {
      id: "GD01-005_p2",
      name: "獨角獸高達（獨角獸模式）",
      number: "GD01-005_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-005_p2.webp?260612",
      prices: { a: 797, b: 2279, c: 761 }
    },
    {
      id: "GD01-008_p1",
      name: "鋼坦克",
      number: "GD01-008_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-008_p1.webp?260612",
      prices: { a: 2169, b: 2883, c: 597 }
    },
    {
      id: "GD01-009_p1",
      name: "G戰機",
      number: "GD01-009_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-009_p1.webp?260612",
      prices: { a: 1960, b: 1420, c: 880 }
    },
    {
      id: "GD01-011_p1",
      name: "洛特",
      number: "GD01-011_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-011_p1.webp?260612",
      prices: { a: 2153, b: 2771, c: 389 }
    },
    {
      id: "GD01-013_p1",
      name: "高達",
      number: "GD01-013_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-013_p1.webp?260612",
      prices: { a: 1735, b: 2845, c: 955 }
    },
    {
      id: "GD01-015_p1",
      name: "鐵球",
      number: "GD01-015_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-015_p1.webp?260612",
      prices: { a: 317, b: 1919, c: 521 }
    },
    {
      id: "GD01-016_p1",
      name: "傑鋼",
      number: "GD01-016_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-016_p1.webp?260612",
      prices: { a: 108, b: 456, c: 804 }
    },
    {
      id: "GD01-018_p1",
      name: "里歇爾",
      number: "GD01-018_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-018_p1.webp?260612",
      prices: { a: 1690, b: 2530, c: 370 }
    },
    {
      id: "GD01-026_p1",
      name: "夏亞專用薩克Ⅱ",
      number: "GD01-026_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-026_p1.webp?260612",
      prices: { a: 2629, b: 103, c: 577 }
    },
    {
      id: "GD01-026_p2",
      name: "夏亞專用薩克Ⅱ",
      number: "GD01-026_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-026_p2.webp?260612",
      prices: { a: 2630, b: 110, c: 590 }
    },
    {
      id: "GD01-028_p1",
      name: "沙漠高達",
      number: "GD01-028_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-028_p1.webp?260612",
      prices: { a: 1211, b: 2177, c: 143 }
    },
    {
      id: "GD01-030_p1",
      name: "里克・德姆",
      number: "GD01-030_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-030_p1.webp?260612",
      prices: { a: 1404, b: 528, c: 2652 }
    },
    {
      id: "GD01-031_p1",
      name: "傑爾古格",
      number: "GD01-031_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-031_p1.webp?260612",
      prices: { a: 1195, b: 2065, c: 2935 }
    },
    {
      id: "GD01-034_p1",
      name: "重砲手高達",
      number: "GD01-034_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-034_p1.webp?260612",
      prices: { a: 2568, b: 2676, c: 2784 }
    },
    {
      id: "GD01-040_p1",
      name: "飛翼高達",
      number: "GD01-040_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-040_p1.webp?260612",
      prices: { a: 925, b: 175, c: 2425 }
    },
    {
      id: "GD01-041_p1",
      name: "神龍高達",
      number: "GD01-041_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-041_p1.webp?260612",
      prices: { a: 716, b: 1712, c: 2708 }
    },
    {
      id: "GD01-068_p1",
      name: "完美型突擊高達",
      number: "GD01-068_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-068_p1.webp?260612",
      prices: { a: 1295, b: 2765, c: 1235 }
    },
    {
      id: "GD01-070_p1",
      name: "風靈高達",
      number: "GD01-070_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-070_p1.webp?260612",
      prices: { a: 1488, b: 1116, c: 744 }
    },
    {
      id: "GD01-070_p2",
      name: "風靈高達",
      number: "GD01-070_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-070_p2.webp?260612",
      prices: { a: 1489, b: 1123, c: 757 }
    },
    {
      id: "GD01-072_p1",
      name: "砲戰型突擊高達",
      number: "GD01-072_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-072_p1.webp?260612",
      prices: { a: 1070, b: 1190, c: 1310 }
    },
    {
      id: "GD01-075_p1",
      name: "達里巴爾迪",
      number: "GD01-075_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-075_p1.webp?260612",
      prices: { a: 2443, b: 1801, c: 1159 }
    },
    {
      id: "GD01-076_p1",
      name: "惡魔審判者",
      number: "GD01-076_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-076_p1.webp?260612",
      prices: { a: 1234, b: 2338, c: 442 }
    },
    {
      id: "GD01-077_p1",
      name: "突擊高達",
      number: "GD01-077_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-077_p1.webp?260612",
      prices: { a: 1025, b: 875, c: 725 }
    },
    {
      id: "GD01-081_p1",
      name: "M1迷惘高達",
      number: "GD01-081_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-081_p1.webp?260612",
      prices: { a: 800, b: 2300, c: 800 }
    },
    {
      id: "GD01-088_p1",
      name: "巴納吉・林克斯",
      number: "GD01-088_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-088_p1.webp?260612",
      prices: { a: 337, b: 2059, c: 781 }
    },
    {
      id: "GD01-088_p2",
      name: "巴納吉・林克斯",
      number: "GD01-088_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-088_p2.webp?260612",
      prices: { a: 338, b: 2066, c: 794 }
    },
    {
      id: "GD01-089_p1",
      name: "利迪・馬瑟納斯",
      number: "GD01-089_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-089_p1.webp?260612",
      prices: { a: 2128, b: 2596, c: 64 }
    },
    {
      id: "GD01-091_p1",
      name: "張五飛",
      number: "GD01-091_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-091_p1.webp?260612",
      prices: { a: 2321, b: 947, c: 2573 }
    },
    {
      id: "GD01-097_p1",
      name: "古爾・杰特克",
      number: "GD01-097_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-097_p1.webp?260612",
      prices: { a: 67, b: 169, c: 271 }
    },
    {
      id: "GD01-099_p1",
      name: "迎擊命令",
      number: "GD01-099_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-099_p1.webp?260612",
      prices: { a: 1649, b: 2243, c: 2837 }
    },
    {
      id: "GD01-100_p2",
      name: "覺悟的表露",
      number: "GD01-100_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-100_p2.webp?260612",
      prices: { a: 2993, b: 2651, c: 2309 }
    },
    {
      id: "GD01-100_p3",
      name: "覺悟的表露",
      number: "GD01-100_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-100_p3.webp?260612",
      prices: { a: 2994, b: 2658, c: 2322 }
    },
    {
      id: "GD01-105_p2",
      name: "國民們，奮起吧！",
      number: "GD01-105_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-105_p2.webp?260612",
      prices: { a: 2948, b: 2336, c: 1724 }
    },
    {
      id: "GD01-107_p1",
      name: "初次相遇",
      number: "GD01-107_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-107_p1.webp?260612",
      prices: { a: 1529, b: 1403, c: 1277 }
    },
    {
      id: "GD01-107_p2",
      name: "初次相遇",
      number: "GD01-107_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-107_p2.webp?260612",
      prices: { a: 1530, b: 1410, c: 1290 }
    },
    {
      id: "GD01-117_p2",
      name: "魔女與新娘",
      number: "GD01-117_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-117_p2.webp?260612",
      prices: { a: 1051, b: 1057, c: 1063 }
    },
    {
      id: "GD01-118_p2",
      name: "洋溢的慈愛",
      number: "GD01-118_p2",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118_p2.webp?260612",
      prices: { a: 842, b: 2594, c: 1346 }
    },
    {
      id: "GD01-118_p3",
      name: "洋溢的慈愛",
      number: "GD01-118_p3",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118_p3.webp?260612",
      prices: { a: 843, b: 2601, c: 1359 }
    },
    {
      id: "GD01-120_p1",
      name: "艦砲射撃",
      number: "GD01-120_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-120_p1.webp?260612",
      prices: { a: 1034, b: 938, c: 842 }
    },
    {
      id: "GD01-124_p1",
      name: "SIDE7",
      number: "GD01-124_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-124_p1.webp?260612",
      prices: { a: 2198, b: 86, c: 974 }
    },
    {
      id: "T-001_p1",
      name: "高達",
      number: "T-001_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-001_p1.webp?260612",
      prices: { a: 850, b: 2650, c: 1450 }
    },
    {
      id: "T-002_p1",
      name: "鋼加農",
      number: "T-002_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-002_p1.webp?260612",
      prices: { a: 641, b: 1187, c: 1733 }
    },
    {
      id: "T-003_p1",
      name: "鋼坦克",
      number: "T-003_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-003_p1.webp?260612",
      prices: { a: 432, b: 2724, c: 2016 }
    },
    {
      id: "T-006_p1",
      name: "夏亞專用薩克Ⅱ",
      number: "T-006_p1",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/T-006_p1.webp?260612",
      prices: { a: 1805, b: 335, c: 1865 }
    },
    {
      id: "R-001_p4",
      name: "能源",
      number: "R-001_p4",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-001_p4.webp?260612",
      prices: { a: 2631, b: 117, c: 603 }
    },
    {
      id: "R-001_p5",
      name: "能源",
      number: "R-001_p5",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-001_p5.webp?260612",
      prices: { a: 2632, b: 124, c: 616 }
    },
    {
      id: "EXB-001_p5",
      name: "EX基地",
      number: "EXB-001_p5",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXB-001_p5.webp?260612",
      prices: { a: 963, b: 441, c: 2919 }
    },
    {
      id: "EXR-001_p5",
      name: "EX能源",
      number: "EXR-001_p5",
      series: "LIMITED BOX Ver.β",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXR-001_p5.webp?260612",
      prices: { a: 2739, b: 873, c: 2007 }
    },
    {
      id: "R-001_p6",
      name: "能源",
      number: "R-001_p6",
      series: "基本卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/R-001_p6.webp?260612",
      prices: { a: 2633, b: 131, c: 629 }
    },
    {
      id: "EXB-001_p6",
      name: "EX基地",
      number: "EXB-001_p6",
      series: "基本卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXB-001_p6.webp?260612",
      prices: { a: 964, b: 448, c: 2932 }
    },
    {
      id: "EXR-001_p6",
      name: "EX能源",
      number: "EXR-001_p6",
      series: "基本卡牌",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXR-001_p6.webp?260612",
      prices: { a: 2740, b: 880, c: 2020 }
    },
    {
      id: "ST01-001_p5",
      name: "高達",
      number: "ST01-001_p5",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p5.webp?260612",
      prices: { a: 984, b: 588, c: 192 }
    },
    {
      id: "ST01-001_p6",
      name: "高達",
      number: "ST01-001_p6",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p6.webp?260612",
      prices: { a: 985, b: 595, c: 205 }
    },
    {
      id: "ST01-001_p7",
      name: "高達",
      number: "ST01-001_p7",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-001_p7.webp?260612",
      prices: { a: 986, b: 602, c: 218 }
    },
    {
      id: "ST01-010_p3",
      name: "阿姆羅・雷",
      number: "ST01-010_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-010_p3.webp?260612",
      prices: { a: 712, b: 1684, c: 2656 }
    },
    {
      id: "ST01-011_p4",
      name: "蘇萊塔・墨丘利",
      number: "ST01-011_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-011_p4.webp?260612",
      prices: { a: 504, b: 228, c: 2952 }
    },
    {
      id: "ST01-014_p2",
      name: "意外事變",
      number: "ST01-014_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p2.webp?260612",
      prices: { a: 1875, b: 825, c: 2775 }
    },
    {
      id: "ST01-014_p3",
      name: "意外事變",
      number: "ST01-014_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p3.webp?260612",
      prices: { a: 1876, b: 832, c: 2788 }
    },
    {
      id: "ST01-014_p7",
      name: "意外事變",
      number: "ST01-014_p7",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST01-014_p7.webp?260612",
      prices: { a: 1880, b: 860, c: 2840 }
    },
    {
      id: "ST02-002_p3",
      name: "飛翼高達（鳥型型態）",
      number: "ST02-002_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-002_p3.webp?260612",
      prices: { a: 2884, b: 1888, c: 892 }
    },
    {
      id: "ST02-002_p4",
      name: "飛翼高達（鳥型型態）",
      number: "ST02-002_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-002_p4.webp?260612",
      prices: { a: 2885, b: 1895, c: 905 }
    },
    {
      id: "ST02-010_p3",
      name: "希洛・唯",
      number: "ST02-010_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-010_p3.webp?260612",
      prices: { a: 2823, b: 1461, c: 99 }
    },
    {
      id: "ST02-011_p2",
      name: "傑克斯・馬吉斯",
      number: "ST02-011_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST02-011_p2.webp?260612",
      prices: { a: 2613, b: 2991, c: 369 }
    },
    {
      id: "ST03-006_p2",
      name: "夏亞專用薩克Ⅱ",
      number: "ST03-006_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-006_p2.webp?260612",
      prices: { a: 2158, b: 2806, c: 454 }
    },
    {
      id: "ST03-008_p3",
      name: "薩克Ⅱ",
      number: "ST03-008_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-008_p3.webp?260612",
      prices: { a: 1741, b: 2887, c: 1033 }
    },
    {
      id: "ST03-013_p2",
      name: "格鬥戰",
      number: "ST03-013_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST03-013_p2.webp?260612",
      prices: { a: 306, b: 1842, c: 378 }
    },
    {
      id: "ST04-002_p3",
      name: "突擊高達",
      number: "ST04-002_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-002_p3.webp?260612",
      prices: { a: 106, b: 442, c: 778 }
    },
    {
      id: "ST04-010_p3",
      name: "基拉・大和",
      number: "ST04-010_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-010_p3.webp?260612",
      prices: { a: 1045, b: 1015, c: 985 }
    },
    {
      id: "ST04-010_p4",
      name: "基拉・大和",
      number: "ST04-010_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-010_p4.webp?260612",
      prices: { a: 1046, b: 1022, c: 998 }
    },
    {
      id: "ST04-011_p2",
      name: "阿斯蘭・薩拉",
      number: "ST04-011_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-011_p2.webp?260612",
      prices: { a: 2835, b: 1545, c: 255 }
    },
    {
      id: "ST04-011_p3",
      name: "阿斯蘭・薩拉",
      number: "ST04-011_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-011_p3.webp?260612",
      prices: { a: 2836, b: 1552, c: 268 }
    },
    {
      id: "ST04-015_p4",
      name: "大天使號",
      number: "ST04-015_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-015_p4.webp?260612",
      prices: { a: 1001, b: 707, c: 413 }
    },
    {
      id: "ST04-015_p5",
      name: "大天使號",
      number: "ST04-015_p5",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST04-015_p5.webp?260612",
      prices: { a: 1002, b: 714, c: 426 }
    },
    {
      id: "ST05-002_p2",
      name: "高達巴巴托司(第2形態)",
      number: "ST05-002_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-002_p2.webp?260612",
      prices: { a: 2216, b: 212, c: 1208 }
    },
    {
      id: "ST05-010_p2",
      name: "三日月・奧古斯",
      number: "ST05-010_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-010_p2.webp?260612",
      prices: { a: 155, b: 785, c: 1415 }
    },
    {
      id: "ST05-013_p2",
      name: "鐵與血",
      number: "ST05-013_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-013_p2.webp?260612",
      prices: { a: 1528, b: 1396, c: 1264 }
    },
    {
      id: "ST05-015_p2",
      name: "漁火",
      number: "ST05-015_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST05-015_p2.webp?260612",
      prices: { a: 110, b: 470, c: 830 }
    },
    {
      id: "ST06-002_p2",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "ST06-002_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-002_p2.webp?260612",
      prices: { a: 1327, b: 2989, c: 1651 }
    },
    {
      id: "ST06-006_p2",
      name: "紅色高達",
      number: "ST06-006_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-006_p2.webp?260612",
      prices: { a: 2491, b: 2137, c: 1783 }
    },
    {
      id: "ST06-009_p2",
      name: "天手讓葉（瑪秋）",
      number: "ST06-009_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-009_p2.webp?260612",
      prices: { a: 864, b: 2748, c: 1632 }
    },
    {
      id: "ST06-009_p3",
      name: "天手讓葉（瑪秋）",
      number: "ST06-009_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-009_p3.webp?260612",
      prices: { a: 865, b: 2755, c: 1645 }
    },
    {
      id: "ST06-009_p4",
      name: "天手讓葉（瑪秋）",
      number: "ST06-009_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-009_p4.webp?260612",
      prices: { a: 866, b: 2762, c: 1658 }
    },
    {
      id: "ST06-010_p2",
      name: "修司伊藤",
      number: "ST06-010_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-010_p2.webp?260612",
      prices: { a: 1266, b: 2562, c: 858 }
    },
    {
      id: "ST06-010_p3",
      name: "修司伊藤",
      number: "ST06-010_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST06-010_p3.webp?260612",
      prices: { a: 1267, b: 2569, c: 871 }
    },
    {
      id: "ST07-002_p2",
      name: "能天使高達",
      number: "ST07-002_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-002_p2.webp?260612",
      prices: { a: 438, b: 2766, c: 2094 }
    },
    {
      id: "ST07-005_p2",
      name: "力天使高達",
      number: "ST07-005_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-005_p2.webp?260612",
      prices: { a: 1811, b: 377, c: 1943 }
    },
    {
      id: "ST07-009_p2",
      name: "剎那・F・塞耶",
      number: "ST07-009_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-009_p2.webp?260612",
      prices: { a: 2975, b: 2525, c: 2075 }
    },
    {
      id: "ST07-010_p2",
      name: "提耶利亞・厄德",
      number: "ST07-010_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-010_p2.webp?260612",
      prices: { a: 377, b: 2339, c: 1301 }
    },
    {
      id: "ST07-010_p3",
      name: "提耶利亞・厄德",
      number: "ST07-010_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-010_p3.webp?260612",
      prices: { a: 378, b: 2346, c: 1314 }
    },
    {
      id: "ST07-011_p2",
      name: "洛克昂・史特拉托斯（尼爾・狄蘭迪）",
      number: "ST07-011_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-011_p2.webp?260612",
      prices: { a: 168, b: 876, c: 1584 }
    },
    {
      id: "ST07-014_p2",
      name: "戰術預報員",
      number: "ST07-014_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-014_p2.webp?260612",
      prices: { a: 1541, b: 1487, c: 1433 }
    },
    {
      id: "ST07-014_p3",
      name: "戰術預報員",
      number: "ST07-014_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST07-014_p3.webp?260612",
      prices: { a: 1542, b: 1494, c: 1446 }
    },
    {
      id: "ST08-002_p2",
      name: "Ξ高達",
      number: "ST08-002_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-002_p2.webp?260612",
      prices: { a: 2549, b: 2543, c: 2537 }
    },
    {
      id: "ST08-010_p2",
      name: "哈薩威・諾亞",
      number: "ST08-010_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/ST08-010_p2.webp?260612",
      prices: { a: 2488, b: 2116, c: 1744 }
    },
    {
      id: "GD01-005_p3",
      name: "獨角獸高達（獨角獸模式）",
      number: "GD01-005_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-005_p3.webp?260612",
      prices: { a: 798, b: 2286, c: 774 }
    },
    {
      id: "GD01-008_p2",
      name: "鋼坦克",
      number: "GD01-008_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-008_p2.webp?260612",
      prices: { a: 2170, b: 2890, c: 610 }
    },
    {
      id: "GD01-013_p2",
      name: "高達",
      number: "GD01-013_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-013_p2.webp?260612",
      prices: { a: 1736, b: 2852, c: 968 }
    },
    {
      id: "GD01-013_p3",
      name: "高達",
      number: "GD01-013_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-013_p3.webp?260612",
      prices: { a: 1737, b: 2859, c: 981 }
    },
    {
      id: "GD01-016_p2",
      name: "傑鋼",
      number: "GD01-016_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-016_p2.webp?260612",
      prices: { a: 109, b: 463, c: 817 }
    },
    {
      id: "GD01-016_p3",
      name: "傑鋼",
      number: "GD01-016_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-016_p3.webp?260612",
      prices: { a: 110, b: 470, c: 830 }
    },
    {
      id: "GD01-024_p2",
      name: "飛翼高達零式",
      number: "GD01-024_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-024_p2.webp?260612",
      prices: { a: 3048, b: 3036, c: 3024 }
    },
    {
      id: "GD01-047_p2",
      name: "尚布羅",
      number: "GD01-047_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-047_p2.webp?260612",
      prices: { a: 463, b: 2941, c: 2419 }
    },
    {
      id: "GD01-051_p1",
      name: "剎帝利",
      number: "GD01-051_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-051_p1.webp?260612",
      prices: { a: 2237, b: 359, c: 1481 }
    },
    {
      id: "GD01-051_p2",
      name: "剎帝利",
      number: "GD01-051_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-051_p2.webp?260612",
      prices: { a: 2238, b: 366, c: 1494 }
    },
    {
      id: "GD01-065_p2",
      name: "自由高達",
      number: "GD01-065_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-065_p2.webp?260612",
      prices: { a: 2923, b: 2161, c: 1399 }
    },
    {
      id: "GD01-067_p3",
      name: "風靈高達（修改型）",
      number: "GD01-067_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-067_p3.webp?260612",
      prices: { a: 1506, b: 1242, c: 978 }
    },
    {
      id: "GD01-070_p3",
      name: "風靈高達",
      number: "GD01-070_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-070_p3.webp?260612",
      prices: { a: 1490, b: 1130, c: 770 }
    },
    {
      id: "GD01-070_p4",
      name: "風靈高達",
      number: "GD01-070_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-070_p4.webp?260612",
      prices: { a: 1491, b: 1137, c: 783 }
    },
    {
      id: "GD01-086_p1",
      name: "魔靈高達",
      number: "GD01-086_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-086_p1.webp?260612",
      prices: { a: 755, b: 1985, c: 215 }
    },
    {
      id: "GD01-087_p2",
      name: "雪拉・瑪斯",
      number: "GD01-087_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-087_p2.webp?260612",
      prices: { a: 547, b: 529, c: 511 }
    },
    {
      id: "GD01-087_p3",
      name: "雪拉・瑪斯",
      number: "GD01-087_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-087_p3.webp?260612",
      prices: { a: 548, b: 536, c: 524 }
    },
    {
      id: "GD01-088_p3",
      name: "巴納吉・林克斯",
      number: "GD01-088_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-088_p3.webp?260612",
      prices: { a: 339, b: 2073, c: 807 }
    },
    {
      id: "GD01-090_p2",
      name: "迪歐・麥斯威爾",
      number: "GD01-090_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-090_p2.webp?260612",
      prices: { a: 531, b: 417, c: 303 }
    },
    {
      id: "GD01-090_p3",
      name: "迪歐・麥斯威爾",
      number: "GD01-090_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-090_p3.webp?260612",
      prices: { a: 532, b: 424, c: 316 }
    },
    {
      id: "GD01-096_p2",
      name: "卡佳里・由拉・阿斯哈",
      number: "GD01-096_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-096_p2.webp?260612",
      prices: { a: 277, b: 1639, c: 3001 }
    },
    {
      id: "GD01-106_p1",
      name: "要塞防衛戰",
      number: "GD01-106_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-106_p1.webp?260612",
      prices: { a: 2738, b: 866, c: 1994 }
    },
    {
      id: "GD01-118_p4",
      name: "洋溢的慈愛",
      number: "GD01-118_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD01-118_p4.webp?260612",
      prices: { a: 844, b: 2608, c: 1372 }
    },
    {
      id: "GD02-003_p2",
      name: "高達Mk-Ⅱ（泰坦斯規格）",
      number: "GD02-003_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-003_p2.webp?260612",
      prices: { a: 1326, b: 2982, c: 1638 }
    },
    {
      id: "GD02-003_p3",
      name: "高達Mk-Ⅱ（泰坦斯規格）",
      number: "GD02-003_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-003_p3.webp?260612",
      prices: { a: 1327, b: 2989, c: 1651 }
    },
    {
      id: "GD02-006_p1",
      name: "禁斷高達",
      number: "GD02-006_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-006_p1.webp?260612",
      prices: { a: 2698, b: 586, c: 1474 }
    },
    {
      id: "GD02-006_p2",
      name: "禁斷高達",
      number: "GD02-006_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-006_p2.webp?260612",
      prices: { a: 2699, b: 593, c: 1487 }
    },
    {
      id: "GD02-029_p1",
      name: "高達AGE-1 普通型",
      number: "GD02-029_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-029_p1.webp?260612",
      prices: { a: 113, b: 491, c: 869 }
    },
    {
      id: "GD02-029_p2",
      name: "高達AGE-1 普通型",
      number: "GD02-029_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-029_p2.webp?260612",
      prices: { a: 114, b: 498, c: 882 }
    },
    {
      id: "GD02-029_p3",
      name: "高達AGE-1 普通型",
      number: "GD02-029_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-029_p3.webp?260612",
      prices: { a: 115, b: 505, c: 895 }
    },
    {
      id: "GD02-036_p2",
      name: "卡碧尼",
      number: "GD02-036_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-036_p2.webp?260612",
      prices: { a: 262, b: 1534, c: 2806 }
    },
    {
      id: "GD02-039_p1",
      name: "卡薩C（哈曼・坎恩專用機）",
      number: "GD02-039_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-039_p1.webp?260612",
      prices: { a: 1634, b: 2138, c: 2642 }
    },
    {
      id: "GD02-039_p2",
      name: "卡薩C（哈曼・坎恩專用機）",
      number: "GD02-039_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-039_p2.webp?260612",
      prices: { a: 1635, b: 2145, c: 2655 }
    },
    {
      id: "GD02-048_p1",
      name: "薩克古Ⅲ（袖章軍團規格）",
      number: "GD02-048_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-048_p1.webp?260612",
      prices: { a: 1364, b: 248, c: 2132 }
    },
    {
      id: "GD02-048_p2",
      name: "薩克Ⅲ（袖章軍團規格）",
      number: "GD02-048_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-048_p2.webp?260612",
      prices: { a: 1365, b: 255, c: 2145 }
    },
    {
      id: "GD02-056_p1",
      name: "高達X",
      number: "GD02-056_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-056_p1.webp?260612",
      prices: { a: 2303, b: 821, c: 2339 }
    },
    {
      id: "GD02-056_p2",
      name: "高達X",
      number: "GD02-056_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-056_p2.webp?260612",
      prices: { a: 2304, b: 828, c: 2352 }
    },
    {
      id: "GD02-058_p1",
      name: "流星號（格雷茲改貳）",
      number: "GD02-058_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-058_p1.webp?260612",
      prices: { a: 885, b: 2895, c: 1905 }
    },
    {
      id: "GD02-069_p2",
      name: "Z高達",
      number: "GD02-069_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-069_p2.webp?260612",
      prices: { a: 198, b: 1086, c: 1974 }
    },
    {
      id: "GD02-088_p2",
      name: "菲利特・明日野",
      number: "GD02-088_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-088_p2.webp?260612",
      prices: { a: 1449, b: 843, c: 237 }
    },
    {
      id: "GD02-090_p1",
      name: "夏里亞・布爾（GQ）",
      number: "GD02-090_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-090_p1.webp?260612",
      prices: { a: 2641, b: 187, c: 733 }
    },
    {
      id: "GD02-090_p2",
      name: "夏里亞・布爾（GQ）",
      number: "GD02-090_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-090_p2.webp?260612",
      prices: { a: 2642, b: 194, c: 746 }
    },
    {
      id: "GD02-091_p2",
      name: "哈曼・坎恩",
      number: "GD02-091_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-091_p2.webp?260612",
      prices: { a: 1433, b: 731, c: 3029 }
    },
    {
      id: "GD02-091_p3",
      name: "哈曼・坎恩",
      number: "GD02-091_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-091_p3.webp?260612",
      prices: { a: 1434, b: 738, c: 3042 }
    },
    {
      id: "GD02-096_p1",
      name: "德席爾・加列特",
      number: "GD02-096_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-096_p1.webp?260612",
      prices: { a: 2387, b: 1409, c: 431 }
    },
    {
      id: "GD02-096_p2",
      name: "德席爾・加列特",
      number: "GD02-096_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-096_p2.webp?260612",
      prices: { a: 2388, b: 1416, c: 444 }
    },
    {
      id: "GD02-097_p2",
      name: "嘉美尤・維達",
      number: "GD02-097_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-097_p2.webp?260612",
      prices: { a: 1179, b: 1953, c: 2727 }
    },
    {
      id: "GD02-098_p1",
      name: "克瓦特羅・巴吉納",
      number: "GD02-098_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-098_p1.webp?260612",
      prices: { a: 969, b: 483, c: 2997 }
    },
    {
      id: "GD02-098_p2",
      name: "克瓦特羅・巴吉納",
      number: "GD02-098_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-098_p2.webp?260612",
      prices: { a: 970, b: 490, c: 3010 }
    },
    {
      id: "GD02-104_p1",
      name: "歷史的分歧點",
      number: "GD02-104_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-104_p1.webp?260612",
      prices: { a: 2267, b: 569, c: 1871 }
    },
    {
      id: "GD02-104_p2",
      name: "歷史的分歧點",
      number: "GD02-104_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-104_p2.webp?260612",
      prices: { a: 2268, b: 576, c: 1884 }
    },
    {
      id: "GD02-106_p1",
      name: "白狼",
      number: "GD02-106_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-106_p1.webp?260612",
      prices: { a: 1849, b: 643, c: 2437 }
    },
    {
      id: "GD02-106_p2",
      name: "白狼",
      number: "GD02-106_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-106_p2.webp?260612",
      prices: { a: 1850, b: 650, c: 2450 }
    },
    {
      id: "GD02-107_p2",
      name: "全領域攻擊",
      number: "GD02-107_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-107_p2.webp?260612",
      prices: { a: 641, b: 1187, c: 1733 }
    },
    {
      id: "GD02-112_p2",
      name: "片刻的休憩時光",
      number: "GD02-112_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-112_p2.webp?260612",
      prices: { a: 207, b: 1149, c: 2091 }
    },
    {
      id: "GD02-112_p3",
      name: "片刻的休憩時光",
      number: "GD02-112_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-112_p3.webp?260612",
      prices: { a: 208, b: 1156, c: 2104 }
    },
    {
      id: "GD02-117_p1",
      name: "新的脈動",
      number: "GD02-117_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD02-117_p1.webp?260612",
      prices: { a: 161, b: 827, c: 1493 }
    },
    {
      id: "GD03-010_p2",
      name: "全裝甲獨角獸高達（毀滅模式）",
      number: "GD03-010_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-010_p2.webp?260612",
      prices: { a: 585, b: 795, c: 1005 }
    },
    {
      id: "GD03-010_p3",
      name: "全裝甲獨角獸高達（毀滅模式）",
      number: "GD03-010_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-010_p3.webp?260612",
      prices: { a: 586, b: 802, c: 1018 }
    },
    {
      id: "GD03-020_p3",
      name: "薩克Ⅱ改",
      number: "GD03-020_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-020_p3.webp?260612",
      prices: { a: 107, b: 449, c: 791 }
    },
    {
      id: "GD03-021_p1",
      name: "地獄死神高達",
      number: "GD03-021_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-021_p1.webp?260612",
      prices: { a: 2896, b: 1972, c: 1048 }
    },
    {
      id: "GD03-021_p2",
      name: "地獄死神高達",
      number: "GD03-021_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-021_p2.webp?260612",
      prices: { a: 2897, b: 1979, c: 1061 }
    },
    {
      id: "GD03-027_p1",
      name: "茲卡克E",
      number: "GD03-027_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-027_p1.webp?260612",
      prices: { a: 2642, b: 194, c: 746 }
    },
    {
      id: "GD03-034_p2",
      name: "GQuuuuuuX（Ω腦波傳導啟動時）",
      number: "GD03-034_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-034_p2.webp?260612",
      prices: { a: 791, b: 2237, c: 683 }
    },
    {
      id: "GD03-050_p3",
      name: "高達巴巴托司狼式",
      number: "GD03-050_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-050_p3.webp?260612",
      prices: { a: 670, b: 1390, c: 2110 }
    },
    {
      id: "GD03-055_p1",
      name: "端白星高達（第2型態）",
      number: "GD03-055_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-055_p1.webp?260612",
      prices: { a: 1623, b: 2061, c: 2499 }
    },
    {
      id: "GD03-072_p1",
      name: "機動型突擊高達",
      number: "GD03-072_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-072_p1.webp?260612",
      prices: { a: 1292, b: 2744, c: 1196 }
    },
    {
      id: "GD03-072_p2",
      name: "機動型突擊高達",
      number: "GD03-072_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-072_p2.webp?260612",
      prices: { a: 1293, b: 2751, c: 1209 }
    },
    {
      id: "GD03-076_p1",
      name: "自由高達（流星裝備）",
      number: "GD03-076_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-076_p1.webp?260612",
      prices: { a: 2456, b: 1892, c: 1328 }
    },
    {
      id: "GD03-081_p1",
      name: "AEU制定式（展示機色）",
      number: "GD03-081_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-081_p1.webp?260612",
      prices: { a: 1022, b: 854, c: 686 }
    },
    {
      id: "GD03-081_p2",
      name: "AEU制定式（展示機色）",
      number: "GD03-081_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-081_p2.webp?260612",
      prices: { a: 1023, b: 861, c: 699 }
    },
    {
      id: "GD03-087_p1",
      name: "莎拉・薩比亞羅夫",
      number: "GD03-087_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-087_p1.webp?260612",
      prices: { a: 1768, b: 76, c: 1384 }
    },
    {
      id: "GD03-087_p2",
      name: "莎拉・薩比亞羅夫",
      number: "GD03-087_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-087_p2.webp?260612",
      prices: { a: 1769, b: 83, c: 1397 }
    },
    {
      id: "GD03-089_p1",
      name: "巴納德・懷茲曼",
      number: "GD03-089_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-089_p1.webp?260612",
      prices: { a: 350, b: 2150, c: 950 }
    },
    {
      id: "GD03-092_p1",
      name: "涅安",
      number: "GD03-092_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-092_p1.webp?260612",
      prices: { a: 334, b: 2038, c: 742 }
    },
    {
      id: "GD03-092_p2",
      name: "涅安",
      number: "GD03-092_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-092_p2.webp?260612",
      prices: { a: 335, b: 2045, c: 755 }
    },
    {
      id: "GD03-100_p1",
      name: "索瑪・皮利斯",
      number: "GD03-100_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-100_p1.webp?260612",
      prices: { a: 214, b: 1198, c: 2182 }
    },
    {
      id: "GD03-109_p2",
      name: "戰技精進",
      number: "GD03-109_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-109_p2.webp?260612",
      prices: { a: 2334, b: 1038, c: 2742 }
    },
    {
      id: "GD03-113_p1",
      name: "人類的業果",
      number: "GD03-113_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-113_p1.webp?260612",
      prices: { a: 1108, b: 1456, c: 1804 }
    },
    {
      id: "GD03-113_p2",
      name: "人類的業果",
      number: "GD03-113_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-113_p2.webp?260612",
      prices: { a: 1109, b: 1463, c: 1817 }
    },
    {
      id: "GD03-114_p2",
      name: "決意的眼神",
      number: "GD03-114_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-114_p2.webp?260612",
      prices: { a: 900, b: 3000, c: 2100 }
    },
    {
      id: "GD03-118_p2",
      name: "能力覺醒",
      number: "GD03-118_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-118_p2.webp?260612",
      prices: { a: 2064, b: 2148, c: 2232 }
    },
    {
      id: "GD03-118_p3",
      name: "能力覺醒",
      number: "GD03-118_p3",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-118_p3.webp?260612",
      prices: { a: 2065, b: 2155, c: 2245 }
    },
    {
      id: "GD03-118_p4",
      name: "能力覺醒",
      number: "GD03-118_p4",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD03-118_p4.webp?260612",
      prices: { a: 2066, b: 2162, c: 2258 }
    },
    {
      id: "GD04-024_p1",
      name: "風靈高達（修改型）",
      number: "GD04-024_p1",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-024_p1.webp?260612",
      prices: { a: 380, b: 2360, c: 1340 }
    },
    {
      id: "GD04-085_p2",
      name: "蘇萊塔・墨丘利",
      number: "GD04-085_p2",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/GD04-085_p2.webp?260612",
      prices: { a: 1298, b: 2786, c: 1274 }
    },
    {
      id: "RP-001",
      name: "能源",
      number: "RP-001",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-001.webp?260612",
      prices: { a: 372, b: 2304, c: 1236 }
    },
    {
      id: "RP-002",
      name: "能源",
      number: "RP-002",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-002.webp?260612",
      prices: { a: 373, b: 2311, c: 1249 }
    },
    {
      id: "RP-003",
      name: "能源",
      number: "RP-003",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-003.webp?260612",
      prices: { a: 374, b: 2318, c: 1262 }
    },
    {
      id: "RP-004",
      name: "能源",
      number: "RP-004",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-004.webp?260612",
      prices: { a: 375, b: 2325, c: 1275 }
    },
    {
      id: "RP-005",
      name: "能源",
      number: "RP-005",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-005.webp?260612",
      prices: { a: 376, b: 2332, c: 1288 }
    },
    {
      id: "RP-006",
      name: "能源",
      number: "RP-006",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-006.webp?260612",
      prices: { a: 377, b: 2339, c: 1301 }
    },
    {
      id: "RP-007",
      name: "能源",
      number: "RP-007",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-007.webp?260612",
      prices: { a: 378, b: 2346, c: 1314 }
    },
    {
      id: "RP-008",
      name: "能源",
      number: "RP-008",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-008.webp?260612",
      prices: { a: 379, b: 2353, c: 1327 }
    },
    {
      id: "RP-009",
      name: "能源",
      number: "RP-009",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-009.webp?260612",
      prices: { a: 380, b: 2360, c: 1340 }
    },
    {
      id: "RP-010",
      name: "能源",
      number: "RP-010",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-010.webp?260612",
      prices: { a: 402, b: 2514, c: 1626 }
    },
    {
      id: "RP-011",
      name: "能源",
      number: "RP-011",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-011.webp?260612",
      prices: { a: 403, b: 2521, c: 1639 }
    },
    {
      id: "RP-012",
      name: "能源",
      number: "RP-012",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-012.webp?260612",
      prices: { a: 404, b: 2528, c: 1652 }
    },
    {
      id: "RP-013",
      name: "能源",
      number: "RP-013",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-013.webp?260612",
      prices: { a: 405, b: 2535, c: 1665 }
    },
    {
      id: "RP-014",
      name: "能源",
      number: "RP-014",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-014.webp?260612",
      prices: { a: 406, b: 2542, c: 1678 }
    },
    {
      id: "RP-015",
      name: "能源",
      number: "RP-015",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-015.webp?260612",
      prices: { a: 407, b: 2549, c: 1691 }
    },
    {
      id: "RP-016",
      name: "能源",
      number: "RP-016",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-016.webp?260612",
      prices: { a: 408, b: 2556, c: 1704 }
    },
    {
      id: "RP-017",
      name: "能源",
      number: "RP-017",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-017.webp?260612",
      prices: { a: 409, b: 2563, c: 1717 }
    },
    {
      id: "RP-018",
      name: "能源",
      number: "RP-018",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-018.webp?260612",
      prices: { a: 410, b: 2570, c: 1730 }
    },
    {
      id: "RP-019",
      name: "能源",
      number: "RP-019",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-019.webp?260612",
      prices: { a: 411, b: 2577, c: 1743 }
    },
    {
      id: "RP-020",
      name: "能源",
      number: "RP-020",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-020.webp?260612",
      prices: { a: 433, b: 2731, c: 2029 }
    },
    {
      id: "RP-021",
      name: "能源",
      number: "RP-021",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-021.webp?260612",
      prices: { a: 434, b: 2738, c: 2042 }
    },
    {
      id: "RP-022",
      name: "能源",
      number: "RP-022",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-022.webp?260612",
      prices: { a: 435, b: 2745, c: 2055 }
    },
    {
      id: "RP-023",
      name: "能源",
      number: "RP-023",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-023.webp?260612",
      prices: { a: 436, b: 2752, c: 2068 }
    },
    {
      id: "RP-044",
      name: "能源",
      number: "RP-044",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-044.webp?260612",
      prices: { a: 499, b: 193, c: 2887 }
    },
    {
      id: "RP-057",
      name: "能源",
      number: "RP-057",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-057.webp?260612",
      prices: { a: 533, b: 431, c: 329 }
    },
    {
      id: "RP-058",
      name: "能源",
      number: "RP-058",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-058.webp?260612",
      prices: { a: 534, b: 438, c: 342 }
    },
    {
      id: "RP-059",
      name: "能源",
      number: "RP-059",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-059.webp?260612",
      prices: { a: 535, b: 445, c: 355 }
    },
    {
      id: "RP-060",
      name: "能源",
      number: "RP-060",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-060.webp?260612",
      prices: { a: 557, b: 599, c: 641 }
    },
    {
      id: "RP-061",
      name: "能源",
      number: "RP-061",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-061.webp?260612",
      prices: { a: 558, b: 606, c: 654 }
    },
    {
      id: "RP-062",
      name: "能源",
      number: "RP-062",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-062.webp?260612",
      prices: { a: 559, b: 613, c: 667 }
    },
    {
      id: "RP-063",
      name: "能源",
      number: "RP-063",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-063.webp?260612",
      prices: { a: 560, b: 620, c: 680 }
    },
    {
      id: "RP-064",
      name: "能源",
      number: "RP-064",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-064.webp?260612",
      prices: { a: 561, b: 627, c: 693 }
    },
    {
      id: "RP-065",
      name: "能源",
      number: "RP-065",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/RP-065.webp?260612",
      prices: { a: 562, b: 634, c: 706 }
    },
    {
      id: "EXBP-001",
      name: "EX基地",
      number: "EXBP-001",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-001.webp?260612",
      prices: { a: 1543, b: 1501, c: 1459 }
    },
    {
      id: "EXBP-002",
      name: "EX基地",
      number: "EXBP-002",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-002.webp?260612",
      prices: { a: 1544, b: 1508, c: 1472 }
    },
    {
      id: "EXBP-003",
      name: "EX基地",
      number: "EXBP-003",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-003.webp?260612",
      prices: { a: 1545, b: 1515, c: 1485 }
    },
    {
      id: "EXBP-004",
      name: "EX基地",
      number: "EXBP-004",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-004.webp?260612",
      prices: { a: 1546, b: 1522, c: 1498 }
    },
    {
      id: "EXBP-005",
      name: "EX基地",
      number: "EXBP-005",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-005.webp?260612",
      prices: { a: 1547, b: 1529, c: 1511 }
    },
    {
      id: "EXBP-006",
      name: "EX基地",
      number: "EXBP-006",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-006.webp?260612",
      prices: { a: 1548, b: 1536, c: 1524 }
    },
    {
      id: "EXBP-007",
      name: "EX基地",
      number: "EXBP-007",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-007.webp?260612",
      prices: { a: 1549, b: 1543, c: 1537 }
    },
    {
      id: "EXBP-008",
      name: "EX基地",
      number: "EXBP-008",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-008.webp?260612",
      prices: { a: 1550, b: 1550, c: 1550 }
    },
    {
      id: "EXBP-009",
      name: "EX基地",
      number: "EXBP-009",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-009.webp?260612",
      prices: { a: 1551, b: 1557, c: 1563 }
    },
    {
      id: "EXBP-010",
      name: "EX基地",
      number: "EXBP-010",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-010.webp?260612",
      prices: { a: 1573, b: 1711, c: 1849 }
    },
    {
      id: "EXBP-011",
      name: "EX基地",
      number: "EXBP-011",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-011.webp?260612",
      prices: { a: 1574, b: 1718, c: 1862 }
    },
    {
      id: "EXBP-019",
      name: "EX基地",
      number: "EXBP-019",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXBP-019.webp?260612",
      prices: { a: 1582, b: 1774, c: 1966 }
    },
    {
      id: "EXRP-001",
      name: "EX能源",
      number: "EXRP-001",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-001.webp?260612",
      prices: { a: 959, b: 413, c: 2867 }
    },
    {
      id: "EXRP-002",
      name: "EX能源",
      number: "EXRP-002",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-002.webp?260612",
      prices: { a: 960, b: 420, c: 2880 }
    },
    {
      id: "EXRP-003",
      name: "EX能源",
      number: "EXRP-003",
      series: "推廣卡",
      image: "https://www.gundam-gcg.com/jp/images/cards/card/EXRP-003.webp?260612",
      prices: { a: 961, b: 427, c: 2893 }
    }
  ]
};
