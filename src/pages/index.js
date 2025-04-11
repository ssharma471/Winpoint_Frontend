// import { useEffect, useState } from "react";
// import { fetchData } from "../utils/api";

// export default function Home() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetchData().then(setData);
//     }, []);

//     return (
//         <div>
//             <h1>Winpoint Digital</h1>
//             <p>{data ? data.message : "Loading..."}</p>
//         </div>
//     );
// }
// import { useState } from "react";

// import Link from "next/link";
// export default function Home() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="font-sans">
//         {/* Navbar */}
//         <nav className="bg-black text-white p-5 shadow-md fixed w-full top-0 z-10">
//             <div className="container mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <img src="/ss.png" alt="Logo" className="h-20 w-auto" />
//                 <h1 className="text-2xl font-bold">Winpoint Digital</h1>

//                 {/* Hamburger Button - Visible on Small Screens */}
//                 <button
//                     className="md:hidden text-white text-3xl focus:outline-none"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     {isOpen ? "✖" : "☰"}
//                 </button>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex space-x-6 text-lg">
//                     <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
//                     <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
//                     <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
//                     <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
//                 </ul>
//             </div>

//             {/* Mobile Menu (Dropdown) */}
//             {isOpen && (
//                 <ul className="md:hidden flex flex-col items-center bg-black py-4 space-y-4">
//                     <li><Link href="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
//                     <li><Link href="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
//                     <li><Link href="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link></li>
//                     <li><Link href="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
//                 </ul>
//             )}
//         </nav>

//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 text-center mt-16">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-5xl font-bold">Empowering Businesses with Digital Solutions</h2>
//                 <p className="text-xl mt-4 opacity-90">We build modern, scalable, and high-performance web applications.</p>
//                 <Link href="/contact">
//                     <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 shadow-lg">
//                         Get Started
//                     </button>
//                 </Link>
//             </div>
//         </section>

//             {/* Features Section */}
//             <section className="py-16 bg-gray-100">
//                 <div className="container mx-auto text-center">
//                     <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
//                     <div className="flex flex-wrap justify-center mt-8 gap-6">
//                         <div className="w-80 p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition">
//                             <h3 className="text-xl font-semibold">Custom Development</h3>
//                             <p className="text-gray-600 mt-2">Tailored solutions to fit your business needs.</p>
//                         </div>
//                         <div className="w-80 p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition">
//                             <h3 className="text-xl font-semibold">SEO Optimization</h3>
//                             <p className="text-gray-600 mt-2">Improve rankings and drive organic traffic.</p>
//                         </div>
//                         <div className="w-80 p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition">
//                             <h3 className="text-xl font-semibold">Scalable Solutions</h3>
//                             <p className="text-gray-600 mt-2">Built to grow as your business expands.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="bg-gray-200 py-16 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
//                 <div className="flex flex-wrap justify-center gap-6 mt-8">
//                     <div className="w-80 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
//                         <h3 className="text-xl font-semibold">Web Development</h3>
//                         <p className="text-gray-600 mt-2">From landing pages to complex web apps.</p>
//                     </div>
//                     <div className="w-80 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
//                         <h3 className="text-xl font-semibold">E-Commerce Solutions</h3>
//                         <p className="text-gray-600 mt-2">Create a seamless shopping experience.</p>
//                     </div>
//                     <div className="w-80 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition">
//                         <h3 className="text-xl font-semibold">UI/UX Design</h3>
//                         <p className="text-gray-600 mt-2">Enhancing user experiences with stunning interfaces.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Testimonials Section */}
//             <section className="py-16 text-center bg-white">
//                 <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
//                 <div className="flex flex-wrap justify-center gap-6 mt-8">
//                     <div className="w-96 p-6 bg-gray-50 shadow-lg rounded-lg">
//                         <p className="text-gray-600 italic">"Winpoint Digital helped us scale our business with an amazing web solution!"</p>
//                         <h4 className="text-lg font-semibold mt-2">- John Doe, CEO</h4>
//                     </div>
//                     <div className="w-96 p-6 bg-gray-50 shadow-lg rounded-lg">
//                         <p className="text-gray-600 italic">"The best digital partner for startups and enterprises alike!"</p>
//                         <h4 className="text-lg font-semibold mt-2">- Sarah Lee, Marketing Head</h4>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section className="bg-blue-700 text-white py-16 text-center">
//                 <h2 className="text-4xl font-bold">Ready to Work With Us?</h2>
//                 <p className="mt-4 text-lg">Let's build something great together.</p>
//                 <Link href="/contact">
//                     <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-200 shadow-md">
//                         Contact Us
//                     </button>
//                 </Link>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-white text-center p-5 mt-8">
//                 <p>© {new Date().getFullYear()} Winpoint Digital. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// }



// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import Navbar from "./navbar"
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <div>
//     <Navbar></Navbar>
    


//     </div>
   
//   )
// }




// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
// import Navbar from "./navbar";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar /> {/* Navbar Component */}

