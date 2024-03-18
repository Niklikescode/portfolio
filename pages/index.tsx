
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import nik_1024 from "@nik_1024.png"

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <div className="bg-[#161a1d] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#e59500]/80 scrollbar-thin ">
      
      <Head>
        <title>Nikhil&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

     
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="fixed bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image className="h-4 w-4  sm:h-8 sm:w-8 rounded-full filter grayscale  hover:grayscale-0 cursor-pointer" 
            src="/nik_128.png" width={100} height={100} alt="logo" />
          </div>
        </footer>
      </Link>

    </div>
  );
}
