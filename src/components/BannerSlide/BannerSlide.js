import React from "react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Button } from "../Global/Button/Button";
import { FolderIcon } from "../Icons";
import { LanguageContext } from "@/context/LangContext";
import { useContext } from "react";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import { useRouter } from "next/router";

const settings = {
  className: "center",
  infinite: false,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  swipeToSlide: true,
  arrows: false,
  dots: true,
  className: "banner-slide",
};
const BannerSlide = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter()
  return (
    <div className="w-full">
      <Slider {...settings}>
        {Array(3)
          .fill(0)
          .map((i, index) => (
            <div
              key={index}
              className="rounded-2xl bg-black w-full relative overflow-hidden"
            >
              <Image
                className="object-cover object-top absolute top-0 left-0 w-full h-full"
                src={`/images/slider/${index + 1}.png`}
                alt=""
                height={250}
                width={575}
              />
              <div className="flex flex-col gap-3 relative z-10 p-4 bg-[#00000090] text-white pb-12">
                <h2 className="text-primary text-2xl capitalize">
                  {fetchWord(`slide_title${index + 1}`, lang)}
                </h2>
                <p>{fetchWord(`slide_description${index + 1}`, lang)} </p>
                <Button
                  classes="w-fit flex items-center gap-1 text-xs !p-2 !px-4"
                  onClick={() => router.push("/request-services")}
                >
                  <FolderIcon />
                  {fetchWord("add_request", lang)}
                </Button>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default BannerSlide;
