"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
const Intro = () => {
  return (
    <section className="mb-28 text-center max-w-[50rem] sm:mb-0">
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", delay: 0.2 }}
          >
            <Image
              alt="Pulak portrait"
              src="/profile-image.png"
              width={192}
              height={192}
              priority={true}
              quality={95}
              // addd these class to adjust size h-24 w-24 --
              className="rounded-full border-[0.35rem] object-cover border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
      >
        <span className="font-bold">Hello, {`I'm`} Pulak</span> I am a{" "}
        <span className="font-bold">frontend developer. </span>I enjoy building{" "}
        <span className="italic">site and apps. </span> My focus is{" "}
        <span className="underline">React.js (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center font-medium gap-3 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
           outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download={true}
          className="group bg-gray-50 flex items-center gap-2 px-7 py-3 rounded-full border border-black/10
         outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition"
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" />
        </a>

        <a
          href="https://www.linkedin.com/in/pulak-sn/"
          target="_blank"
          className="bg-gray-50 text-gray-700 flex items-center gap-2 p-4 rounded-full
        border border-black/10 cursor-pointer
         outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] hover:bg-gray-100 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/PULAK-SN"
          target="_blank"
          className="bg-gray-50 text-gray-700 flex items-center gap-2 text-[1.35rem] p-4 rounded-full
        border border-black/10 cursor-pointer
         outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] hover:bg-gray-100 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
