"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Switch } from "@headlessui/react";
import Navbar from "./navbar";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill out all required fields!");
      return;
    }
    alert("Form Submitted Successfully!");
  };

  return (
    <>
            <Navbar></Navbar>
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you! Fill out the form below and our team will
          get back to you.
        </p>
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              First Name *
            </label>
            <input
              name="firstName"
              type="text"
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 outline-none"
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 outline-none"
            />
          </div>
          {/* Company */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Company
            </label>
            <input
              name="company"
              type="text"
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 outline-none"
            />
          </div>
          {/* Email */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Email *
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 outline-none"
              required
            />
          </div>
          {/* Phone */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 outline-none"
            />
          </div>
          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">
              Message *
            </label>
            <textarea
              name="message"
              rows={4}
              onChange={handleChange}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 focus:border-indigo-600 focus:ring-indigo-600 outline-none"
              required
            />
          </div>
          {/* Agreement Switch */}
          <div className="flex items-center gap-x-4 sm:col-span-2">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                agreed ? "bg-indigo-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition ${
                  agreed ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </Switch>
            <span className="text-sm text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy policy
              </a>
              .
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
          >
            Let's talk
          </motion.button>
        </div>
      </form>
    </div>
    </>

  );
}
