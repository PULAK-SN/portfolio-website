"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>

      <p className="mb-3 text-[18px] leading-relaxed md:leading-loose">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React and Next.js</span>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        After completing my Master’s degree in Computer Science from{" "}
        <span className="font-medium">South Asian University, New Delhi</span> ,
        I decided to fully pursue my passion for programming. I began my journey
        with a coding bootcamp where I developed a strong foundation in{" "}
        <span className="font-medium">frontend web development</span>. <br />
        My core stack includes{" "}
        <span className="font-medium">React and Next.js</span> , and I’m also
        proficient with <span className="font-medium">TypeScript</span>. I’m
        always eager to explore and learn new technologies to enhance my skills
        and stay up to date with industry trends. Currently, I’m seeking a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>{" "}
        where I can contribute, grow, and build impactful projects. <br />{" "}
        <br />
        When I’m not coding, you’ll probably find me watching movies or learning
        something new — right now, I’m enjoying the process of learning the
        <span className="font-medium"> Spanish language</span>.
      </p>

      {/* <p>
        <span className="italic">When {`I'm`} not coding</span>, I enjoy
        watching movies. I also enjoy learning new things. I am currently
        learning <span className="font-medium">Spanish language</span>.
      </p> */}
    </motion.section>
  );
};

export default About;
