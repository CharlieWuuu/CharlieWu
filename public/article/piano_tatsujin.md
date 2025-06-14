以《太鼓達人》為靈感，設計成可以計分的音樂遊戲，此為 Hahow 課程「[動畫互動網頁程式入門](https://hahow.in/courses/56189df9df7b3d0b005c6639)」的作業之一。

利用 `v-for` 自動產生鍵盤，並綁定音檔與鍵盤按鍵值，模擬出演奏鋼琴的效果。
為了增加互動樂趣，撰寫多首曲目，並設計落下的提示音符與計分功能。
提示音符亦是以 `v-for` 事先產生，隱藏於畫面上方，待時間到即顯示並落下。

計分邏輯為：紀錄玩家按下的音符與時間，判斷是否與當下正在播放的提示音相符。
若按對音且時間在判定範圍內即得分，按錯音則會小幅扣分（避免亂按即可得分的情形）。
挑戰結束後，畫面會顯示本次的總分與評價。
