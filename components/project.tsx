"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ProjectProps = (typeof projectsData)[number];
const Project = ({
  title,
  description,
  tags,
  imageUrl,
  links,
}: ProjectProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scroll = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scroll,
      }}
      className="group relative bg-gray-100 max-w-[52rem] rounded-lg border border-black/5 overflow-hidden
     hover:bg-gray-200 transition px-4 sm:pr-8 mb-3 sm:mb-8 last:mb-0"
    >
      <div
        className="pt-4  pb-6 sm:pl-10 sm:max-w-[50%] sm:pr-2 sm:pt-10 flex flex-col h-full
      sm:group-odd:ml-[22rem]
      "
      >
        <h3 className="text-2xl font-semibold flex items-center gap-3">
          {title}
          <div className="ml-auto flex items-center gap-3">
            <Link target="_blank" href={links.githubLink}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <BsGithub className="cursor-pointer hover:text-gray-700" />
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={10}>
                  Github Link
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link target="_blank" href={links.liveLinks}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <BiLink className="cursor-pointer hover:text-gray-700" />
                </TooltipTrigger>
                <TooltipContent side="bottom" sideOffset={10}>
                  Live Link
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap pt-4 gap-2 sm:mt-auto">
          {tags.map((item, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] capitalize tracking-wider text-white
             rounded-full"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-105
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-odd:group-hover:translate-x-3
        group-odd:group-hover:translate-y-3
        group-odd:group-hover:rotate-2

        group-odd:right-[initial]
        group-odd:-left-40"
      />
    </motion.section>
  );
};

export default Project;

// "use client";

// import { useRef } from "react";
// import { projectsData } from "@/lib/data";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// type ProjectProps = (typeof projectsData)[number];

// export default function Project({
//   title,
//   description,
//   tags,
//   imageUrl,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgess,
//         opacity: opacityProgess,
//       }}
//       className="group mb-3 sm:mb-8 last:mb-0"
//     >
//       <section
//         className="bg-gray-100 max-w-[45rem] border border-black/95 rounded-lg overflow-hidden
//       sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8"
//       >
//         <div
//           className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
//         sm:group-even:ml-[18rem]"
//         >
//           <h3 className="text-2xl !text-gray-700 font-semibold">{title}</h3>
//           <p className="mt-2 leading-relaxed !text-gray-700 dark:text-white/70">
//             {description}
//           </p>
//           <ul className="flex flex-wrap !mt-4 gap-2 sm:mt-auto">
//             {tags.map((tag, index) => (
//               <li
//                 className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
//                 rounded-full dark:text-white/70"
//                 key={index}
//               >
//                 {tag}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <Image
//           src={imageUrl}
//           alt="Project I worked on"
//           quality={95}
//           className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
//         transition
//         group-hover:scale-[1.04]
//         group-hover:-translate-x-3
//         group-hover:translate-y-3
//         group-hover:-rotate-2

//         group-even:group-hover:translate-x-3
//         group-even:group-hover:translate-y-3
//         group-even:group-hover:rotate-2

//         group-even:right-[initial] group-even:-left-40"
//         />
//       </section>
//     </motion.div>
//   );
// }
