import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomSlideArrow } from './CustomSlideArrow';
import { CategoryCard } from './CategoryCard';

export const BrowseCategoriesSlide = ({ categories }) => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    className:"relative max-w-[90%] browse-slide-categories",
    nextArrow: <CustomSlideArrow direction="next" />,
    prevArrow: <CustomSlideArrow />,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '72px',
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          initialSlide: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...setting}>
        {categories.map((category) => (
          <CategoryCard category={category} key={category?.id} />
        ))}
      </Slider>
    </div>
  );
};
