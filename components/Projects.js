import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import FadeIn from './FadeIn';

export default function Projects({ projects }) {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'Desktop'];

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-indigo-500 font-medium mb-1 text-sm uppercase tracking-widest">
              What I've built
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Projects
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Grid with AnimatePresence for filter transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1   }}
                exit={{    opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

// import { useState } from 'react';
// import ProjectCard from './ProjectCard';

// export default function Projects({ projects }) {
//   const [active, setActive] = useState('All');
//   const categories = ['All', 'Web', 'Mobile', 'Desktop'];

//   const filtered = active === 'All'
//     ? projects
//     : projects.filter((p) => p.category === active);

//   return (
//     <section id="projects" className="bg-white px-6 py-20">
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <div className="mb-10 text-center">
//           <p className="text-indigo-600 font-medium mb-1">What I've built</p>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Projects</h2>
//           <div className="mt-3 mx-auto w-16 h-1 bg-indigo-600 rounded-full" />
//         </div>

//         {/* Filter tabs */}
//         <div className="flex justify-center gap-2 mb-10 flex-wrap">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActive(cat)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
//                 active === cat
//                   ? 'bg-indigo-600 text-white'
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {filtered.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }