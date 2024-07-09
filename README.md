[團體專案](https://github.com/Think-up-together/frontend)fork
僅製作前端切版
=======
## 專案發想
因喜愛讀小說，我們萌生了創建一個小說網站的想法，讓用戶既能瀏覽小說，又能在論壇中交流和創作。專案過程中，我們使用便利貼法篩選核心功能，但遇到技術瓶頸和組員興趣減少的挑戰。這段經歷教會了我有效溝通和資源協調，並提升了我的靈活性和適應力。

## 網站頁面(僅列出我參與的部分)
- 首頁：瀏覽熱門推薦小說
- 側邊欄：登入可以使用，由此連接討論區
- 討論區：討論小說內容、日常聊天
- 搜尋列：搜尋小說名稱、類別篩選

## 網站發想、網站地圖、線框圖
[Miro](https://miro.com/app/board/uXjVMk6RQZs=/?share_link_id=384627469277)

## 設計稿(設計師提供)
[Figma](https://www.figma.com/design/y57BjO8K7NJXLGuNjuQCU7/%2315---%E5%85%B1%E7%AD%86%E5%B0%8F%E8%AA%AA%E5%B9%B3%E5%8F%B0-Think-Up-Together?node-id=0-1)

## Node.js 版本
  - 專案的 Node.js 版本需為 v16 以上
  - 查看自己版本指令：`node -v`


## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署

## 資料夾結構
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項
- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能


## 部署 gh-pages 流程說明
### Windows 版本
1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令
```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署
