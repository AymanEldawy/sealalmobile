import { LanguageContext } from '@/context/LangContext';
import Image from 'next/image';
import React, { useContext } from 'react'
import Slider from 'react-slick'
import { ChevronIcon } from '../Icons';

const Arrow = (props) => {
  const { classes, style, onClick, direction } = props;

  return (
    <button className={`absolute top-[20px] z-10 w-5 h-5 before:hidden ${classes}`}
      onClick={onClick}
      disabled={!onClick}
    >
      <span className={
        direction === "prev" ? "block ltr:rotate-180 rtl:rotate-0 " : "rtl:rotate-180  block"
      }>
        <ChevronIcon className="text-black rotate-180" />
      </span>
    </button>
  )
}
export const CompaniesSection = () => {
  const { lang } = useContext(LanguageContext);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    prevArrow: <Arrow classes="w-5 h-5 before:hidden ltr:-left-8 rtl:-right-8 " direction="prev" />,
    nextArrow: <Arrow classes="ltr:-right-8 rtl:-left-8" direction="next" />,

  };
  return (
    // <div className='flex'>
    <Slider {...settings}>
      {
        Array(9).fill(0)?.map((item, index) => (
          <Image key={index} src={`/images/brands/${index + 1}.png`} alt="" height={50} width={50} className='w-20 h-20 object-contain' />
        ))
      }
    </Slider>
  )
}
