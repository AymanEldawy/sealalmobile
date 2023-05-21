import SectionTitle from '@/components/Global/SectionTitle/SectionTitle'
import { CheckIcon } from '@/components/Icons'
import { ProductCard } from '@/components/Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

export const BestSellerSection = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div>
      <SectionTitle title={fetchWord('best_seller', lang)} link="" />
      <div className='flex gap-4 items-start'>
        <div className='flex-1 grid grid-cols-4 gap-4'>
          {products?.slice(0, 8)?.map(product => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
        <div className='w-[244px] bg-black rounded-2xl overflow-hidden'>
          <Image src="/images/ads-banner.png" alt="ads banner" height={400} width={250} className='object-cover h-[540px]' />
          <div className='bg-[#1F0154] p-4 relative'>
            <span className='bg-inherit w-[120%] h-16 absolute -top-[33px] left-[-20px] rotate-12'></span>
            <div className='relative z-10 -mt-4 py-4'>
              <h4 className='text-white font-semibold text-2xl'>Product Name or company ads</h4>
              <p className='text-primary font-medium mt-2 mb-4'>1920.00$</p>
              <p className='text-white mt-4 mb-2'>Item Features</p>
              <ul className='flex flex-col gap-1 text-xs capitalize text-[#CCCBCB]'>
                <li className='flex items-center gap-2'><CheckIcon className="w-4 h-4 text-[#CCCBCB]" /> first feature </li>
                <li className='flex items-center gap-2'><CheckIcon className="w-4 h-4 text-[#CCCBCB]" /> second feature</li>
                <li className='flex items-center gap-2'><CheckIcon className="w-4 h-4 text-[#CCCBCB]" /> third feature</li>
                <li className='flex items-center gap-2'><CheckIcon className="w-4 h-4 text-[#CCCBCB]" /> free Shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
