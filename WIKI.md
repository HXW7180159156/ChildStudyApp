# LingoQuest Kids Wiki / 儿童学习应用 Wiki

## 目录 / Table of Contents

- [项目概览 / Project Overview](#项目概览--project-overview)
- [核心功能 / Key Features](#核心功能--key-features)
- [技术栈 / Tech Stack](#技术栈--tech-stack)
- [快速开始 / Quick Start](#快速开始--quick-start)
- [使用指南 / User Guide](#使用指南--user-guide)
- [项目结构 / Project Structure](#项目结构--project-structure)
- [开发与验证 / Development and Validation](#开发与验证--development-and-validation)
- [部署与发行 / Deployment and Release](#部署与发行--deployment-and-release)
- [数据与存储 / Data and Storage](#数据与存储--data-and-storage)
- [常见问题 / FAQ](#常见问题--faq)

## 项目概览 / Project Overview

**中文：** LingoQuest Kids 是一款面向 3–8 岁儿童的英语启蒙应用。项目以 React、Vite 和 Tailwind CSS 构建，提供字母、自然拼读和主题词汇三类课程，并通过卡片学习、图片测验、语音朗读和学习报告帮助孩子完成完整学习闭环。

**English:** LingoQuest Kids is an English starter learning app for children aged 3–8. Built with React, Vite, and Tailwind CSS, it offers alphabet, phonics, and themed vocabulary lessons. Children can learn with flashcards, image-based quizzes, browser speech, and progress reports.

## 核心功能 / Key Features

**中文：**

- 三阶段课程：字母、自然拼读、主题词汇。
- 内置词汇和插画：无需 API Key 即可离线学习。
- 单词卡学习：展示英文单词、音标或拼读、中文释义、英文解释和图片。
- 图片选择测验：完成学习后自动进入 Quiz。
- 星级评分：根据首次答对率给出 0–3 星反馈。
- 错题复习：收集答错词汇并支持再次练习。
- 学习报告：展示课程完成情况、累计星星和最近正确率。
- 本地缓存：课程内容和学习进度保存在浏览器本地。
- Web 与桌面发行：支持静态 Web 部署，也支持 Electron Builder 打包桌面安装包。

**English:**

- Three-stage curriculum: alphabet, phonics, and themed vocabulary.
- Built-in vocabulary and artwork: usable offline without an API key.
- Flashcard learning: English word, pronunciation, Chinese translation, English definition, and image.
- Image-choice quiz: starts automatically after the learning flow.
- Star scoring: awards 0–3 stars based on first-try accuracy.
- Mistake review: gathers missed words for focused practice.
- Learning report: shows completed lessons, total stars, and recent accuracy.
- Local caching: lesson content and progress are stored locally in the browser.
- Web and desktop releases: supports static Web deployment and Electron Builder desktop packaging.

## 技术栈 / Tech Stack

| 模块 / Area | 技术 / Technology |
| --- | --- |
| 前端 / Frontend | React 19, TypeScript |
| 构建工具 / Build Tool | Vite 6 |
| 样式 / Styling | Tailwind CSS CDN |
| 桌面端 / Desktop | Electron, Electron Builder |
| 测试 / Testing | Node.js test runner |
| 部署 / Deployment | GitHub Pages via GitHub Actions |

## 快速开始 / Quick Start

**中文：**

1. 安装 Node.js 18 或更高版本。
2. 安装依赖：

   ```bash
   npm install
   ```

3. 启动开发服务器：

   ```bash
   npm run dev
   ```

4. 打开默认地址：<http://localhost:3000>

**English:**

1. Install Node.js 18 or later.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the default URL: <http://localhost:3000>

## 使用指南 / User Guide

### 选择课程 / Choose a Lesson

**中文：** 首页按课程阶段展示内容：Alphabet、Phonetics、Topic。选择任意课程后，应用会加载内置词汇和对应图片。

**English:** The home page organizes lessons by Alphabet, Phonetics, and Topic. Select any lesson to load its built-in vocabulary and matching artwork.

### 学习单词 / Learn Words

**中文：** 在单词卡中查看图片、单词、发音信息、中文释义和英文解释。点击朗读按钮可调用浏览器语音能力播放发音。

**English:** Flashcards show the image, word, pronunciation, Chinese translation, and English definition. Use the speak button to play pronunciation through the browser speech API.

### 完成测验 / Complete a Quiz

**中文：** 学完本节课所有单词后进入图片选择测验。系统会记录首次答对数量，并生成星级结果。

**English:** After all words in a lesson are studied, the app starts an image-choice quiz. It records first-try correct answers and produces a star rating.

### 复习错题 / Review Mistakes

**中文：** 如果测验中出现错误，结果页会提供错题复习入口，帮助孩子重新练习薄弱词汇。

**English:** If the quiz includes mistakes, the result screen offers a review flow so children can practice missed words again.

### 查看报告 / View Reports

**中文：** 学习报告页面汇总已学课程、累计星星、最近正确率、学习次数和最近学习时间。

**English:** The report page summarizes completed lessons, total stars, recent accuracy, attempts, and latest study time.

## 项目结构 / Project Structure

```text
├── App.tsx                 主应用：页面状态、课程加载、测验和报告入口
├── index.tsx / index.html  应用入口
├── types.ts                共享类型定义
├── components/             UI 组件
│   ├── FlashCard.tsx       单词卡
│   ├── Quiz.tsx            图片选择测验
│   ├── LoadingScreen.tsx   加载页
│   ├── ErrorScreen.tsx     错误页
│   └── ReportScreen.tsx    学习报告
├── services/               数据、图片、语音和本地存储服务
│   ├── fallbackData.ts     内置词汇
│   ├── speech.ts           浏览器语音朗读
│   ├── storage.ts          进度和缓存
│   └── wordImages.ts       内置图片和 emoji 映射
├── tests/                  自动化测试
└── electron/               桌面应用入口
```

## 开发与验证 / Development and Validation

**常用命令 / Common Commands:**

```bash
npm run dev          # 启动开发服务器 / Start dev server
npm test             # 运行测试 / Run tests
npx tsc --noEmit     # TypeScript 类型检查 / TypeScript type check
npm run build        # 生产构建 / Production build
npm run preview      # 预览构建产物 / Preview production build
```

**中文：** 当前测试重点校验内置词汇是否都有专属图片或 emoji 映射，避免学习卡片退回到通用占位图。

**English:** The current tests mainly verify that every built-in vocabulary word has a dedicated image or emoji mapping, preventing flashcards from falling back to generic artwork.

## 部署与发行 / Deployment and Release

### GitHub Pages

**中文：** 仓库已配置 GitHub Pages 自动部署工作流。进入仓库 Settings → Pages，将 Source 设置为 GitHub Actions，然后推送到 `main` 分支或手动触发部署工作流。

**English:** The repository includes an automated GitHub Pages deployment workflow. In Settings → Pages, set Source to GitHub Actions, then push to `main` or manually run the deployment workflow.

部署地址 / Deployment URL:

```text
https://HXW7180159156.github.io/ChildStudyApp/
```

### 桌面安装包 / Desktop Installers

**中文：** 项目使用 Electron Builder 生成桌面安装包。

**English:** The project uses Electron Builder to produce desktop installers.

```bash
npm run dist:win     # Windows x64 NSIS 安装包 / Windows x64 NSIS installer
npm run dist:mac     # macOS x64/arm64 DMG / macOS x64/arm64 DMG
```

## 数据与存储 / Data and Storage

**中文：**

- 课程配置在 `App.tsx` 中定义。
- 内置词汇来自 `services/fallbackData.ts`。
- 图片和 emoji 映射来自 `services/wordImages.ts`。
- 学习进度、课程缓存和最近学习数据通过 `services/storage.ts` 写入浏览器 `localStorage`。
- 浏览器语音朗读由 `services/speech.ts` 封装。

**English:**

- Lesson configuration is defined in `App.tsx`.
- Built-in vocabulary comes from `services/fallbackData.ts`.
- Image and emoji mappings come from `services/wordImages.ts`.
- Progress, lesson cache, and recent study data are stored in browser `localStorage` through `services/storage.ts`.
- Browser speech is wrapped by `services/speech.ts`.

## 常见问题 / FAQ

### 是否需要 API Key？ / Is an API key required?

**中文：** 不需要。当前版本使用内置词汇和图片，可以直接离线体验完整流程。

**English:** No. The current version uses built-in vocabulary and images, so the full flow works offline.

### 为什么浏览器没有朗读声音？ / Why is there no speech audio?

**中文：** 请确认浏览器支持 Web Speech API，系统音量未静音，并在用户交互后再次点击朗读按钮。

**English:** Make sure the browser supports the Web Speech API, the device is not muted, and try the speak button again after user interaction.

### 如何重置学习进度？ / How can I reset progress?

**中文：** 学习进度保存在浏览器 `localStorage` 中。开发调试时可在浏览器开发者工具中清理该站点的本地存储。

**English:** Progress is stored in browser `localStorage`. During development, clear the site storage from browser developer tools to reset progress.

### 如何新增课程？ / How can I add new lessons?

**中文：** 新增课程时需要同时维护课程配置、内置词汇、图片或 emoji 映射，并运行测试确认词汇图片覆盖完整。

**English:** When adding lessons, update lesson configuration, built-in vocabulary, image or emoji mappings, and run tests to confirm vocabulary image coverage.
