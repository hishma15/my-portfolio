import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';

// Tells Next.js: "pre-build a page for each of these IDs"
export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { id: p.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Runs for each ID — finds that project and passes it as props
export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
}

// The actual page component
export default function ProjectDetail({ project }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/#projects"
        className="text-indigo-600 text-sm font-medium hover:underline mb-8 inline-block"
      >
        ← Back to Projects
      </Link>

      {/* Hero image */}
      <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
        {project.title}
      </h1>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line mb-10">
        {project.description}
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          View Live Site ↗
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-gray-500 transition-colors"
        >
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}