import Image from 'next/image'
import React, { useState } from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductSale } from '../Product/ProductSale'

import 'swiper/css';

export const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0]?.src);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} w-3 h-3 cursor-pointer border border-black rounded-full "></span>`;
    },
  };
  return (
    <div className="flex-1 overflow-hidden">
      <figure className='relative mb-4 '>
        <Swiper
          className="hero-swiper single-product-slider"
          pagination={pagination}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            images?.map(img => (
              <SwiperSlide key={img?.id} >
                <Image src={selectedImage} alt={'product alt'} height={550} width={512} className='w-full' />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </figure>
      <div className='flex gap-4 overflow-auto scroll-hide'>
      </div>
    </div>
  )
}
