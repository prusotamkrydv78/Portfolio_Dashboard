import { 
  FaReact, 
  FaAngular, 
  FaJs, 
  FaNodeJs,
  FaPython 
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

export default function SkillsList({ onEdit, onDelete }) {
  // Static skills data
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { 
          id: 1,
          name: 'NextJs', 
          percentage: 85,
          icon: <TbBrandNextjs className="w-5 h-5" />
        },
        { 
          id: 2,
          name: 'Angular', 
          percentage: 85,
          icon: <FaAngular className="w-5 h-5" />
        },
        { 
          id: 3,
          name: 'ReactJs', 
          percentage: 95,
          icon: <FaReact className="w-5 h-5" />
        },
        { 
          id: 4,
          name: 'JavaScript', 
          percentage: 85,
          icon: <FaJs className="w-5 h-5" />
        },
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { 
          id: 5,
          name: 'Node.js', 
          percentage: 80,
          icon: <FaNodeJs className="w-5 h-5" />
        },
        { 
          id: 6,
          name: 'Express', 
          percentage: 80,
          icon: <FaNodeJs className="w-5 h-5" />
        },
        { 
          id: 7,
          name: 'Python', 
          percentage: 75,
          icon: <FaPython className="w-5 h-5" />
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {skills.map((category) => (
        <div key={category.category} className="bg-[#1a1b1e] rounded-xl p-6">
          <h2 className="text-lg text-gray-400 mb-4">{category.category}</h2>
          <div className="space-y-6">
            {category.items.map((skill) => (
              <div key={skill.id} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">{skill.icon}</span>
                    <span className="text-white">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">{skill.percentage}%</span>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => onEdit(skill)}
                        className="text-blue-400 hover:text-blue-300 text-sm"
                        aria-label={`Edit ${skill.name}`}
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => onDelete(skill)}
                        className="text-red-400 hover:text-red-300 text-sm"
                        aria-label={`Delete ${skill.name}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-[#212226] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
