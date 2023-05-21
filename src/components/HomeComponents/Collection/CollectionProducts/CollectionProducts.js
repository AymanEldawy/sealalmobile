import { ArrowSlideIcon, ChevronIcon } from '@/components/Icons';
import { ProductCard } from '@/components/Product/ProductCard'
import React from 'react'
import Slider from 'react-slick'

const Arrow = (props) => {
  const { classes, style, onClick, direction } = props;

  return (
    <button className={`absolute left-1/2 -bottom-8 z-10 w-5 h-5 before:hidden ${classes}`}
      onClick={onClick}
      disabled={!onClick}
    >
      <span className={
        direction === "prev" ? "block ltr:rotate-180 rtl:rotate-0 " : "rtl:rotate-180  block"
      }>
        <ArrowSlideIcon/>
      </span>
    </button>
  )
}

export const CollectionProducts = ({ filterProducts }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow: <Arrow classes="w-5 h-5 before:hidden ltr:-ml-8 rtl:-mr-8" direction="prev" />,
    nextArrow: <Arrow classes="rtl:-ml-8 ltr:-mr-8" direction="next" />,

  };

  return (
    <Slider {...settings}>
      {
        filterProducts?.map(product => (
          <div className="p-2" key={product?.id}>
          <ProductCard product={product}  />
          </div>
        ))
      }
    </Slider>

  )
}
