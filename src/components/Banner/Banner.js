import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import Slider from "react-slick";
import { Button } from "../Global/Button/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlideArrow from "../CustomSlideArrow/CustomSlideArrow";

const settings = {

  className: "center",
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 4,
  speed: 500,
  swipeToSlide: true,
  arrows: true,
  nextArrow: <CustomSlideArrow />,
  prevArrow: <CustomSlideArrow classes="ltr:right-12 rtl:left-12" direction="prev" />,
};

const Banner = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex gap-2 relative overflow-hidden">
      {/* <Slider {...settings}> */}
      <div className="relative w-full">
        <div className="absolute top-1/2 -translate-y-1/2 px-12 flex flex-col gap-4 items-center">
          <p className="font-medium">{fetchWord('good_shopping', lang)}</p>
          <span className="bg-secondary uppercase text-[10px] text-white p-2 rounded-2xl w-fit px-4">{fetchWord('weekend_discount', lang)}</span>
          <h1 className="text-3xl font-semibold">{fetchWord('new_arrival_the_shop', lang)}</h1>
          <p>{fetchWord('big_sale', lang)}</p>
          <Button classes="text-xs rounded-3xl !py-3 !px-6">{fetchWord('shop_now', lang)}</Button>
        </div>
        <Image className="w-full h-auto object-cover" src="/images/banner.png" alt="New Arrival" height={400} width={300} />
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default Banner;
