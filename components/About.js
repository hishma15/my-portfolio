import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

export default function About() {
  const facts = [
    { label: 'Degree',    value: 'BEng (Hons) Software Engineering' },
    { label: 'Institute', value: 'APIIT Sri Lanka · Staffordshire Uni' },
    { label: 'Location',  value: '🌍 Kandy / Colombo, Sri Lanka'      },
    { label: 'Status',    value: '✅ Open to internships & grad roles' },
    { label: 'Focus',     value: 'Full-stack · Mobile · Cloud'         },
  ];

  const highlights = [
    { icon: '💻', title: 'Full-Stack Web',  desc: 'React, Next.js, Laravel'  },
    { icon: '📱', title: 'Mobile Apps',     desc: 'Flutter, Kotlin Android'  },
    { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS EC2, GitHub, Agile'   },
  ];

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-indigo-500 font-medium mb-1 text-sm uppercase tracking-widest">
              Get to know me
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          <div className="flex-1 space-y-5">
            {[
              "I'm a final-year Software Engineering undergraduate at APIIT Sri Lanka (Staffordshire University), passionate about building real-world applications that are technically solid and great to use.",
              "Over the past few years I've worked across the full stack — from responsive front-ends in React and Flutter, to secure back-ends with Laravel and Node.js, to cloud deployments on AWS EC2.",
              "I'm actively seeking internship and graduate opportunities at Sri Lankan tech companies. I thrive in collaborative teams, learn fast, and care deeply about clean code and great user experiences.",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{text}</p>
              </FadeIn>
            ))}

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, i) => (
                <FadeIn key={item.title} delay={0.3 + i * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all cursor-default"
                  >
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.6}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99,102,241,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/25"
              >
                Let's Talk →
              </motion.a>
            </FadeIn>
          </div>

          {/* Facts card */}
          <FadeIn direction="left" delay={0.2} className="w-full lg:w-80 flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-100 dark:border-gray-700 shadow-xl shadow-black/5 dark:shadow-black/20"
            >
              <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {facts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex flex-col border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-0.5">
                      {fact.label}
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                      {fact.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

// export default function About() {
//   const facts = [
//     { label: "Degree", value: "BEng (Hons) Software Engineering" },
//     { label: "Institute", value: "APIIT Sri Lanka (Staffordshire University)" },
//     { label: "Location", value: "🌍 Kandy / Colombo, Sri Lanka" },
//     { label: "Status", value: "✅ Open to internships & graduate roles" },
//     { label: "Focus", value: "Full-stack, Mobile & Cloud" },
//   ];

//   return (
//     <section id="about" className="bg-white px-6 py-24">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <div className="mb-14 text-center">
//           <p className="text-indigo-600 font-medium mb-1 text-sm uppercase tracking-widest">
//             Get to know me
//           </p>

//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
//             About Me
//           </h2>

//           <div className="mt-3 mx-auto w-16 h-1 bg-indigo-600 rounded-full"></div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           {/* Left */}
//           <div className="flex-1 space-y-5">
//             <p className="text-gray-600 leading-relaxed text-base">
//               I'm a final-year Software Engineering undergraduate at APIIT Sri
//               Lanka (Staffordshire University), passionate about building
//               real-world applications that are both technically solid and great
//               to use.
//             </p>

//             <p className="text-gray-600 leading-relaxed text-base">
//               Over the past few years I've worked across the full stack—from
//               responsive front-ends in React and Flutter, to secure back-ends
//               with Laravel and Node.js, to cloud deployments on AWS EC2. I enjoy
//               the entire product lifecycle, from database design to UI polish.
//             </p>

//             <p className="text-gray-600 leading-relaxed text-base">
//               I'm actively seeking internship and graduate opportunities at Sri
//               Lankan tech companies. I thrive in collaborative teams, learn
//               quickly, and care deeply about clean code and excellent user
//               experiences.
//             </p>

//             {/* Highlight Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
//               {[
//                 {
//                   icon: "💻",
//                   title: "Full-Stack Web",
//                   desc: "React, Next.js, Laravel",
//                 },
//                 {
//                   icon: "📱",
//                   title: "Mobile Apps",
//                   desc: "Flutter, Kotlin Android",
//                 },
//                 {
//                   icon: "☁️",
//                   title: "Cloud & DevOps",
//                   desc: "AWS EC2, GitHub, Agile",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
//                 >
//                   <span className="text-2xl block mb-3">{item.icon}</span>

//                   <p className="font-semibold text-gray-900 text-sm mb-1">
//                     {item.title}
//                   </p>

//                   <p className="text-gray-500 text-xs">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <a
//               href="#contact"
//               className="inline-block mt-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
//             >
//               Let's Talk →
//             </a>
//           </div>

//           {/* Right */}
//           <div className="w-full lg:w-80 bg-gray-50 rounded-3xl p-7 border border-gray-100">
//             <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">
//               Quick Facts
//             </h3>

//             <div className="space-y-4">
//               {facts.map((fact) => (
//                 <div
//                   key={fact.label}
//                   className="flex flex-col border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
//                 >
//                   <span className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-1">
//                     {fact.label}
//                   </span>

//                   <span className="text-gray-800 font-medium text-sm">
//                     {fact.value}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }