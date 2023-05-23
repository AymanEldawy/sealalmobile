import SectionTitle from '@/components/Global/SectionTitle/SectionTitle'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { categories } from '@/data/dummyData';
import Link from 'next/link';

export const CategoriesSection = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mt-3'>
      <SectionTitle link="/categories" title={fetchWord('categories', lang)} />
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categories?.map(category => (
          <SwiperSlide key={category?.id}>
            <Link href={`/categories/${category?.id}`} className='flex flex-col gap-2'>
              <Image src={category?.image} alt={category?.name} height={80} width={80} className='max-w-none !w-[60px] h-[60px] object-cover' />
              <span className='text-sm text-secondary'>{category?.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
