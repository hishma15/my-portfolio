import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.slice(1));

    const onScroll = () => {
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= 80 && rect.bottom >= 80;
      });

      if (current) setActive(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight cursor-pointer"
          >
            Hishma<span className="text-indigo-500">.</span>
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  active === link.href.slice(1)
                    ? 'text-indigo-500'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-500 rounded-full transition-all duration-300 ${
                    active === link.href.slice(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-2 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-500/25"
          >
            Hire Me
          </motion.a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 8 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-6 bg-gray-700 dark:bg-gray-300 origin-center"
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-sm font-medium text-gray-600 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-3"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// import Link from "next/link";
// import { useState, useEffect } from "react";

// import { motion, AnimatePresence } from 'framer-motion';
// import ThemeToggle from './ThemeToggle';


// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActive] = useState("home");

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

//   // Add shadow when scrolling
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Highlight active section
//   useEffect(() => {
//     const sections = ["home", "about", "skills", "projects", "contact"];

//     const onScroll = () => {
//       let current = "home";

//       sections.forEach((id) => {
//         const section = document.getElementById(id);

//         if (section) {
//           const rect = section.getBoundingClientRect();

//           if (rect.top <= 100 && rect.bottom >= 100) {
//             current = id;
//           }
//         }
//       });

//       setActive(current);
//     };

//     window.addEventListener("scroll", onScroll);
//     onScroll();

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
//         scrolled ? "shadow-md" : "border-b border-gray-100"
//       }`}
//     >
//       <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-xl font-extrabold text-gray-900 tracking-tight hover:text-indigo-600 transition-colors"
//         >
//           Hishma<span className="text-indigo-600">.</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className={`relative group text-sm font-medium transition-colors ${
//                   activeSection === link.href.slice(1)
//                     ? "text-indigo-600"
//                     : "text-gray-500 hover:text-gray-900"
//                 }`}
//               >
//                 {link.label}

//                 <span
//                   className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
//                     activeSection === link.href.slice(1)
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }`}
//                 ></span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hire Me Button */}
//         <Link
//           href="#contact"
//           className="hidden md:inline-block bg-indigo-600 text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
//         >
//           Hire Me
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden flex flex-col gap-1.5 p-1"
//           aria-label="Toggle Menu"
//         >
//           <span
//             className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
//               menuOpen ? "rotate-45 translate-y-2" : ""
//             }`}
//           ></span>

//           <span
//             className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
//               menuOpen ? "opacity-0" : ""
//             }`}
//           ></span>

//           <span
//             className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
//               menuOpen ? "-rotate-45 -translate-y-2" : ""
//             }`}
//           ></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ${
//           menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
//         }`}
//       >
//         <ul className="bg-white px-6 py-4 flex flex-col gap-1">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className={`block py-2.5 text-sm font-medium border-b border-gray-50 ${
//                   activeSection === link.href.slice(1)
//                     ? "text-indigo-600"
//                     : "text-gray-600"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}

//           <li className="pt-3">
//             <Link
//               href="#contact"
//               onClick={() => setMenuOpen(false)}
//               className="block text-center bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
//             >
//               Hire Me
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }