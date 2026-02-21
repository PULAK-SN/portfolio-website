import whiteBoard from "@/public/white-board.png";
import school from "@/public/school-dashboard.png";
import carePulse from "@/public/care-pulse.png";
import chatify from "@/public/chatify.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Chatify",
    description:
      "Chatify is a full-stack, real-time communication platform built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. The application features secure user authentication, private real-time messaging with image support via Cloudinary.",
    tags: [
      "React",
      "Javascript",
      "Node.js",
      "MondoDB",
      "Socket.io",
      "Cloudinary",
      "Zod (Form Validation)",
      "Tailwind",
    ],
    links: {
      liveLinks: "https://chatify-t545.onrender.com",
      githubLink: "https://github.com/PULAK-SN/chatify-app",
    },
    imageUrl: chatify,
  },
  {
    title: "School Dashboard",
    description:
      "Architected a robust school management solution with a modular, role-based access control system, enabling secure authentication for admins, teachers, students, and parents via Clerk and JWT session management.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Prisma",
      "Clerk",
      "Zod (Form Validation)",
      "Tailwind",
    ],
    links: {
      liveLinks: "https://ps-school-management.vercel.app/",
      githubLink: "https://github.com/PULAK-SN/school-management",
    },
    imageUrl: school,
  },
  {
    title: "Doctor Appointment Booking System",
    description: `A full-stack web application that allows patients to request appointments 
    with doctors and enables admins to manage, schedule, or cancel those requests.
    Patients can fill in detailed personal, medical, and contact information, upload identity proof, 
    and choose appointment date`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Appwrite",
      "Zod (Form Validation)",
    ],
    links: {
      liveLinks: "https://care-pulse-nine-dun.vercel.app/",
      githubLink: "https://github.com/PULAK-SN/care-pulse",
    },
    imageUrl: carePulse,
  },
  {
    title: "White Board",
    description: `Developed a real-time collaborative whiteboard application using Next.js, Clerk, and Convex. 
      The platform allows teams to draw, create sticky notes, and collaborate visually with secure 
      authentication and instant update.`,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "ShadCN UI",
      "Clerk",
      "Convex",
      "Liveblocks",
    ],
    links: {
      liveLinks: "https://board-phi-five.vercel.app/",
      githubLink: "https://github.com/PULAK-SN/board",
    },
    imageUrl: whiteBoard,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redux Toolkit",
  "Git",
  "Tailwind",
  "Express",
  "MySql",
  "MondoDB",
  "Framer Motion",
] as const;
