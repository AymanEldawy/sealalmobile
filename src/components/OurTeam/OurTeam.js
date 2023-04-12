import React from "react";
import CustomSlideArrow from "../CustomSlideArrow/CustomSlideArrow";
import SectionTitle from "../Global/SectionTitle/SectionTitle";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Slider from "react-slick";
import { latestProjects, ourTeam } from "@/data/dummyData";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "./TeamCard/TeamCard";
import { Bolt8Icon } from "../Icons";

const settings = {
  className: "center",
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 4,
  speed: 500,
  swipeToSlide: true,
  arrows: true,
  nextArrow: <CustomSlideArrow />,
  prevArrow: <CustomSlideArrow classes="right-12" direction="prev" />,
};
const OurTeam = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-[#061432] py-8 relative z-10  overflow-hidden">
      <span className="absolute top-[30%] -right-10 scale-90">
        <Bolt8Icon className="text-primary" />
      </span>
      <div className="container">
        <SectionTitle
          title={fetchWord("our_team", lang)}
          titleClassName="!text-white"
        />
        <div className="w-full">
          <Slider {...settings}>
            {ourTeam?.map((employee, index) => (
              <TeamCard key={index} employee={employee} />
            ))}
          </Slider>
        </div>
      </div>
      <span className="absolute -bottom-20 -left-8 scale-90">
        <Bolt8Icon className="text-secondary " />
      </span>
    </div>
  );
};

export default OurTeam;
