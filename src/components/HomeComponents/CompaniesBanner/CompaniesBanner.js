import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function CompaniesBanner() {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-[#ECECEC] p-4 rounded-2xl my-12'>
      <Swiper
        spaceBetween={10}
        slidesPerView={2.25}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          Array(3).fill().map((r, index) => (
            <SwiperSlide key={index} className='overflow-hidden'>
              <div className='rounded-lg overflow-hidden relative h-[81px] w-[150px]' key={index}>
                <div className='absolute top-0 left-0 h-full flex flex-col justify-center p-2 w-1/2 capitalize text-white bg-[#DF4B4B53]'>
                  <h3 className='whitespace-nowrap font-medium text-sm'>{fetchWord('company_name', lang)}</h3>
                  <h4 className='whitespace-nowrap font-medium text-[10px]'>{fetchWord('flash_sale', lang)}</h4>
                  <p className='whitespace-nowrap text-[8px]'>{fetchWord('shopping_now_description', lang)}</p>
                </div>
                <Image src={`/images/companies/${index + 1}.png`} alt="company name" height={200} width={400} className="h-full w-full max-w-none object-cover" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
