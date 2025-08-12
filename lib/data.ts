import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// project thumbnail
// import corpcommentImg from "@/public/corpcomment.png";
import whiteBoard from "@/public/white-board.png";
import gpt3 from "@/public/gpt-3.png";

import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
      "Shadcn",
      "Clerk",
      "Convex",
      "Liveblocks",
    ],
    links: {
      liveLinks: "",
      githubLink: "",
    },
    imageUrl: whiteBoard,
  },
  {
    title: "Real-Time Video Calling App",
    description: `A web-based video calling platform built using \textbf{Socket.IO, PeerJS}, and the \textbf{React Context API} to enable real-time, peer-to-peer video communication between users.
      A web-based video calling platform built using \textbf{Socket.IO, PeerJS}, and the \textbf{React Context API} to enable real-time, peer-to-peer video communication between users.`,
    tags: ["HTML", "CSS", "React", "Next.Js", "WebRTC", "PeerJS"],
    links: {
      liveLinks: "",
      githubLink: "",
    },
    imageUrl: rmtdevImg,
  },
  {
    title: "GPT-3 Landing Page",
    description: ` Developed a modern, responsive landing page inspired by OpenAI’s GPT-3, demonstrating clean UI design and component-based architecture. The project showcases front-end development skills and attention to detail.
      Developed a modern, responsive landing page inspired by OpenAI’s GPT-3, demonstrating clean UI design and component-based architecture. The project showcases front-end development skills and attention to detail.`,
    tags: ["HTML", "CSS", "React"],
    links: {
      liveLinks: "",
      githubLink: "",
    },
    imageUrl: gpt3,
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
