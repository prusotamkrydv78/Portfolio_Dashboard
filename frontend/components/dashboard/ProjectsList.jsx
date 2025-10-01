export default function ProjectsList() {
  const projects = [
    {
      name: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform with a modern tech stack',
      status: 'Completed',
    },
    {
      name: 'Task Management App',
      description: 'Clean and intuitive task management application',
      status: 'In Progress',
    },
    {
      name: 'Personal Blog',
      description: 'A personal blog using modern design principles',
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div 
            key={project.name}
            className="bg-[#1a1b1e] p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <h3 className="text-white font-medium">{project.name}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-xs ${
                project.status === 'Completed' 
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {project.status}
              </span>
              <button className="text-gray-400 hover:text-white">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
