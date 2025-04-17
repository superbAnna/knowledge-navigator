This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 个人知识导航网站

一个用于整合、分类和分享个人知识资源的导航网站，采用卡片式布局设计。网站内容直接从GitHub仓库获取，便于维护和更新。

![知识导航网站](https://ext.same-assets.com/2823785461/1248550479.jpeg)

## 功能特点

- 🎨 **美观的用户界面**：简洁的导航栏、渐变色Hero区域、搜索功能和分类标签
- 🧩 **卡片式布局**：精心设计的知识卡片，每个卡片代表一个知识领域
- 📱 **响应式设计**：适配不同设备屏幕大小
- 🔍 **搜索功能**：快速查找知识资源
- 🏷️ **分类标签**：便于浏览不同知识领域
- 🔄 **GitHub集成**：内容直接从GitHub仓库获取，方便维护和协作
- 📚 **详细资源页**：每个知识分类都有详细的资源列表页面

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- GitHub API (通过raw.githubusercontent.com)

## 内容管理

本网站的知识资源直接从GitHub仓库获取，这意味着您可以通过修改仓库中的JSON文件来更新网站内容，无需修改代码。

### 数据文件位置

- `/data/categories.json` - 所有分类和资源数据

### 数据格式

```json
{
  "categories": [
    {
      "id": "分类ID",
      "title": "分类标题",
      "description": "分类描述",
      "icon": "图标名称(来自Lucide图标库)",
      "category": "分类标签",
      "itemCount": 资源数量,
      "color": "颜色类名(例如bg-blue-500)",
      "resources": [
        {
          "name": "资源名称",
          "url": "资源链接",
          "description": "资源描述"
        }
      ]
    }
  ]
}
```

## 开始使用

### 安装依赖

```bash
cd knowledge-navigator
bun install
```

### 开发模式

```bash
bun run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建项目

```bash
bun run build
```

## 部署

本项目配置了GitHub Actions自动部署工作流程，每当您推送更改到main分支时，网站会自动部署到GitHub Pages。

## 项目结构

```
knowledge-navigator/
├── .github/
│   └── workflows/       # GitHub Actions工作流配置
├── data/                # 知识分类和资源数据
├── public/              # 静态资源
│   └── data/            # 用于开发环境的数据文件
├── src/
│   ├── app/             # Next.js 应用页面
│   │   └── category/[id]/ # 分类详情页面
│   ├── components/      # React组件
│   │   ├── ui/          # UI组件 (Shadcn)
│   │   ├── Footer.tsx   # 页脚组件
│   │   ├── Hero.tsx     # 头部展示组件
│   │   ├── KnowledgeCard.tsx  # 知识卡片组件
│   │   ├── KnowledgeGrid.tsx  # 卡片网格组件
│   │   ├── Navbar.tsx   # 导航栏组件
│   │   └── SearchBar.tsx  # 搜索栏组件
│   └── lib/             # 工具库
│       └── github.ts    # GitHub数据获取服务
├── .gitignore           # Git忽略文件
├── next.config.js       # Next.js配置
├── package.json         # 项目依赖
├── README.md            # 项目说明
└── tsconfig.json        # TypeScript配置
```

## 未来计划

- 添加搜索功能实现
- 实现用户登录和注册功能
- 增加数据筛选功能
- 添加黑暗模式切换功能
- 添加用户收藏和自定义分类功能

## 贡献

欢迎提交问题和拉取请求。您可以通过以下方式贡献：

1. 添加新的知识分类到 `/data/categories.json`
2. 改进现有的用户界面
3. 实现README中提到的未来计划功能
4. 修复问题和错误

## 许可证

MIT

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
