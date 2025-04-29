import React from 'react'


const projects = [
    {
      title: "Twitter Clone",
      tech: ["React", "Firebase", "CSS"],
      link: "https://github.com/username/twitter-clone",
    },
    {
      title: "Library Management System",
      tech: ["Java", "Spring Boot", "MySQL"],
      link: "https://github.com/username/library-system",
    },
    {
      title: "Alarm Manager App",
      tech: ["Kotlin", "Android"],
      link: "https://github.com/username/alarm-manager",
    },
  ];

function Projects() {
  return (
    <div className="p-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow bg-gray-100 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-2">Tech Stack: {project.tech.join(", ")}</p>
            <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
