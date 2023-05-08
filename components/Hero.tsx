"use client"; // this is a client component
import React from "react";
import imgBg from "../images/imgBg.png";
import myImg from "../images/myImg.png";
import myImg2 from "../images/myImg2.png";
import line from "../images/colorfulLine.png";
import Image from "next/image";
import { MdOutlineWavingHand } from "react-icons/md";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Frontend Developer...", "React Developer...", "Freelancer..."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="lg:h-screen mb-24 sm:mb-28 lg:mb-0 relative text-white lg:flex lg:items-center max-w-7xl mx-auto ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="mt-36 lg:mt-24 w-11/12 mx-auto flex flex-col items-center text-center lg:w-2/4 xl:w-1/3"
      >
        <h1 className="font-semibold text-3xl sm:text-4xl">Hi, I am Shahmar</h1>
        <p id="iAm" className="my-5 font-semibold text-xl sm:text-2xl">
          I am {text}
          <Cursor cursorColor="#BD2F78" />
        </p>
        <a
          href="/#resume"
          id="myResume"
          className="font-medium text-lg sm:text-lg py-3 px-8 rounded-3xl"
        >
          My Resume
        </a>
        {/* <a
          href=""
          className="font-medium text-lg sm:text-lg py-3 px-8 rounded-3xl"
        >
          Download CV
        </a> */}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="heroImg w-2/3 500px:w-2/4 md:w-2/5 h-fit mx-auto mt-16 lg:mt-0 overflow-hidden rounded-lg lg:w-1/4"
      >
        <Image id="myImg" src={myImg2} alt="shahmar" />
      </motion.div>
    </div>
  );
}

export default Hero;
