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
        className="w-full md:w-[50%] h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl relative z-0 border border-gray-100"
      >
        <img
          src={service.image}
          alt={service.category}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gray-900/5 hover:bg-transparent transition-colors duration-500" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`w-[90%] md:w-[45%] h-fit min-h-[220px] p-6 md:p-10 rounded-3xl bg-white border border-gray-100 border-b-[8px] border-b-[#003399] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] relative z-10 flex flex-col justify-center
          ${isEven ? "md:-ml-20" : "md:-mr-20"} mt-[-40px] md:mt-0`}
      >

        <h3 className="text-gray-900 text-[24px] md:text-[28px] font-bold mb-5 tracking-tight">{service.category}</h3>


        <ul className="list-none space-y-2">

          {service.items.map((item, i) => (
            <li
              key={`service-item-${i}`}
              className="text-gray-600 font-medium text-[15px] md:text-[17px] flex items-start gap-4"
            >
              <span className="text-[#003399] mt-1.5 text-xs">✦</span>
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

