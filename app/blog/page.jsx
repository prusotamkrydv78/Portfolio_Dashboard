'use client';

import { useState } from 'react';
import BlogForm from '@/components/blog/BlogForm';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';
import { toast } from 'sonner';

export default function BlogPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Getting Started with Next.js 13',
      description: 'Learn how to build modern web applications with Next.js 13',
      content: 'Next.js 13 introduces several new features...',
      image: '/blog/nextjs.jpg',
      category: 'Web Development',
      tags: ['Next.js', 'React', 'JavaScript'],
      publishDate: '2023-12-01',
      status: 'published'
    },
    // Add more sample blogs...
  ]);

  const handleSave = (data) => {
    if (editingBlog) {
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id ? { ...data, id: blog.id } : blog
      ));
      toast.success('Blog updated successfully');
    } else {
      setBlogs([...blogs, { ...data, id: Date.now() }]);
      toast.success('Blog created successfully');
    }
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
    toast.success('Blog deleted successfully');
  };

  return (
    <div className="min-h-screen bg-[#13151a] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-white">Blog Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <FiPlus className="mr-2" /> New Blog Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-[#1a1b1e] rounded-xl overflow-hidden">
              {blog.image && (
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-white">{blog.title}</h3>
                    <span className="text-sm text-gray-400">{blog.category}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingBlog(blog);
                        setShowForm(true);
                      }}
                      className="p-2 text-gray-400 hover:text-white"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-gray-400 text-sm line-clamp-2">
                  {blog.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  {new Date(blog.publishDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <BlogForm
            blog={editingBlog}
            onClose={() => {
              setShowForm(false);
              setEditingBlog(null);
            }}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
  );
}
