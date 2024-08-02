"use client";
import React, { useState, useRef, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  useEffect(() => {
    const formElement = form.current;

    const sendEmail = (event) => {
      event.preventDefault();

      const btn = document.getElementById("button");
      btn.value = "Sending...";

      const serviceID = "default_service";
      const templateID = "template_znoda9g";
      const userID = "cQDtsn8a0icOW08HE"; // Reemplaza con tu Public Key

      emailjs
        .sendForm(serviceID, templateID, formElement, userID)
        .then(
          () => {
            btn.value = "Send Email";
            setEmailSubmitted(true);
            formElement.reset();
            alert("Sent!");
          },
          (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
          }
        );
    };

    formElement.addEventListener("submit", sendEmail);

    return () => {
      formElement.removeEventListener("submit", sendEmail);
    };
  }, []);

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 pt-20 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/alalluna">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/alalluna/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-800 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" id="form" ref={form}>
            <div className="mb-6 field">
              <label
                htmlFor="to_name"
                className="text-white block mb-2 text-sm font-medium"
              >
                To name
              </label>
              <input
                name="to_name"
                type="text"
                id="to_name"
                required
                className="bg-gray-800 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Recipient's name"
              />
            </div>
            <div className="mb-6 field">
              <label
                htmlFor="from_name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                name="from_name"
                type="text"
                id="from_name"
                required
                className="bg-gray-800 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-800 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="youremail@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-gray-800 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <input
              type="submit"
              id="button"
              value="Send Email"
              className="bg-cyan-600 hover:bg-cyan-400 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            />
          </form>
        )}
      </div>
    </section>
  )
}
export default EmailSection;

