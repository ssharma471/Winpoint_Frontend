"use client";

// import Navbar from "./navbar"

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 alt=""
//                 src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">
//               Log in <span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </nav>
//         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt=""
//                   src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header>

//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//             <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//               Announcing our next round of funding.{' '}
//               <a href="#" className="font-semibold text-indigo-600">
//                 <span aria-hidden="true" className="absolute inset-0" />
//                 Read more <span aria-hidden="true">&rarr;</span>
//               </a>
//             </div>
//           </div>
//           <div className="text-center">
//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
//               Data to enrich your online business
//             </h1>
//             <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//               Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//               fugiat veniam occaecat.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Get started
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//             className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import Navbar from "./navbar";
import { motion } from "framer-motion";

const links = [
  { name: "Open roles", href: "/careers" },
  { name: "Internship program", href: "/internships" },
  { name: "Our values", href: "/values" },
  { name: "Meet our leadership", href: "/leadership" },
];

const stats = [
  { name: "StartUp Venture", value: "Winpont Digital" },
  { name: "Full-time Colleagues", value: "Growing Team" },
  { name: "Hours per Week", value: "Flexible" },
  { name: "Paid Time Off", value: "Generous" },
];

export default function WorkWithUs() {
  return (
    <div className="relative min-h-screen text-white">
    {/* Navbar */}
    <Navbar />
    <br /><br /><br /><br />
  
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      <img
        src="/about2.jpg"
        alt="Background"
        className="h-full w-full object-cover"
      />
    </div>
  
    {/* Dark Overlay for Better Readability */}
    <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Work With Us
          </h2>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl/8">
            Join a team that values innovation, creativity, and excellence. We
            are just launching our venture and looking for passionate individuals to grow with us.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-lg font-semibold text-orange-500 sm:grid-cols-2 md:flex lg:gap-x-10">
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
              className="flex flex-col-reverse gap-1 transition transform"
            >
              <dt className="text-lg text-gray-300">{stat.name}</dt>
              <dd className="text-4xl font-bold text-indigo-400">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
