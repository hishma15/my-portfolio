import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0 }) {
  const categoryColors = {
    Web:     'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    Mobile:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Desktop: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden flex flex-col transition-shadow"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category badge over image */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${categoryColors[project.category] || 'bg-gray-500/10 text-gray-400'}`}>
          {project.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{project.period}</p>

        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg font-medium"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-400 px-2.5 py-1 rounded-lg">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm py-2.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            View Details
          </Link>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm py-2.5 rounded-xl font-semibold hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
          >
            GitHub ↗
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function ProjectCard({ project }) {
//   const categoryColors = {
//     Web: "bg-indigo-50 text-indigo-700",
//     Mobile: "bg-emerald-50 text-emerald-700",
//     Desktop: "bg-amber-50 text-amber-700",
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
//       {/* Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={project.image || "/placeholder.png"}
//           alt={project.title}
//           fill
//           sizes="(max-width: 768px) 100vw, 33vw"
//           className="object-cover"
//         />

//         {/* Category Badge */}
//         <span
//           className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
//             categoryColors[project.category] ||
//             "bg-gray-100 text-gray-600"
//           }`}
//         >
//           {project.category}
//         </span>
//       </div>

//       <div className="flex flex-col flex-1 p-6">
//         {/* Period */}
//         <p className="text-xs text-gray-400 mb-1">
//           {project.period}
//         </p>

//         {/* Title */}
//         <h3 className="text-lg font-bold text-gray-900 mb-2">
//           {project.title}
//         </h3>

//         {/* Summary */}
//         <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
//           {project.summary}
//         </p>

//         {/* Tech Tags */}
//         <div className="flex flex-wrap gap-2 mb-5">
//           {project.tech.slice(0, 4).map((tech) => (
//             <span
//               key={tech}
//               className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
//             >
//               {tech}
//             </span>
//           ))}

//           {project.tech.length > 4 && (
//             <span className="text-xs bg-gray-100 text-gray-400 px-3 py-1 rounded-full">
//               +{project.tech.length - 4} more
//             </span>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 mt-auto">
//           <Link
//             href={`/projects/${project.id}`}
//             className="flex-1 text-center bg-indigo-600 text-white text-sm py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
//           >
//             View Details
//           </Link>

//           {project.githubUrl && (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 text-center border border-gray-200 text-gray-600 text-sm py-2 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
//             >
//               GitHub ↗
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }