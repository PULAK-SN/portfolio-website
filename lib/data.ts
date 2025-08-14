import whiteBoard from "@/public/white-board.png";
import gpt3 from "@/public/gpt-3.png";
import carePulse from "@/public/care-pulse.png";
import restaurent from "@/public/restaurent.png";

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
    title: "White Board",
    description:
      "Developed a real-time collaborative whiteboard application using Next.js, Clerk, and Convex. The platform allows teams to draw, create sticky notes, and collaborate visually with secure authentication and instant update.",
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
    title: "GPT-3 Landing Page",
    description: ` Developed a modern, responsive landing page inspired by OpenAI’s GPT-3, demonstrating
     clean UI design and component-based architecture. The project showcases front-end development skills
      and attention to detail.`,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    links: {
      liveLinks: "https://gpt-3-zeta-nine.vercel.app/",
      githubLink: "https://github.com/PULAK-SN/GPT3",
    },
    imageUrl: gpt3,
  },
  {
    title: "Restaurent Application",
    description: `This project is a visually appealing restaurant application landing page. Built using React, 
    it demonstrates skills in front-end development, showcasing a clean and responsive design. 
    The application incorporates key sections such as a hero section, about us, menu, and contact, 
    effectively utilizing React components.`,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    links: {
      liveLinks: "https://restaurant-application-theta.vercel.app",
      githubLink: "https://github.com/PULAK-SN/Restaurant-Application",
    },
    imageUrl: restaurent,
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
  "Git",
  "Tailwind",
  "Express",
  "MySql",
  "Framer Motion",
] as const;
