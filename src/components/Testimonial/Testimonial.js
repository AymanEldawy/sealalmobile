import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Slider from "react-slick";
import { latestProjects } from "@/data/dummyData";
import Image from "next/image";
import { BoltsIcons, LongArrowIcon, QuoteIcon } from "../Icons";
import TestimonialGallery from "./TestimonialGallery/TestimonialGallery";

const testimonials = {
  1: {
    index: 1,
    description:
      "I have been using this product for a month, and I'm impressed with the results. It has made a significant difference in my life",
  },
  2: {
    index: 2,
    description:
      "The customer service was excellent. They were quick to respond to my inquiries and went above and beyond to address my concerns",
  },
  3: {
    index: 3,
    description:
      "I recently went on a trip with this company, and it was an incredible experience. The tour guide was knowledgeable and friendly, and the itinerary was well-planned.",
  },
  4: {
    index: 4,
    description:
      "I highly recommend this service. It was easy to use, and the quality of the work exceeded my expectations",
  },
  5: {
    index: 5,
    description:
      "I have been a customer of this company for years, and I'm consistently impressed with their attention to detail and commitment to excellence.",
  },
  6: {
    index: 6,
    description: `sed do eius Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eius Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eius Lorem ipsum dolor sit amet,
    adipiscing elit, sed do eius Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eius Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eius`,
  },
};

const Testimonial = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[1]);
  const changeActiveTestimonial = (index) => {
    setActiveTestimonial(testimonials[index]);
  };
  const nextTestimonial = () => {
    let index = activeTestimonial?.index;
    if (index < Object.keys(testimonials).length ) {
      setActiveTestimonial(testimonials[index + 1]);
    } else {
      setActiveTestimonial(testimonials[1]);
    }
  };
  useEffect(() => {
    let interval = setInterval(nextTestimonial, 4000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="min-h-screen h-[740px] py-8  overflow-hidden">
      <div className="container relative">
        <TestimonialGallery
          activeTestimonial={activeTestimonial}
          changeActiveTestimonial={changeActiveTestimonial}
        />
        <h1 className="text-center text-5xl w-[410px] mx-auto leading-tight">
          {fetchWord("client_say", lang)}{" "}
        </h1>
        <div className="relative mt-12 mx-auto">
          <span className="absolute w-full left-16 top-4 scale-90">
            <BoltsIcons />
          </span>
          <div className="bg-primary max-w-xl  mx-auto p-12 rounded-2xl relative min-h-[380px] flex items-center">
            <span className="absolute -top-4 right-0 ">
              <QuoteIcon />
            </span>
            <p className="text-white leading-7">
              {activeTestimonial?.description}
            </p>
            <span className="absolute -bottom-4 h-4 w-[94%] left-[3%] opacity-75 bg-inherit rounded-b-xl"></span>
            <span className="absolute -bottom-8 h-8 w-[84%] left-[8%] opacity-50 bg-inherit rounded-b-xl"></span>
            <button
              onClick={nextTestimonial}
              className="cursor-pointer absolute -bottom-20 scale-90 right-10"
            >
              <LongArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
