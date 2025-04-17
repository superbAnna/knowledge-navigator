import React, { useState } from 'react';
import { getCategories } from '@/lib/github';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Category[]>([]);

  const handleSearch = async () => {
    const categories = await getCategories();
    const results = categories.filter(category => {
      return category.title.includes(searchTerm) || category.description.includes(searchTerm);
    });
    setSearchResults(results);
  };

  return (
    <div className="container px-4 py-8 md:px-6">
      <input
        type="text"
        placeholder="搜索分类或描述"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full md:w-1/2"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded-md"
      >
        搜索
      </button>
      {searchResults.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">搜索结果</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((category) => (
              <div key={category.id} className="border p-4 rounded-md">
                <h3 className="font-medium text-lg">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
                <a
                  href={`/category/${category.id}`}
                  className="text-blue-500 hover:underline"
                >
                  查看详情
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
