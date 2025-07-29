"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
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
    sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 odd:pl-8 hover:bg-gray-200 transition"
    >
      <div
        className="pt-4 pb-6 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 flex flex-col h-full
      group-odd:ml-[22rem]"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((item, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] capitalize tracking-wider text-white rounded-full"
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
        className="absolute top-8 -right-40 max-w-[30rem] h-full object-contain rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04rem]
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
