import { motion } from "framer-motion";

export default function Companies() {
  const companies = [
    { alt: "Transistor", src: "https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" },
    { alt: "Reform", src: "https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" },
    { alt: "Tuple", src: "https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" },
    { alt: "SavvyCal", src: "https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" },
    { alt: "Statamic", src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" },
    // { alt: "Workcation", src: "https://tailwindui.com/plus-assets/img/logos/158x48/workcation-logo-gray-900.svg" },
    { alt: "Laravel", src: "https://tailwindui.com/plus-assets/img/logos/158x48/laravel-logo-gray-900.svg" },
    // { alt: "Mirage", src: "https://tailwindui.com/plus-assets/img/logos/158x48/mirage-logo-gray-900.svg" },
    // { alt: "TailwindCSS", src: "https://tailwindui.com/plus-assets/img/logos/158x48/tailwindcss-logo-gray-900.svg" },
  ];

  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-xl font-semibold text-gray-900 mb-10"
        >
          Trusted by the world’s most innovative teams
        </motion.h2>
        
        {/* Marquee Effect */}
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-10 animate-marquee">
            {companies.map((company, index) => (
              <motion.img
                key={company.alt}
                src={company.src}
                alt={company.alt}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
