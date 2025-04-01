import { motion } from "framer-motion";
import Navbar from "./navbar";
import { BriefcaseIcon, GlobeAltIcon, ChartBarIcon, ShieldCheckIcon, ServerIcon, CodeBracketSquareIcon } from "@heroicons/react/24/solid";

export default function Industries() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center py-24 px-6 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Transforming Industries with{" "}
          <span className="text-yellow-400">Winpoint Digital</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-gray-300 max-w-3xl"
        >
          We empower businesses across diverse industries with cutting-edge digital solutions, helping them scale, innovate, and lead in the digital age.
        </motion.p>
      </div>

      {/* Industries Section */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center sm:text-5xl">
          Industries We Serve
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Our expertise spans multiple sectors, delivering tailored digital solutions that drive success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Finance & Banking",
              description: "Secure and scalable fintech solutions for modern banking.",
              icon: ChartBarIcon,

              image: "/industries/finance.jpg",
            image: "https://randomuser.me/api/portraits/women/44.jpg",

            },
            {
              title: "Healthcare",
              description: "Innovative healthcare tech solutions for a connected world.",
              icon: ShieldCheckIcon,
              image: "/industries/healthcare.jpg",
            //   image:"https://loremflickr.com/health/200?random=0",

            },
            {
              title: "Retail & E-commerce",
              description: "Seamless e-commerce experiences and retail digital transformation.",
              icon: ServerIcon,
              image: "/industries/retail.jpg",
            },
            {
              title: "Education & E-learning",
              description: "Interactive and scalable digital learning platforms.",
              icon: CodeBracketSquareIcon,
              image: "/industries/education.jpg",
            },
            {
              title: "Logistics & Transportation",
              description: "Optimized supply chain management with AI-driven insights.",
              icon: GlobeAltIcon,
              image: "/industries/logistics.jpg",
            },
            {
              title: "Government & Public Sector",
              description: "Secure, scalable, and accessible government digital solutions.",
              icon: BriefcaseIcon,
              image: "/industries/government.jpg",
            },
          ].map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <industry.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
              <p className="mt-2 text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Growth Section */}
      <div className="bg-gray-900 py-20 text-white">
        <h2 className="text-4xl font-bold text-center">Driving Growth in Every Sector</h2>
        <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {[
            {
              title: "AI & Machine Learning",
              description: "We integrate AI-powered insights for industry growth and efficiency.",
              image: "/growth-ai.jpg",
            },
            {
              title: "Cloud & Automation",
              description: "Optimizing industries through cloud computing and automation.",
              image: "/growth-cloud.jpg",
            },
          ].map((growth, index) => (
            <motion.div
              key={growth.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6 hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <img src={growth.image} alt={growth.title} className="h-28 w-28 rounded-md shadow-md object-cover" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{growth.title}</h4>
                <p className="text-gray-600 mt-2">{growth.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-700 py-16 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold"
        >
          Ready to Transform Your Industry?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg"
        >
          Partner with Winpoint Digital to revolutionize your business.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-white text-blue-700 rounded-md shadow-md hover:bg-gray-200 transform transition-transform hover:scale-105"
        >
          Contact Us
        </motion.a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Winpoint Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}
