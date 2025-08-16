import { Project } from '../types';
import nykaaImage from './nykaa.png';
import mentor from './one.png';
import green from './two.png';
import ai from './three.png';

const projects: Project[] = [
  {
    id: "1",
    title: "MentorLoop",
    description:
      "Built MentorLoop, a React-based mentorship platform with AI suggestions, a chatbot for user support, and Razorpay integration for secure payments.",
    image: mentor,
    github: "https://github.com/bhuvana816/MentorLoop",
    live: "https://mentor-loop-murex.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS", "RazorPay", "AI CHATBOT"]
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects. Built with React and Firebase, featuring real-time updates, drag-and-drop functionality, and team collaboration.",
    image:
      "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/bhuvana816/taskmanager",
    live: "https://taskmanager-eight-xi.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Built with React, Tailwind CSS, and Framer Motion for animations.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    github: "https://github.com/bhuvana816/Portfolio.",
    live: "https://portfolio-navy-five-88.vercel.app/#home",
    tags: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "4",
    title: "Nykaa Clone",
    description:
      "A Nykaa clone is an e-commerce platform replicating Nykaa’s core features for beauty, skincare, and wellness products. It offers smooth navigation, secure checkout, and admin control for easy marketplace deployment.",
    image: nykaaImage,
    github: "https://github.com/bhuvana816/nykaa",
    live: "https://portfolio2-f57f.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "5",
    title: "Green Cycle Hub",
    description:
      "Developed Green Cycle Hub, a Django-based sustainable e-commerce platform where users exchange plastic waste for supercoins redeemable on eco-friendly products, with integrated payments, cart system, and admin dashboard.",
    image: green,
    github: "https://github.com/bhuvana816/Green-cycle-hub",
    tags: ["HTML", "Tailwind CSS", "Python", "Django"]
  },
  {
    id: "6",
    title: "AI Quiz Builder",
    description:
      "AI Quiz Builder is a web app that generates personalized multiple-choice quizzes on any topic using AI, allowing users to test their knowledge interactively.",
    image: ai,
    github: "https://github.com/bhuvana816/AI-Quiz-builder",
    live: "https://ai-quiz-builder.vercel.app/",
    tags: ["HTML", "Tailwind CSS", "TypeScript", "OpenGPT AI"]
  }
];

export default projects;
