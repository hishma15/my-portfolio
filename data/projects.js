const projects = [
  {
    id: 'grocies-ecommerce',
    title: 'Grocies – Super E-Commerce Website',
    summary:
      'A fully responsive e-commerce website for a fictional supermarket with cart, wishlist, and order placement — built with HTML, CSS, and JavaScript.',
    description: `Developed as part of the Web Development and Operating Systems module in Year 1 of my degree, Grocies is a fully responsive front-end e-commerce website for a fictional supermarket.

The site features a product catalog with images and prices, add-to-cart functionality with dynamic price calculation, a shopping cart summary with order placement, and a wishlist feature to save products for later.

This project deepened my understanding of DOM manipulation, responsive design, and building user-friendly shopping experiences from scratch — without any frameworks.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Responsive Design'],
    image: '/projects/supermarket-logo.png',
    liveUrl: 'https://hishma15.github.io/Grocies-Super/',
    githubUrl: 'https://github.com/yourusername/grocies',
    period: 'Mar 2024 – Aug 2024',
    category: 'Web',
    featured: true,
  },
  {
    id: 'event-management-system',
    title: 'Event Management System – Desktop App',
    summary:
      'A C# desktop application with role-based access for Admins, Organizers, and Participants to create, manage, and book events.',
    description: `Developed a desktop-based Event Management System using C# and Microsoft SQL Server. The system supports three user roles — Admin, Organizer, and Participant — each with a distinct set of permissions and features.

Admins can approve or reject events, catering, venue, and décor requests, manage users, and view booking and payment details. Organizers manage events by type (public or social) and handle venue, décor, catering, and booking requests. Participants can browse available events, book public events (with payment) or social events (no payment), and view their booking history.

The system uses SSMS for secure data storage with proper table relationships and constraints. This project strengthened my understanding of desktop application development, database design, CRUD operations, and role-based access logic.`,
    tech: ['C#', '.NET', 'Microsoft SQL Server', 'SSMS', 'RBAC', 'CRUD'],
    image: '/projects/eventmanagementsystem .png',
    liveUrl: 'https://github.com/yourusername/event-management-system',
    githubUrl: 'https://github.com/yourusername/event-management-system',
    period: 'Jul 2024 – Oct 2024',
    category: 'Desktop',
    featured: true,
  },
  {
    id: 'furniscape-android',
    title: 'FurniScape – Kotlin Android App',
    summary:
      'A prototype Android furniture store app with 8 screens, cart management, light/dark mode, and Material Design — built in Kotlin with MVVM.',
    description: `FurniScape is a prototype Android mobile application for a furniture store, built using Kotlin in Android Studio. The app allows users to explore furniture products, view detailed descriptions, and navigate through product categories with a clean Material Design UI.

The app includes 8 screens: Welcome, Login, Register, Home, Explore, Cart, Profile, and Product Details. It supports category filtering, product cards, scrollable lists, cart management (add, remove, update quantities), and profile management.

Built with MVVM architecture for clean separation of concerns, it supports both light and dark modes, animations, and interactive dialogs. Comprehensive test cases cover UI, navigation, animations, and mode switching.`,
    tech: ['Kotlin', 'Android Studio', 'MVVM', 'Material Design', 'GitHub'],
    image: '/projects/furniscapelogo.png',
    liveUrl: 'https://github.com/yourusername/furniscape-android',
    githubUrl: 'https://github.com/yourusername/furniscape-android',
    period: 'May 2025 – Jun 2025',
    category: 'Mobile',
    featured: true,
  },
  {
    id: 'track-and-trace',
    title: 'Track & Trace – QR Lost Luggage System',
    summary:
      'A group project — a Laravel web app for Sri Lanka Railways with QR-based luggage tracking, OTP 2FA, role-based access, and AWS EC2 deployment.',
    description: `Track & Trace is a web-based application developed for Sri Lanka Railways to manage lost and found luggage efficiently using QR-based tracking. Built as a group assignment using Agile methodology with Jira for sprint tracking and backlog management.

The system supports three roles — Traveler, Staff, and Admin — with luggage registration via QR codes and manual IDs, lost & found reporting, notifications, and feedback. Security features include password hashing, email OTP for two-factor authentication, and CSRF protection.

The admin dashboard covers staff management and system statistics. The application was deployed on AWS EC2 (Ubuntu + Apache + MySQL) and secured with SSH. Automated testing was done with Selenium, and the project was managed across sprints with daily standups and retrospectives.`,
    tech: ['Laravel', 'TailwindCSS', 'Alpine.js', 'MySQL', 'AWS EC2', 'Selenium', 'Jira', 'Agile'],
    image: '/projects/trackandtrace.png',
    liveUrl: 'https://github.com/yourusername/track-and-trace',
    githubUrl: 'https://github.com/yourusername/track-and-trace',
    period: 'Mar 2025 – Sep 2025',
    category: 'Web',
    featured: true,
  },
  {
    id: 'furniscape-laravel',
    title: 'FurniScape – Laravel E-Commerce Web App',
    summary:
      'A secure full-stack furniture e-commerce platform on AWS EC2 with OWASP Top 10 compliance, dual databases (MySQL + MongoDB), PDF invoices, and Jetstream auth.',
    description: `FurniScape is a full-stack, secure Laravel-based e-commerce platform supporting both Admin and Customer roles, hosted on AWS EC2 with HTTPS via Certbot SSL.

Customers can browse and filter products by category or name, manage their cart, place orders with downloadable PDF invoices sent by email, and book consultations. Admins manage users, products, categories, orders, and consultations through a role-restricted dashboard.

Security was a core focus — the platform implements OWASP Top 10 compliance including CSRF protection, XSS prevention, input validation, and RBAC via Laravel Jetstream and Sanctum. The system uses MySQL for e-commerce data and MongoDB for consultation management, with Livewire and Axios powering the frontend interactions.`,
    tech: ['Laravel', 'Blade', 'TailwindCSS', 'Livewire', 'MySQL', 'MongoDB', 'Jetstream', 'Sanctum', 'AWS EC2', 'OWASP'],
    image: '/projects/furniscapeweb2.png',
    liveUrl: 'https://github.com/yourusername/furniscape-laravel',
    githubUrl: 'https://github.com/yourusername/furniscape-laravel',
    period: 'Jul 2025 – Oct 2025',
    category: 'Web',
    featured: false,
  },
  {
    id: 'furniscape-flutter',
    title: 'FurniScape – Flutter Cross-Platform App',
    summary:
      'A Flutter/Dart mobile app connected to a Laravel REST API with Provider state management, offline support, dark mode, and device permissions.',
    description: `FurniScape is a cross-platform mobile application built with Flutter (Dart), connected to a Laravel RESTful API backend. It delivers a full furniture shopping experience with real-time data, authentication, and personalization.

Authentication uses token-based APIs via Dio and FlutterSecureStorage. State management is handled with Provider following MVVM architecture. The app fetches categories and products from the Laravel API and provides offline support via local JSON files.

Users can add/remove products from cart and favorites (stored locally), switch between dark and light modes, browse products by category, and view detailed product pages. The app also uses device capabilities — camera for profile photo uploads, location for checkout, and contact sharing via clipboard. It is fully responsive in both portrait and landscape orientations.`,
    tech: ['Flutter', 'Dart', 'Provider', 'MVVM', 'Laravel API', 'Dio', 'SharedPreferences', 'REST API'],
    image: '/projects/furniscapelogo.png',
    liveUrl: 'https://github.com/yourusername/furniscape-flutter',
    githubUrl: 'https://github.com/yourusername/furniscape-flutter',
    period: 'Aug 2025 – Oct 2025',
    category: 'Mobile',
    featured: false,
  },
];

export default projects;