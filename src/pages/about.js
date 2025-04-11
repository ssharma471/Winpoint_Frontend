"use client";
import { useEffect } from "react";

import Footer from "./footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";

const links = [
  { name: "Open roles", href: "/careers" },
  { name: "Internship program", href: "/internships" },
  { name: "Our values", href: "/values" },
  { name: "Meet our leadership", href: "/leadership" },
];

const stats = [
  { name: "StartUp Venture", value: "Winpoint Digital" },
  { name: "Full-time Colleagues", value: "Growing Team" },
  { name: "Hours per Week", value: "Flexible" },
  { name: "Paid Time Off", value: "Generous" },
];

export default function WorkWithUs() {
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
    <div className="relative min-h-screen text-white bg-gradient-to-br from-gray-800 to-blue-900">
      {/* Navbar */}
      <Navbar />
      <br /><br /><br /><br />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-6xl font-extrabold tracking-tight sm:text-7xl text-white mb-6">
            About Winpoint Digital
          </h2>
          <p className="text-lg text-gray-300 sm:text-xl mb-8">
            Winpoint Digital is a forward-thinking digital solutions company committed to empowering businesses with cutting-edge technology. 
            From web development and AI-driven marketing to branding and digital strategy, 
            we help startups and established companies enhance their digital presence, streamline processes, and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-orange-400">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                className="transition hover:text-white"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center transition transform hover:scale-105"
            >
              <dd className="text-4xl font-bold text-indigo-300 mb-2">
                {stat.value}
              </dd>
              <dt className="text-lg text-gray-400">{stat.name}</dt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
