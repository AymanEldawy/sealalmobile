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
    <div className=''>
      {title ?
        <SectionTitle title={title} link="/" />
        : null}
      <Swiper
        spaceBetween={10}
        slidesPerView={2.15}
      >
        {products?.slice(0, 5)?.map(product => (
          <SwiperSlide key={product?.id}>
            <ProductCard product={product} key={product?.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}