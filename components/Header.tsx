"use client"; // this is a client component 👈🏽
import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/SM-Logo.png";
import logo1 from "../images/MS-Logo.png";
import navBg from "../images/MS-Logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { TfiUser } from "react-icons/tfi";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { RiAppsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const iconStyle = { color: "white", fontSize: "1em" };
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="none headerMobile bg-navBg w-full h-20 lg:hidden flex items-center justify-between fixed top-0 left-0 z-50">
        <div className="leftSide pl-4">
          <Image src={logo1} alt="shahmar" width={65} height={100} />
        </div>
        <div onClick={() => setActive(!active)} className="pointer pr-4">
          <div className={active ? "activeHamburger" : "hamburger"}></div>
        </div>
        <div className={active ? "activeSideNav" : "sideNav"}>
          {/* <Image src={navBg} alt="navBg" width={100} height={100} className="opacity-25" /> */}
          <h1 className="my-5 text-center">Shahmar Mammadzada</h1>
          <ul className="w-4/5 mx-auto text-center">
            <a href="/#hero">
              <li
                onClick={() => setActive(!active)}
                className="text-2xl py-3 border-b border-slate-400"
              >
                Home
              </li>
            </a>
            <a href="/#about">
              <li
                onClick={() => setActive(!active)}
                className="text-2xl py-3 border-b border-slate-400"
              >
                About
              </li>
            </a>
            <a href="/#resume">
              <li
                onClick={() => setActive(!active)}
                className="text-2xl py-3 border-b border-slate-400"
              >
                Resume
              </li>
            </a>
            <a href="/#services">
              <li
                onClick={() => setActive(!active)}
                className="text-2xl py-3 border-b border-slate-400"
              >
                Services
              </li>
            </a>
            <a href="/#skills">
              <li
                onClick={() => setActive(!active)}
                className="text-2xl py-3 border-b border-slate-400"
              >
                Skills
              </li>
            </a>
            <a href="/#projects">
              <li
                onClick={() => setActive(!active)}
                className="text-2xl py-3 border-b border-slate-400"
              >
                Portfolios
              </li>
            </a>
          </ul>
        </div>
      </div>

      <header className="hidden lg:w-24 lg:h-screen lg:fixed lg:flex lg:flex-col lg:justify-between bg-navBg">
        <div className="logoSide w-full h-24 flex justify-center align-middle">
          {/* <Image src={logo} alt="shahmar" className="p-2 w-full h-full" /> */}
          <Image src={logo1} alt="shahmar" className="p-2 w-full h-full" />
        </div>
        <ul className="navIcons w-full flex flex-col justify-center items-center">
          <a
            href="/#hero"
            className="relative text-2xl pb-4 pt-4 w-full flex justify-center cursor-pointer hover:bg-slate-100 duration-300"
          >
            <li>
              {" "}
              <AiOutlineHome style={iconStyle} /> <span>Home</span>
            </li>
          </a>
          <a
            href="/#about"
            className="relative text-2xl pb-4 pt-4 w-full flex justify-center cursor-pointer hover:bg-slate-100 duration-300"
          >
            <li>
              {" "}
              <TfiUser style={iconStyle} /> <span>About</span>
            </li>
          </a>
          <a
            href="/#resume"
            className="relative text-2xl pb-4 pt-4 w-full flex justify-center cursor-pointer hover:bg-slate-100 duration-300"
          >
            <li>
              {" "}
              <BsLayoutTextSidebarReverse style={iconStyle} />{" "}
              <span>Resume</span>
            </li>
          </a>
          <a
            href="/#services"
            className="relative text-2xl pb-4 pt-4 w-full flex justify-center cursor-pointer hover:bg-slate-100 duration-300"
          >
            <li>
              {" "}
              <BsCodeSlash style={iconStyle} /> <span>Services</span>
            </li>
          </a>
          <a
            href="/#skills"
            className="relative text-2xl pb-4 pt-4 w-full flex justify-center cursor-pointer hover:bg-slate-100 duration-300"
          >
            <li>
              {" "}
              <GiSkills style={iconStyle} /> <span>Skills</span>
            </li>
          </a>
          <a
            href="/#projects"
            className="relative text-2xl pb-4 pt-4 w-full flex justify-center cursor-pointer hover:bg-slate-100 duration-300"
          >
            <li>
              {" "}
              <RiAppsLine style={iconStyle} /> <span>Portfolios</span>
            </li>
          </a>
        </ul>
        <div className="email"></div>
      </header>
    </>
  );
}
