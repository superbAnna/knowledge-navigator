import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * 从GitHub仓库获取分类数据
 */
export async function getCategories(): Promise<Category[]> {
  try {
    // 如果有缓存，直接返回
    if (categoriesCache) {
      return categoriesCache;
    }

    // 在生产环境中从GitHub获取数据
    if (process.env.NODE_ENV === 'production') {
      const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${GITHUB_BRANCH}/data/categories.json`;
      const response = await fetch(url, { next: { revalidate: 3600 } }); // 1小时缓存

      if (!response.ok) {
        throw new Error(`GitHub API错误: ${response.status}`);
      }

      const data: CategoriesData = await response.json();
      categoriesCache = data.categories; // 缓存结果
      return data.categories;
    }

    // 在开发环境中从本地获取数据
    const response = await fetch('/data/categories.json');
    const data: CategoriesData = await response.json();
    categoriesCache = data.categories; // 缓存结果
    return data.categories;
  } catch (error) {
    console.error('获取分类数据错误:', error);

    // 静态构建时，如果fetch失败，尝试从数据文件导入
    if (process.env.NODE_ENV === 'production') {
      try {
        // 注意：这种方式仅在构建时有效，不适用于客户端运行时
        const filePath = join(process.cwd(), 'data', 'categories.json');
        const fileContent = readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent) as CategoriesData;
        categoriesCache = data.categories;
        return data.categories;
      } catch (fsError) {
        console.error('从文件系统加载数据失败:', fsError);
      }
    }

    return [];
  }
}

export interface CategoriesData {
  categories: Category[];
}

// 服务器端本地缓存
let categoriesCache: Category[] | null = null;

/**
 * 从GitHub仓库获取分类数据
 */
export async function getCategories(): Promise<Category[]> {
  try {
    // 如果有缓存，直接返回
    if (categoriesCache) {
      return categoriesCache;
    }

    // 在生产环境中从GitHub获取数据
    if (process.env.NODE_ENV === 'production') {
      const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${GITHUB_BRANCH}/data/categories.json`;
      const response = await fetch(url, { next: { revalidate: 3600 } }); // 1小时缓存

      if (!response.ok) {
        throw new Error(`GitHub API错误: ${response.status}`);
      }

      const data: CategoriesData = await response.json();
      categoriesCache = data.categories; // 缓存结果
      return data.categories;
    }

    // 在开发环境中从本地获取数据
    const response = await fetch('/data/categories.json');
    const data: CategoriesData = await response.json();
    categoriesCache = data.categories; // 缓存结果
    return data.categories;
  } catch (error) {
    console.error('获取分类数据错误:', error);

    // 静态构建时，如果fetch失败，尝试从数据文件导入
    if (process.env.NODE_ENV === 'production') {
      try {
        // 注意：这种方式仅在构建时有效，不适用于客户端运行时
        // 使用 node: 协议导入
        const fs = require('node:fs');
        const path = require('node:path');
        const filePath = path.join(process.cwd(), 'data', 'categories.json');
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent) as CategoriesData;
        categoriesCache = data.categories;
        return data.categories;
      } catch (fsError) {
        console.error('从文件系统加载数据失败:', fsError);
      }
    }

    return [];
  }
}

/**
 * 根据ID获取特定分类
 */
export async function getCategoryById(id: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find(category => category.id === id) || null;
}

/**
 * 获取所有分类标签
 */
export async function getAllCategoryTags(): Promise<string[]> {
  const categories = await getCategories();
  // 获取所有不重复的分类标签
  const tags = categories.map(category => category.category);
  return Array.from(new Set(tags));
}

/**
 * 通过标签过滤分类
 */
export async function getCategoriesByTag(tag: string): Promise<Category[]> {
  const categories = await getCategories();
  return categories.filter(category => category.category === tag);
}
