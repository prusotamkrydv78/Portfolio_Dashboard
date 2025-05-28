import { 
  FaReact, 
  FaAngular, 
  FaJs, 
  FaNodeJs 
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

export default function SkillsList({ onEdit, onDelete }) {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { 
          name: 'NextJs', 
          proficiency: 85,
          icon: <TbBrandNextjs className="w-5 h-5" />
        },
        { 
          name: 'Angular', 
          proficiency: 85,
          icon: <FaAngular className="w-5 h-5" />
        },
        { 
          name: 'ReactJs', 
          proficiency: 95,
          icon: <FaReact className="w-5 h-5" />
        },
        { 
          name: 'JavaScript', 
          proficiency: 85,
          icon: <FaJs className="w-5 h-5" />
        },
      ]
    },
    // Add other categories...
  ];

  return (
    <div className="space-y-8">
      {skills.map((category) => (
        <div key={category.category} className="bg-[#1a1b1e] rounded-xl p-6">
          <h2 className="text-lg text-gray-400 mb-4">{category.category}</h2>
          <div className="space-y-4">
            {category.items.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{skill.icon}</span>
                      <span className="text-white">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-[#212226] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(skill)}
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(skill)}
                    className="p-2 text-gray-400 hover:text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
