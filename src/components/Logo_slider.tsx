"use client"; // Ensures this runs as a client component

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div>
      <div className="slider-container text-white text-center cursor-pointer">
        <Slider {...settings}>
          {[
            { src: "/Adobe.svg", alt: "Adobe" },
            { src: "/Amazon.svg", alt: "Amazon" },
            { src: "/Axis.png", alt: "Axis Bank" },
            { src: "/Airmeet.svg", alt: "Airmeet" },
            { src: "/Apollo.svg", alt: "Apollo" },
            { src: "/amazonpay.svg", alt: "Amazon Pay" },
            { src: "/Bina.svg", alt: "Bina" },
            { src: "/Dar.svg", alt: "Dar" },
          ].map((logo, index) => (
            <div
              key={index}
              className="size-16 flex justify-center items-center"
            >
              <Image
                className="h-full w-auto rounded-lg"
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
