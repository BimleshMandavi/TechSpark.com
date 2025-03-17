"use client";
import { motion } from "framer-motion";

function BusinessUI() {
  return (
    <div className="bg-[#120d23] text-white font-sans sm:px-16">
      <section className="text-center py-12 ">
        <h2 className="text-4xl font-normal font-Helvetica sm:text-[60px] mb-8 sm:pt-14">
          Explore Perfect needs with Designera.
        </h2>
        <p className="text-[18px] font-Helvetica font-normal text-[#D6D8D2]  mb-24">
          Social media creative projects completed to date
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-12">
          {[
            {
              title: "Campaign Planning",
              img: "/pic-05.png", // Replace with the actual path
            },
            {
              title: "UX/UI Design",
              img: "/pic-06.png", // Replace with the actual path
            },
            {
              title: "Advertising",
              img: "/pic-07.png", // Replace with the actual path
            },
            {
              title: "Rebranding",
              img: "/pic-08.png", // Replace with the actual path
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-30 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BusinessUI;

