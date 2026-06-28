export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-8 mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} Hishma Hameed. All rights reserved. 
      </p>

      <div className="flex justify-center gap-6 mt-3">
        <a
          href="https://github.com/hishma15"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors text-sm"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/hishma-hameed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors text-sm"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

