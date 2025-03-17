
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "What services does TechSpark offer?",
    answer:
      "TechSpark offers a comprehensive range of Software Development services, including web development, mobile app development, custom software development, e-commerce solutions, CRM dashboard development, blockchain development, Crypto solutions and more Services.",
  },
  {
    id: 2,
    question: "How does TechSpark ensure client satisfaction?",
    answer:
      "At TechSpark, client satisfaction is our top priority. We achieve this by providing personalized solutions you can hire dedicated Full Stack web or App Developers Team tailored to each client's unique needs, ensuring clear communication throughout the project, and delivering high-quality work on time, every time.",
  },
  {
    id: 3,
    question: "What industries does TechSpark specialize in?",
    answer:
      "TechSpark specializes in serving a diverse range of industries, including healthcare, fintech, e-commerce, manufacturing, travel, hospitality, and more. Our expertise allows us to develop tailored solutions that meet the specific requirements of each industry.",
  },
  {
    id: 4,
    question: "Can I hire dedicated developers from TechSpark?",
    answer:
      "Yes, TechSpark offers dedicated developer hiring services for clients who require ongoing support or have long-term projects. Our dedicated developers work exclusively on your project, providing continuous support and expertise.",
  },
  {
    id: 5,
    question: "How does TechSpark handle project timelines?",
    answer:
      "At TechSpark, we understand the importance of meeting project deadlines. We follow a structured project management approach, setting realistic timelines and milestones, and keeping clients informed of progress every step of the way.",
  },
  {
    id: 6,
    question: "Does TechSpark offer support after the project is completed?",
    answer:
      "Yes, TechSpark provides ongoing support and maintenance services to ensure that your software remains up-to-date and functional. Our dedicated support team is available to address any issues or concerns that may arise post-launch.",
  },
  {
    id: 7,
    question:
      "What sets TechSpark apart from other software development companies?",
    answer:
      "TechSpark stands out for its commitment to on-time delivery, exceptional support, and innovative solutions. With a focus on client satisfaction and a track record of successful projects, we have earned a reputation as a trusted partner for businesses seeking transformative software solutions.",
  },
];

export default function FAQ() {
  // Explicitly define state type as number or null
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Ensure 'id' parameter has a defined type
  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full overflow-x-hidden mx-auto pt-16 px-4 sm:px-6 pb-16 md:px-28 bg-[#ffffff]">
      <h1
        className="text-6xl text-start  font-Helvetica text-[48px] font-normal  mb-6"
        style={{ color: "#2D3032" }}
      >
        {/* <h1 className="text-6xl text-start mb-6 font-medium" style={{ fontFamily: "Yantramanav, Helvetica, sans-serif" }}> */}
        Most Frequently Asked Questions.
      </h1>
      <ul className="space-y-8 sm:pt-14 sm:text-5xl">
        {questions.map(({ id, question, answer }) => (
          <li key={id} className="border-b text-black">
            <div
              className="flex items-center text-center justify-between py-2"
              onClick={() => toggleQuestion(id)}
            >
              <span className="text-lg mb-8 font-normal break-words sm:text-3xl">
                {id}.{" "}
                <span className="sm:ml-12 translate-x-[20px] sm:font-normal sm:text-[24px] font-Helvetica text-black">
                  {question}
                </span>
              </span>
              <button
                className={`text-[#1600ea] text-xl text-center cursor-pointer border-[#1600ea] border sm:text-3xl lg:text-3xl sm:mb-10 rounded-full w-14 h-14 ${
                  openQuestion === id ? "bg-[#1600ea] text-black" : "bg-white"
                } t`}
              >
                {openQuestion === id ? "×" : "+"}
              </button>
            </div>
            <AnimatePresence>
              {openQuestion === id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="py-2 mb-4 px-4 sm:ml-12 translate-x-[20px] text-gray-600 text-sm sm:text-lg lg:text-lg">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}