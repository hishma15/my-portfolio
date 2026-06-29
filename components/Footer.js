import { motion } from 'framer-motion';

export default function Footer() {

  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hishma-hameed/' },
    { label: 'GitHub', href: 'https://github.com/hishma15' },
    { label: 'Email',    href: 'mailto:hishma15@gmail.com'           },
  ];


   return (
    <footer className="bg-gray-950 border-t border-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <div>
          <p className="text-white font-extrabold text-lg mb-1">
            Hishma<span className="text-indigo-500">.</span>
          </p>
          <p className="text-xs text-gray-500">
            Built with Next.js & Tailwind CSS · Hosted on Vercel
          </p>
        </div>

        <div className="flex gap-6">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#6366f1' }}
              className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Hishma. All rights reserved.
        </p>
      </div>
    </footer>
  );
  // return (
  //   <footer className="bg-gray-900 text-gray-400 text-center py-8 mt-16">
  //     <p className="text-sm">
  //       © {new Date().getFullYear()} Hishma Hameed. All rights reserved. 
  //     </p>

  //     <div className="flex justify-center gap-6 mt-3">
  //       <a
  //         href="https://github.com/hishma15"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="hover:text-white transition-colors text-sm"
  //       >
  //         GitHub
  //       </a>

  //       <a
  //         href="https://linkedin.com/in/hishma-hameed"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="hover:text-white transition-colors text-sm"
  //       >
  //         LinkedIn
  //       </a>
  //     </div>
  //   </footer>
  // );
}

