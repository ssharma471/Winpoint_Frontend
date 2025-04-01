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

// const navigation = [
//   { name: 'Dashboard', href: '/', current: true },
//   { name: 'Team', href: 'team', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'About Us', href: 'about', current: false },
// //   { name: 'Dashboard', href: '#', current: true },

// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               {/* <img
//                 alt="Your Company"
//                 src="/ss.png"
//                 className="h-8 w-auto"
//               /> */}
//               <h2 style={{color:"white", marginRight:"100px"}}>Winpoint Digital</h2>
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="size-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="/avatar.jpg"
//                     className="size-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//               >
//                 <MenuItem>
//                   <a
//                     href="profile"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                   >
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                   >
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
//                   >
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }














import { useRouter } from "next/router";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Investors", href: "/investors" },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contactus" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ profileImage }) {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-10 shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <a href="/" className="text-white font-bold text-2xl">
                    Winpoint Digital
                  </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      const isActive = router.pathname === item.href;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium transition duration-300"
                          )}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Profile & Notifications */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Notification Bell
                <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white">
                  <BellIcon className="h-6 w-6" />
                </button> */}

                {/* Profile Dropdown
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white">
                      <img
                        src={profileImage || "/avatar.jpg"}
                        alt="Profile"
                        className="h-8 w-8 rounded-full border-2 border-white shadow-md"
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/profile"
                          className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/settings"
                          className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/logout"
                          className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu> */}
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
