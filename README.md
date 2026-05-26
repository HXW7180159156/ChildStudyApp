<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# LingoQuest Kids 🚀

一款面向 3–8 岁孩子的英语启蒙 Web 应用，基于 **React + Vite + Tailwind**，内置词汇、可爱卡通插画和浏览器语音朗读。

## ✨ 功能特色

- 🔤 **三阶段课程**：26 个字母 → 自然拼读 → 主题词汇（动物 / 颜色 / 食物 / 太空 …）
- 🎨 **内置学习内容**：精选词汇、卡通图片和浏览器语音朗读
- 🃏 **单词卡学习**：图片 + 拼读 + 中文释义 + 例子，点击播放发音
- ❓ **图片选择 Quiz**：完成单词学习后自动进入测验
- ⭐ **得分与星级**：根据首次正确率给出 0–3 星反馈
- 📝 **错题复习**：自动收集答错的单词，可一键再练习
- 💾 **学习进度持久化**：每节课的星级、练习次数和最近学习时间都会保存到本地
- 📊 **学习报告页面**：查看已学课程、累计星星、最近正确率
- 🗂️ **课程内容缓存**：同一节课重复打开可直接读取本地缓存，秒开
- 🔁 **失败可重试**：网络/接口出错时显示友好错误页，而不是弹窗 alert
- 🧪 **离线可用**：无需配置 API Key 即可使用内置词汇体验完整流程

## 🚀 本地运行

**前置条件：** Node.js ≥ 18

1. 安装依赖：

   ```bash
   npm install
   ```

2. 启动开发服务器：

   ```bash
   npm run dev
   ```

   默认地址：<http://localhost:3000>

## 🏗️ 生产构建

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览构建产物
```

## 🖥️ 桌面发行版

当前工程可通过 Electron Builder 打包为桌面安装包：

```bash
npm run dist:win   # 生成 Win11 x64 安装包到 release/
npm run dist:mac   # 生成 macOS x64/arm64 DMG 到 release/
```

也可以在 GitHub Actions 手动触发 **Build desktop release** 工作流，默认会构建并发布 `v1.0.0` / `V1.0` 的 GitHub Release。

## ☁️ 云端部署（GitHub Pages）

本仓库已添加 GitHub Pages 自动部署工作流。

1. 进入仓库 **Settings → Pages**
2. 将 **Build and deployment** 的 **Source** 设置为 **GitHub Actions**
3. 推送到 `main` 分支，或手动触发 **Deploy to GitHub Pages** 工作流
4. 部署完成后，可通过：

   `https://HXW7180159156.github.io/ChildStudyApp/`

> 当前仓库默认可直接以纯静态方式部署运行，无需额外配置 API Key。

## 🗂️ 项目结构

```
├── App.tsx                 主应用：路由、课程加载、进度联动
├── index.tsx / index.html  入口
├── types.ts                共享类型（课程、词条、进度、测验结果）
├── components/
│   ├── FlashCard.tsx       单词卡片
│   ├── Quiz.tsx            图片选择测验 + 评分
│   ├── LoadingScreen.tsx   加载动画
│   ├── ErrorScreen.tsx     失败重试
│   └── ReportScreen.tsx    学习报告
└── services/
    ├── fallbackData.ts     内置词汇
    ├── speech.ts           浏览器语音朗读
    ├── wordImages.ts       内置插画
    └── storage.ts          学习进度 + 内容缓存（localStorage）
```

## 📦 主要依赖

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS (CDN)](https://tailwindcss.com/)

---

Made with ❤️ for curious kids.
