import Navbar from "./navbar";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

// Team Data
const people = [
  {
    name: "Sidhant Sharma",
    role: "Founder / CEO",
    imageUrl: "/sidhant1.jpg", // Ensure this image exists in the public folder
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  // {
  //   name: "Sarah Williams",
  //   role: "Chief Technology Officer",
  //   imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   github: "#",
  // },
  // {
  //   name: "Michael Brown",
  //   role: "Head of Design",
  //   imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   github: "#",
  // },
  // {
  //   name: "Emily Davis",
  //   role: "Marketing Director",
  //   imageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   github: "#",
  // },
  // {
  //   name: "David Smith",
  //   role: "Senior Software Engineer",
  //   imageUrl: "https://randomuser.me/api/portraits/men/50.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   github: "#",
  // },
  // {
  //   name: "Olivia Taylor",
  //   role: "UX/UI Designer",
  //   imageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  //   github: "#",
  // },
];

export default function Team() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="/team-bg.jpg" // Ensure you have this image in the public folder
          alt="Team Background"
          className="h-full w-full object-cover brightness-40"
        />
      </div>

      {/* Page Header */}
      <div className="relative py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-white sm:text-7xl tracking-tight"
        >
          Meet Our <span className="text-indigo-400">Visionary Team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
        >
          A team of experts dedicated to innovation, growth, and technological excellence.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {people.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-6 text-center border border-white/20 hover:shadow-2xl transform transition-all hover:scale-105 hover:border-white/40"
            >
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-indigo-600 shadow-md"
              />
              <h3 className="mt-4 text-2xl font-bold">{person.name}</h3>
              <p className="text-indigo-400 font-medium">{person.role}</p>

              {/* Social Media Icons */}
              <div className="mt-4 flex justify-center space-x-6">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-400 hover:text-blue-500 text-3xl transition-transform transform hover:scale-125" />
                </a>
                <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-gray-400 hover:text-blue-400 text-3xl transition-transform transform hover:scale-125" />
                </a>
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-400 hover:text-gray-700 text-3xl transition-transform transform hover:scale-125" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative bg-gradient-to-r from-indigo-700 to-purple-600 py-16 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl font-extrabold"
        >
          Ready to Build the Future With Us?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }} 
          className="mt-4 text-lg"
        >
          Join our mission to revolutionize the digital space.
        </motion.p>
        <motion.a 
          href="/careers" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }} 
          className="mt-6 inline-block px-8 py-4 text-lg font-semibold bg-white text-indigo-700 rounded-lg shadow-md hover:bg-gray-200 transform transition-transform hover:scale-105"
        >
          Explore Careers
        </motion.a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Winpoint Digital. All rights reserved.</p>
      </footer>
    </div>
  );
}
