import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  const [active, setActive] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'Desktop'];

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-indigo-600 font-medium mb-1">What I've built</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Projects</h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-indigo-600 rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}