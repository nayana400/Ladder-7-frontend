import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div id={service.id} className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} w-full mb-8 items-center justify-center scroll-mt-24 gap-6 md:gap-0`}>
      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-[50%] h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl relative z-0"
      >
        <img
          src={service.image}
          alt={service.category}
          className="w-full h-full object-cover"
        />
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`w-[90%] md:w-[45%] h-[200px] md:h-[240px] p-4 md:p-6 rounded-2xl bg-gradient-to-br from-[#1d1b4b] to-[#0a051e] border border-white/10 shadow-xl relative z-10 flex flex-col justify-center
          ${isEven ? "md:-ml-16" : "md:-mr-16"} mt-[-30px] md:mt-0`}
      >

        <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-3">{service.category}</h3>


        <ul className="list-none space-y-2">

          {service.items.map((item, i) => (
            <li
              key={`service-item-${i}`}
              className="text-gray-300 text-[14px] md:text-[16px] flex items-start gap-3"
            >
              <span className="text-blue-500 mt-1">✦</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

    </div>
  );
};

const ServiceTimeline = ({ services }) => {
  return (
    <div className="flex flex-col">
      <div className="relative pt-4">
        {/* Services mapping */}
        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTimeline;

