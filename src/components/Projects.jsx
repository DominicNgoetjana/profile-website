import { motion } from 'framer-motion';
import { useState } from 'react';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getProjectImage } from '../utils/projectImages';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  // Get current repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = projectsData.projects.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(projectsData.projects.length / reposPerPage);

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                    <img
                      src={getProjectImage(repo)}
                      alt={`${repo.name} preview`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Language Overlay */}
                    {repo.languages[0] && (
                      <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-sm text-gray-300">
                        {repo.languages[0]}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold gradient-text-primary">
                        {repo.name}
                      </h3>
                      <div className="flex gap-2">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          </a>
                        )}
                        <a
                          href={repo.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <CodeBracketIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {repo.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <span>⭐</span>
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🔄</span>
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>👁️</span>
                        <span>{repo.watchers_count}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'} transition-colors`}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <span className="text-gray-400">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'} transition-colors`}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
