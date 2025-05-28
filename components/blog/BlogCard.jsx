import { FiEdit2, FiTrash2, FiClock, FiCalendar } from 'react-icons/fi';

export default function BlogCard({ blog, view, onEdit, onDelete }) {
  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all ${
      view === 'list' ? 'flex' : ''
    }`}>
      {/* Cover Image */}
      <div className={view === 'list' ? 'w-48 shrink-0' : ''}>
        <div className="relative group aspect-video">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className={`px-2 py-1 text-xs rounded-full ${
                blog.status === 'published' 
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-yellow-500/10 text-yellow-400'
              }`}>
                {blog.status}
              </span>
              <span className="text-sm text-gray-400">{blog.category}</span>
            </div>
            <h3 className="text-lg font-semibold text-white hover:text-purple-400 transition-colors">
              {blog.title}
            </h3>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => onEdit(blog)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FiEdit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(blog)}
              className="p-2 text-gray-400 hover:text-red-400 transition-colors"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="mt-2 text-gray-400 text-sm line-clamp-2">{blog.excerpt}</p>

        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center">
            <FiCalendar className="w-4 h-4 mr-1" />
            {new Date(blog.publishDate).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <FiClock className="w-4 h-4 mr-1" />
            {blog.readTime}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
