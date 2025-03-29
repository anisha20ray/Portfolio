import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Sprint",
    description: "A Job Portal Website built using the MERN stack is a platform that connects recruiters and students (job seekers).",
    image: "/assets/Job Sprint.png",
    technologies: ["MERN Stack","Multer","Cloudinary"],
    githubUrl: "https://github.com/anisha20ray/JobSprint",
    liveUrl: "https://jobsprintanisharay.onrender.com "
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time chat application built using the MERN stack and Socket.io enables seamless and instant messaging between users       . ",
    image: "/assets/chatapp2.png",
    technologies: ["MERN Stack","Socket.io"],
    githubUrl: "https://github.com/anisha20ray/Chat-App",
    liveUrl: "https://chat-app-anisha-ray.onrender.com"
  },
  {
    id: 3,
    title: "Sorting Visualizer",
    description: " An interactive web-based tool that visually demonstrates how different sorting algorithms work.",
    image: "/assets/sorter.png",
    technologies: ["HTML","CSS","JAVASCRIPT"],
    githubUrl: "https://github.com/anisha20ray/Sorting-Visualizer",
    liveUrl: "https://sorting-visualizeranisha-cx9qr9udb-anisha-rays-projects.vercel.app/"
  }
   
];
// https://github.com/guytesting85/Sorting-Visualizer
// https://sorting-visualizer-three-iota.vercel.app/