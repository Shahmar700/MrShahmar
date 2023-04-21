"use client"; // this is a client component
import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
        <div className="imgDiv w-32 h-28">
          <img src="/images/html.png" alt="img" />
          <span className="text-lg">HTML5</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/css.png" alt="" />
          <span className="text-lg">CSS3</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/js.png" alt="" />
          <span className="text-lg">Javascript</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/react.png" alt="" />
          <span className="text-lg">React</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/redux.png" alt="" />
          <span className="text-lg">Redux</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/bootstarp.svg" alt="" />
          <span className="text-lg">Bootstrap</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/tailwind.png" alt="" />
          <span className="text-lg">Tailwind</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/nextjs.png" alt="" />
          <span className="text-lg">NextJs</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/typescript.png" alt="" />
          <span className="text-lg">Typscript</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/sass.png" alt="" />
          <span className="text-lg">Sass</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/api.png" alt="" />
          <span className="text-lg">Api</span>
        </div>

        <div className="imgDiv w-32 h-28">
          <img className="w-32 h-28" src="/images/git.png" alt="" />
          <span className="text-lg">Git</span>
        </div>
      </motion.div>
    </div>
  );
}
