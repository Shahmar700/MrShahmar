"use client"; // this is a client component

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Resume from "../../components/Resume";
import Services from "../../components/Services";
import Skills from "../../components/Skills";
import Portfolios from "../../components/Portfolios";
import { Triangle } from "react-loader-spinner";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div
      id="BG"
      className="overflow-x-hidden h-screen snap-y snap-mandatory overflow-scroll z-0"
    >
      {loading ? (
        <Triangle
          height="150"
          width="150"
          color="#30cdf3"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          visible={true}
        />
      ) : (
        <div>
          {/* Header  */}
          <Header />

          {/* Hero  */}
          <section id="hero">
            <Hero />
          </section>

          {/* About  */}
          <section id="about">
            <About />
          </section>

          {/* Resume  */}

          <section id="resume">
            <Resume />
          </section>

          {/* Services  */}

          <section id="services">
            <Services />
          </section>

          {/* Skills  */}
          <section id="skills">
            <Skills />
          </section>

          {/* Portfolios */}
          <section id="projects">
            <Portfolios />
          </section>
        </div>
      )}
    </div>
  );
}
