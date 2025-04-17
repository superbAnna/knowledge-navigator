/**
 * GitHub数据获取服务
 * 通过GitHub API获取存储在仓库中的知识导航数据
 */

const GITHUB_USERNAME = 'superbAnna';
const GITHUB_REPO = 'knowledge-navigator';
const GITHUB_BRANCH = 'main';

// 类型定义
export interface Resource {
  name: string;
  url: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  itemCount: number;
  color: string;
  resources: Resource[];
}

export interface CategoriesData {
  categories: Category[];
}

/**
 * 从GitHub仓库获取分类数据
 */
export async function getCategories(): Promise<Category[]> {
  try {
    // 在生产环境中从GitHub获取数据
    if (process.env.NODE_ENV === 'production') {
      const url = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/${GITHUB_BRANCH}/data/categories.json`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`GitHub API错误: ${response.status}`);
      }

      const data: CategoriesData = await response.json();
      return data.categories;
    }

    // 在开发环境中从本地获取数据
    const response = await fetch('/data/categories.json');
    const data: CategoriesData = await response.json();
    return data.categories;
  } catch (error) {
    console.error('获取分类数据错误:', error);
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