//       {/* Hero Section */}
//       <div className="relative flex flex-col items-center text-center py-20 px-6 sm:py-28">
//         <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
//           Welcome to <span className="text-indigo-600">Winpoint Digital</span>
//         </h1>
//         <p className="mt-6 text-lg text-gray-700 max-w-3xl">
//           We provide cutting-edge digital solutions to scale your business. From seamless cloud deployment to security and data management, we ensure high-quality service tailored to your needs.
//         </p>
//         <div className="mt-8 flex flex-wrap justify-center gap-4">
//           <a href="#" className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500">
//             Get Started
//           </a>
//           <a href="#" className="px-6 py-3 text-lg font-semibold text-indigo-600 border border-indigo-600 rounded-md shadow-md hover:bg-indigo-100">
//             Learn More
//           </a>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Section: Text */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Winpoint Digital?</h2>
//             <p className="mt-4 text-lg text-gray-700">
//               Our services ensure speed, security, and scalability for your digital projects.
//             </p>
//             <ul className="mt-6 space-y-6 text-gray-600">
//               <li className="flex items-start gap-3">
//                 <CloudArrowUpIcon className="h-6 w-6 text-indigo-600" />
//                 <span><strong className="text-gray-900">Push to Deploy</strong> – Automate your workflow with seamless deployment.</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <LockClosedIcon className="h-6 w-6 text-indigo-600" />
//                 <span><strong className="text-gray-900">SSL Certificates</strong> – Ensure secure connections with end-to-end encryption.</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <ServerIcon className="h-6 w-6 text-indigo-600" />
//                 <span><strong className="text-gray-900">Database Backups</strong> – Keep your data safe with regular automated backups.</span>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section: Image */}
//           <div className="flex justify-center">
//             <img
//               src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
//               alt="Winpoint Digital Dashboard"
//               className="w-full max-w-lg rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-6 text-center">
//         <p className="text-sm">
//           &copy; {new Date().getFullYear()} Winpoint Digital. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }








// import { motion } from "framer-motion";
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
// import Navbar from "./navbar";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar /> {/* Navbar Component */}

//       {/* Hero Section */}
//       <div className="relative flex flex-col items-center text-center py-20 px-6 sm:py-28">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
//         >
//           Welcome to <span className="text-indigo-600">Winpoint Digital</span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="mt-6 text-lg text-gray-700 max-w-3xl"
//         >
//           We provide cutting-edge digital solutions to scale your business. From seamless cloud deployment to security and data management, we ensure high-quality service tailored to your needs.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-8 flex flex-wrap justify-center gap-4"
//         >
//           <a href="#" className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500">
//             Get Started
//           </a>
//           <a href="#" className="px-6 py-3 text-lg font-semibold text-indigo-600 border border-indigo-600 rounded-md shadow-md hover:bg-indigo-100">
//             Learn More
//           </a>
//         </motion.div>
//       </div>

    //   {/* Services Section */}
    //   <div className="mx-auto max-w-7xl px-6 py-20">
    //     <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl">Our Services</h2>
    //     <p className="mt-4 text-lg text-gray-700 text-center">Discover the solutions we provide to scale your business.</p>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
    //       {[
    //         {
    //           title: "Cloud Deployment",
    //           description: "Deploy applications seamlessly in the cloud with automation.",
    //           icon: CloudArrowUpIcon,
    //         },
    //         {
    //           title: "Cybersecurity Solutions",
    //           description: "Protect your digital assets with cutting-edge security.",
    //           icon: LockClosedIcon,
    //         },
    //         {
    //           title: "Database Management",
    //           description: "Reliable and scalable database solutions for your business.",
    //           icon: ServerIcon,
    //         },
    //       ].map((service, index) => (
    //         <motion.div
    //           key={service.title}
    //           initial={{ opacity: 0, y: 50 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.8, delay: index * 0.3 }}
    //           className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
    //         >
    //           <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
    //           <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
    //           <p className="mt-2 text-gray-600">{service.description}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>

//       {/* Testimonials Section */}
//       <div className="bg-gray-900 py-20">
//         <h2 className="text-3xl font-bold text-white text-center">What Our Clients Say</h2>
//         <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
//           {[
//             {
//               name: "John Doe",
//               feedback: "Winpoint Digital transformed our business with their exceptional services. Highly recommend!",
//               image: "https://randomuser.me/api/portraits/men/32.jpg",
//             },
//             {
//               name: "Jane Smith",
//               feedback: "Their security solutions helped us avoid major data breaches. A game-changer!",
//               image: "https://randomuser.me/api/portraits/women/44.jpg",
//             },
//           ].map((client, index) => (
//             <motion.div
//               key={client.name}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//               className="p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6"
//             >
//               <img src={client.image} alt={client.name} className="h-16 w-16 rounded-full shadow-md" />
//               <div>
//                 <h4 className="text-lg font-semibold text-gray-900">{client.name}</h4>
//                 <p className="text-gray-600 mt-2">{client.feedback}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Call-to-Action Section */}
//       <div className="bg-indigo-600 py-16 text-center text-white">
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl font-bold"
//         >
//           Ready to Grow Your Business?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mt-4 text-lg"
//         >
//           Partner with Winpoint Digital and take your digital strategy to the next level.
//         </motion.p>
//         <motion.a
//           href="#"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-md shadow-md hover:bg-gray-200"
//         >
//           Get Started Today
//         </motion.a>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-6 text-center">
//         <p className="text-sm">&copy; {new Date().getFullYear()} Winpoint Digital. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }









