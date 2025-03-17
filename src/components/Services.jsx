
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { LuArrowDown, LuArrowUp } from "react-icons/lu";
// export default function TakeAdvantageSection() {
//   const items = [
//     {
//       title: "Logo Design",
//       description:
//         "Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Brand Identity Design",
//       description:
//         "Developing complete branding elements, including color palettes, typography, and visual style guidelines.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Social Media Graphics",
//       description:
//         "Creating visually engaging graphics for social media posts, ads, stories, and banners.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Website and App Graphics",
//       description:
//         "Designing UI/UX visuals, icons, and elements for websites and mobile applications.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Infographics",
//       description:
//         "Converting complex data and information into visually appealing and easy-to-understand infographics.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Ad Banners",
//       description:
//         "Develop eye-catching ad banners optimized for digital campaigns to maximize clicks and conversions.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Motion Graphics and GIFs",
//       description: ".....",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Brochure & Flyers",
//       description:
//         "Design informative and visually appealing brochures and flyers that effectively convey your message and promote your business.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Illustration Services",
//       description:
//         "Producing custom illustrations tailored to enhance brand communication and storytelling.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Presentation Design",
//       description:
//         "Create compelling PowerPoint templates and pitch decks that captivate audiences and communicate your message effectively.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Advertising Design",
//       description:
//         "Designing print and digital ads, including billboards, banners, and magazine layouts, for impactful campaigns.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Ebook and Publication",
//       description:
//         "Designing layouts for ebooks, magazines, and newsletters with consistent and appealing visual aesthetics.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Menu Design",
//       description:
//         "Crafting attractive and easy-to-navigate menus for restaurants, cafes, or events.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Poster and Banner Design",
//       description:
//         "Creating impactful posters and banners for promotions, events, or campaigns.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Custom Typography Design",
//       description:
//         "Creating unique fonts and typography tailored to brand requirements.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Book Cover Design",
//       description:
//         "Crafting visually appealing and market-relevant book covers for print and digital publications.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "UI Icon Design",
//       description:
//         "Crafting consistent, functional, and aesthetically pleasing icons for apps and websites.",
//       icon: "/pic-13.png",
//     },
//     {
//       title: "Brand Asset Creation",
//       description:
//         "Developing a library of cohesive design assets to ensure consistent branding across platforms.",
//       icon: "/pic-13.png",
//     },
//   ];

//   const [visibleCount, setVisibleCount] = useState(9);

//   const toggleVisibility = () => {
//     setVisibleCount(visibleCount === 9 ? items.length : 9);
//   };

//   return (
//     <motion.section
//       id="take-advantage"
     
//       className="bg-[#ffffff] sm:py-16 pt-8 pb-8 w-full sm:px-20"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className=" w-full">
//         <motion.h2
         
//           className="text-5xl md:text-[66px] ml-8  font-arimo  font-normal text-black pb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Take Advantage
//         </motion.h2>
//         <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6 px-4 w-full sm:mr-4 sm:h-[100vh] overflow-y-scroll">
//           {items.slice(0, visibleCount).map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-4 lg:mx-4 xl:min-h-40  rounded-lg flex flex-col border-[1px]  border-[#74747434]"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: 0.1 + index * 0.0 }}
//             >
//               <div className="flex gap-1">
//                 <img
//                   src={item.icon}
//                   alt={item.title}
//                   className="w-10 h-10 mb-4"
//                 />
//                 <h3 className="text-2xl text-black lg:pt-1  font-Helvetica  text-center">{item.title}</h3>
//               </div>
//               <p className="text-xl text-gray-600 font-Arimo font-normal px-10 mr-2 text-justify">{item.description}</p>
//             </motion.div>
//           ))}
//         </div>
//         <motion.button
//           onClick={toggleVisibility}
          
//           className="mt-8 mx-auto  block border border-black hover:bg-blue-600 text-black text-lg font-semibold hover:text-white py-2 px-6 "
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: items.length * 0.1 + 0.2 }}
//         >
//           <div className="flex items-center justify-center">

