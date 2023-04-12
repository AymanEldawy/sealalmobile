import React from "react";
import SectionTitle from "../Global/SectionTitle/SectionTitle";
import { useContext } from "react";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Slider from "react-slick";
import { latestProjects } from "@/data/dummyData";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronIcon } from "../Icons";
import CustomSlideArrow from "../CustomSlideArrow/CustomSlideArrow";


const settings = {
  className: "center",
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 4,
  speed: 500,
  rows: 2,
  swipeToSlide: true,
  arrows: true,
  nextArrow: <CustomSlideArrow />,
  prevArrow: <CustomSlideArrow classes="right-12" direction="prev" />,
};
const LatestProjects = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-[#F8F8F8] py-12 relative  overflow-hidden">
      <div className="container">
        <SectionTitle title={fetchWord("latest_projects", lang)} />
        <div className="w-full">
          <Slider {...settings}>
            {latestProjects?.map((project, index) => (
              <div
                className="flex flex-col items-center gap-2 justify-center text-center py-4"
                key={index}
              >
                <Image
                  className="!w-full !h-full  object-cover"
                  src={project?.image}
                  alt={project?.title}
                  height={320}
                  width={260}
                />
                <h3 className="text-primary text-sm capitalize mb-2">
                  {fetchWord(project?.title, lang)}
                </h3>
                <p className="text-base font-medium">
                  {fetchWord(project?.description, lang)}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
