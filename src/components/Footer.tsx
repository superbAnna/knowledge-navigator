"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">关于我们</h3>
            <p className="text-sm text-muted-foreground">
              个人知识导航网站，帮助用户快速查找、整理和分享有价值的资源信息
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">导航</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="inline-block text-sm hover:underline">
                  首页
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  分类
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  热门
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  最新
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">支持</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  使用指南
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">社交媒体</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="inline-block text-sm hover:underline">
                  Bilibili
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 知识导航. 保留所有权利.
        </div>
      </div>
    </footer>
  );
}
