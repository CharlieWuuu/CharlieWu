> 此網頁後端為冷啟動機制，第一次執行可能需[等待約 1 分鐘](https://render.com/docs/free?_gl=1*xy5vyn*_gcl_au*Mzg3MTk1MzMwLjE3NDczMDM4MzU.*_ga*NjMzNDY3OTcyLjE3NDU1MTc5NTk.*_ga_QK9L9QJC5N*czE3NDk2MTExMTMkbzEyJGcwJHQxNzQ5NjExMTEzJGo2MCRsMCRoMA..#:~:text=Spinning%20up%20a%20service%20takes%20up%20to%20a%20minute)才會取得資料，敬請見諒。


本人平時有登山習慣，過去常以 QGIS 搭配 Excel 紀錄軌跡資料，但在瀏覽與展示上略顯不便，於是決定開發網站進行整合呈現。
同時也將網站設計成模擬登山愛好者的交流平臺，目前功能包含：

1. 首頁
2. 使用者頁面
3. 資料展示頁面（具備地圖、表格與編輯三種模式）
4. 說明頁
5. 使用者搜尋頁面

技術上採用前、後端分離架構：

1. 前端：使用 React 與 Leaflet 開發，架設於 Vercel
2. 後端：使用 NestJS，搭配 Neon（PostgreSQL 雲端資料庫），架設於 Render
3. 開發過程中亦有繪製 Figma 設計稿與使用者流程圖

未來預計補充百岳／小百岳／百大登山步道資料，並與使用者軌跡資料整合。
