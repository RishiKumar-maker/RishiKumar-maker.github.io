export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string; // We'll generate illustrative placeholders or allow customization
  category: 'web' | 'mobile' | 'ml' | 'other';
  tags: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  iconName: string; // Will match Lucide icons dynamically
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
  location: string;
  description: string;
  gpa?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  isComingSoon?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category?: string;
  isPlaceholder?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  isPlaceholder?: boolean;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    title: string;
    subtitles: string[]; // For typing effect
    bio: string;
    resumeUrl: string;
    email: string;
    github: string;
    linkedin: string;
    twitter?: string;
    location: string;
    formspreeId?: string; // Formspree integration ID
  };
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  achievements: Achievement[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Rishi Kumar",
    firstName: "Rishi",
    lastName: "Kumar",
    avatarUrl: "", // Leave blank to generate an inline stylized avatar
    title: "Aspiring Software Engineer & Computer Science Student",
    subtitles: [
      "Computer Science Student",
      "Full-Stack Web Developer",
      "Open Source Enthusiast",
      "Continuous Learner"
    ],
    bio: "I am a Computer Science student passionate about building highly functional, clean, and accessible web applications. I love solving complex puzzles and learning new technologies. Currently, I am expanding my skills in React, TypeScript, and modern backend architectures, while building personal projects that solve real-world problems.",
    resumeUrl: "#", // Can be a Google Drive link or public asset URL
    email: "rishi.kumar@example.com",
    github: "https://github.com/RishiKumar-maker",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    location: "San Francisco, CA",
    formspreeId: "" // e.g. "my-form-id" (instructions in README on how to set this up)
  },
  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 0, iconName: "Code2" },
        { name: "TypeScript", level: 0, iconName: "FileCode" },
        { name: "Python", level: 0, iconName: "Terminal" },
        { name: "Java", level: 0, iconName: "Cpu" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 0, iconName: "Atom" },
        { name: "HTML5 / CSS3", level: 0, iconName: "Layers" },
        { name: "Tailwind CSS", level: 0, iconName: "Palette" },
        { name: "Next.js", level: 0, iconName: "Globe" }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 0, iconName: "Database" },
        { name: "MongoDB", level: 0, iconName: "HardDrive" },
        { name: "Git & GitHub", level: 0, iconName: "GitBranch" },
        { name: "VS Code", level: 0, iconName: "Laptop" }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "Docker & Containers", level: 0, iconName: "Box" },
        { name: "Cloud Platforms (GCP/AWS)", level: 0, iconName: "Cloud" },
        { name: "Machine Learning Basics", level: 0, iconName: "Binary" }
      ]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Personal Portfolio Website",
      description: "A modern, highly customizable portfolio template designed for students to display their work, skills, and progress.",
      longDescription: "I designed and built this responsive React application to serve as my personal hub on GitHub Pages. It features interactive filtering for my projects, dark/light theme switching, animated typing headers, and clean glassmorphism styling. The entire site is powered by a central JSON-like configuration file for ease of updates.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/RishiKumar-maker",
      liveLink: "https://github.com/RishiKumar-maker",
      category: "web",
      tags: ["React", "Design", "Frontend"],
      status: "Completed",
      featured: true
    },
    {
      id: "2",
      title: "EcoTrack - Local Habit Tracker",
      description: "A lightweight mobile-responsive web application that helps individuals track their daily eco-friendly habits and carbon footprint reduction.",
      longDescription: "Built as a personal hackathon project to solve real-world sustainability tracking. Users can record green habits like recycling, choosing public transit, or skipping meat, and see their estimated carbon footprint decline over time. Features local storage persistence and dynamic daily streak charts.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
      githubLink: "https://github.com/RishiKumar-maker",
      category: "web",
      tags: ["Sustainability", "Local Storage", "Charts"],
      status: "Completed",
      featured: true
    },
    {
      id: "3",
      title: "Algorhythm - Sorting Visualizer",
      description: "An interactive, visual platform for teaching and exploring classic sorting algorithms like Bubble, Quick, Merge, and Heap sort.",
      longDescription: "A visual educational tool that helps computer science students conceptualize the mechanics of common sorting algorithms. Users can control the array size, visualizer speed, and inspect step-by-step element comparison operations. Built with pure component level CSS transitions and asynchronous delay timers.",
      technologies: ["React", "TypeScript", "CSS Animations"],
      githubLink: "https://github.com/RishiKumar-maker",
      liveLink: "https://github.com/RishiKumar-maker",
      category: "web",
      tags: ["Algorithms", "Education", "Interactive"],
      status: "In Progress",
      featured: true
    },
    {
      id: "4",
      title: "Academic Schedule Planner",
      description: "A smart schedule planner designed to help university students map out their courses, semesters, and prerequisites efficiently.",
      longDescription: "This tool aims to simplify academic pathfinding by visualizing course pre-requisite trees as a directed graph. Students can plan multi-semester course loads and receive automated warnings for scheduling conflicts or unmet course requirements.",
      technologies: ["Python", "Flask", "NetworkX", "React"],
      githubLink: "https://github.com/RishiKumar-maker",
      category: "other",
      tags: ["Backend", "Graph Theory", "Education"],
      status: "Planned",
      featured: false
    }
  ],
  education: [
    {
      institution: "State University",
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      duration: "Sept 2024 - Present (Expected June 2028)",
      location: "San Francisco, CA",
      description: "Core coursework: Data Structures and Algorithms, Object-Oriented Programming, Computer Architecture, Discrete Mathematics, Linear Algebra. Active member of the Computer Science Student Association (CSSA) and Developer Club.",
      gpa: "3.82 / 4.0"
    }
  ],
  experience: [
    {
      role: "Aspiring Tech Professional",
      company: "Continuous Learning",
      duration: "Ongoing",
      location: "Everywhere",
      description: "Building experience through hands-on personal projects, academic coursework, and deep-dive online courses (React, System Design, Data Structures). Actively seeking summer software engineering internships or research assistant roles.",
      isComingSoon: true
    }
  ],
  achievements: [
    {
      title: "Achievements Yet to Come",
      description: "All achievements, awards, hackathon wins, and major milestones are yet to come! Stay tuned as I progress through my academic journey and build awesome projects.",
      date: "Future",
      category: "Growth",
      isPlaceholder: true
    }
  ],
  certifications: [
    {
      title: "Certifications Yet to Come",
      issuer: "Learning in Progress",
      date: "Future",
      credentialUrl: "#",
      isPlaceholder: true
    }
  ]
};
