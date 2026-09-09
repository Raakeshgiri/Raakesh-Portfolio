export const portfolio = {
  name: "Raakesh G A",

  role: "Mobile App & Full Stack Developer",

  profileImage: "/profile.jpeg",

  eyebrow: "HELLO, I'M",

  intro:
    "I build responsive, user-friendly digital experiences with clean code, thoughtful design, and modern technologies.",

  about:
    "I enjoy turning ideas into polished web and mobile products. My focus is building interfaces that feel simple, fast, accessible, and pleasant to use.",

  email: "raakesh9102@gmail.com",

  phone: "+91 63805 96997",

  location: "India",

  stats: [
    {
      value: "6+",
      label: "Months Experience",
    },
    {
      value: "5+",
      label: "Projects Worked",
    },
    {
      value: "8+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Commitment",
    },
  ],

  skills: [
    {
      name: "Flutter",
      level: 88,
    },
    {
      name: "React.js",
      level: 85,
    },
    {
      name: "Java",
      level: 80,
    },
    {
      name: "Spring Boot",
      level: 70,
    },
    {
      name: "JavaScript",
      level: 86,
    },
    {
      name: "MySQL",
      level: 82,
    },
    {
      name: "Git",
      level: 90,
    },
    {
      name: "HTML & CSS",
      level: 92,
    },
  ],

  projects: [
    {
      id: "healthcare-mobile-app",
      number: "01",
      title: "Healthcare Mobile App",
      category: "Flutter Application",

      description:
        "A healthcare mobile solution with responsive UI for managing prescriptions, appointments, patient records, and everyday medical activities.",
    },

    {
      id: "hrms-mobile-app",
      number: "02",
      title: "HRMS Mobile App",
      category: "Flutter Application",

      description:
        "A mobile HRMS solution for managing employees, attendance, payroll, leave, and other day-to-day HR operations.",
    },

    {
      id: "travelmate",
      number: "03",
      title: "Travelmate",
      category: "React + Spring Boot",

      description:
        "A travel planning platform for exploring tour packages, requesting customized trips, and managing bookings with ease with admin management workflows.",
    },
  ],

  projectDetails: {
    "healthcare-mobile-app": {
      type: "mobile",

      label: "Mobile Application",

      title: "Healthcare Mobile App",

      year: "2026",

      description:
        "A healthcare mobile application designed to simplify everyday medical activities for users. The application provides an intuitive and responsive interface for managing prescriptions, appointments, patient information, medical records, and healthcare-related activities from a mobile device.",

      technologies: [
        "Flutter",
        "Dart",
        "REST API",
        "Shared Preferences",
        "Google Fonts",
        "Responsive UI",
        "Git",
      ],

      links: [
        // {
        // //   label: "GitHub Repository",
        // //   url: "#",
        // },

        // {
        //   label: "Project Demo",
        //   url: "#",
        // },
      ],

      screenshots: [
        "/project-images/healthcare/Login.jpeg",
        "/project-images/healthcare/Home.jpeg",
        "/project-images/healthcare/MoreMenu.jpeg",
        "/project-images/healthcare/Profile.jpeg",
        "/project-images/healthcare/Patients.jpeg",
        "/project-images/healthcare/Prescription.jpeg",
        "/project-images/healthcare/Visit.jpeg",
        "/project-images/healthcare/Invoice.jpeg",
      ],
    },

    "hrms-mobile-app": {
      type: "mobile",

      label: "Mobile Application",

      title: "HRMS Mobile App",

      year: "2026",

      description:
        "A Human Resource Management mobile application designed to simplify daily HR operations. The application provides an intuitive interface for managing employee information, attendance, leave requests, payroll details, and other HR-related activities.",

      technologies: [
        "Flutter",
        "Dart",
        "REST API",
        "Shared Preferences",
        "Google Fonts",
        "Responsive UI",
        "Git",
      ],

      links: [
        // {
        //   label: "GitHub Repository",
        //   url: "#",
        // },

        // {
        //   label: "Project Demo",
        //   url: "#",
        // },
      ],

      screenshots: [
        "/project-images/hrms/Home-1.jpeg",
        "/project-images/hrms/Home-2.jpeg",
        "/project-images/hrms/Attendance.jpeg",
        "/project-images/hrms/Leave.jpeg",
        "/project-images/hrms/Payroll.jpg",
        "/project-images/hrms/Expense.jpeg",
      ],
    },

    travelmate: {
      type: "web",

      label: "Full Stack Web Application",

      title: "Travelmate",

      year: "2025",

      description:
        "Travelmate is a full-stack travel planning platform that allows users to explore travel packages, request customized travel plans, manage bookings, and receive trip-related information. The application also includes administrative functionality for managing packages, customer requests, bookings, and travel content.",

      technologies: [
        "React.js",
        "JavaScript",
        "Spring Boot",
        "Java",
        "MySQL",
        "REST API",
        "HTML",
        "CSS",
        "Git",
      ],

      links: [
        // {
        //   label: "GitHub Repository",
        //   url: "#",
        // },

        // {
        //   label: "Live Website",
        //   url: "#",
        // },
      ],

      screenshots: [
        "/project-images/travelmate/screen-1.png",
        "/project-images/travelmate/screen-2.png",
        "/project-images/travelmate/screen-3.png",
      ],
    },
  },

  nav: [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ],
};