import SectionTitle from '@/components/Global/SectionTitle/SectionTitle'
import { ProductCard } from '@/components/Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const Grid = ({ title, products }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mt-8'>
      {title ?
        <SectionTitle title={title} link="/" />
        : null}
      <Swiper
        spaceBetween={10}
        slidesPerView={2.15}
        breakpoints={{
          100: {
            slidesPerView: 1.5
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 2.15,
           
          },
          400: {
            slidesPerView: 2.5,
           
          },
          480: {
            slidesPerView: 3,
           
          },
          640: {
            slidesPerView: 3.15,
        
          }
        }}
      >
        {products?.slice(0, 5)?.map(product => (
          <SwiperSlide key={product?.id}>
            <ProductCard product={product} key={product?.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}