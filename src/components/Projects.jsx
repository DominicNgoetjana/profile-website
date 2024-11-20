import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/600x400",
      demoLink: "#",
      codeLink: "#"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="relative min-h-screen pt-20">
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">My</span> Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-white/10 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={project.demoLink}
                        className="btn-primary text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.codeLink}
                        className="btn-secondary text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
