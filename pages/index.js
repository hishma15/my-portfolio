import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

import Projects from '../components/Projects';
import projects from '../data/projects';
import Contact from "@/components/Contact";

// This runs on the SERVER at build time — not in the browser
export async function getStaticProps() {
  return {
    props: {
      projects, // passed to the Home component below as a prop
    },
  };
}

// The page receives `projects` as a prop from getStaticProps above
export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      
      <Contact />
      {/* Contact coming in next phases */}
      {/* <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <p className="text-gray-400 text-lg">Contact section — coming in Phase 6</p>
      </section> */}

      {/* <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900">👋 Hi, I'm YourName</h1>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
      </section> */}
    </>
  );
}

// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
//     >
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the index.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs/pages/getting-started?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
