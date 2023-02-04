import React from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Card } from './../Card/Card';

import { products } from '@/data/cardData';
import { ChevronIcon } from './../Icons/ChevronIcon';

const CustomArrow = ({ direction, onClick }) => (
  <button
    className={`absolute rounded-full scale-50 border-[1px] border-black !flex items-center justify-center !h-11 !w-11 -top-14 z-10 ${
      direction === 'next' ? 'right-0' : 'right-8'
    } ${!!onClick ? '!border-primary ' : ''}`}
    style={{
      transform: direction === 'next' ? 'scale(.5) rotate(180deg)' : '',
    }}
    onClick={onClick}
    disabled={!onClick}
  >
    <ChevronIcon color={!!onClick ? '#f1a002' : '#363636'} />
  </button>
);

export const RelatedProducts = () => {
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '72px',
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="relative py-8">
        <SectionTitle title="Related Products" />
        <Slider {...setting}>
          {products?.map((product) => (
            <figure key={product?.id} className="p-2">
              <Card item={product} inCategory />
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
};
