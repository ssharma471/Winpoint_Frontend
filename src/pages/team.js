import React from 'react';
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from 'styled-components';
import Footer from './footer';
import styles from './TeamPage.module.css';  // Importing CSS Module
import { useEffect } from "react";

const people = [
  {
    name: "Sidhant Sharma",
    role: "Founder / CEO",
    imageUrl: "/sidhant1.jpg",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
  // {
  //   name: "John Doe",
  //   role: "Programming Guru",
  //   imageUrl: "/john.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   instagram: "#",
  // },
  // {
  //   name: "Jane Smith",
  //   role: "Creative Leader",
  //   imageUrl: "/jane.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   instagram: "#",
  // },
];

export default function Team() {

    useEffect(() => {
      // Clear any previous Crisp state
      delete window.$crisp;
      delete window.CRISP_WEBSITE_ID;
  
      // Set new session variables
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "1f81339b-985b-4879-ae59-3a8cc192df7b";
  
      // Inject Crisp script only if not already present
      if (!document.querySelector("script[data-crisp]")) {
        const script = document.createElement("script");
        script.src = "https://client.crisp.chat/l.js";
        script.async = true;
        script.setAttribute("data-crisp", "true");
  
        script.onload = () => {
          // Wait until crisp is ready before resetting
          const interval = setInterval(() => {
            if (window.$crisp && window.$crisp.push) {
              window.$crisp.push(["do", "session:reset"]); // This will clear the chat history
              // Optional: Open the chat automatically
              // window.$crisp.push(["do", "chat:open"]);
              clearInterval(interval);
            }
          }, 10);
        };
  
        document.head.appendChild(script);
      } else {
        // Script already there? Still reset.
        window.$crisp.push(["do", "reset"]);
      }
    }, []);
  return (
    <div className={styles.bodyBackground}>
      <Navbar />
      <div className="relative flex flex-col items-center text-center py-24 px-6 bg-gradient-to-r from-gray-800 to-blue-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Meet Our {" "}
          <span className="text-yellow-400">Visionary Team</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl"
        >
          Dedicated to innovation, growth, and technological excellence.
          </motion.p>
      </div>


      

      <div className={styles.teamContainer}>
        {people.map((person, index) => (
          <motion.div 
            key={index} 
            className={styles.teamCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 * index }}
          >
            <img src={person.imageUrl} alt={person.name} className={styles.teamImage} />
            <h3>{person.name}</h3>
            <p className={styles.role}>{person.role}</p>
            <div className={styles.socialIcons}>
              <a href={person.linkedin}><FaLinkedin /></a>
              <a href={person.twitter}><FaTwitter /></a>
              <a href={person.instagram}><FaInstagram /></a>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
