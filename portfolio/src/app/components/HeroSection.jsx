"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-2 text-4xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-100 to-cyan-500">
              Hello, I&apos;m{" Maite"}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a web developer and designer, my career in the world of images is wide,
            although for a few years I have been passionate about the virtual world.
            Currently I would like to develop virtual spaces, web pages, optimize computers programs...
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-cyan-100 to-cyan-400 hover:bg-cyan-800 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://cv-alalluna.surge.sh/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 hover:bg-cyan-800 text-white mt-3"
            >
              <span className="block bg-cyan-950 hover:bg-cyan-800 rounded-full px-5 py-2">
                Curriculum
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/hero-image-2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
