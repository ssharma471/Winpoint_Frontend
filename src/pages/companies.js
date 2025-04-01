import { motion } from "framer-motion";

export default function Companies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-lg/8 font-semibold text-gray-900"
        >
          Trusted by the world’s most innovative teams
        </motion.h2>
        {/* Logos Section */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {[
            { alt: "Transistor", src: "https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" },
            { alt: "Reform", src: "https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" },
            { alt: "Tuple", src: "https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" },
            { alt: "SavvyCal", src: "https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" },
            { alt: "Statamic", src: "https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" },
          ].map((company, index) => (
            <motion.img
              key={company.alt}
              src={company.src}
              alt={company.alt}
              width={158}
              height={48}
              
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            //   whileInView={{ opacity: 1, scale: 1 }}

            />
            
          ))}
        </div>
      </div>
    </div>
  );
}
