<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# LingoQuest Kids 🚀

一款面向 3–8 岁孩子的英语启蒙 Web 应用，基于 **React + Vite + Tailwind**，并使用 **Google Gemini** 自动生成词汇、可爱卡通插画和儿童语音。

> View this app in AI Studio: <https://ai.studio/apps/drive/1AsNQJTF-4xZS1Xf4ZzvOUX0uZTHW92EM>

## ✨ 功能特色

- 🔤 **三阶段课程**：26 个字母 → 自然拼读 → 主题词汇（动物 / 颜色 / 食物 / 太空 …）
- 🎨 **AI 生成内容**：Gemini 实时生成词汇、卡通图片、儿童语音 (TTS)
- 🃏 **单词卡学习**：图片 + 拼读 + 中文释义 + 例子，点击播放发音
- ❓ **图片选择 Quiz**：完成单词学习后自动进入测验
- ⭐ **得分与星级**：根据首次正确率给出 0–3 星反馈
- 📝 **错题复习**：自动收集答错的单词，可一键再练习
- 💾 **学习进度持久化**：每节课的星级、练习次数和最近学习时间都会保存到本地
- 📊 **学习报告页面**：查看已学课程、累计星星、最近正确率
- 🗂️ **课程内容缓存**：同一节课重复打开无需再次调用 Gemini，省流量、秒开
- 🔁 **失败可重试**：网络/接口出错时显示友好错误页，而不是弹窗 alert
- 🧪 **离线降级模式**：未配置 API Key 也可使用内置示例词汇预览应用

## 🚀 本地运行

**前置条件：** Node.js ≥ 18

1. 安装依赖：

   ```bash
   npm install
   ```

2. （可选）在项目根目录创建 `.env.local`，并填入你的 Gemini API Key：

   ```bash
   GEMINI_API_KEY=your_key_here
   ```

   > 未配置 API Key 时，应用会自动进入「示例数据预览模式」，仍可完整体验流程。

3. 启动开发服务器：

   ```bash
   npm run dev
   ```

   默认地址：<http://localhost:3000>

## 🏗️ 生产构建

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览构建产物
```

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
    ├── geminiService.ts    Gemini API 封装（含降级）
    ├── fallbackData.ts     离线示例词汇
    ├── audioUtils.ts       Base64 / PCM / AudioBuffer 工具
    └── storage.ts          学习进度 + 内容缓存（localStorage）
```

## 🔐 环境变量

| 变量名 | 必填 | 说明 |
| --- | --- | --- |
| `GEMINI_API_KEY` | 否 | Google Gemini API Key。缺省时自动使用示例数据模式。 |

## 📦 主要依赖

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [Tailwind CSS (CDN)](https://tailwindcss.com/)
- [`@google/genai`](https://www.npmjs.com/package/@google/genai)

---

Made with ❤️ for curious kids.
