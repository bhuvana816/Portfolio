import { Project, Experience, Education, Certification } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "MentorLoop",
    description: "Built MentorLoop, a React-based mentorship platform with AI suggestions, a chatbot for user support, and Razorpay integration for secure payments.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bhuvana816/MentorLoop",
    live: "https://mentor-loop-murex.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS", "RazorPay", "AI CHATBOT"]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Built with React and Firebase, featuring real-time updates, drag-and-drop functionality, and team collaboration.",
    image: "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bhuvana816/taskmanager",
    live: "https://taskmanager-eight-xi.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills. Built with React, Tailwind CSS, and Framer Motion for animations.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bhuvana816/Portfolio.",
    live: "https://portfolio-navy-five-88.vercel.app/#home",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "4",
    title: "Nykaa Clone",
    description: "A Nykaa clone is an e-commerce platform replicating Nykaa's core features for beauty, skincare, and wellness products. It offers smooth navigation, secure checkout, and admin control for easy marketplace deployment.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bhuvana816/nykaa",
    live: "https://portfolio2-f57f.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "5",
    title: "Green Cycle Hub",
    description: "Developed Green Cycle Hub, a Django-based sustainable e-commerce platform where users exchange plastic waste for supercoins redeemable on eco-friendly products, with integrated payments, cart system, and admin dashboard.",
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bhuvana816/Green-cycle-hub",
    tags: ["HTML", "Tailwind CSS", "Python", "Django"]
  },
  {
    id: "6",
    title: "AI Quiz Builder",
    description: "AI Quiz Builder is a web app that generates personalized multiple-choice quizzes on any topic using AI, allowing users to test their knowledge interactively.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bhuvana816/AI-Quiz-builder",
    live: "https://ai-quiz-builder.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "TypeScript", "OpenGPT AI"]
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Frontend Developer & Web Designer",
    company: "Engiversee",
    startDate: "Apr 2025",
    endDate: "Jul 2025",
    description: [
      "Developed and launched the Engiversee website using React.js to enhance online presence.",
      "Designed a responsive, user-friendly interface with Tailwind CSS. Integrated mentorship booking, learning modules, and testimonials.",
      "Optimized website speed and SEO for better visibility. Managed version control and deployment using Git and GitHub."
    ]
  },
  {
    id: "2",
    role: "AI Intern",
    company: "Infosys Springboard",
    startDate: "August 2025",
    endDate: "Present",
    description: [
      "Working on AI projects using Python, focusing on building and deploying ML models for real-world datasets.",
      "Tasks include data collection, preprocessing, model training, hyperparameter tuning, and iterative model improvement.",
      "Applied regression, classification, and clustering techniques with an emphasis on practical system building."
    ]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vignan's Institute of Information Technology",
    location: "Visakhapatnam",
    duration: "Expected May 2026",
    cgpa: "9.0 / 10"
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "React Certification",
    issuer: "Infosys Springboard",
    issueDate: "Nov 2024",
    thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://drive.google.com/file/d/1qzIk_z1XjAU0uWlrWIewbrAXvj852TIx/view?usp=sharing"
  },
  {
    id: "2",
    title: "Front End Dev Certification",
    issuer: "Infosys Springboard",
    issueDate: "Apr 2025",
    thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://drive.google.com/file/d/1-Vm-3Llj11w_o92l5gtl_Xo4IDaOOWY0/view?usp=sharing"
  },
  {
    id: "",
    title: "Django Certification",
    issuer: "IBM",
    issueDate: "July 2024",
    thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "https://drive.google.com/file/d/1annfHy4HDiB5pVD27BSoRu8k-sqXIYAC/view?usp=sharing"
  }
];

export const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
];