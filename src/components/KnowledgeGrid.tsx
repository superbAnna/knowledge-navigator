"use client";

import { KnowledgeCard } from "@/components/KnowledgeCard";
import { Code, BookOpen, Palette, Lightbulb, Briefcase, Globe, Coffee, Github } from "lucide-react";

export function KnowledgeGrid() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <KnowledgeCard
          title="编程语言"
          description="包括Python、JavaScript、Java、Go等主流编程语言的学习资源和参考文档"
          icon={Code}
          category="技术"
          itemCount={42}
          color="bg-blue-500"
          href="#"
        />
        <KnowledgeCard
          title="学习资源"
          description="优质的在线课程、教程、电子书和学习平台，帮助你系统学习各种知识"
          icon={BookOpen}
          category="教育"
          itemCount={36}
          color="bg-green-500"
          href="#"
        />
        <KnowledgeCard
          title="设计资源"
          description="UI/UX设计、平面设计、字体、图标、素材等设计资源的收集"
          icon={Palette}
          category="创意"
          itemCount={28}
          color="bg-purple-500"
          href="#"
        />
        <KnowledgeCard
          title="AI工具"
          description="人工智能和机器学习相关的工具、框架和学习资源"
          icon={Lightbulb}
          category="技术"
          itemCount={23}
          color="bg-yellow-500"
          href="#"
        />
        <KnowledgeCard
          title="效率工具"
          description="提高工作和学习效率的各类应用、插件和网站工具"
          icon={Briefcase}
          category="生产力"
          itemCount={31}
          color="bg-red-500"
          href="#"
        />
        <KnowledgeCard
          title="前沿技术"
          description="区块链、Web3、元宇宙等新兴技术领域的资源导航"
          icon={Globe}
          category="技术"
          itemCount={19}
          color="bg-indigo-500"
          href="#"
        />
        <KnowledgeCard
          title="生活方式"
          description="关于提升生活品质、自我提升和健康管理的资源收集"
          icon={Coffee}
          category="生活"
          itemCount={25}
          color="bg-orange-500"
          href="#"
        />
        <KnowledgeCard
          title="开源项目"
          description="精选的GitHub开源项目，包括各种实用工具和学习资源"
          icon={Github}
          category="技术"
          itemCount={34}
          color="bg-teal-500"
          href="#"
        />
      </div>
    </div>
  );
}
