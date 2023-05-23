import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const list = ["Accessories", "Brands", "Popular", 'phone', 'clothes']

export const SubCategoryFilter = () => {
  const { lang } = useContext(LanguageContext)
  const [filterCategoryBy, setFilterCategoryBy] = useState('')

  const filterCategories = (filter) => {
    setFilterCategoryBy(filter);
    // call filter
  }
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.90}
      className='mb-4'
    >
      {list?.map(item => (
        <SwiperSlide key={item} className={`text-center whitespace-nowrap capitalize px-3 py-1 rounded-2xl ${filterCategoryBy === item ? "bg-secondary text-white" : "bg-[#F1F1F1] text-secondary"}`}>
          <button  onClick={() => filterCategories(item)} >{fetchWord(item, lang)}</button>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
