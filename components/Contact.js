import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const contactDetails = [
    { icon: <FaEnvelope className="text-xl" />, label: 'Email',    value: 'hishma15@gmail.com',        href: 'mailto:hishma15@gmail.com' },
    { icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', value: 'LinkedIn | Hishma Hameed', href: 'https://www.linkedin.com/in/hishma-hameed/' },
    { icon: <FaGithub className="text-xl" />, label: 'GitHub',   value: 'GitHub | Hishma Hameed',    href: 'https://github.com/hishma15' },
    { icon: <FaMapMarkerAlt className="text-xl" />, label: 'Location', value: 'Kandy / Colombo, Sri Lanka',  href: null    },
  ];

  return (
  <section id="contact" className="bg-white dark:bg-gray-950 px-6 py-24">
    <div className="max-w-5xl mx-auto">

      <FadeIn>
        <div className="mb-14 text-center">
          <p className="text-indigo-500 font-medium mb-1 text-sm uppercase tracking-widest">
            Get in touch
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Contact Me
          </h2>

          <div className="mt-3 mx-auto w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />

          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            I'm currently open to internship and graduate opportunities.
            Whether you have a question, a project, or just want to say hi —
            feel free to reach out.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {contactDetails.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all h-full"
            >
              <span className="text-3xl mb-3 block">
                {item.icon}
              </span>

              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                {item.label}
              </p>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-indigo-500 hover:text-indigo-400 hover:underline underline-offset-4 transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {item.value}
                </p>
              )}
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* Availability Banner */}
      <FadeIn delay={0.4}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">
                Currently Available
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Let's Build Something Together
            </h3>

            <p className="text-indigo-200 mb-6 max-w-md mx-auto text-sm">
              Open to internships and graduate roles in Sri Lanka.
              Typical response time: within 24 hours.
            </p>

            <motion.a
              href="mailto:hishma15@gmail.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-xl shadow-lg"
            >
              Say Hello 👋
            </motion.a>
          </div>
        </motion.div>
      </FadeIn>

    </div>
  </section>
);
  // return (
  //   <section id="contact" className="bg-gray-50 px-6 py-24">
  //     <div className="max-w-5xl mx-auto text-center">

  //       <p className="text-indigo-600 font-medium mb-1 text-sm uppercase tracking-widest">
  //         Get in touch
  //       </p>
  //       <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
  //         Contact Me
  //       </h2>
  //       <div className="mx-auto w-16 h-1 bg-indigo-600 rounded-full mb-6" />
  //       <p className="text-gray-500 max-w-lg mx-auto mb-12 text-base">
  //         I'm currently open to internship and graduate opportunities.
  //         Feel free to reach out on any of the platforms below.
  //       </p>

  //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
  //         {links.map((link) => (
            
  //             <a key={link.label}
  //               href={link.href}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
  //           >
  //             <span className="text-2xl">{link.icon}</span>
  //             <div className="text-left">
  //               <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
  //                 {link.label}
  //               </p>
  //               <p className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
  //                 {link.value}
  //               </p>
  //             </div>
  //           </a>
  //         ))}
  //       </div>

  //       {/* Availability badge */}
  //       <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-full mt-10 text-sm font-medium">
  //         <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
  //         Currently open to internships & graduate roles in Sri Lanka
  //       </div>

  //     </div>
  //   </section>
  // );
}