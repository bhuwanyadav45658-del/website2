# 100xSolution 网站项目 - 代理上下文指南

## 项目概述

这是一个为 100xSolution 构建的沉浸式 3D 营销网站，旨在通过电影级的视觉效果解释 AI 营销的概念。网站采用现代化的深色主题，结合了 Three.js 3D 场景、流畅的动画效果和语音交互功能，营造出未来科技感。

### 核心技术栈

- **前端框架**: React 19.2.0 (使用 Vite 7.2.4 构建)
- **3D 渲染**: Three.js 0.182.0, @react-three/fiber 9.5.0, @react-three/drei 10.7.7
- **样式**: Tailwind CSS 3.4.19
- **动画**: Framer Motion 12.29.2
- **语音功能**: Web Speech API (浏览器原生)
- **路由**: React Router DOM 7.13.0
- **编程语言**: JavaScript (ES6+)

### 项目架构

```
src/
├── components/
│   ├── sections/          # 页面主要章节组件
│   │   ├── Hero.jsx       # 首页英雄区域（带 3D 场景）
│   │   ├── WhatIsAI.jsx   # AI 介绍章节
│   │   ├── HowItWorks.jsx # 工作原理章节
│   │   ├── Benefits.jsx   # 优势展示章节
│   │   ├── ToolsSection.jsx # 工具目录章节（11 个分类）
│   │   └── CTA.jsx        # 行动号召章节（带语音功能）
│   ├── three/             # 3D 场景组件
│   │   ├── HeroScene.jsx  # 英雄区域的 3D 核心
│   │   ├── AIRobot.jsx    # AI 机器人 3D 模型
│   │   └── DataFlowScene.jsx # 数据流可视化场景
│   └── ui/                # UI 组件目录
│       └── VoiceAssistant.jsx # 语音助手组件
├── assets/                # 静态资源
├── App.jsx                # 主应用组件，组装所有章节和页脚
├── main.jsx               # React 应用入口
└── index.css              # 全局样式
```

## 主要功能

### 1. 语音助手功能
- 使用 Web Speech API 实现文本转语音
- 10 条预录制的 AI 营销服务介绍
- 3D 机器人说话时会有特殊动画效果（头部移动、眼睛变色、脉冲闪烁等）
- 支持自动循环播放所有介绍内容
- 动态音频波形可视化
- 可暂停、停止和重新开始

### 2. 3D 交互场景
- **Hero 区域**: 动态核心球体，带有粒子效果和悬浮动画
- **WhatIsAI 区域**: AI 机器人展示，带有漂浮光环和发光眼睛
- **HowItWorks 区域**: 数据流可视化场景
- **CTA 区域**: 可交互的说话机器人，点击按钮后展示 3D 机器人并播放语音

### 3. 工具目录
- **11 个分类**，包含 **50+ 实用工具**：
  - 🌐 Main Platform（主平台）
  - 🎓 Career • Skills • Decisions（职业、技能、决策）
  - 📊 Finance • Markets • Risk Awareness（金融、市场、风险意识）
  - 🎥 YouTube • Creator Tools（YouTube 创作者工具）
  - 🧠 Psychology • Attention • Reality Checks（心理学、注意力、现实检查）
  - 🧩 Developer • Utility Tools（开发者实用工具）
  - 📰 Information • Context • News（信息、语境、新闻）
  - 🥗 Health • Lifestyle • Environment（健康、生活方式、环境）
  - 🏛️ Government & Legal Navigation（政府与法律导航）
  - 🚓 Police • Traffic • Case Handling（警察、交通、案件处理）
  - 🛡️ Citizen Protection & Rights（公民保护与权利）
- 响应式卡片布局，支持悬停效果
- 所有工具链接到 100xSolutions 平台

### 4. 增强的页脚
- 公司信息和品牌介绍
- 快速链接和资源链接
- 联系方式和社交媒体图标（Twitter、GitHub、LinkedIn、Instagram）
- 法律政策链接（隐私政策、服务条款、Cookie 政策）
- 响应式布局，支持移动端

## 构建和运行命令

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```
启动 Vite 开发服务器，默认地址为 `http://localhost:5173`

### 生产构建
```bash
npm run build
```
构建优化后的生产版本到 `dist/` 目录

### 代码检查
```bash
npm run lint
```
运行 ESLint 检查代码质量

### 预览生产构建
```bash
npm run preview
```
本地预览生产构建版本

## 开发规范

### 代码风格

1. **文件命名**: 使用 PascalCase 命名组件文件（如 `Hero.jsx`）
2. **组件导出**: 默认导出（`export default`）
3. **代码格式**: 使用 ESLint 配置强制执行代码规范
4. **注释**: 保持代码简洁，只在复杂逻辑处添加必要注释

### Tailwind CSS 自定义主题

项目定义了以下自定义颜色，应在开发中保持一致使用：

```javascript
colors: {
    background: '#050505',   // 深色未来感背景
    primaryGlow: '#00ffff',  // 主要发光色（青色）
    accent: '#7c3aed',       // 强调色（紫色）
    softText: '#e5e7eb',     // 柔和文本色
}
```

字体使用 `Inter`，通过 Google Fonts 引入。

### 组件开发模式

1. **页面章节组件** (`sections/`):
   - 使用 `framer-motion` 添加进入动画
   - 使用 `whileInView` 和 `viewport={{ once: true }}` 实现滚动触发动画
   - 保持响应式设计（使用 `md:`, `lg:` 等断点）

2. **3D 场景组件** (`three/`):
   - 使用 `@react-three/fiber` 和 `@react-three/drei`
   - 统一使用暗色背景 `#050505`
   - 合理使用光照和特效（如 Sparkles, Stars）
   - 3D 元素应使用 `<Float>` 添加悬浮效果

3. **UI 组件** (`ui/`):
   - 用于可复用的交互组件
   - 保持与页面章节组件一致的视觉风格
   - 优先考虑可访问性和响应式设计

4. **响应式设计**:
   - 移动优先：先为小屏幕设计，再使用断点扩展
   - 常用断点: `md:`, `lg:`, `xl:`
   - 使用 `container` 或 `max-w-*` 控制内容宽度

### ESLint 配置规则

项目使用 ESLint Flat Config 格式：

- 忽略 `dist/` 目录
- 支持最新的 ECMAScript 特性（ECMAScript 2020）
- 启用 React Hooks 和 React Refresh 规则
- 未使用的变量规则：以大写字母或下划线开头的变量会被忽略
- 使用 `globals.browser` 获取浏览器全局变量

## SEO 和元数据

- 页面标题和描述在 `index.html` 中配置
- 当前标题：**AI Marketing Made Simple | 100xSolution**
- 当前描述：**AI Marketing Made Simple. 100xSolution helps businesses grow with smart technology that understands customers and predicts behavior.**
- 修改 SEO 信息时，更新 `index.html` 中的 `<title>` 和 `<meta name="description">`

## 关键设计元素

### 动画效果

1. **Framer Motion**:
   - `initial`: 初始状态
   - `animate`: 动画目标状态
   - `transition`: 过渡配置
   - `whileInView`: 进入视口时触发

2. **常见动画模式**:
   ```jsx
   <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8 }}
   >
   ```

### 3D 场景配置

- 相机位置：`{ position: [0, 0, 5], fov: 45 }`
- 轨道控制：禁用缩放和平移，启用自动旋转
- 材质：使用 `MeshDistortMaterial` 创建变形发光效果
- 粒子效果：使用 `Sparkles` 和 `Stars` 增加视觉深度

### 语音功能实现

**VoiceAssistant 组件特性**:
- 使用 `window.speechSynthesis` API
- 支持语音选择和配置（优先使用 Google、Samantha 或 Daniel 声音）
- 自动循环播放 10 条预录制内容
- 说话时显示动态音频波形
- 支持停止和重新开始
- 使用 `useEffect` 管理 SpeechSynthesis 实例

