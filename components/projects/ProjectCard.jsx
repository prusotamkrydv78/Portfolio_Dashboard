export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="bg-[#1a1b1e] rounded-xl overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <span className="text-sm text-gray-400">{project.category}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onEdit}
              className="p-2 text-gray-400 hover:text-white"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-gray-400 hover:text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
        <p className="mt-2 text-gray-400 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex space-x-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
