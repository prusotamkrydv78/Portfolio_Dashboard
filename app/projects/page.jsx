"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiGrid, FiList } from "react-icons/fi";
import ProjectForm from "@/components/projects/ProjectForm";
import ProjectCard from "@/components/projects/ProjectCard";
import DeleteDialogComponent from "@/components/DeleteComponent";

export default function ProjectsPage() {
  const [view, setView] = useState("grid");
  const [showForm, setShowForm] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Dashboard",
      description:
        "A modern portfolio management system built with Next.js and Tailwind CSS.",
      image: "/projects/portfolio-dashboard.png",
      category: "Web App",
      tags: ["Next.js", "TailwindCSS", "React"],
      demo: "https://portfolio.example.com",
      code: "https://github.com/yourusername/portfolio-dashboard",
    },
    {
      id: 2,
      title: "Task Management API",
      description:
        "RESTful API for task management built with Node.js and Express.",
      image: "/projects/task-api.png",
      category: "Backend",
      tags: ["Node.js", "Express", "MongoDB"],
      demo: "https://api.example.com/docs",
      code: "https://github.com/yourusername/task-api",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Real-time weather application using OpenWeather API and React.",
      image: "/projects/weather-app.png",
      category: "Web App",
      tags: ["React", "API Integration", "CSS3"],
      demo: "https://weather.example.com",
      code: "https://github.com/yourusername/weather-app",
    },
  ];

  const handleEdit = (project) => {
    // Implement edit functionality
    console.log("Editing project:", project);
    setProjectToEdit(project);
    setShowForm(true);
  };

  const handleDelete = (project) => {
    // Implement delete functionality
    console.log("Deleting project:", project);
    console.log("Setting project to delete:", project);
    setItemToDelete(project);
    setShowDeleteDialog(true);
  };
  const confirmDelete = () => {
    // Implement confirm delete functionality
    console.log("Confirmed delete for project:", itemToDelete);
    setShowDeleteDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-gray-400 mt-1">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            <FiPlus className="sm:mr-2" />
            <span className="hidden sm:inline"> Add Project</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex   sm:flex-row gap-4 sm:items-center justify-between bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-white/5 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className=" hidden sm:flex items-center space-x-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg ${
                view === "grid"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-lg ${
                view === "list"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid gap-8 ${
            view === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={() => handleEdit(project)}
              onDelete={() => handleDelete(project)}
            />
          ))}
        </div>

        {/* Project Form Modal */}
        {showForm && (
          <ProjectForm
            projectToEdit={projectToEdit}
            onClose={() => setShowForm(false)}
          />
        )}
        {showDeleteDialog && (
          <DeleteDialogComponent
            setShowDeleteDialog={setShowDeleteDialog}
            confirmDelete={confirmDelete}
            itemToDelete={itemToDelete}
          />
        )}
      </div>
    </div>
  );
}
