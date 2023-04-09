import React from "react";
import Image from "next/image";

const TestimonialGallery = ({ activeTestimonial, changeActiveTestimonial }) => {
  const activeClasses =
    "border-[#DA69A3] border p-4 overflow-hidden bg-white before:w-[105%] before:h-[100%] before:rounded-full before:absolute before:-left-[2.5%] before:animate-ping  before:bg-[#DA69A3] before:-top-[2.5%]";
  return (
    <div className="absolute w-full h-full left-0 top-0 ">
      <figure
        className={`absolute rounded-full left-[10%]  ${
          activeTestimonial?.index === 1 ? activeClasses : ""
        }`}
        onClick={() => changeActiveTestimonial(1)}
      >
        <Image
          className="relative z-10"
          src="/images/clients/Ellipse 182.png"
          alt="Name 1"
          width={136}
          height={136}
        />
      </figure>
      <figure
        className={`absolute rounded-full top-[50%] ${
          activeTestimonial?.index === 2 ? activeClasses : ""
        }`}
        onClick={() => changeActiveTestimonial(2)}
      >
        <Image
          className="relative z-10"
          src="/images/clients/Ellipse 180.png"
          alt="Name 1"
          width={86}
          height={86}
        />
      </figure>
      <figure
        className={`absolute rounded-full -bottom-12 left-[10%] ${
          activeTestimonial?.index === 3 ? activeClasses : ""
        }`}
        onClick={() => changeActiveTestimonial(3)}
      >
        <Image
          className="relative z-10"
          src="/images/clients/Ellipse 186.png"
          alt="Name 1"
          width={90}
          height={90}
        />
      </figure>
      <figure
        className={`absolute rounded-full  top-0 right-[7%] ${
          activeTestimonial?.index === 4 ? activeClasses : ""
        }`}
        onClick={() => changeActiveTestimonial(4)}
      >
        <Image
          className="relative z-10"
          src="/images/clients/Ellipse 188.png"
          alt="Name 1"
          width={75}
          height={75}
        />
      </figure>
      <figure
        className={`absolute rounded-full top-[40%] right-0 ${
          activeTestimonial?.index === 5 ? activeClasses : ""
        }`}
        onClick={() => changeActiveTestimonial(5)}
      >
        <Image
          className="relative z-10"
          src="/images/clients/Group 7.png"
          alt="Name 1"
          width={120}
          height={120}
        />
      </figure>
      <figure
        className={`absolute rounded-full -bottom-8 right-[10%] ${
          activeTestimonial?.index === 6 ? activeClasses : ""
        }`}
        onClick={() => changeActiveTestimonial(6)}
      >
        <Image
          className="relative z-10"
          src="/images/clients/Group 3.png"
          alt="Name 1"
          width={80}
          height={80}
        />
      </figure>
    </div>
  );
};

export default TestimonialGallery;