**CTA 中的 3D 机器人动画**:
- 说话时头部上下移动并旋转（使用 `Math.sin` 函数）
- 眼睛颜色从青色变为洋红色
- 眼睛有脉冲闪烁效果（使用 `scale.setScalar`）
- 光环颜色和发光强度增强
- 材质扭曲速度加快（`speed` 属性从 2 增加到 3）

## 已知依赖版本

### 生产依赖
- react: ^19.2.0
- react-dom: ^19.2.0
- @react-three/fiber: ^9.5.0
- @react-three/drei: ^10.7.7
- three: ^0.182.0
- @types/three: ^0.182.0
- framer-motion: ^12.29.2
- tailwindcss: ^3.4.19
- react-router-dom: ^7.13.0
- autoprefixer: ^10.4.23
- postcss: ^8.5.6

### 开发依赖
- vite: ^7.2.4
- @vitejs/plugin-react: ^5.1.1
- eslint: ^9.39.1
- @eslint/js: ^9.39.1
- eslint-plugin-react-hooks: ^7.0.1
- eslint-plugin-react-refresh: ^0.4.24
- globals: ^16.5.0
- @types/react: ^19.2.5
- @types/react-dom: ^19.2.3

## 注意事项

1. **性能优化**:
   - 3D 场景使用 `OrbitControls` 限制用户交互范围
   - 粒子数量合理控制（300-5000 之间）
   - 使用 `viewport={{ once: true }}` 避免重复动画
   - 语音功能使用浏览器原生 API，无需额外依赖

2. **可访问性**:
   - 为所有交互元素添加适当的语义
   - 确保文本对比度符合标准
   - 考虑为 3D 场景提供替代文本
   - 语音功能提供视觉反馈（波形动画）

3. **浏览器兼容性**:
   - 使用现代 ES6+ 语法
   - WebGL 支持是必需的（用于 Three.js）
   - Web Speech API 支持是语音功能的前提（现代浏览器均支持）
   - 测试主流浏览器的兼容性

4. **语音功能限制**:
   - 需要用户交互才能触发语音（浏览器安全策略）
   - 某些浏览器可能需要用户明确授权
   - 语音质量取决于浏览器的 TTS 引擎
   - 需要先调用 `getVoices()` 获取可用语音列表

## 故障排查

### 开发服务器无法启动
- 确保已运行 `npm install`
- 检查端口 5173 是否被占用
- 查看终端输出的错误信息

### 3D 场景不显示
- 检查浏览器是否支持 WebGL
- 确认 `@react-three/fiber` 和 `three` 版本兼容
- 查看浏览器控制台的错误信息

### 语音功能不工作
- 确认浏览器支持 Web Speech API
- 检查是否需要用户交互授权
- 查看控制台是否有相关错误
- 尝试在不同浏览器中测试
- 确保 `getVoices()` 在语音加载后调用

### 样式未生效
- 确认 Tailwind CSS 配置正确
- 检查 `tailwind.config.js` 中的 `content` 路径
- 运行 `npm run dev` 重新启动开发服务器

### ESLint 报错
- 确保已安装所有开发依赖
- 检查 `eslint.config.js` 配置是否正确
- 未使用的变量以大写字母或下划线开头会被忽略

## Git 仓库信息

- **远程仓库**: `git@github-second:bhuwanyadav45658-del/website2.git`
- **当前分支**: `main`
- **最新提交**: 7ba5a4c - Add voice assistant, tools directory, and enhanced footer

## 未来扩展建议

- 添加更多 3D 交互场景
- 实现暗色/亮色主题切换
- 添加博客或新闻板块
- 集成联系表单
- 添加多语言支持
- 实现服务端渲染（SSR）以改善 SEO
- 为语音功能添加暂停/恢复控制
- 添加工具搜索和筛选功能
- 实现工具收藏功能
- 添加用户反馈系统
- 优化移动端 3D 场景性能
- 添加更多语音选项和语言支持