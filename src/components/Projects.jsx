import { motion } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: "Project One",
    description: "Description of your first project. What problems did it solve? What technologies did you use?",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Project Two",
    description: "Description of your second project. What were the main challenges? How did you overcome them?",
    image: "https://via.placeholder.com/600x400",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding min-h-screen relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold gradient-text mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    View Code
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
