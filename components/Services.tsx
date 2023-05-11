"use client"; // this is a client component
import React, { useEffect } from "react";
import Image from "next/image";
import reactBg from "../images/react.gif";
import dots from "../images/3line.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

function Services({}: Props) {
  const { ref, inView } = useInView();
  const scrollAnimation1 = useAnimation();
  const scrollAnimation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollAnimation1.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
      scrollAnimation2.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      scrollAnimation1.start({
        y: -100,
        opacity: 0,
        scale: 0.5,
      });
      scrollAnimation2.start({
        y: 100,
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="h-screen justify-center 2xl:h-screen min-h-screen flex flex-col items-center relative max-w-7xl mx-auto px-7 pb-20 my-52 lg:my-0"
    >
      {/* <Image id="reactBg" src={reactBg} alt="gif" width={350} height={350} /> */}
      <motion.div animate={scrollAnimation1} className="flex items-center">
        <span className="text-3xl text-white mr-3">My </span>
        <h1 id="abouth1" className="text-3xl tracking-wider">
          Specializations
        </h1>
      </motion.div>
      <motion.div
        animate={scrollAnimation2}
        id="biography"
        className="w-full p-4 pt-14 text-lg text-white lg:w-2/3 mt-20 border border-slate-400 rounded-md flex justify-between"
      >
        <Image
          src={dots}
          alt="img"
          className="absolute -left-12 -top-9 rotate-0"
        />
        <span className="select-none">Development</span>
        <p className="text-lg text-white w-full indent-10 text-justify">
          Development is my passion. As a skilled developer, I create innovative
          solutions that drive progress and deliver high-quality software for
          users and businesses. Designing websites according to the given design
          using React. Optional Javascript, NetxJs, etc. design using
          technologies.
        </p>
      </motion.div>

      <motion.div
        animate={scrollAnimation2}
        id="biography"
        className="w-full p-4 pt-14 text-lg text-white lg:w-2/3 mt-20 border border-slate-400 rounded-md flex justify-between"
      >
        <Image
          src={dots}
          alt="img"
          className="absolute -right-14 -top-9 rotate-90"
        />
        <span className="px-36 select-none">Responsive design</span>
        <p className="text-lg text-white w-full indent-10 text-justify">
          Responsive design for all devices, be it Bootstrap, Tailwind or pure
          css. I mainly use TailwindCss for ease of use and customization.
        </p>
      </motion.div>
    </div>
  );
}

export default Services;
