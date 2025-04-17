"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 mb-4 px-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="搜索知识..."
          className="pl-10 h-12 rounded-full border-2 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-sm transition-shadow duration-200 focus-visible:shadow-md"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-6 justify-center">
        <CategoryPill active>全部</CategoryPill>
        <CategoryPill>编程开发</CategoryPill>
        <CategoryPill>人工智能</CategoryPill>
        <CategoryPill>设计资源</CategoryPill>
        <CategoryPill>学习工具</CategoryPill>
        <CategoryPill>生产力</CategoryPill>
        <CategoryPill>生活方式</CategoryPill>
      </div>
    </div>
  );
}

function CategoryPill({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-secondary hover:bg-secondary/80"
      }`}
    >
      {children}
    </button>
  );
}
