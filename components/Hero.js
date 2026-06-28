import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-indigo-50 px-6 pt-20"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16">
        {/* Left — Text */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Hi, I'm <span className="text-indigo-600">Hishma</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl text-gray-500 font-medium mb-6">
            Software Engineering Undergraduate
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Final-year BEng student at APIIT Sri Lanka, passionate about
            full-stack web development, mobile apps, and building real-world
            solutions that solve meaningful problems.
          </p>

          {/* Stats */}
          <div className="flex gap-6 justify-center md:justify-start mb-10">
            {[
              { value: "6+", label: "Projects" },
              { value: "3+", label: "Languages" },
              { value: "4★", label: "GPA Target" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-indigo-600">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-indigo-700 active:scale-95 transition-all text-center shadow-md shadow-indigo-200"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border-2 border-gray-200 text-gray-700 px-7 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all text-center"
            >
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold px-7 py-3 text-center hover:underline underline-offset-4"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Right — Profile Image */}
        <div className="flex-shrink-0 relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 blur-2xl opacity-40 scale-110"></div>

          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/profile4.png"
              alt="Hishma"
              fill
              priority
              sizes="(max-width: 640px) 224px, 288px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300">
        <span className="text-xs font-medium">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
      </div>
    </section>
  );
}