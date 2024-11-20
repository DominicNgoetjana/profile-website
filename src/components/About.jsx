import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CodeBracketIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

const skills = [
  "React", "JavaScript", "TypeScript", "Node.js", "Python", "CSS/SASS",
  "Git", "AWS", "Docker", "MongoDB", "PostgreSQL", "GraphQL"
];

export default function About() {
  return (
    <section id="about" className="section-padding min-h-screen relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold gradient-text mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Info Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <AcademicCapIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">Your University Name</p>
                <p className="text-sm text-gray-400">Degree • Year - Year</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <BriefcaseIcon className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300">Company Name</p>
                  <p className="text-sm text-gray-400">Position • Year - Present</p>
                </div>
                <div>
                  <p className="text-gray-300">Previous Company</p>
                  <p className="text-sm text-gray-400">Position • Year - Year</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-6">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <CodeBracketIcon className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Interests Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <HeartIcon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <p className="text-gray-300">
                Add your interests and hobbies here. What drives you besides coding?
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