//           {visibleCount === 9 ? <> Show More <LuArrowDown className="ml-1 text-2xl" /></> : <>Show Less <LuArrowUp className="ml-1 text-2xl" /></>}
//           </div>
//         </motion.button>
//       </div>
//     </motion.section>
//   );
// }

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "Logo Design",
    description:
      "Craft unique and memorable logos that embody your brand’s identity.",
    img: "/service.svg",
  },
  {
    title: "Brand Identity Design",
    description:
      "Developing complete branding elements, including color palettes, typography, and visual style guidelines.",
    img: "/service.svg",
  },
  {
    title: "Social Media Graphics",
    description:
      "Creating visually engaging graphics for social media posts, ads, stories, and banners.",
    img: "/service.svg",
  },
  {
    title: "Website and App Graphics",
    description:
      "Designing UI/UX visuals, icons, and elements for websites and mobile applications.",
    img: "/service.svg",
  },
  {
    title: "Infographics",
    description:
      "Converting complex data and information into visually appealing and easy-to-understand infographics.",
    img: "/service.svg",
  },
  {
    title: "Ad Banners",
    description:
      "Develop eye-catching ad banners optimized for digital campaigns to maximize clicks and conversions.",
    img: "/service.svg",
  },
  {
    title: "Motion Graphics and GIFs",
    description:
      "Craft unique and memorable logos that embody your brand’s identity.",
    img: "/service.svg",
  },
  {
    title: "Brochure & Flyers",
    description:
      "Design informative and visually appealing brochures and flyers that effectively convey your message and promote your business.",
    img: "/service.svg",
  },
  {
    title: "Illustration Services",
    description:
      "Producing custom illustrations tailored to enhance brand communication and storytelling.",
    img: "/service.svg",
  },
  {
    title: "Presentation Design",
    description:
      "Create compelling PowerPoint templates and pitch decks that captivate audiences and communicate your message effectively.",
    img: "/service.svg",
  },
  {
    title: "Advertising Design",
    description:
      "Designing print and digital ads, including billboards, banners, and magazine layouts, for impactful campaigns.",
    img: "/service.svg",
  },
  {
    title: "Ebook and Publication",
    description:
      "Designing layouts for ebooks, magazines, and newsletters with consistent and appealing visual aesthetics.",
    img: "/service.svg",
  },
  {
    title: "Menu Design",
    description:
      "Crafting attractive and easy-to-navigate menus for restaurants, cafes, or events.",
    img: "/service.svg",
  },
  {
    title: "Poster and Banner Design",
    description:
      "Creating impactful posters and banners for promotions, events, or campaigns.",
    img: "/service.svg",
  },
  {
    title: "Custom Typography Design",
    description:
      "Creating unique fonts and typography tailored to brand requirements.",
    img: "/service.svg",
  },
  {
    title: "Book Cover Design",
    description:
      "Crafting visually appealing and market-relevant book covers for print and digital publications.",
    img: "/service.svg",
  },
  {
    title: "UI Icon Design",
    description:
      "Crafting consistent, functional, and aesthetically pleasing icons for apps and websites.",
    img: "/service.svg",
  },
  {
    title: "Brand Asset Creation",
    description:
      "Developing a library of cohesive design assets to ensure consistent branding across platforms.",
    img: "/service.svg",
  },
];

const HorizontalSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <h2 className="text-3xl font-normal sm:ml-24 translate-x-[20px] lg:text-left text-center mb-16">
        Let’s see how we can help your business
      </h2>

      {/* Auto-scrolling horizontal slider with pause */}
      <motion.div
        ref={carouselRef}
        className="overflow-x-hidden cursor-grab relative md:mx-28"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex space-x-6 "
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 0 }}
          animate={{ x: [0, -width, 0] }} // Moves left, pauses, then back
          transition={{
            repeat: Infinity,
            duration: 120, // Total duration
            ease: "linear",
            times: [0, 0.45, 0.5, 0.95, 1], // Adds a pause
            repeatDelay: 1, // 1-second pause at both ends
          }}
        >
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={index}
              className=" border bottom-1 min-w-[300px]  bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-bold mt-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HorizontalSlider;

