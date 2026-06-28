export default function About() {
  const facts = [
    { label: "Degree", value: "BEng (Hons) Software Engineering" },
    { label: "Institute", value: "APIIT Sri Lanka (Staffordshire University)" },
    { label: "Location", value: "🌍 Kandy / Colombo, Sri Lanka" },
    { label: "Status", value: "✅ Open to internships & graduate roles" },
    { label: "Focus", value: "Full-stack, Mobile & Cloud" },
  ];

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-indigo-600 font-medium mb-1 text-sm uppercase tracking-widest">
            Get to know me
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            About Me
          </h2>

          <div className="mt-3 mx-auto w-16 h-1 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left */}
          <div className="flex-1 space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              I'm a final-year Software Engineering undergraduate at APIIT Sri
              Lanka (Staffordshire University), passionate about building
              real-world applications that are both technically solid and great
              to use.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Over the past few years I've worked across the full stack—from
              responsive front-ends in React and Flutter, to secure back-ends
              with Laravel and Node.js, to cloud deployments on AWS EC2. I enjoy
              the entire product lifecycle, from database design to UI polish.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              I'm actively seeking internship and graduate opportunities at Sri
              Lankan tech companies. I thrive in collaborative teams, learn
              quickly, and care deeply about clean code and excellent user
              experiences.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: "💻",
                  title: "Full-Stack Web",
                  desc: "React, Next.js, Laravel",
                },
                {
                  icon: "📱",
                  title: "Mobile Apps",
                  desc: "Flutter, Kotlin Android",
                },
                {
                  icon: "☁️",
                  title: "Cloud & DevOps",
                  desc: "AWS EC2, GitHub, Agile",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <span className="text-2xl block mb-3">{item.icon}</span>

                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {item.title}
                  </p>

                  <p className="text-gray-500 text-xs">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block mt-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
            >
              Let's Talk →
            </a>
          </div>

          {/* Right */}
          <div className="w-full lg:w-80 bg-gray-50 rounded-3xl p-7 border border-gray-100">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">
              Quick Facts
            </h3>

            <div className="space-y-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-1">
                    {fact.label}
                  </span>

                  <span className="text-gray-800 font-medium text-sm">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}