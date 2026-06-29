import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const skillGroups = [
  { category: 'Frontend',       icon: '🎨', color: 'from-indigo-500 to-blue-500',   bg: 'bg-indigo-500/10 dark:bg-indigo-500/20',   text: 'text-indigo-400',  skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'HTML & CSS', 'Alpine.js'] },
  { category: 'Backend',        icon: '⚙️', color: 'from-emerald-500 to-teal-500',  bg: 'bg-emerald-500/10 dark:bg-emerald-500/20', text: 'text-emerald-400', skills: ['Laravel', 'Node.js', 'REST APIs', 'FastAPI', 'C# .NET'] },
  { category: 'Databases',      icon: '🗄️', color: 'from-amber-500 to-orange-500',  bg: 'bg-amber-500/10 dark:bg-amber-500/20',     text: 'text-amber-400',   skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'] },
  { category: 'Mobile',         icon: '📱', color: 'from-purple-500 to-pink-500',   bg: 'bg-purple-500/10 dark:bg-purple-500/20',   text: 'text-purple-400',  skills: ['Flutter (Dart)', 'Kotlin', 'Android Studio', 'MVVM'] },
  { category: 'Cloud & DevOps', icon: '☁️', color: 'from-sky-500 to-cyan-500',     bg: 'bg-sky-500/10 dark:bg-sky-500/20',         text: 'text-sky-400',     skills: ['AWS EC2', 'GitHub', 'Vercel', 'Apache', 'SSH', 'Certbot'] },
  { category: 'Tools',          icon: '🛠️', color: 'from-rose-500 to-red-500',     bg: 'bg-rose-500/10 dark:bg-rose-500/20',       text: 'text-rose-400',    skills: ['Agile / Scrum', 'Jira', 'Selenium', 'Figma', 'Postman'] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-950 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-indigo-500 font-medium mb-1 text-sm uppercase tracking-widest">
              What I work with
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08} direction="up">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 h-full hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${group.bg} flex items-center justify-center text-xl`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      {group.category}
                    </h3>
                    <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${group.color} mt-1`} />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 + j * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full ${group.bg} ${group.text} cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

// const skillGroups = [
//   {
//     category: 'Frontend',
//     icon: '🎨',
//     color: 'bg-indigo-50 text-indigo-700',
//     border: 'hover:border-indigo-200',
//     skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'HTML & CSS', 'Alpine.js', 'Livewire'],
//   },
//   {
//     category: 'Backend',
//     icon: '⚙️',
//     color: 'bg-emerald-50 text-emerald-700',
//     border: 'hover:border-emerald-200',
//     skills: ['Laravel', 'Node.js', 'REST APIs', 'FastAPI', 'C# .NET'],
//   },
//   {
//     category: 'Databases',
//     icon: '🗄️',
//     color: 'bg-amber-50 text-amber-700',
//     border: 'hover:border-amber-200',
//     skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'],
//   },
//   {
//     category: 'Mobile',
//     icon: '📱',
//     color: 'bg-purple-50 text-purple-700',
//     border: 'hover:border-purple-200',
//     skills: ['Flutter (Dart)', 'Kotlin', 'Android Studio', 'MVVM', 'Material Design'],
//   },
//   {
//     category: 'DevOps & Cloud',
//     icon: '☁️',
//     color: 'bg-sky-50 text-sky-700',
//     border: 'hover:border-sky-200',
//     skills: ['AWS EC2', 'GitHub', 'Git', 'Vercel', 'Apache', 'SSH', 'Certbot SSL'],
//   },
//   {
//     category: 'Tools & Methods',
//     icon: '🛠️',
//     color: 'bg-rose-50 text-rose-700',
//     border: 'hover:border-rose-200',
//     skills: ['Agile / Scrum', 'Jira', 'Selenium', 'Figma', 'VS Code', 'Postman'],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="bg-gray-50 px-6 py-24">
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <div className="mb-14 text-center">
//           <p className="text-indigo-600 font-medium mb-1 text-sm uppercase tracking-widest">
//             What I work with
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             Skills & Technologies
//           </h2>
//           <div className="mt-3 mx-auto w-16 h-1 bg-indigo-600 rounded-full" />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skillGroups.map((group) => (
//             <div
//               key={group.category}
//               className={`bg-white rounded-2xl border border-gray-100 p-6 transition-all hover:shadow-md ${group.border}`}
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="text-xl">{group.icon}</span>
//                 <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest">
//                   {group.category}
//                 </h3>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {group.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className={`text-xs font-medium px-3 py-1.5 rounded-full ${group.color}`}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }