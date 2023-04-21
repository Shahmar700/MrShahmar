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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      id="BG"
      className="overflow-x-hidden h-screen snap-y snap-mandatory overflow-scroll z-0"
    >
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
  );
}
