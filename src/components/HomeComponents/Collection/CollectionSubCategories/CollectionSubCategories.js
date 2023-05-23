import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export const CollectionSubCategories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className='flex items-center justify-center gap-4 mb-4'>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        slidesPerGroup={2}
        grid={{ rows: 2 }}

      >

        {categories?.slice(1, 8)?.map(category => (
          <SwiperSlide key={category?.id}>
            <button onClick={() => setSelectedCategory(category?.id)} className={`text-[#737373] pb-2 ${selectedCategory === category?.id ? 'font-semibold !text-primary border-b-2 border-primary' : ''}`}>{category?.name}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}
