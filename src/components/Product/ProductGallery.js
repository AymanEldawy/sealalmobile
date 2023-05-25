import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const ProductGallery = ({ images, alt, productId, grid }) => {
  const router = useRouter()
  const handelLink = () => {
    router.push(`/products/${productId}`)
  }
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} w-2 h-2 cursor-pointer border border-black rounded-full "></span>`;
    },
  };
  return (
    <Swiper
      className='swiper-product-gallery'
      pagination={pagination}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    >
      {images?.slice(0, 5).map(image => (
        <SwiperSlide key={image?.id}>
          <figure className='cursor-pointer h-full' onClick={handelLink}>
            <Image src={image} alt={alt} height={284} width={grid ? 110 : 230} className={`${grid ? 'w-[110px]' : 'w-full'} h-full object-contain`} />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
