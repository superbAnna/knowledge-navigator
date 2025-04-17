"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  itemCount: number;
  color: string;
  href: string;
}

export function KnowledgeCard({
  title,
  description,
  icon: Icon,
  category,
  itemCount,
  color,
  href,
}: KnowledgeCardProps) {
  return (
    <Link href={href} className="block transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Card className="h-full overflow-hidden border border-border hover:border-primary/20 bg-card">
        <div className={`h-2 w-full ${color}`} />
        <CardHeader className="pb-2 pt-6">
          <div className="flex items-center justify-between">
            <div className={`p-2 rounded-md ${color.replace('bg-', 'bg-')}/10`}>
              <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary">
              {itemCount}项
            </span>
          </div>
          <CardTitle className="text-xl mt-4 line-clamp-1">{title}</CardTitle>
          <CardDescription className="text-sm">{category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="pb-4 pt-0">
          <div className="text-xs font-medium text-primary flex items-center">
            点击查看更多
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-3 w-3"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
