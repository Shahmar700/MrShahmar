"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import aboutBg from "../images/aboutImg.png";
import reactBg from "../images/reactBg.png";
import line from "../images/colorfulLine.png";
import dots from "../images/3line.png";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative max-w-7xl mx-auto my-40 lg:my-0 px-4 md:px-6 pb-20">
      <motion.div
        initial={{
          y: -300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex items-center"
      >
        <h1 id="abouth1" className="text-3xl tracking-wider">
          About
        </h1>
        <span className="text-3xl text-white ml-3">Me</span>
      </motion.div>
      <motion.p
        initial={{
          y: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        id="aboutContent"
        className="p-5 text-lg text-white lg:w-2/3 indent-5 text-justify mt-10 rounded-lg"
      >
        Hi, my name is Mammadzade Shahmar. I have about 2 years of work
        experience as a front-end developer. On these eves, I participated in
        Startups and also acted as a Mentor in the course. I am a software
        developer with expertise in Html, Css/Scss,Tailwind, Javascript, React
        and NextJs. Additionally, I apply the designs provided via Figma and
        Photoshop to the code as is. I am very responsible and passionate about
        working with a team.
      </motion.p>
      <Image
        src={line}
        alt="image"
        className="absolute -scale-50 -left-32 -top-24 lg:-top-28 lg:left-10 lg:scale-50"
      />
      {/* <Image
        src={reactBg}
        alt="image"
        className="absolute left-1/3 top-2/4 sm:top-28 lg:left-1/2 scale-75 sm:scale-50"
      /> */}
      <div
        id="biography"
        className="w-full p-4 pt-14 text-lg text-white lg:w-2/3 mt-20 border border-slate-400 rounded-md flex justify-between"
      >
        <Image
          src={dots}
          alt="img"
          className="absolute -right-10 -top-10 rotate-90"
        />
        <span className="select-none">Biography</span>
        <table className="sm:table-fixed w-full">
          <tbody>
            <tr className="border-b border-slate-400">
              <td>Name:</td>
              <td className="text-right 500px:text-left">Shahmar Mammadzada</td>
            </tr>
            <tr className="border-b border-slate-400">
              <td>Age:</td>
              <td className="text-right 500px:text-left">24</td>
            </tr>
            <tr className="border-b border-slate-400">
              <td>Email:</td>
              <td className="text-right 500px:text-left">
                <a href="mailto:shahmar700@gmail.com">shahmar700@gmail.com</a>
              </td>
            </tr>
            <tr className="border-b border-slate-400">
              <td>Linkedin:</td>
              <td className="text-right 500px:text-left">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shahmar-mammadzada-95740323a"
                >
                  shahmar-mammadzada-95740323a
                </a>
              </td>
            </tr>
            <tr className="border-b border-slate-400">
              <td>Phone:</td>
              <td className="text-right 500px:text-left">
                <a href="tel:+994776057775">+(994)776057775</a>
              </td>
            </tr>
            <tr className="border-b border-slate-400">
              <td>Freelance:</td>
              <td className="text-right 500px:text-left">Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
