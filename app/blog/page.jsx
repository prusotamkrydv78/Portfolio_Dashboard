'use client';

import { useState } from 'react';
import { FiPlus, FiSearch, FiGrid, FiList, FiFilter } from 'react-icons/fi';
import BlogForm from '@/components/blog/BlogForm';
import BlogCard from '@/components/blog/BlogCard';

export default function BlogPage() {
  const [view, setView] = useState('grid');
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with Next.js 13',
      excerpt: 'Learn how to build modern web applications with Next.js 13',
      content: 'Content goes here...',
      coverImage: '/blog/nextjs.jpg',
      category: 'Development',
      tags: ['Next.js', 'React', 'Web Dev'],
      status: 'published',
      publishDate: '2023-12-01',
      readTime: '5 min read'
    }
    // Add more blog posts...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Blog Posts
            </h1>
            <p className="text-gray-400 mt-1">Manage your blog content</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <FiPlus className="sm:mr-2" />
            <span className='hidden sm:inline'> New Post</span>
          </button>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">All Posts</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2.5 rounded-lg ${view === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2.5 rounded-lg ${view === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blog Grid/List */}
        <div className={`grid gap-8 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
              view={view}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
        </div>

        {/* Blog Form Modal */}
        {showForm && (
          <BlogForm onClose={() => setShowForm(false)} />
        )}
      </div>
    </div>
  );
}
