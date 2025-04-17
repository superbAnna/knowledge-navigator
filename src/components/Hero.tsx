"use client";

export function Hero() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              个人知识导航
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              整合优质资源，构建个人知识体系，让信息触手可及
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-primary/10 text-primary hover:bg-primary/20">
              精选资源
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
              分类整理
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
              更新维护
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
              持续成长
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