import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  CodeBracketSquareIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import Navbar from "./navbar";
import Companies from "./companies";
import Footer from "./footer";

export default function Home() {
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
    
    <div className="bg-gray-50 min-h-screen">
      
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center text-center py-20 px-6 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Welcome to <span className="text-indigo-600">Winpoint Digital</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg text-gray-700 max-w-3xl"
        >
          We provide cutting-edge digital solutions to scale your business. From seamless cloud deployment to security and data management, we ensure high-quality service tailored to your needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#"
            className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-500 transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-6 py-3 text-lg font-semibold text-indigo-600 border border-indigo-600 rounded-md shadow-md hover:bg-indigo-100 transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
        <div className="mt-12 px-6">
  {/* Grid for Images */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
      "/7.jpg",
      "/8.jpg",
    ].map((image, index) => (
      <motion.img
        key={index}
        src={image}
        alt="Digital Solutions"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        className="w-full h-48 object-cover rounded-lg shadow-md"
      />
    ))}
  </div>
</div>
</div>

      {/* Services Section
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl">Our Services</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">Discover the solutions we provide to scale your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { title: "Cloud Deployment", description: "Deploy apps seamlessly in the cloud with automation.", icon: CloudArrowUpIcon },
            { title: "Cybersecurity", description: "Protect your digital assets with cutting-edge security.", icon: LockClosedIcon },
            { title: "Database Management", description: "Reliable and scalable database solutions.", icon: ServerIcon },
            { title: "Web Development", description: "Building high-performance, modern websites.", icon: CodeBracketSquareIcon },
            { title: "SEO & Marketing", description: "Boost online presence & drive traffic.", icon: ChartBarIcon },
            { title: "Compliance & Security", description: "Ensure compliance with secure solutions.", icon: ShieldCheckIcon },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div> */}



       {/* Services Section */}
       <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl">Our Services</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">Discover the solutions we provide to scale your business.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Cloud Deployment",
              description: "Deploy applications seamlessly in the cloud with automation.",
              icon: CloudArrowUpIcon,
            },
            {
              title: "Cybersecurity Solutions",
              description: "Protect your digital assets with cutting-edge security.",
              icon: LockClosedIcon,
            },
            {
              title: "Database Management",
              description: "Reliable and scalable database solutions for your business.",
              icon: ServerIcon,
            },
            { title: "Web Development", description: "Building high-performance, modern websites.", icon: CodeBracketSquareIcon },
            { title: "SEO & Marketing", description: "Boost online presence & drive traffic.", icon: ChartBarIcon },
            { title: "Compliance & Security", description: "Ensure compliance with secure solutions.", icon: ShieldCheckIcon },
      
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section
      <div className="bg-gray-900 py-20">
        <h2 className="text-3xl font-bold text-white text-center">What Our Clients Say</h2>
        <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {[
            { name: "John Doe", feedback: "Winpoint Digital transformed our business. Highly recommend!", image: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Jane Smith", feedback: "Their security solutions helped us avoid major data breaches.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
          ].map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6 hover:shadow-2xl transform transition-transform hover:scale-105"
            >
              <img src={client.image} alt={client.name} className="h-16 w-16 rounded-full shadow-md" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{client.name}</h4>
                <p className="text-gray-600 mt-2">{client.feedback}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
      <Companies></Companies>

      {/* Testimonials Section */}
       <div className="bg-gray-900 py-20">
         <h2 className="text-3xl font-bold text-white text-center">What Our Clients Say</h2>
         <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
           {[
             {
               name: "John Doe",
               feedback: "Winpoint Digital transformed our business with their exceptional services. Highly recommend!",
               image: "https://randomuser.me/api/portraits/men/32.jpg",
             },
             {
               name: "Jane Smith",
               feedback: "Their security solutions helped us avoid major data breaches. A game-changer!",
               image: "https://randomuser.me/api/portraits/women/44.jpg",
             },
           ].map((client, index) => (
             <motion.div
               key={client.name}
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: index * 0.3 }}
               className="p-6 bg-white shadow-lg rounded-lg flex items-center space-x-6"
             >
               <img src={client.image} alt={client.name} className="h-16 w-16 rounded-full shadow-md" />
               <div>
                 <h4 className="text-lg font-semibold text-gray-900">{client.name}</h4>
                 <p className="text-gray-600 mt-2">{client.feedback}</p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>

      {/* Call-to-Action Section */}
      <div className="bg-indigo-600 py-16 text-center text-white">
        <motion.h2 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="text-3xl font-bold">
          Ready to Grow Your Business?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-4 text-lg">
          Partner with Winpoint Digital and take your digital strategy to the next level.
        </motion.p>
        <motion.a href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-md shadow-md hover:bg-gray-200 transform transition-transform hover:scale-105">
          Get Started Today
        </motion.a>
      </div>

<Footer></Footer>    </div>
  );
}
