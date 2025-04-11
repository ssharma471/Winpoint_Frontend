import Navbar from "./navbar";
import { motion } from "framer-motion";
import { ChartBarIcon, CurrencyDollarIcon, BriefcaseIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Footer from "./footer";
import { useEffect } from "react";

const stats = [
  { name: "Total Investments Raised", value: "$1000+" },
  { name: "Global Investors", value: "0" },
  { name: "Annual Growth Rate", value: "33%" },
  { name: "Offices Worldwide", value: "1" },
];

const opportunities = [
  { title: "Growth Funds", description: "Invest in our expanding portfolio with high return potential.", icon: CurrencyDollarIcon },
  { title: "Strategic Partnerships", description: "Collaborate with us for long-term success.", icon: BriefcaseIcon },
  { title: "Global Expansion", description: "Be part of our journey as we scale worldwide.", icon: GlobeAltIcon },
  { title: "Tech Innovation", description: "Invest in cutting-edge technology and digital solutions.", icon: ChartBarIcon },
];

export default function Investor() {

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
    <div className="relative bg-white text-black min-h-screen">
      <Navbar />
      <div className="relative flex flex-col items-center text-center py-24 px-6 bg-gradient-to-r from-gray-800 to-blue-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Invest in the Future with {" "}
          <span className="text-yellow-400">Winpoint Digital</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl"
        >
          Partner with us to scale innovation, unlock new markets, and drive exponential growth.
          </motion.p>
      </div>


     


      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.name} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }} 
            className="p-6 bg-gray-800 rounded-lg text-center shadow-lg"
          >
            <h3 className="text-4xl font-bold text-indigo-400">{stat.value}</h3>
            <p className="text-gray-300 mt-2">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Investment Opportunities */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center sm:text-4xl text-black">Why Invest with Us?</h2>
        <p className="mt-4 text-lg text-center text-black">Explore exciting investment opportunities with Winpoint Digital.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {opportunities.map((opportunity, index) => (
            <motion.div 
              key={opportunity.title} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: index * 0.3 }} 
              className="p-6 bg-white-800 rounded-lg flex items-center space-x-4 shadow-lg"
            >
              <opportunity.icon className="h-12 w-12 text-indigo-400" />
              <div>
                <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                <p className="mt-2 text-black">{opportunity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-800 py-16 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="text-3xl font-bold"
        >
          Ready to Invest in the Future?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }} 
          className="mt-4 text-lg"
        >
          Contact us today to explore investment opportunities.
        </motion.p>
        <motion.a 
          href="/contactus" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-md shadow-md hover:bg-gray-200 transform transition-transform hover:scale-105"
        >
          Get in Touch
        </motion.a>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Winpoint Digital. All rights reserved.</p>
      </footer> */}
      <Footer></Footer>
    </div>
  );
}
