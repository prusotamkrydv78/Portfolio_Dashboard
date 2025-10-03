"use client";

import { useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiGrid,
  FiList,
  FiFilter,
  FiX,
  FiCheck,
} from "react-icons/fi";
import BlogForm from "@/components/blog/BlogForm";
import BlogCard from "@/components/blog/BlogCard";
import DeleteDialogComponent from "@/components/DeleteComponent";
import { useQuery } from "@tanstack/react-query";

export default function BlogPage() {
  const [view, setView] = useState("grid");
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);


  async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  console.log(data);
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js 13",
      excerpt: "Learn how to build modern web applications with Next.js 13",
      content: "Content goes here...",
      coverImage: "/blog/nextjs.jpg",
      category: "Development",
      tags: ["Next.js", "React", "Web Dev"],
      status: "published",
      publishDate: "2023-12-01",
      readTime: "5 min read",
    },
    // Add more blog posts...
  ];

  const filterOptions = [
    { id: "all", name: "All Posts", icon: "📑" },
    { id: "published", name: "Published", icon: "✅" },
    { id: "draft", name: "Drafts", icon: "📝" },
  ];

  const handleDelete = (blog) => {
    // Implement delete functionality
    console.log("Deleting blog:", blog);
    setItemToDelete(blog);
    setShowDeleteDialog(true);
  };
  const confirmDelete = () => {
    // Logic to delete the blog post
    console.log("Blog deleted:", blogToEdit);
    setShowDeleteDialog(false);
  };
  const handleEdit = (blog) => {
    // Implement edit functionality
    console.log("Editing blog:", blog);
    setBlogToEdit(blog);
    setShowForm(true);
  };

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
            <span className="hidden sm:inline"> New Post</span>
          </button>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-[3fr_1fr] sm:grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Replace select with button */}
          <button
            onClick={() => setShowFilterDialog(true)}
            className="flex items-center justify-center sm:justify-between
             px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <div className="flex items-cente justify-centerr gap-2">
              <FiFilter className="w-5 h-5" />
              <span className="hidden sm:inline">
                {filterOptions.find((f) => f.id === filter)?.name ||
                  "All Posts"}
              </span>
            </div>
          </button>

          <div className="hidden sm:flex justify-end space-x-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2.5 rounded-lg ${view === "grid"
                ? "bg-purple-500 text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2.5 rounded-lg ${view === "list"
                ? "bg-purple-500 text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blog Grid/List */}
        <div
          className={`grid gap-8 ${view === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
            }`}
        >
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              view={view}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* Filter Dialog */}
        {showFilterDialog && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
            <div className="bg-[#1a1b1e] rounded-xl w-full max-w-md overflow-hidden border border-white/10">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">
                  Filter Posts
                </h3>
                <button
                  onClick={() => setShowFilterDialog(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FiX className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-2">
                  {filterOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setFilter(option.id);
                        setShowFilterDialog(false);
                      }}
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors ${filter === option.id
                        ? "bg-purple-500/20 text-purple-400"
                        : "hover:bg-white/5 text-white"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{option.icon}</span>
                        <span>{option.name}</span>
                      </div>
                      {filter === option.id && <FiCheck className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Form Modal */}
        {showForm && <BlogForm blog={blogToEdit} onClose={() => setShowForm(false)} />}
        {/* Delete Confirmation Dialog */}
        {showDeleteDialog && (
          <DeleteDialogComponent
            setShowDeleteDialog={setShowDeleteDialog}
            itemToDelete={itemToDelete}
            confirmDelete={confirmDelete}
          />
        )}
      </div>
    </div>
  );
}
