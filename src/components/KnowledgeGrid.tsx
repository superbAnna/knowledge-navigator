"use client";

import { useState, useEffect } from "react";
import { KnowledgeCard } from "@/components/KnowledgeCard";
import {
  Code, BookOpen, Palette,
  Lightbulb, Briefcase, Globe,
  Coffee, Github, Loader2,
  type LucideIcon
} from "lucide-react";
import { type Category, getCategories } from "@/lib/github";

// 图标映射
const iconMap: Record<string, LucideIcon> = {
  Code,
  BookOpen,
  Palette,
  Lightbulb,
  Briefcase,
  Globe,
  Coffee,
  Github
};

export function KnowledgeGrid() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
        setError(null);
      } catch (err) {
        console.error("获取分类数据失败:", err);
        setError("获取数据失败，请稍后再试");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="container px-4 py-12 md:px-6 flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">正在加载知识分类...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-12 md:px-6 flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <p className="mt-2 text-muted-foreground">请刷新页面重试</p>
        </div>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="container px-4 py-12 md:px-6 flex justify-center items-center min-h-[400px]">
        <p className="text-muted-foreground">暂无知识分类数据</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <KnowledgeCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={iconMap[category.icon] || Globe}
            category={category.category}
            itemCount={category.itemCount}
            color={category.color}
            href={`/category/${category.id}`}
          />
        ))}
      </div>
    </div>
  );
}
