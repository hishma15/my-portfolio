import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const stats = [
    { value: '6+', label: 'Projects'   },
    { value: '5+', label: 'Tech Stacks' },
    { value: '2+', label: 'Years Coding' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden
                 bg-white dark:bg-gray-950"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 relative">

        {/* Left */}
        <div className="flex-1 text-center md:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-indigo-500/20"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Hishma
              </span>
              {/* Underline decoration */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1  }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-6"
          >
            Software Engineering Undergraduate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
          >
            Final-year BEng student at APIIT Sri Lanka, passionate about
            full-stack web, mobile apps, and building real-world solutions
            that solve meaningful problems.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-8 justify-center md:justify-start mb-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold text-center shadow-lg shadow-indigo-500/30"
            >
              View My Work ✦
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3.5 rounded-xl font-semibold text-center hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="mailto:hishma15@gmail.com?subject=CV Request&body=Hi Hishma, I'd like to request your CV."
              whileHover={{ scale: 1.05 }}
              className="text-indigo-500 font-semibold px-8 py-3.5 text-center hover:underline underline-offset-4"
            >
              Request CV ✉️
            </motion.a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1,   rotate: 0  }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="flex-shrink-0 relative"
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30 scale-110"
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-2xl scale-110 animate-glow" />

          {/* Photo */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
            <Image
              src="/profile4.png"
              alt="Hishma"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
          >
            <p className="text-xs font-bold text-gray-900 dark:text-white">React </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
          >
            <p className="text-xs font-bold text-gray-900 dark:text-white">Flutter </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/2 -right-10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl px-3 py-2 shadow-xl"
          >
            <p className="text-xs font-bold text-gray-900 dark:text-white">Laravel </p>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}