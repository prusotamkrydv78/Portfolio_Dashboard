import { FiGithub, FiExternalLink, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function ProjectCard({ project, view = 'grid', onEdit, onDelete }) {
  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all ${
      view === 'list' ? 'flex' : ''
    }`}>
      {/* Project Image */}
      <div className={view === 'list' ? 'w-48 shrink-0' : ''}>
        <div className="relative group aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FiExternalLink className="w-5 h-5 text-white" />
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <FiGithub className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{project.description}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(project)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FiEdit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(project)}
              className="p-2 text-gray-400 hover:text-red-400 transition-colors"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className="mt-4">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
            project.status === 'completed' 
              ? 'bg-green-500/10 text-green-400'
              : 'bg-yellow-500/10 text-yellow-400'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
    </div>
  );
}
