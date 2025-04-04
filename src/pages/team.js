import React from 'react';
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from 'styled-components';
import Footer from './footer';
import styles from './TeamPage.module.css';  // Importing CSS Module

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
