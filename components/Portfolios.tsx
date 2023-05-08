"use client"; // this is a client component
import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOpenInBrowser } from "react-icons/md";

type Props = {};

function Portfolios({}: Props) {
  const iconStyle = { color: "white", fontSize: "1.5em" };

  const projects = [
    {
      id: 1,
      name: "SportsBox",
      about:
        "I used HTML, CSS and JS technologies in this project. The project is of a simple advertising nature, business schedules, social network accounts and contact numbers are listed.",
      img: "./images/SportsboxMockup.jpg",
      programs: "HTML CSS Javascript",
      url: "https://sportsbox.az/",
      github: "https://github.com/Shahmar700/sportsboxaz",
    },
    {
      id: 2,
      name: "Metacomp",
      about:
        "My first (React) e-commerce web-site. On this site you can find all computer parts.",
      img: "./images/MetacompMockup.jpg",
      programs: "React, Api",
      url: "https://shahmar700.github.io/Metacomp/",
      github: "https://github.com/Shahmar700/Metacomp",
    },
    {
      id: 3,
      name: "4D Dual Tvet",
      about:
        "This is an educational website. I have used Html, Css and Javascript programs. I have also designed it in a responsive design for all devices.",
      img: "./images/DualvetMockup.jpg",
      programs: "HTML CSS Javascipt",
      url: "http://dualvet.az/",
      github: "https://github.com/Shahmar700/4DDualTvetAzerbaijan",
    },
    {
      id: 4,
      name: "Prosofly",
      about:
        "Html, Css and Javascript were used in the assembly of the project. It is also designed in a responsive design.",
      img: "./images/ProsoflyMockup.jpg",
      programs: "HTML CSS Javascipt",
      url: "https://prosofly.com/",
      github: "https://github.com/Shahmar700/CodersLab",
    },
    {
      id: 5,
      name: "TTCP",
      about:
        "This platform is a Technology Transfer and Science Commercialization Platform.",
      img: "./images/TtcpMockup.jpg",
      programs: "HTML CSS Javascipt",
      url: "https://www.ttcp.az/",
      github: "https://github.com/Shahmar700/ttcp",
    },
    {
      id: 6,
      name: "ETNS 100il",
      about:
        "This is just the ETNS pilot project. The main functionality is on the SVG map. Information on regions is reflected.",
      img: "./images/EtnsMockup.jpg",
      programs: "HTML CSS Javascipt",
      url: "https://shahmar700.github.io/etsnpilot/",
      github: "https://github.com/Shahmar700/etsnpilot",
    },
    {
      id: 7,
      name: "Mole Game",
      about: "Just enjoy the game :)",
      img: "./images/MolegameMockup.jpg",
      programs: "HTML CSS Javascipt",
      url: "https://shahmar700.github.io/MoleGame/",
      github: "https://github.com/Shahmar700/MoleGame",
    },
  ];

  return (
    <div className="h-fit flex flex-col items-center relative max-w-7xl mx-auto my-20 md:my-0">
      <div className="flex items-center">
        <span className="text-3xl text-white mr-3">Featured </span>
        <h1 id="abouth1" className="text-3xl tracking-wider">
          Projects
        </h1>
      </div>
      <div className="w-0.95 500px:w-3/4 mx-auto mt-0 lg:mt-7">
        {projects.map((project, id) => (
          <div
            id="oneProject"
            key={id}
            className="w-full rounded-md overflow-hidden mt-20 relative"
          >
            <div className="imgDiv group w-full h-64 md:h-72 lg:h-410px relative">
              <img
                className="w-full h-full object-cover duration-500 group-hover:scale-105 group-hover:blur-sm"
                src={project.img}
                alt=""
              />
              <div
                id="siteName"
                className="absolute py-1 md:py-4 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full text-center bg-black bg-opacity-30 text-white text-xl lg:text-2xl duration-500 group-hover:left-full group-hover:opacity-0 group-hover:invisible"
              >
                {project.name}
              </div>
              <div className="absolute w-full h-full left-0 -bottom-full opacity-0 duration-500 delay-200 invisible bg-gradient-to-r from-yellow-500 via-orange-500 via-30% to-purple-600 to-90% group-hover:bottom-0 group-hover:visible group-hover:opacity-75 flex justify-center items-center text-white text-lg px-10 text-center flex-col">
                <p>{project.about}</p>
                <div className="mt-5 flex items-center">
                  <a className="mr-5" target="_blank" href={project.url}>
                    <MdOpenInBrowser size={35} />
                  </a>
                  <a href={project.github} target="_blank">
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-28"></div>
    </div>
  );
}

export default Portfolios;
