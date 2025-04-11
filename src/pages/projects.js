"use client";

import Footer from "./footer";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    name: "Metropolitan Museum of Art",
    description: "A Web API using Express.js and Node.js for robust data management, coupled with a dynamic front-end powered by Next.js.",
    imageUrl: "/Metro.png",
    detailsUrl: "https://github.com/ssharma471/Metropolitan_Art_Museum"
  },
  {
    name: "Ticket Kart",
    description: "A comprehensive ticketing platform enabling event management, ticket sales, and seating selections.",
    imageUrl: "https://images.unsplash.com/photo-1635070636690-d887c1a77e7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
    detailsUrl: "https://github.com/ssharma471/TicketMaster"
  },
  {
    name: "Jessica Cake",
    description: "An e-commerce platform designed for seamless product listings and efficient order management.",
    imageUrl: "/Cake.png",
    detailsUrl: "https://github.com/ssharma471/Jessica_Cake"
  },
  {
    name: "Bar Goa",
    description: "A responsive website for restaurant management, featuring menu management and table reservations.",
    imageUrl: "/BarGoa.png",
    detailsUrl: "https://github.com/ssharma471/Bar_Goa",
    liveDemo: "https://ssharma471.github.io/Bar_Goa/"
  },
  {
    name: "Portfolio",
    description: "A personal portfolio showcasing a responsive UI with React and advanced CSS styling techniques.",
    imageUrl: "/Portfolio1.png",
    detailsUrl: "https://github.com/ssharma471/Portfolio",
    vercelLink: "https://portfolio-self-zeta-85.vercel.app/"
  },
  {
    name: "Ardent Coders",
    description: "An ongoing project building a resource website for developers focusing on tutorials and collaborative learning.",
    imageUrl: "https://images.unsplash.com/photo-1565687981296-535f09db714e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXJzJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    detailsUrl: "#", // Placeholder if you have a specific link for this ongoing project
  }
];

export default function Projects() {
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
    <div className="relative min-h-screen bg-gray-100 text-gray-900">
        <br></br>        <br></br>
        <br></br>        <br></br>


      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight">Technical Projects</h1>
        </div>
      </header>

      <main className="mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={project.imageUrl}
                  alt={`${project.name}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <a
                    href={project.detailsUrl}
                    className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 transition duration-300"
                  >
                    View on GitHub &rarr;
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="mt-2 inline-block text-green-600 hover:text-green-800 transition duration-300"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.vercelLink && (
                    <a
                      href={project.vercelLink}
                      className="mt-2 inline-block text-blue-600 hover:text-blue-800 transition duration-300"
                    >
                      View on Vercel &rarr;
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
