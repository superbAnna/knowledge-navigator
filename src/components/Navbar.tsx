"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">知识导航</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            主页
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            分类
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            关于
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            登录
          </Button>
          <Button size="sm">注册</Button>
        </div>
      </div>
    </header>
  );
}
