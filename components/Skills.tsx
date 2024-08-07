"use client"; // this is a client component
import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import htmlPng from "../images/html.png";
import cssPng from "../images/css.png";
import jsPng from "../images/js.png";
import reactPng from "../images/react.png";
import reduxPng from "../images/redux.png";
import bootstrapPng from "../images/bootstarp.svg";
import tailwindPng from "../images/tailwind.png";
import nextPng from "../images/nextjs.png";
import tsPng from "../images/typescript.png";
import sassPng from "../images/sass.png";
import apiPng from "../images/api.png";
import gitPng from "../images/git.png";
import vuePng from "../images/vuejs.png";
import Image from "next/image";
import css from "styled-jsx/css";
type Props = {};

export default function Skills({}: Props) {
  const { ref, inView } = useInView();
  const scrollAnimation1 = useAnimation();
  const scrollAnimation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollAnimation1.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      });
      scrollAnimation2.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      scrollAnimation1.start({
        x: -300,
        opacity: 0,
        scale: 0.5,
      });
      scrollAnimation2.start({
        x: 300,
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="h-fit 2xl:h-screen 2xl:justify-center min-h-screen flex flex-col items-center relative max-w-7xl mx-auto px-7 pb-20 "
    >
      <motion.div animate={scrollAnimation1} className="flex items-center">
        <span className="text-3xl text-white mr-3">My </span>
        <h1 id="abouth1" className="text-3xl tracking-wider">
          Skills
        </h1>
      </motion.div>
      <motion.div
        animate={scrollAnimation2}
        id="programs"
        className="w-full 825px:w-3/4 1100px:w-2/4 mx-auto max-w-7xl mt-10 flex flex-wrap justify-between"
      >
        <div className="relative imgDiv w-32 h-28">
          <Image src={htmlPng} width={116} height={65} alt="html" />
          <span className="text-lg">HTML5</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={cssPng} width={116} height={65} alt="css" />
          <span className="text-lg">CSS3</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={jsPng} width={116} height={65} alt="js" />
          <span className="text-lg">Javascript</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={reactPng} width={116} height={65} alt="react" />
          <span className="text-lg">React</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={reduxPng} width={116} height={65} alt="redux" />
          <span className="text-lg">Redux</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={bootstrapPng} width={116} height={65} alt="bootstrap" />
          <span className="text-lg">Bootstrap</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={tailwindPng} width={116} height={65} alt="tailwind" />
          <span className="text-lg">Tailwind</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={nextPng} width={116} height={65} alt="next" />
          <span className="text-lg">NextJs</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={tsPng} width={116} height={65} alt="ts" />
          <span className="text-lg">Typscript</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={sassPng} width={116} height={65} alt="sass" />
          <span className="text-lg">Sass</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={apiPng} width={116} height={65} alt="api" />
          <span className="text-lg">Api</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={gitPng} width={116} height={65} alt="git" />
          <span className="text-lg">Git</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <Image src={vuePng} width={116} height={65} alt="git" />
          <span className="text-lg">VueJs</span>
        </div>
      </motion.div>
    </div>
  );
}
