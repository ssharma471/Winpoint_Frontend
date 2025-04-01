import Navbar from "./navbar";
import { motion } from "framer-motion";
import { ChartBarIcon, CurrencyDollarIcon, BriefcaseIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

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
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      <Navbar />
      <br /><br /><br /><br />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img src="/investor-bg.jpg" alt="Investor Background" className="h-full w-full object-cover brightness-50" />
      </div>

      {/* Hero Section */}
      <div className="text-center py-20 px-6 sm:py-28">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Invest in the Future with <span className="text-indigo-400">Winpoint Digital</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }} 
          className="mt-6 text-lg max-w-3xl mx-auto text-gray-300"
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
        <h2 className="text-3xl font-bold text-center sm:text-4xl text-white">Why Invest with Us?</h2>
        <p className="mt-4 text-lg text-center text-gray-300">Explore exciting investment opportunities with Winpoint Digital.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {opportunities.map((opportunity, index) => (
            <motion.div 
              key={opportunity.title} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: index * 0.3 }} 
              className="p-6 bg-gray-800 rounded-lg flex items-center space-x-4 shadow-lg"
            >
              <opportunity.icon className="h-12 w-12 text-indigo-400" />
              <div>
                <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                <p className="mt-2 text-gray-300">{opportunity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-indigo-600 py-16 text-center text-white">
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
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Winpoint Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}
