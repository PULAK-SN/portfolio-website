"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
const Contacts = () => {
  return (
    <motion.section
      id="contact"
      className="mb-20 scroll-mt-28 sm:mb-28 w-[min(100%,38rem)] text-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Fell free to contact with me through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email send successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={100}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={500}
          className="h-52 rounded-lg my-3 border border-black/10 p-4"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contacts;
