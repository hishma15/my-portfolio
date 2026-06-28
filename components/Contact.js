export default function Contact() {
  const links = [
    { icon: '📧', label: 'Email',    value: 'hishma15@gmail.com',        href: 'mailto:hishma15@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/hishma-hameed', href: 'https://www.linkedin.com/in/hishma-hameed/' },
    { icon: '🐙', label: 'GitHub',   value: 'github.com/hishma15',    href: 'https://github.com/hishma15' },
  ];

  return (
    <section id="contact" className="bg-gray-50 px-6 py-24">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-indigo-600 font-medium mb-1 text-sm uppercase tracking-widest">
          Get in touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Contact Me
        </h2>
        <div className="mx-auto w-16 h-1 bg-indigo-600 rounded-full mb-6" />
        <p className="text-gray-500 max-w-lg mx-auto mb-12 text-base">
          I'm currently open to internship and graduate opportunities.
          Feel free to reach out on any of the platforms below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map((link) => (
            
              <a key={link.label}
                href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
            >
              <span className="text-2xl">{link.icon}</span>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                  {link.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-full mt-10 text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Currently open to internships & graduate roles in Sri Lanka
        </div>

      </div>
    </section>
  );
}