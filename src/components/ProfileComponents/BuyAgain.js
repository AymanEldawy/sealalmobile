import { LanguageContext } from '@/context/LangContext';
import { products } from '@/data/dummyData';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';
import { ProductCard } from '../Product/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Grid } from '../Grid/Grid';

export const BuyAgain = () => {
  const { lang } = useContext(LanguageContext)
  console.log(products)
  return (
    <div className='w-screen relative overflow-hidden'>
      {/* <Swiper
        spaceBetween={10}
        slidesPerView={2.15}
      >
        {products?.map(product => (
          <SwiperSlide key={product?.id}>
            <ProductCard product={product} key={product?.id} />
          </SwiperSlide>
        ))}
      </Swiper> */}
              <Grid products={products} />
    </div>
  )
}
