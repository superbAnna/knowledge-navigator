"use client";

import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCategories, getCategoryById } from "@/lib/github";

// 颜色映射，用于设置页面主题色
const colorMap: Record<string, string> = {
  "bg-blue-500": "blue",
  "bg-green-500": "green",
  "bg-purple-500": "purple",
  "bg-yellow-500": "yellow",
  "bg-red-500": "red",
  "bg-indigo-500": "indigo",
  "bg-orange-500": "orange",
  "bg-teal-500": "teal",
};

// 静态生成所有分类页面
export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    id: category.id,
  }));
}

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const category = await getCategoryById(params.id);
  const themeColor = category ? colorMap[category.color] || "blue" : "blue";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container px-4 py-8 md:px-6 flex-1">
        <div className="mb-6">
          <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ChevronLeft className="mr-1 h-4 w-4" />
            返回首页
          </Link>
        </div>

        {!category ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <p className="text-red-500">未找到该分类</p>
              <p className="mt-2 text-muted-foreground">请返回首页查看其他分类</p>
              <Button asChild className="mt-4">
                <Link href="/">返回首页</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className={`mb-8 p-6 rounded-lg bg-${themeColor}-50 dark:bg-${themeColor}-950 border border-${themeColor}-200 dark:border-${themeColor}-800`}>
              <h1 className={`text-3xl font-bold text-${themeColor}-600 dark:text-${themeColor}-400 mb-2`}>{category.title}</h1>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex items-center text-sm">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-${themeColor}-100 dark:bg-${themeColor}-900 text-${themeColor}-800 dark:text-${themeColor}-300`}>
                  {category.category}
                </span>
                <span className="text-muted-foreground ml-3">{category.itemCount} 项资源</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">资源列表</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.resources.map((resource) => (
                <Card key={`${resource.name}-${resource.url}`} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-lg">{resource.name}</h3>
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className={`h-4 w-4 text-${themeColor}-500`} />
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild className={`text-${themeColor}-500 border-${themeColor}-200 hover:bg-${themeColor}-50 dark:hover:bg-${themeColor}-950`}>
                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                          访问资源
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
