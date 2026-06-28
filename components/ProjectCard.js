import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const categoryColors = {
    Web: "bg-indigo-50 text-indigo-700",
    Mobile: "bg-emerald-50 text-emerald-700",
    Desktop: "bg-amber-50 text-amber-700",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={project.image || "/placeholder.png"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />

        {/* Category Badge */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
            categoryColors[project.category] ||
            "bg-gray-100 text-gray-600"
          }`}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Period */}
        <p className="text-xs text-gray-400 mb-1">
          {project.period}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {project.summary}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="text-xs bg-gray-100 text-gray-400 px-3 py-1 rounded-full">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href={`/projects/${project.id}`}
            className="flex-1 text-center bg-indigo-600 text-white text-sm py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-gray-200 text-gray-600 text-sm py-2 rounded-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}