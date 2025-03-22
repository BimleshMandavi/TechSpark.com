import React from "react";
import { FiPaperclip } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";


const ContactPage = () => {
  
  // const countries = [
  //   { name: "India", code: "+91", flag: "/contactImg/india.jpg" },
  //   { name: "USA", code: "+1", flag: "/contactImg/usa.jpg" },
  //   { name: "Canada", code: "+1", flag: "/contactImg/canada.jpg" },
  //   { name: "UK", code: "+44", flag: "/contactImg/uk.jpg" },
  // ];

  return (
    <div className="min-h-screen bg-white mt-24 pt-20">
      {/* Section - 1 */}
      <div className="max-w-7xl grid md:grid-cols-2 gap-10 mx-10">
        {/* Left Section - Form */}
        <div>
          <h1 className="text-3xl italic font-semibold mb-6 text-gray-900">
            Let’s Discuss Your Project
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border rounded-sm text-gray-900"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border rounded-sm text-gray-900"
            />
            <div className="flex items-center gap-4">
              {/* Flag Image */}
              <input
                type="tel"
                placeholder="Your Contact Number"
                className="flex-1 p-4 border rounded-sm text-gray-900"
              />
            </div>

            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-sm text-gray-900"
              rows={4}
            ></textarea>

            {/* File Upload Section */}
            <label className="flex items-center gap-2 cursor-pointer text-gray-900">
              <FiPaperclip />
              Drag & Drop Files Here or Browse Files
              <input type="file" className="hidden" />
            </label>

            {/* Consent Checkbox */}
            <div className="flex items-center gap-2 text-gray-900">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent" className="text-sm">
                I consent to TechSpark processing my personal data according to
                the{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#12528A] text-white py-4 rounded-sm hover:bg-[#1D68A7]">
              SUBMIT INQUIRY
            </button>
          </form>

          <div className="flex justify-center gap-10 mt-10">
            {/* Phone Section */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-black" />
              <div>
                <h3 className="text-black font-medium">Phone</h3>
                <a href="tel:1234567890" className="text-blue-600">
                  1234567890
                </a>
              </div>
            </div>

            {/* Whatsapp Section */}
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-black" />
              <div>
                <h3 className="text-black font-medium">Whatsapp</h3>
                <a href="https://wa.me/1234567890" className="text-blue-600">
                  1234567890
                </a>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-black" />
              <div>
                <h3 className="text-black font-medium">Email</h3>
                <a
                  href="mailto:dummyemail@example.com"
                  className="text-blue-600"
                >
                  dummyemail@example.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Information and Images */}
        <div className="relative bg-blue-50 p-6 rounded-lg text-gray-900">
          <h2 className="text-3xl font-bold">
            Reach Out <span className="text-blue-800">to Us</span>
          </h2>
          <p className="mt-4">
            Have questions, feedback, or a project in mind? Our team is here to
            help you connect, create, and innovate.
          </p>

          <div className="mt-5">
            <Image src="/example.jpg" alt="Example" width={500} height={300} />
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <div>
                <h3 className="text-3xl pl-4 font-bold text-[#12528A]">12k+</h3>
                <p>Total Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl pl-7 font-bold pt-5 text-[#12528A]">
                  94%
                </h3>
                <p>Client Retention Rate</p>
              </div>
            </div>

            {/* Images Section */}
            <div className="pt-5">
              <Image
                src="/contactImg/userloveus.jpg"
                alt="Example"
                width={500}
                height={300}
              />
            </div>

            <div>
              <div>
                <h3 className="text-3xl font-bold ml-5 text-[#12528A]">99%</h3>
                <p>Satisfied Client</p>
              </div>
              <div>
                <h3 className="text-3xl pt-5 ml-5 font-bold text-[#12528A]">
                  Top 1%
                </h3>
                <p>Market Place Ranking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row items-center justify-center p-5 md:p-10 mt-10 md:mt-20 mx-5 md:mx-20 gap-10 md:gap-16">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/contactImg/support.jpg"
            alt="Example"
            width={500}
            height={300}
          />
        </div>

        {/* Right Section - Services */}
        <div className="w-full md:w-1/2 p-5 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-black">
            Key Services Offered by{" "}
            <span className="text-black">TechSpark</span>
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-base md:text-lg text-black">
            <li>
              <p className="font-bold">Web & App Development</p>
              <p className="text-gray-500">
                (React.js, Next.js, MERN, React Native)
              </p>
            </li>
            <li>
              <p className="font-bold">UI/UX Design and Graphics Design</p>
              <p className="text-gray-500">(Figma, Adobe XD, Photoshop)</p>
            </li>
            <li>
              <p className="font-bold">Dashboard/CRM Development</p>
            </li>
            <li>
              <p className="font-bold">Server Hosting</p>
              <p className="text-gray-500">(AWS, Google Cloud)</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Section - 3 */}
      <div className="bg-gray-200 w-full py-16">
        <div className="container flex flex-col md:flex-row items-center justify-between px-5 md:px-20">
          {/* Left Side - Illustration */}
          <div className="w-full md:w-1/2 ml-60 md:ml-0">
            <Image
              src="/contactImg/newsletter.jpg"
              alt="Example"
              width={500}
              height={300}
            />
          </div>

          {/* Right Side - Subscription Form */}
          <div className="w-full md:w-1/2 text-center md:text-left md:ml-40 md:mt-10">
            <h3 className="text-xl md:ml-20 text-gray-600">Subscribe to our</h3>
            <h2 className="text-4xl md:ml-20 font-semibold text-[#12528A] mb-6">
              Newsletter
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full md:w-[300px] text-white rounded-md bg-[#12528A] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-white border-2 border-[#12528A] text-[#12528A] rounded-md ">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
