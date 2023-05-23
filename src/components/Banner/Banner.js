import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { Button } from "../Global/Button/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";

const Banner = () => {
  const { lang } = useContext(LanguageContext);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} rounded-md w-5 h-[6px] cursor-pointer bg-[#EA49586B]"></span>`;
    },
  };

  return (
    <div className="flex gap-2 -mx-4 relative overflow-hidden">
      <Swiper
        className="hero-swiper"
        pagination={pagination}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        
      >
        <SwiperSlide>
          <div className="relative w-full items-center flex h-[450px] bg-[#6FB4FF30]">
            <Image className="h-full object-cover max-w-[170px] " src="/images/banner.png" alt="New Arrival" height={250} width={250} />
            <div className=" flex flex-1 flex-col gap-4 items-center">
              <p className="font-medium">{fetchWord('good_shopping', lang)}</p>
              <span className="bg-secondary uppercase text-[10px] text-white p-2 rounded-2xl w-fit px-4">{fetchWord('weekend_discount', lang)}</span>
              <h1 className="text-lg min-[400px]:text-2xl font-semibold">{fetchWord('new_arrival_the_shop', lang)}</h1>
              <p>{fetchWord('big_sale', lang)}</p>
              <Button classes="text-xs rounded-3xl !py-3 !px-6">{fetchWord('shop_now', lang)}</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full items-center flex h-[450px] bg-[#6FB4FF30]">
            <Image className="h-full object-cover " src="/images/banner.png" alt="New Arrival" height={250} width={250} />
            <div className=" flex flex-1 flex-col gap-4 items-center">
              <p className="font-medium">{fetchWord('good_shopping', lang)}</p>
              <span className="bg-secondary uppercase text-[10px] text-white p-2 rounded-2xl w-fit px-4">{fetchWord('weekend_discount', lang)}</span>
              <h1 className="text-2xl font-semibold">{fetchWord('new_arrival_the_shop', lang)}</h1>
              <p>{fetchWord('big_sale', lang)}</p>
              <Button classes="text-xs rounded-3xl !py-3 !px-6">{fetchWord('shop_now', lang)}</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full items-center flex h-[450px] bg-[#6FB4FF30]">
            <Image className="h-full object-cover " src="/images/banner.png" alt="New Arrival" height={250} width={250} />
            <div className=" flex flex-1 flex-col gap-4 items-center">
              <p className="font-medium">{fetchWord('good_shopping', lang)}</p>
              <span className="bg-secondary uppercase text-[10px] text-white p-2 rounded-2xl w-fit px-4">{fetchWord('weekend_discount', lang)}</span>
              <h1 className="text-2xl font-semibold">{fetchWord('new_arrival_the_shop', lang)}</h1>
              <p>{fetchWord('big_sale', lang)}</p>
              <Button classes="text-xs rounded-3xl !py-3 !px-6">{fetchWord('shop_now', lang)}</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
