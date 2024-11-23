import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?fit=crop&w=600&h=400",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      tags: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fit=crop&w=600&h=400",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by artificial intelligence",
      tags: ["Python", "TensorFlow", "WebSocket"],
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?fit=crop&w=600&h=400",
      demoLink: "#",
      codeLink: "#"
    }
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
              className="section-heading mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My <span>Projects</span>
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
