"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
const Header = () => {
  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white/40
       bg-white/80 shadow shadow-black/[0.03] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
      ></motion.div>

      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
        text-gray-500 sm:w-[initia] sm:flex-nowrap sm:gap-5"
        >
          {links.map((item) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={item.hash}
              initial={{y:-100, opacity:0}}
              animate={{y:0, opacity:100}}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                href={item.hash}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
