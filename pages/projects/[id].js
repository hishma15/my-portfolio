import SEO from '../../components/SEO';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '../../data/projects';

export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { id: p.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { notFound: true };
  return { props: { project } };
}

export default function ProjectDetail({ project }) {
  const categoryColors = {
    Web:     'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    Mobile:  'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    Desktop: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  };

  return (

    <>
      <SEO
          title={`${project.title} | Hishma`}
          description={project.summary}
        />

      <div className="min-h-screen bg-white dark:bg-gray-950 px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-indigo-500 text-sm font-medium hover:underline underline-offset-4 mb-10 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-black/20"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Category badge over image */}
            {project.category && (
              <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            )}

            {/* Period badge */}
            {project.period && (
              <span className="absolute bottom-4 left-4 text-xs font-medium text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                📅 {project.period}
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              {project.title}
            </h1>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-xl font-medium border border-gray-200 dark:border-gray-700"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 mb-8"
          >
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">
              About this project
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* GitHub button — always show */}
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
            >
              View on GitHub ↗
            </motion.a>

            {/* Live site — only show if liveUrl exists AND is not same as githubUrl */}
            {project.liveUrl && project.liveUrl !== project.githubUrl ? (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 text-center border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-3.5 rounded-xl font-semibold hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
              >
                View Live Site ↗
              </motion.a>
            ) : (
              /* No live site — show a greyed out badge instead */
              <div className="flex-1 text-center border-2 border-dashed border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 py-3.5 rounded-xl font-medium cursor-not-allowed select-none">
                Live Site Unavailable
              </div>
            )}
          </motion.div>

          {/* Note about live site — only shows when unavailable */}
          {(!project.liveUrl || project.liveUrl === project.githubUrl) && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xs text-gray-400 dark:text-gray-600 text-center mt-3"
            >
              {project.hosted
                ? '* This project was hosted on AWS EC2. The instance has since been terminated. Source code is available on GitHub.'
                : '* This is a mobile/desktop application and is not hosted online. Source code is available on GitHub.'
              }
            </motion.p>
          )}

        </div>
      </div>
    </>
  );
}

// import Image from 'next/image';
// import Link from 'next/link';
// import projects from '../../data/projects';

// // Tells Next.js: "pre-build a page for each of these IDs"
// export async function getStaticPaths() {
//   const paths = projects.map((p) => ({
//     params: { id: p.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// // Runs for each ID — finds that project and passes it as props
// export async function getStaticProps({ params }) {
//   const project = projects.find((p) => p.id === params.id);

//   if (!project) {
//     return { notFound: true };
//   }

//   return {
//     props: { project },
//   };
// }

// // The actual page component
// export default function ProjectDetail({ project }) {
//   return (
//     <div className="max-w-3xl mx-auto px-6 py-16">
//       {/* Back link */}
//       <Link
//         href="/#projects"
//         className="text-indigo-600 text-sm font-medium hover:underline mb-8 inline-block"
//       >
//         ← Back to Projects
//       </Link>

//       {/* Hero image */}
//       <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
//         {project.title}
//       </h1>

//       {/* Tech tags */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.tech.map((t) => (
//           <span
//             key={t}
//             className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium"
//           >
//             {t}
//           </span>
//         ))}
//       </div>

//       {/* Description */}
//       <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line mb-10">
//         {project.description}
//       </p>

//       {/* Action buttons */}
//       <div className="flex flex-col sm:flex-row gap-4">
//         <a
//           href={project.liveUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 text-center bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
//         >
//           View Live Site ↗
//         </a>

//         <a
//           href={project.githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 text-center border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-gray-500 transition-colors"
//         >
//           View on GitHub ↗
//         </a>
//       </div>
//     </div>
//   );
// }