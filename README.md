## 目錄
- [專案發想](#專案發想)
- [使用技術](#使用技術)
- [網站頁面](#網站頁面)
- [網站發想、網站地圖、線框圖](#網站發想網站地圖線框圖)
- [設計稿](#設計稿設計師提供)
- [指令列表](#指令列表)
- [資料夾結構](#資料夾結構)
- [注意事項](#注意事項)
- [開發模式](#開發模式)
- [部署 gh-pages](#部署-gh-pages)
- [專案挑戰 & 解決方案](#專案挑戰--解決方案)

## 專案發想
這是一個線上切版課程的團體協作專案，因組員喜愛讀小說，我們萌生了創建一個小說網站的想法，讓用戶既能瀏覽小說，又能在論壇中交流和創作。

## 使用技術
- 專案的初期階段，使用便利貼法來發想和篩選網站的核心功能
- Miro 繪製網站地圖、線框圖
- Vite、Scss、Bootstrap 5 開發前端網頁
- 多人協作專案，使用 Git Merge 管控版本
- 匯入 CKEditor 5 文字編輯器

## 網站頁面  
[pages](https://afonguwu.github.io/frontend/)
- 首頁：最新消息、熱門書籍展示、熱門留言展示
- 搜尋頁面：類別搜尋、文字搜尋
- 登入按鈕：登入功能切換、討論區
- 討論區：討論文章展示、發文按鈕、查看文章留言

## 網站發想、網站地圖、線框圖
[Miro](https://miro.com/app/board/uXjVMk6RQZs=/?share_link_id=384627469277)

## 設計稿(設計師提供)
[Figma](https://www.figma.com/design/y57BjO8K7NJXLGuNjuQCU7/%2315---%E5%85%B1%E7%AD%86%E5%B0%8F%E8%AA%AA%E5%B9%B3%E5%8F%B0-Think-Up-Together?node-id=0-1)

## 指令列表
專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`
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

## 開發模式
vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能


## 部署 gh-pages
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
 e39490a (First Commit)

## 專案挑戰 & 解決方案
- 組員技術不足，主動承擔切版工作，並協助組員學習
- 雖未完成整個網頁，但專注於切版部分，最大化完成度
- 面對技術挑戰，積極學習新技能並應用於專案中，提升專業能力
