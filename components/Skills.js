const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'bg-indigo-50 text-indigo-700',
    border: 'hover:border-indigo-200',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'HTML & CSS', 'Alpine.js', 'Livewire'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'bg-emerald-50 text-emerald-700',
    border: 'hover:border-emerald-200',
    skills: ['Laravel', 'Node.js', 'REST APIs', 'FastAPI', 'C# .NET'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'bg-amber-50 text-amber-700',
    border: 'hover:border-amber-200',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'],
  },
  {
    category: 'Mobile',
    icon: '📱',
    color: 'bg-purple-50 text-purple-700',
    border: 'hover:border-purple-200',
    skills: ['Flutter (Dart)', 'Kotlin', 'Android Studio', 'MVVM', 'Material Design'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    color: 'bg-sky-50 text-sky-700',
    border: 'hover:border-sky-200',
    skills: ['AWS EC2', 'GitHub', 'Git', 'Vercel', 'Apache', 'SSH', 'Certbot SSL'],
  },
  {
    category: 'Tools & Methods',
    icon: '🛠️',
    color: 'bg-rose-50 text-rose-700',
    border: 'hover:border-rose-200',
    skills: ['Agile / Scrum', 'Jira', 'Selenium', 'Figma', 'VS Code', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-indigo-600 font-medium mb-1 text-sm uppercase tracking-widest">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Skills & Technologies
          </h2>
          <div className="mt-3 mx-auto w-16 h-1 bg-indigo-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`bg-white rounded-2xl border border-gray-100 p-6 transition-all hover:shadow-md ${group.border}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}