"use client"; // this is a client component

import React, { useEffect } from "react";
import Image from "next/image";
import line2 from "../images/line2.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

function Resume({}: Props) {
  const { ref, inView } = useInView();
  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animate3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animate1.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          // type: "spring",
          // bounce: 0.3,
        },
      });
      animate2.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
        },
      });
      animate3.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animate1.start({
        x: -500,
        opacity: 0,
        scale: 0.5,
      });
      animate2.start({
        x: 500,
        opacity: 0,
        scale: 0.5,
      });
      animate3.start({
        y: -100,
        opacity: 0,
        scale: 0.5,
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="h-fit md:h-screen 2xl:h-screen flex flex-col 2xl:justify-center items-center relative max-w-7xl mx-auto px-7"
    >
      <img
        className="absolute right-0 scale-50 md:top-1 md:right-20 xl:top-10 xl:right-24"
        src="https://validthemes.tech/themeforest/wordpress/ambrox/wp-content/uploads/2023/01/16-light.png"
        alt="img"
      />
      <motion.div animate={animate3} className="flex items-center">
        <span className="text-3xl text-white mr-3">My </span>
        <h1 id="abouth1" className="text-3xl tracking-wider">
          Resume
        </h1>
      </motion.div>
      <div className="w-full p-7 flex-wrap md:flex-nowrap flex justify-around mt-5 md:mt-10">
        <motion.div
          animate={animate1}
          className="experience w-fit sm:w-2/3 md:w-fit"
        >
          <h1 className="mb-8 text-3xl lg:text-4xl text-white">Experience</h1>
          <div className="expDiv">
            <div className="oneExp pl-10 pb-12 border-l border-slate-400 text-white">
              <p className="mb-7 text-sm text-slate-400">Jan 2023 - Present</p>
              <h2 className="mb-1 text-2xl">Front-end Developer</h2>
              <h6 className="text-sm text-slate-400">
                GetGuide in ABB innovation (startup)
              </h6>
            </div>
            <div className="oneExp pl-10 pb-12 border-l text-white">
              <p className="mb-7 text-sm text-slate-400">
                July 2022 - Jan 2023
              </p>
              <h2 className="mb-1 text-2xl">Front-end Developer</h2>
              <h6 className="text-sm text-slate-400">
                Sportsbox, Dualvet in Coderslab (Freelance)
              </h6>
            </div>
            <div className="oneExp pl-10 pb-0 border-l text-white">
              <p className="mb-7 text-sm text-slate-400">
                Jan 2022 - June 2022
              </p>
              <h2 className="mb-1 text-2xl">Front-end Developer</h2>
              <h6 className="text-sm text-slate-400">Coders Azerbaijan</h6>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={animate2}
          className="education experience mt-12 md:mt-0 w-fit sm:w-2/3 md:w-fit"
        >
          <h1 className="mb-8 text-3xl lg:text-4xl text-white"> Education</h1>
          <div className="eduDiv">
            <div className="oneEdu oneExp pl-10 pb-12 border-l border-slate-400 text-white">
              <p className="mb-7 text-sm text-slate-400">
                Sep 2021 - June 2023
              </p>
              <h2 className="mb-1 text-2xl">Computer Enginnering</h2>
              <h6 className="text-sm text-slate-400">
                Master of Azerbaijan Technical University
              </h6>
            </div>
            <div className="oneEdu oneExp pl-10 pb-12 border-l border-slate-400 text-white">
              <p className="mb-7 text-sm text-slate-400">Sep 2021 - Jan 2022</p>
              <h2 className="mb-1 text-2xl">Intensive Web Programming</h2>
              <h6 className="text-sm text-slate-400">Cooders Azerbaijan</h6>
            </div>
            <div className="oneEdu oneExp pl-10 pb-0 border-l border-slate-400 text-white">
              <p className="mb-7 text-sm text-slate-400">
                Sep 2017 - June 2021
              </p>
              <h2 className="mb-1 text-2xl">Computer Enginnering</h2>
              <h6 className="text-sm text-slate-400">
                Bachelor of Azerbaijan Technical University
              </h6>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
