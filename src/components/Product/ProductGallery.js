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
    <div className={`overflow-hidden ${grid ? 'w-[120px]' : ''}`}>
      <Swiper
        className='swiper-product-gallery'
        pagination={pagination}
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
      >
        {images?.slice(0, 5).map(image => (
          <SwiperSlide key={image?.id}>
            <figure className={`bg-gray-100 cursor-pointer ${grid ? 'h-[180px]' : 'h-[240px]'} w-full`} onClick={handelLink}>
              <Image src={image} alt={alt} height={284} width={grid ? 120 : 230} className={`w-full h-full object-contain`} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
